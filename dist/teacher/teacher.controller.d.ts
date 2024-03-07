import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/CreateTeacherDto.dto';
import { UpdateTeacherDto } from './dto/UpdateTeacherDto.dto';
import { SetGradeDto } from './dto/SetGradeDto.dto';
export declare class TeacherController {
    private readonly teacherService;
    constructor(teacherService: TeacherService);
    findall(): Promise<import("./entity/teacherEntity.entity").TeacherEntity[]>;
    findById(id: string): Promise<import("./entity/teacherEntity.entity").TeacherEntity>;
    findByName(name: string): Promise<import("./entity/teacherEntity.entity").TeacherEntity>;
    create(createTeacherDto: CreateTeacherDto): Promise<{
        password: string;
        name: string;
    } & import("./entity/teacherEntity.entity").TeacherEntity>;
    updateTeacher(id: string, updateTeacherDto: UpdateTeacherDto): Promise<import("typeorm").UpdateResult>;
    deleteTeacher(id: string): Promise<import("typeorm").DeleteResult>;
    setGrade(lesson_id: string, setGradeDto: SetGradeDto): Promise<import("../student/entity/studentEntity.entity").StudentEntity | {
        message: string;
        success: boolean;
    }>;
}
