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
exports.TeacherService = void 0;
const common_1 = require("@nestjs/common");
const teacherEntity_entity_1 = require("./entity/teacherEntity.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const lesson_service_1 = require("../lesson/lesson.service");
const grade_service_1 = require("../grade/grade.service");
const student_service_1 = require("../student/student.service");
let TeacherService = class TeacherService {
    constructor(teacherRepository, lessonService, gradeService, studentService) {
        this.teacherRepository = teacherRepository;
        this.lessonService = lessonService;
        this.gradeService = gradeService;
        this.studentService = studentService;
    }
    ;
    async getall() {
        return await this.teacherRepository.find({ relations: { lessons: true } });
    }
    async findATeacherById(id) {
        return await this.teacherRepository.findOne({ where: { id: id }, relations: { lessons: true } });
    }
    async findOneByname(name) {
        return await this.teacherRepository.findOne({ where: { name: name } });
    }
    async create(createTeacherDto) {
        const { password } = createTeacherDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        return await this.teacherRepository.save({ ...createTeacherDto, password: hashedPassword });
    }
    async update(id, updateTeacherDto) {
        return await this.teacherRepository.update(id, updateTeacherDto);
    }
    async delete(id) {
        return await this.teacherRepository.delete(id);
    }
    async setCredit(student_id) {
        const student = await this.studentService.findAStudentById(student_id);
        let grades = [];
        let credits = [];
        for (var i = 0; i < student.grades.length; i++) {
            let lesson = await this.lessonService.findOneById(student.grades[i].lessonId);
            grades[i] = student.grades[i].grade;
            credits[i] = lesson.credit;
        }
        const avaregaGrade = await this.gradeService.convertToFourPoint(grades, credits);
        student.grade = avaregaGrade.toFixed(2).toString();
        return await this.studentService.saveStudent(student);
    }
    async setGrade(lesson_id, setGradeDto) {
        const { teacherId, studentId, grade } = setGradeDto;
        const teacher = await this.findATeacherById(teacherId);
        const lesson = await this.lessonService.findOneById(lesson_id);
        const gradeTable = await this.gradeService.findOneByStudentId(studentId, lesson_id);
        let control = false;
        for (var i = 0; i < teacher.lessons.length; i++) {
            if (teacher.lessons[i].id == lesson.id) {
                control = true;
                break;
            }
        }
        if (control) {
            gradeTable.grade = grade;
            await this.gradeService.saveGrade(gradeTable);
            return await this.setCredit(studentId);
        }
        return { message: "you are not responsible to set this grade!", success: false };
    }
};
exports.TeacherService = TeacherService;
exports.TeacherService = TeacherService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(teacherEntity_entity_1.TeacherEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository, lesson_service_1.LessonService, grade_service_1.GradeService, student_service_1.StudentService])
], TeacherService);
//# sourceMappingURL=teacher.service.js.map