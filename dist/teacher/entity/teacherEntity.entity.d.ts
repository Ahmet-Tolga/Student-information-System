import { LessonEntity } from "../../lesson/entity/lessonEntity.entity";
export declare class TeacherEntity {
    id: string;
    name: string;
    password: string;
    lessons: LessonEntity[];
}
