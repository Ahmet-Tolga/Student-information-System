import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from './entity/studentEntity.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/createStudentDto.dto';
import { UpdateStudentDto } from './dto/updateStudentDto.dto';
import * as bcrypt from "bcrypt";
import { LessonService } from '../lesson/lesson.service';
import { GradeService } from '../grade/grade.service';
import { Arithmetic } from 'src/lesson/types/arithmetic.enum';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(StudentEntity) private studentRepository: Repository<StudentEntity>,
        private readonly lessonService: LessonService,
        private readonly gradeService: GradeService
    ) { };

    async getall() {
        return await this.studentRepository.find({ relations: { lessons: true, grades: true } });
    }

    async findAStudentById(id: string) {
        return await this.studentRepository.findOne({ where: { id: id }, relations: { lessons: true, grades: true } });
    }

    async findOneByname(name: string) {
        return await this.studentRepository.findOne({ where: { name: name } });
    }

    async saveStudent(student: StudentEntity) {
        return await this.studentRepository.save(student);
    }

    async create(createStudentDto: CreateStudentDto) {
        const { password } = createStudentDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        return await this.studentRepository.save({ ...createStudentDto, password: hashedPassword });
    }

    async update(id: string, updateStudentDto: UpdateStudentDto) {
        return await this.studentRepository.update(id, updateStudentDto);
    }

    async delete(id: string) {
        const student = await this.findAStudentById(id);
        student.lessons = [];
        student.grades = [];
        await this.gradeService.deleteByStudentId(id);
        await this.saveStudent(student);
        return await this.studentRepository.delete(id);
    }

    async addLesson(studentId: string, lessonId: string) {
        let control: boolean = true;
        const student = await this.findAStudentById(studentId);
        const lesson = await this.lessonService.findOneById(lessonId);

        if (!student || !lesson) {
            throw new Error('Student or lesson not found');
        }

        if ((student.credit - lesson.credit) >= 0 && lesson.maxStudent > 0) {
            if (student.lessons.length === 0) {
                control = true;
            }

            for (var i = 0; i < student.lessons.length; i++) {
                if (student.lessons[i].id == lessonId) {
                    control = false;
                    break;
                }
            }
        }
        if (control) {
            student.lessons.push(lesson);

            student.credit -= lesson.credit;
            
            await this.lessonService.lessonDecreaseOrIncreaseStudentAndSave(lesson,Arithmetic.SUB);
            await this.studentRepository.save(student);
            await this.gradeService.createAndSave({lessonId:lessonId,lessonName:lesson.lessonName,studentId:studentId})

            return lesson;
        } else {
            return { message: "you can not take this lesson!", success: false };
        }
    }


    async removeLesson(studentId: string, lessonId: string) {
        const student = await this.findAStudentById(studentId);
        const lesson = await this.lessonService.findOneById(lessonId);

        let count = 0;

        if (!student) {
            throw new Error('Student not found');
        }

        for (var i = 0; i < student.lessons.length; i++) {
            if (student.lessons[i].id == lessonId) {
                student.credit += lesson.credit;
                await this.lessonService.lessonDecreaseOrIncreaseStudentAndSave(lesson,Arithmetic.SUM);
                await this.studentRepository.save(student);
                count += 1;
                break;
            }
        }

        if (count > 0) {
            student.lessons = student.lessons.filter(lesson => lesson.id !== lessonId);

            await this.gradeService.deleteGradeByStudentAndLesson(studentId, lessonId);
            await this.saveStudent(student);
            return lesson;
        }

        else {
            return { message: "can not remove a lesson that is not exist", success: false };
        }

    }

    async displayTheProgram(student_id: string) {
        const student = await this.findAStudentById(student_id);
        return await student.lessons;
    }
}
