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
exports.StudentController = void 0;
const common_1 = require("@nestjs/common");
const student_service_1 = require("./student.service");
const createStudentDto_dto_1 = require("./dto/createStudentDto.dto");
const updateStudentDto_dto_1 = require("./dto/updateStudentDto.dto");
const swagger_1 = require("@nestjs/swagger");
let StudentController = class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    async findall() {
        return await this.studentService.getall();
    }
    async findById(id) {
        return await this.studentService.findAStudentById(id);
    }
    async findByName(name) {
        return await this.studentService.findOneByname(name);
    }
    async create(createStudentDto) {
        return await this.studentService.create(createStudentDto);
    }
    async updateStudent(id, updateStudentDto) {
        return await this.studentService.update(id, updateStudentDto);
    }
    async deleteStudent(id) {
        return await this.studentService.delete(id);
    }
    async addLesson(student_id, lesson_id) {
        return await this.studentService.addLesson(student_id, lesson_id);
    }
    async removeLesson(student_id, lesson_id) {
        return await this.studentService.removeLesson(student_id, lesson_id);
    }
    async displayProgram(student_id) {
        return await this.studentService.displayTheProgram(student_id);
    }
};
exports.StudentController = StudentController;
__decorate([
    (0, common_1.Get)("/findall"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "findall", null);
__decorate([
    (0, common_1.Get)("/find/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "findById", null);
__decorate([
    (0, common_1.Get)("/find/:name"),
    __param(0, (0, common_1.Param)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "findByName", null);
__decorate([
    (0, common_1.Post)("/create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createStudentDto_dto_1.CreateStudentDto]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "create", null);
__decorate([
    (0, common_1.Put)("/update/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateStudentDto_dto_1.UpdateStudentDto]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "updateStudent", null);
__decorate([
    (0, common_1.Delete)("/delete/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "deleteStudent", null);
__decorate([
    (0, common_1.Post)("/addlesson/:student_id"),
    __param(0, (0, common_1.Param)("student_id", common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)("lesson_id", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "addLesson", null);
__decorate([
    (0, common_1.Post)("/removelesson/:student_id"),
    __param(0, (0, common_1.Param)("student_id", common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)("lesson_id", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "removeLesson", null);
__decorate([
    (0, common_1.Get)("/displayProgram/:student_id"),
    __param(0, (0, common_1.Param)("student_id", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "displayProgram", null);
exports.StudentController = StudentController = __decorate([
    (0, swagger_1.ApiTags)("Student"),
    (0, common_1.Controller)('student'),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], StudentController);
//# sourceMappingURL=student.controller.js.map