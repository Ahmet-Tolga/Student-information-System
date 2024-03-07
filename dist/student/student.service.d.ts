import { StudentEntity } from './entity/studentEntity.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/createStudentDto.dto';
import { UpdateStudentDto } from './dto/updateStudentDto.dto';
import { LessonService } from '../lesson/lesson.service';
import { GradeService } from '../grade/grade.service';
export declare class StudentService {
    private studentRepository;
    private readonly lessonService;
    private readonly gradeService;
    constructor(studentRepository: Repository<StudentEntity>, lessonService: LessonService, gradeService: GradeService);
    getall(): Promise<StudentEntity[]>;
    findAStudentById(id: string): Promise<StudentEntity>;
    findOneByname(name: string): Promise<StudentEntity>;
    saveStudent(student: StudentEntity): Promise<StudentEntity>;
    create(createStudentDto: CreateStudentDto): Promise<{
        password: string;
        name: string;
        grade?: string;
        credit?: number;
    } & StudentEntity>;
    update(id: string, updateStudentDto: UpdateStudentDto): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
    addLesson(studentId: string, lessonId: string): Promise<import("../lesson/entity/lessonEntity.entity").LessonEntity | {
        message: string;
        success: boolean;
    }>;
    removeLesson(studentId: string, lessonId: string): Promise<import("../lesson/entity/lessonEntity.entity").LessonEntity | {
        message: string;
        success: boolean;
    }>;
    displayTheProgram(student_id: string): Promise<import("../lesson/entity/lessonEntity.entity").LessonEntity[]>;
}
