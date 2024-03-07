import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/createStudentDto.dto';
import { UpdateStudentDto } from './dto/updateStudentDto.dto';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    findall(): Promise<import("./entity/studentEntity.entity").StudentEntity[]>;
    findById(id: string): Promise<import("./entity/studentEntity.entity").StudentEntity>;
    findByName(name: string): Promise<import("./entity/studentEntity.entity").StudentEntity>;
    create(createStudentDto: CreateStudentDto): Promise<{
        password: string;
        name: string;
        grade?: string;
        credit?: number;
    } & import("./entity/studentEntity.entity").StudentEntity>;
    updateStudent(id: string, updateStudentDto: UpdateStudentDto): Promise<import("typeorm").UpdateResult>;
    deleteStudent(id: string): Promise<import("typeorm").DeleteResult>;
    addLesson(student_id: string, lesson_id: string): Promise<import("../lesson/entity/lessonEntity.entity").LessonEntity | {
        message: string;
        success: boolean;
    }>;
    removeLesson(student_id: string, lesson_id: string): Promise<import("../lesson/entity/lessonEntity.entity").LessonEntity | {
        message: string;
        success: boolean;
    }>;
    displayProgram(student_id: string): Promise<import("../lesson/entity/lessonEntity.entity").LessonEntity[]>;
}
