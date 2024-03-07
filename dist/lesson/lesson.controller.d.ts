import { LessonService } from './lesson.service';
import { CreateLessonDto } from './dto/CreateLessonDto.dto';
import { UpdateLessonDto } from './dto/UpdateLessonDto.dto';
export declare class LessonController {
    private readonly lessonService;
    constructor(lessonService: LessonService);
    findAll(): Promise<import("./entity/lessonEntity.entity").LessonEntity[]>;
    findOneById(id: string): Promise<import("./entity/lessonEntity.entity").LessonEntity>;
    createLesson(createLessonDto: CreateLessonDto): Promise<CreateLessonDto & import("./entity/lessonEntity.entity").LessonEntity>;
    updateLesson(id: string, updateLessonDto: UpdateLessonDto): Promise<import("typeorm").UpdateResult>;
    deleteLesson(id: string): Promise<import("typeorm").DeleteResult>;
}
