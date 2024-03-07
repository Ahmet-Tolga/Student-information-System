import { LessonEntity } from "../../lesson/entity/lessonEntity.entity";
import { StudentEntity } from "../../student/entity/studentEntity.entity";
export declare class GradeEntity {
    id: number;
    lessonName: string;
    lessonId: string;
    studentId: string;
    grade: number;
    student: StudentEntity;
    lesson: LessonEntity;
}
