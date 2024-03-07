import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/CreateTeacherDto.dto';
import { UpdateTeacherDto } from './dto/UpdateTeacherDto.dto';
import { ApiTags } from '@nestjs/swagger';
import { SetGradeDto } from './dto/SetGradeDto.dto';

@ApiTags("Teacher")
@Controller('teacher')
export class TeacherController {
    constructor(private readonly teacherService:TeacherService){};

    @Get("/findall")
    findall(){
        return this.teacherService.getall();
    }

    @Get("/find/:id")
    findById(@Param("id") id:string){
        return this.teacherService.findATeacherById(id);
    }

    @Get("/find/:name")
    findByName(@Param("name") name:string){
        return this.teacherService.findOneByname(name);
    }

    @Post("/create")
    create(@Body() createTeacherDto:CreateTeacherDto){
        return this.teacherService.create(createTeacherDto);
    }

    @Put("/update/:id")
    updateTeacher(@Param("id") id:string,@Body() updateTeacherDto:UpdateTeacherDto){
        return this.teacherService.update(id,updateTeacherDto);
    }

    @Delete("/delete/:id")
    deleteTeacher(@Param("id") id:string){
        return this.teacherService.delete(id);
    }

    @Post("/setgrade/:lesson_id")
    setGrade(@Param("lesson_id") lesson_id:string,@Body() setGradeDto:SetGradeDto){
        return this.teacherService.setGrade(lesson_id,setGradeDto);
    }
}
