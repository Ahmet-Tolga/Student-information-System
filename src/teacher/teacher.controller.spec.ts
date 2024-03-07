import { Test, TestingModule } from '@nestjs/testing';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';
import { LessonEntity } from '../lesson/entity/lessonEntity.entity';
import { TeacherEntity } from './entity/teacherEntity.entity';
import { CreateTeacherDto } from './dto/CreateTeacherDto.dto';

describe('TeacherController', () => {
  let controller: TeacherController;
  let service: TeacherService;

  const mockTeacherDto:CreateTeacherDto={name:"teacher1",password:"teacher123"};
  const mockTeacherEntity:TeacherEntity={
    id:"id1",name:"teacher1",password:"teacher123",lessons:[]
  };

  const mockTeacherService={
    getall:jest.fn().mockImplementation(()=>{return [mockTeacherEntity]}),
    findATeacherById:jest.fn().mockResolvedValue(mockTeacherEntity),
    findOneByname:jest.fn().mockResolvedValue(mockTeacherEntity),
    create:jest.fn().mockResolvedValue(mockTeacherEntity),
    update:jest.fn().mockResolvedValue({id:"id1",name:"teacher2",password:"teacher123",lessons:[]}),
    delete:jest.fn().mockResolvedValue(mockTeacherEntity)
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeacherController],
      providers: [
        TeacherService,
        {
          provide: LessonEntity,
          useValue: {} 
        }
      ]
    }).overrideProvider(TeacherService).useValue(mockTeacherService).compile();

    controller = module.get<TeacherController>(TeacherController);
    service = module.get<TeacherService>(TeacherService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it("should return all teachers", async () => {
    expect(await controller.findall()).toEqual([mockTeacherEntity]);
  });

  it("should return a teacher by Id",async()=>{
    expect(await controller.findById("id1")).toEqual(mockTeacherEntity);
  });

  it("should return a teacher by name",async()=>{
    expect(await controller.findByName("teacher1")).toEqual(mockTeacherEntity);
  });

  it("should create a teacher",async()=>{
    expect(await controller.create(mockTeacherDto)).toEqual(mockTeacherEntity);
  });

  it("should update a task",async()=>{
    expect(await controller.updateTeacher("id1",{name:"teacher2"})).toEqual({id:"id1",name:"teacher2",password:"teacher123",lessons:[]});
  })

  it("should delete a teacher by Id",async()=>{
    expect(await controller.deleteTeacher("id1")).toEqual(mockTeacherEntity);
  })

  
});
