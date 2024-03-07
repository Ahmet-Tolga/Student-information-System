import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessonEntity } from './entity/lessonEntity.entity';
import { Repository } from 'typeorm';
import { CreateLessonDto } from './dto/CreateLessonDto.dto';
import { UpdateLessonDto } from './dto/UpdateLessonDto.dto';
import { GradeService } from '../grade/grade.service';
import { Arithmetic } from './types/arithmetic.enum';

@Injectable()
export class LessonService {
    constructor(@InjectRepository(LessonEntity) private lessonRepository:Repository<LessonEntity>,private readonly gradeService:GradeService){};

    async findall(){
        return await this.lessonRepository.find({ relations: { Teacher: true, students: true,gradeTables:true } });
    }

    async findOneById(id:string){
        return await this.lessonRepository.findOne({where:{id:id},relations:{Teacher:true,students:true,gradeTables:true}});
    }

    async create(createLessonDto:CreateLessonDto){
        return await this.lessonRepository.save(createLessonDto);
    }

    async saveLesson(lesson:LessonEntity){
        return await this.lessonRepository.save(lesson);
    }

    async updateLesson(id:string,updateLessonDto:UpdateLessonDto){
        return await this.lessonRepository.update(id,updateLessonDto);
    }

    async deleteLesson(id:string){
        const lesson=await this.findOneById(id);
        lesson.students=[];
        lesson.Teacher=null;
        await this.gradeService.deleteByLessonId(id);
        await this.saveLesson(lesson);
        return await this.lessonRepository.delete(id);
    }

    async lessonDecreaseOrIncreaseStudentAndSave(lesson:LessonEntity,option:Arithmetic){
        if(option==Arithmetic.SUM){
            lesson.maxStudent+=1;
        }
        else{
            lesson.maxStudent-=1;
        }
        return await this.saveLesson(lesson);
    }
}
