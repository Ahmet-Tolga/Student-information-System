import { Test, TestingModule } from '@nestjs/testing';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TeacherEntity } from './entity/teacherEntity.entity';
import { LessonService } from '../lesson/lesson.service';
import { GradeService } from '../grade/grade.service';
import { StudentService } from '../student/student.service';
import { LessonModule } from '../lesson/lesson.module';
import { StudentModule } from '../student/student.module';

describe('TeacherService', () => {
  let service: TeacherService;

  const mockTeacherRepository={};
  const mockLessonService={};
  const mockGradeService={};
  const mockStudentService={};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeacherService,{provide:getRepositoryToken(TeacherEntity),useValue:mockTeacherRepository}],
      controllers:[TeacherController],
      imports:[LessonModule,StudentModule]
    }).overrideProvider(LessonService).useValue(mockLessonService).overrideProvider(GradeService).useValue(mockGradeService).overrideProvider(StudentService).useValue(mockStudentService).compile();

    service = module.get<TeacherService>(TeacherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
