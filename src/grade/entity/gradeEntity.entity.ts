import { LessonEntity } from "../../lesson/entity/lessonEntity.entity";
import { StudentEntity } from "../../student/entity/studentEntity.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class GradeEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({name:"lessonName",type:"varchar"})
    lessonName:string;

    @Column({name:"lessonId",type:"varchar"})
    lessonId:string;

    @Column({name:"studentId",type:"varchar"})
    studentId:string;

    @Column({name:"grade",default:0})
    grade:number;

    @ManyToOne(()=>StudentEntity,(student)=>student.grades,{onDelete:"CASCADE"})
    @JoinTable({name:"studentId"})
    student:StudentEntity;

    @ManyToOne(()=>LessonEntity,(lesson)=>lesson.gradeTables)
    @JoinTable({name:"lessonId"})
    lesson:LessonEntity;
}