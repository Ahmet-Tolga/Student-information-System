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
exports.LessonService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const lessonEntity_entity_1 = require("./entity/lessonEntity.entity");
const typeorm_2 = require("typeorm");
const grade_service_1 = require("../grade/grade.service");
const arithmetic_enum_1 = require("./types/arithmetic.enum");
let LessonService = class LessonService {
    constructor(lessonRepository, gradeService) {
        this.lessonRepository = lessonRepository;
        this.gradeService = gradeService;
    }
    ;
    async findall() {
        return await this.lessonRepository.find({ relations: { Teacher: true, students: true, gradeTables: true } });
    }
    async findOneById(id) {
        return await this.lessonRepository.findOne({ where: { id: id }, relations: { Teacher: true, students: true, gradeTables: true } });
    }
    async create(createLessonDto) {
        return await this.lessonRepository.save(createLessonDto);
    }
    async saveLesson(lesson) {
        return await this.lessonRepository.save(lesson);
    }
    async updateLesson(id, updateLessonDto) {
        return await this.lessonRepository.update(id, updateLessonDto);
    }
    async deleteLesson(id) {
        const lesson = await this.findOneById(id);
        lesson.students = [];
        lesson.Teacher = null;
        await this.gradeService.deleteByLessonId(id);
        await this.saveLesson(lesson);
        return await this.lessonRepository.delete(id);
    }
    async lessonDecreaseOrIncreaseStudentAndSave(lesson, option) {
        if (option == arithmetic_enum_1.Arithmetic.SUM) {
            lesson.maxStudent += 1;
        }
        else {
            lesson.maxStudent -= 1;
        }
        return await this.saveLesson(lesson);
    }
};
exports.LessonService = LessonService;
exports.LessonService = LessonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(lessonEntity_entity_1.LessonEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository, grade_service_1.GradeService])
], LessonService);
//# sourceMappingURL=lesson.service.js.map