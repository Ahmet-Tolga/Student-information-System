import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/createStudentDto.dto';
import { UpdateStudentDto } from './dto/updateStudentDto.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Student")
@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    @Get("/findall")
    async findall() {
        return await this.studentService.getall();
    }

    @Get("/find/:id")
    async findById(@Param("id") id: string) {
        return await this.studentService.findAStudentById(id);
    }

    @Get("/find/:name")
    async findByName(@Param("name") name: string) {
        return await this.studentService.findOneByname(name);
    }

    @Post("/create")
    async create(@Body() createStudentDto: CreateStudentDto) {
        return await this.studentService.create(createStudentDto);
    }

    @Put("/update/:id")
    async updateStudent(@Param("id") id: string, @Body() updateStudentDto: UpdateStudentDto) {
        return await this.studentService.update(id, updateStudentDto);
    }

    @Delete("/delete/:id")
    async deleteStudent(@Param("id") id: string) {
        return await this.studentService.delete(id);
    }

    @Post("/addlesson/:student_id")
    async addLesson(@Param("student_id", ParseUUIDPipe) student_id: string, @Body("lesson_id", ParseUUIDPipe) lesson_id: string) {
        return await this.studentService.addLesson(student_id, lesson_id);
    }

    @Post("/removelesson/:student_id")
    async removeLesson(@Param("student_id", ParseUUIDPipe) student_id: string, @Body("lesson_id", ParseUUIDPipe) lesson_id: string) {
        return await this.studentService.removeLesson(student_id, lesson_id);
    }

    @Get("/displayProgram/:student_id")
    async displayProgram(@Param("student_id", ParseUUIDPipe) student_id: string) {
        return await this.studentService.displayTheProgram(student_id);
    }

}
