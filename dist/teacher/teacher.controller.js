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
exports.TeacherController = void 0;
const common_1 = require("@nestjs/common");
const teacher_service_1 = require("./teacher.service");
const CreateTeacherDto_dto_1 = require("./dto/CreateTeacherDto.dto");
const UpdateTeacherDto_dto_1 = require("./dto/UpdateTeacherDto.dto");
const swagger_1 = require("@nestjs/swagger");
const SetGradeDto_dto_1 = require("./dto/SetGradeDto.dto");
let TeacherController = class TeacherController {
    constructor(teacherService) {
        this.teacherService = teacherService;
    }
    ;
    findall() {
        return this.teacherService.getall();
    }
    findById(id) {
        return this.teacherService.findATeacherById(id);
    }
    findByName(name) {
        return this.teacherService.findOneByname(name);
    }
    create(createTeacherDto) {
        return this.teacherService.create(createTeacherDto);
    }
    updateTeacher(id, updateTeacherDto) {
        return this.teacherService.update(id, updateTeacherDto);
    }
    deleteTeacher(id) {
        return this.teacherService.delete(id);
    }
    setGrade(lesson_id, setGradeDto) {
        return this.teacherService.setGrade(lesson_id, setGradeDto);
    }
};
exports.TeacherController = TeacherController;
__decorate([
    (0, common_1.Get)("/findall"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "findall", null);
__decorate([
    (0, common_1.Get)("/find/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "findById", null);
__decorate([
    (0, common_1.Get)("/find/:name"),
    __param(0, (0, common_1.Param)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "findByName", null);
__decorate([
    (0, common_1.Post)("/create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateTeacherDto_dto_1.CreateTeacherDto]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "create", null);
__decorate([
    (0, common_1.Put)("/update/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateTeacherDto_dto_1.UpdateTeacherDto]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "updateTeacher", null);
__decorate([
    (0, common_1.Delete)("/delete/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "deleteTeacher", null);
__decorate([
    (0, common_1.Post)("/setgrade/:lesson_id"),
    __param(0, (0, common_1.Param)("lesson_id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, SetGradeDto_dto_1.SetGradeDto]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "setGrade", null);
exports.TeacherController = TeacherController = __decorate([
    (0, swagger_1.ApiTags)("Teacher"),
    (0, common_1.Controller)('teacher'),
    __metadata("design:paramtypes", [teacher_service_1.TeacherService])
], TeacherController);
//# sourceMappingURL=teacher.controller.js.map