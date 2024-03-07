import { LessonEntity } from "../../lesson/entity/lessonEntity.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TeacherEntity{
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column({name:"name",type:"varchar"})
    name:string;

    @Column({name:"password",type:"varchar"})
    password:string;

    @OneToMany(()=>LessonEntity,(lesson)=>lesson.Teacher)
    lessons:LessonEntity[];
}