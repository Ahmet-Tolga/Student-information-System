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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonEntity = void 0;
const studentEntity_entity_1 = require("../../student/entity/studentEntity.entity");
const teacherEntity_entity_1 = require("../../teacher/entity/teacherEntity.entity");
const typeorm_1 = require("typeorm");
const moment_1 = require("moment");
const class_transformer_1 = require("class-transformer");
const gradeEntity_entity_1 = require("../../grade/entity/gradeEntity.entity");
let LessonEntity = class LessonEntity {
};
exports.LessonEntity = LessonEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], LessonEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "lesson_name", type: "varchar" }),
    __metadata("design:type", String)
], LessonEntity.prototype, "lessonName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "credit", default: 2 }),
    __metadata("design:type", Number)
], LessonEntity.prototype, "credit", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "maxStudent", default: 40 }),
    __metadata("design:type", Number)
], LessonEntity.prototype, "maxStudent", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "teacherId", nullable: true }),
    __metadata("design:type", String)
], LessonEntity.prototype, "teacherId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "dayOfLesson" }),
    __metadata("design:type", String)
], LessonEntity.prototype, "dayOfLesson", void 0);
__decorate([
    (0, class_transformer_1.Transform)((params) => {
        const startTime = params.value;
        return (0, moment_1.default)(startTime, 'HH:mm').toDate();
    }),
    (0, typeorm_1.Column)({ name: "startTime" }),
    __metadata("design:type", String)
], LessonEntity.prototype, "startTime", void 0);
__decorate([
    (0, class_transformer_1.Transform)((params) => {
        const endTime = params.value;
        return (0, moment_1.default)(endTime, 'HH:mm').toDate();
    }),
    (0, typeorm_1.Column)({ name: "endTime" }),
    __metadata("design:type", String)
], LessonEntity.prototype, "endTime", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => studentEntity_entity_1.StudentEntity, (student) => student.lessons),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], LessonEntity.prototype, "students", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => teacherEntity_entity_1.TeacherEntity, (teacher) => teacher.lessons, { onDelete: "SET NULL" }),
    (0, typeorm_1.JoinColumn)({ name: "teacherId" }),
    __metadata("design:type", teacherEntity_entity_1.TeacherEntity)
], LessonEntity.prototype, "Teacher", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => gradeEntity_entity_1.GradeEntity, (grade) => grade.lesson, { onDelete: "CASCADE" }),
    __metadata("design:type", Array)
], LessonEntity.prototype, "gradeTables", void 0);
exports.LessonEntity = LessonEntity = __decorate([
    (0, typeorm_1.Entity)()
], LessonEntity);
//# sourceMappingURL=lessonEntity.entity.js.map