import { StudentEntity } from "../../student/entity/studentEntity.entity"
import { TeacherEntity } from "../../teacher/entity/teacherEntity.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import moment from "moment";
import { Transform, TransformFnParams } from "class-transformer";
import { GradeEntity } from "../../grade/entity/gradeEntity.entity";

@Entity()
export class LessonEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "lesson_name", type: "varchar" })
    lessonName: string;

    @Column({ name: "credit" ,default:2})
    credit: number;

    @Column({ name: "maxStudent", default: 40 })
    maxStudent: number;

    @Column({ name: "teacherId", nullable: true })
    teacherId: string;

    @Column({ name: "dayOfLesson" })
    dayOfLesson: string;

    @Transform((params: TransformFnParams) => {
        const startTime: string = params.value;
        return moment(startTime, 'HH:mm').toDate();
    })
    @Column({ name: "startTime" })
    startTime: string;

    @Transform((params: TransformFnParams) => {
        const endTime: string = params.value;
        return moment(endTime, 'HH:mm').toDate();
    })
    @Column({ name: "endTime" })
    endTime: string;

    @ManyToMany(() => StudentEntity, (student) => student.lessons)
    @JoinTable()
    students: StudentEntity[];

    @ManyToOne(() => TeacherEntity, (teacher) => teacher.lessons, { onDelete: "SET NULL"})
    @JoinColumn({ name: "teacherId" })
    Teacher: TeacherEntity;

    @OneToMany(()=>GradeEntity,(grade)=>grade.lesson,{onDelete:"CASCADE"})
    gradeTables:GradeEntity[];
}
