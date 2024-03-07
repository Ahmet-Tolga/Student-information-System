import { Module } from '@nestjs/common';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherEntity } from './entity/teacherEntity.entity';
import { LessonService } from '../lesson/lesson.service';
import { LessonModule } from '../lesson/lesson.module'; 
import { StudentService } from '../student/student.service'; 
import { StudentModule } from '../student/student.module'; 
import { GradeEntity } from '../grade/entity/gradeEntity.entity';
import { GradeService } from '../grade/grade.service';
import { LessonEntity } from 'src/lesson/entity/lessonEntity.entity';
import { StudentEntity } from 'src/student/entity/studentEntity.entity';

@Module({
  controllers: [TeacherController],
  providers: [TeacherService, LessonService, StudentService, GradeService],
  imports: [
    TypeOrmModule.forFeature([TeacherEntity, GradeEntity,LessonEntity,StudentEntity]),
    LessonModule, 
    StudentModule
  ],
})
export class TeacherModule {}
