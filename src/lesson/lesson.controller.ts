import { Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { CreateLessonDto } from './dto/CreateLessonDto.dto';
import { UpdateLessonDto } from './dto/UpdateLessonDto.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("lesson")
@Controller('lesson')
export class LessonController {
    constructor(private readonly lessonService:LessonService){};

    @Get("/findall")
    async findAll(){
        return await this.lessonService.findall();
    }

    @Get("/find/:id")
    findOneById(@Param("id") id:string){
        return this.lessonService.findOneById(id);
    }

    @Post("/create")
    createLesson(@Body() createLessonDto:CreateLessonDto){
        return this.lessonService.create(createLessonDto);
    }

    @Put("/update/:id")
    updateLesson(@Param("id") id:string,@Body() updateLessonDto:UpdateLessonDto){
        return this.lessonService.updateLesson(id,updateLessonDto);
    }

    @Delete("/delete/:id")
    deleteLesson(@Param("id") id:string){
        return this.lessonService.deleteLesson(id);
    }
}
