import { GradeEntity } from "../../grade/entity/gradeEntity.entity";
import { LessonEntity } from "../../lesson/entity/lessonEntity.entity";
export declare class StudentEntity {
    id: string;
    name: string;
    password: string;
    grade: string;
    credit: number;
    lessons: LessonEntity[];
    grades: GradeEntity[];
}
