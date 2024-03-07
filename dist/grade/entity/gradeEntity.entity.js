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
exports.GradeEntity = void 0;
const lessonEntity_entity_1 = require("../../lesson/entity/lessonEntity.entity");
const studentEntity_entity_1 = require("../../student/entity/studentEntity.entity");
const typeorm_1 = require("typeorm");
let GradeEntity = class GradeEntity {
};
exports.GradeEntity = GradeEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], GradeEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "lessonName", type: "varchar" }),
    __metadata("design:type", String)
], GradeEntity.prototype, "lessonName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "lessonId", type: "varchar" }),
    __metadata("design:type", String)
], GradeEntity.prototype, "lessonId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "studentId", type: "varchar" }),
    __metadata("design:type", String)
], GradeEntity.prototype, "studentId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "grade", default: 0 }),
    __metadata("design:type", Number)
], GradeEntity.prototype, "grade", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => studentEntity_entity_1.StudentEntity, (student) => student.grades, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinTable)({ name: "studentId" }),
    __metadata("design:type", studentEntity_entity_1.StudentEntity)
], GradeEntity.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => lessonEntity_entity_1.LessonEntity, (lesson) => lesson.gradeTables),
    (0, typeorm_1.JoinTable)({ name: "lessonId" }),
    __metadata("design:type", lessonEntity_entity_1.LessonEntity)
], GradeEntity.prototype, "lesson", void 0);
exports.GradeEntity = GradeEntity = __decorate([
    (0, typeorm_1.Entity)()
], GradeEntity);
//# sourceMappingURL=gradeEntity.entity.js.map