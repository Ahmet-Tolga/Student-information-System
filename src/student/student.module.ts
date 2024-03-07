import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './entity/studentEntity.entity';
import { LessonService } from 'src/lesson/lesson.service';
import { LessonEntity } from 'src/lesson/entity/lessonEntity.entity';
import { GradeService } from 'src/grade/grade.service';
import { GradeEntity } from 'src/grade/entity/gradeEntity.entity';
import { ConflictDetectorMiddlewareStudent } from './middleware/conflictDetector.middleware';
import { TeacherEntity } from 'src/teacher/entity/teacherEntity.entity';
import { TeacherService } from 'src/teacher/teacher.service';
import { GradeConversionService } from './baseConverter';

@Module({
  controllers: [StudentController],
  providers: [StudentService,LessonService,GradeService,TeacherService,GradeConversionService],
  imports:[TypeOrmModule.forFeature([StudentEntity,LessonEntity,GradeEntity,TeacherEntity])]
})
export class StudentModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ConflictDetectorMiddlewareStudent).forRoutes({path:"/student/addlesson/:student_id",method:RequestMethod.POST})
  }
}
