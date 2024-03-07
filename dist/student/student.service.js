"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const studentEntity_entity_1 = require("./entity/studentEntity.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const lesson_service_1 = require("../lesson/lesson.service");
const grade_service_1 = require("../grade/grade.service");
const arithmetic_enum_1 = require("../lesson/types/arithmetic.enum");
let StudentService = class StudentService {
    constructor(studentRepository, lessonService, gradeService) {
        this.studentRepository = studentRepository;
        this.lessonService = lessonService;
        this.gradeService = gradeService;
    }
    ;
    async getall() {
        return await this.studentRepository.find({ relations: { lessons: true, grades: true } });
    }
    async findAStudentById(id) {
        return await this.studentRepository.findOne({ where: { id: id }, relations: { lessons: true, grades: true } });
    }
    async findOneByname(name) {
        return await this.studentRepository.findOne({ where: { name: name } });
    }
    async saveStudent(student) {
        return await this.studentRepository.save(student);
    }
    async create(createStudentDto) {
        const { password } = createStudentDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        return await this.studentRepository.save({ ...createStudentDto, password: hashedPassword });
    }
    async update(id, updateStudentDto) {
        return await this.studentRepository.update(id, updateStudentDto);
    }
    async delete(id) {
        const student = await this.findAStudentById(id);
        student.lessons = [];
        student.grades = [];
        await this.gradeService.deleteByStudentId(id);
        await this.saveStudent(student);
        return await this.studentRepository.delete(id);
    }
    async addLesson(studentId, lessonId) {
        let control = true;
        const student = await this.findAStudentById(studentId);
        const lesson = await this.lessonService.findOneById(lessonId);
        if (!student || !lesson) {
            throw new Error('Student or lesson not found');
        }
        if ((student.credit - lesson.credit) >= 0 && lesson.maxStudent > 0) {
            if (student.lessons.length === 0) {
                control = true;
            }
            for (var i = 0; i < student.lessons.length; i++) {
                if (student.lessons[i].id == lessonId) {
                    control = false;
                    break;
                }
            }
        }
        if (control) {
            student.lessons.push(lesson);
            student.credit -= lesson.credit;
            await this.lessonService.lessonDecreaseOrIncreaseStudentAndSave(lesson, arithmetic_enum_1.Arithmetic.SUB);
            await this.studentRepository.save(student);
            await this.gradeService.createAndSave({ lessonId: lessonId, lessonName: lesson.lessonName, studentId: studentId });
            return lesson;
        }
        else {
            return { message: "you can not take this lesson!", success: false };
        }
    }
    async removeLesson(studentId, lessonId) {
        const student = await this.findAStudentById(studentId);
        const lesson = await this.lessonService.findOneById(lessonId);
        let count = 0;
        if (!student) {
            throw new Error('Student not found');
        }
        for (var i = 0; i < student.lessons.length; i++) {
            if (student.lessons[i].id == lessonId) {
                student.credit += lesson.credit;
                await this.lessonService.lessonDecreaseOrIncreaseStudentAndSave(lesson, arithmetic_enum_1.Arithmetic.SUM);
                await this.studentRepository.save(student);
                count += 1;
                break;
            }
        }
        if (count > 0) {
            student.lessons = student.lessons.filter(lesson => lesson.id !== lessonId);
            await this.gradeService.deleteGradeByStudentAndLesson(studentId, lessonId);
            await this.saveStudent(student);
            return lesson;
        }
        else {
            return { message: "can not remove a lesson that is not exist", success: false };
        }
    }
    async displayTheProgram(student_id) {
        const student = await this.findAStudentById(student_id);
        return await student.lessons;
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(studentEntity_entity_1.StudentEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        lesson_service_1.LessonService,
        grade_service_1.GradeService])
], StudentService);
//# sourceMappingURL=student.service.js.map