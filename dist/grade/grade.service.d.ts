import { GradeEntity } from './entity/gradeEntity.entity';
import { Repository } from 'typeorm';
import { CreateGradeDto } from './dto/createGradeDto.dto';
export declare class GradeService {
    private readonly gradeRepository;
    constructor(gradeRepository: Repository<GradeEntity>);
    saveGrade(grade: GradeEntity): Promise<GradeEntity>;
    createAndSave(grade: CreateGradeDto): Promise<CreateGradeDto & GradeEntity>;
    deleteGradeByStudentAndLesson(studentId: string, lessonId: string): Promise<import("typeorm").DeleteResult>;
    deleteByLessonId(lesson_id: string): Promise<void>;
    deleteByStudentId(student_id: string): Promise<void>;
    findOneByStudentId(student_id: string, lesson_id: string): Promise<GradeEntity>;
    convertToFourPoint(grades: number[], credits: number[]): Promise<number>;
}
