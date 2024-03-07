import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './student/entity/studentEntity.entity';
import { TeacherEntity } from './teacher/entity/teacherEntity.entity';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { LessonModule } from './lesson/lesson.module';
import { GradeModule } from './grade/grade.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),

  DatabaseModule,
  StudentModule,
  TeacherModule,
  TypeOrmModule.forFeature([StudentEntity,TeacherEntity]),
  LessonModule,
  GradeModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
