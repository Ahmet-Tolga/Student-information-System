import { StudentEntity } from "../../student/entity/studentEntity.entity";
import { TeacherEntity } from "../../teacher/entity/teacherEntity.entity";
import { GradeEntity } from "../../grade/entity/gradeEntity.entity";
export declare class LessonEntity {
    id: string;
    lessonName: string;
    credit: number;
    maxStudent: number;
    teacherId: string;
    dayOfLesson: string;
    startTime: string;
    endTime: string;
    students: StudentEntity[];
    Teacher: TeacherEntity;
    gradeTables: GradeEntity[];
}
