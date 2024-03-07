import { Injectable } from '@nestjs/common';
import { TeacherEntity } from './entity/teacherEntity.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './dto/CreateTeacherDto.dto';
import { UpdateTeacherDto } from './dto/UpdateTeacherDto.dto';
import * as bcrypt from "bcrypt";
import { LessonService } from '../lesson/lesson.service';
import { GradeService } from '../grade/grade.service';
import { SetGradeDto } from './dto/SetGradeDto.dto';
import { StudentService } from '../student/student.service';
import { GradeConversionService } from './baseConverter';

@Injectable()
export class TeacherService {
    constructor(@InjectRepository(TeacherEntity) private teacherRepository: Repository<TeacherEntity>, private readonly lessonService: LessonService, private readonly gradeService: GradeService, private readonly studentService: StudentService) { };

    async getall() {
        return await this.teacherRepository.find({ relations: { lessons: true } });
    }

    async findATeacherById(id: string) {
        return await this.teacherRepository.findOne({ where: { id: id }, relations: { lessons: true } });
    }

    async findOneByname(name: string) {
        return await this.teacherRepository.findOne({ where: { name: name } });
    }

    async create(createTeacherDto: CreateTeacherDto) {
        const { password } = createTeacherDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        return await this.teacherRepository.save({ ...createTeacherDto, password: hashedPassword });
    }

    async update(id: string, updateTeacherDto: UpdateTeacherDto) {
        return await this.teacherRepository.update(id, updateTeacherDto);
    }

    async delete(id: string) {
        return await this.teacherRepository.delete(id);
    }

    async setCredit(student_id: string) {
        const student = await this.studentService.findAStudentById(student_id);

        let grades = [];
        let credits = [];

        for (var i = 0; i < student.grades.length; i++) {
            let lesson = await this.lessonService.findOneById(student.grades[i].lessonId);
            grades[i] = student.grades[i].grade;
            credits[i] = lesson.credit;
        }

        const avaregaGrade=await this.gradeService.convertToFourPoint(grades,credits);
        student.grade = avaregaGrade.toFixed(2).toString();
        return await this.studentService.saveStudent(student);

    }
    async setGrade(lesson_id: string, setGradeDto: SetGradeDto) {
        const { teacherId, studentId, grade } = setGradeDto;
        const teacher = await this.findATeacherById(teacherId);
        const lesson = await this.lessonService.findOneById(lesson_id);
        const gradeTable = await this.gradeService.findOneByStudentId(studentId, lesson_id);
        let control: boolean = false;

        for (var i = 0; i < teacher.lessons.length; i++) {
            if (teacher.lessons[i].id == lesson.id) {
                control = true;
                break;
            }
        }

        if (control) {
            gradeTable.grade = grade;
            await this.gradeService.saveGrade(gradeTable);
            return await this.setCredit(studentId);
        }
        return { message: "you are not responsible to set this grade!", success: false };
    }
}
