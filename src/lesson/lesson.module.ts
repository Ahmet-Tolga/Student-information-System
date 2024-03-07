import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { LessonController } from './lesson.controller';
import { LessonService } from './lesson.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonEntity } from './entity/lessonEntity.entity';
import { TeacherService } from 'src/teacher/teacher.service';
import { TeacherEntity } from 'src/teacher/entity/teacherEntity.entity';
import { ConflictDetectorMiddleware } from './middleware/conflict.middleware';
import { GradeEntity } from 'src/grade/entity/gradeEntity.entity';
import { GradeService } from 'src/grade/grade.service';
import { StudentService } from 'src/student/student.service';
import { StudentModule } from 'src/student/student.module';
import { StudentEntity } from 'src/student/entity/studentEntity.entity';

@Module({
  controllers: [LessonController],
  providers: [LessonService, TeacherService,GradeService,StudentService],
  imports: [
    TypeOrmModule.forFeature([LessonEntity, TeacherEntity,GradeEntity,StudentEntity]),StudentModule
  ]
})
export class LessonModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ConflictDetectorMiddleware).forRoutes({ path: "/lesson/create", method: RequestMethod.POST })
  }
}
