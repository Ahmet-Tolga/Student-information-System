import { GradeEntity } from "../../grade/entity/gradeEntity.entity";
import { LessonEntity } from "../../lesson/entity/lessonEntity.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StudentEntity{
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column({name:"student_name",type:"varchar"})
    name:string;

    @Column({name:"password",type:"varchar"})
    password:string;

    @Column({ name: "grade",default:"0" })
    grade: string;

    @Column({name:"credit",default:30})
    credit:number;

    @ManyToMany(()=>LessonEntity,(lesson)=>lesson.students)
    lessons:LessonEntity[];

    @OneToMany(()=>GradeEntity,(grade)=>grade.student,{onDelete:"CASCADE"})
    grades:GradeEntity[];
}