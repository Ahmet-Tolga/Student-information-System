import { TeacherEntity } from './entity/teacherEntity.entity';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './dto/CreateTeacherDto.dto';
import { UpdateTeacherDto } from './dto/UpdateTeacherDto.dto';
import { LessonService } from '../lesson/lesson.service';
import { GradeService } from '../grade/grade.service';
import { SetGradeDto } from './dto/SetGradeDto.dto';
import { StudentService } from '../student/student.service';
export declare class TeacherService {
    private teacherRepository;
    private readonly lessonService;
    private readonly gradeService;
    private readonly studentService;
    constructor(teacherRepository: Repository<TeacherEntity>, lessonService: LessonService, gradeService: GradeService, studentService: StudentService);
    getall(): Promise<TeacherEntity[]>;
    findATeacherById(id: string): Promise<TeacherEntity>;
    findOneByname(name: string): Promise<TeacherEntity>;
    create(createTeacherDto: CreateTeacherDto): Promise<{
        password: string;
        name: string;
    } & TeacherEntity>;
    update(id: string, updateTeacherDto: UpdateTeacherDto): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
    setCredit(student_id: string): Promise<import("../student/entity/studentEntity.entity").StudentEntity>;
    setGrade(lesson_id: string, setGradeDto: SetGradeDto): Promise<import("../student/entity/studentEntity.entity").StudentEntity | {
        message: string;
        success: boolean;
    }>;
}
