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
exports.LessonController = void 0;
const common_1 = require("@nestjs/common");
const lesson_service_1 = require("./lesson.service");
const CreateLessonDto_dto_1 = require("./dto/CreateLessonDto.dto");
const UpdateLessonDto_dto_1 = require("./dto/UpdateLessonDto.dto");
const swagger_1 = require("@nestjs/swagger");
let LessonController = class LessonController {
    constructor(lessonService) {
        this.lessonService = lessonService;
    }
    ;
    async findAll() {
        return await this.lessonService.findall();
    }
    findOneById(id) {
        return this.lessonService.findOneById(id);
    }
    createLesson(createLessonDto) {
        return this.lessonService.create(createLessonDto);
    }
    updateLesson(id, updateLessonDto) {
        return this.lessonService.updateLesson(id, updateLessonDto);
    }
    deleteLesson(id) {
        return this.lessonService.deleteLesson(id);
    }
};
exports.LessonController = LessonController;
__decorate([
    (0, common_1.Get)("/findall"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LessonController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("/find/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LessonController.prototype, "findOneById", null);
__decorate([
    (0, common_1.Post)("/create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateLessonDto_dto_1.CreateLessonDto]),
    __metadata("design:returntype", void 0)
], LessonController.prototype, "createLesson", null);
__decorate([
    (0, common_1.Put)("/update/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateLessonDto_dto_1.UpdateLessonDto]),
    __metadata("design:returntype", void 0)
], LessonController.prototype, "updateLesson", null);
__decorate([
    (0, common_1.Delete)("/delete/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LessonController.prototype, "deleteLesson", null);
exports.LessonController = LessonController = __decorate([
    (0, swagger_1.ApiTags)("lesson"),
    (0, common_1.Controller)('lesson'),
    __metadata("design:paramtypes", [lesson_service_1.LessonService])
], LessonController);
//# sourceMappingURL=lesson.controller.js.map