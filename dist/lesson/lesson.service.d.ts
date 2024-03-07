import { LessonEntity } from './entity/lessonEntity.entity';
import { Repository } from 'typeorm';
import { CreateLessonDto } from './dto/CreateLessonDto.dto';
import { UpdateLessonDto } from './dto/UpdateLessonDto.dto';
import { GradeService } from '../grade/grade.service';
import { Arithmetic } from './types/arithmetic.enum';
export declare class LessonService {
    private lessonRepository;
    private readonly gradeService;
    constructor(lessonRepository: Repository<LessonEntity>, gradeService: GradeService);
    findall(): Promise<LessonEntity[]>;
    findOneById(id: string): Promise<LessonEntity>;
    create(createLessonDto: CreateLessonDto): Promise<CreateLessonDto & LessonEntity>;
    saveLesson(lesson: LessonEntity): Promise<LessonEntity>;
    updateLesson(id: string, updateLessonDto: UpdateLessonDto): Promise<import("typeorm").UpdateResult>;
    deleteLesson(id: string): Promise<import("typeorm").DeleteResult>;
    lessonDecreaseOrIncreaseStudentAndSave(lesson: LessonEntity, option: Arithmetic): Promise<LessonEntity>;
}
