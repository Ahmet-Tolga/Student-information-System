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
exports.StudentEntity = void 0;
const gradeEntity_entity_1 = require("../../grade/entity/gradeEntity.entity");
const lessonEntity_entity_1 = require("../../lesson/entity/lessonEntity.entity");
const typeorm_1 = require("typeorm");
let StudentEntity = class StudentEntity {
};
exports.StudentEntity = StudentEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], StudentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "student_name", type: "varchar" }),
    __metadata("design:type", String)
], StudentEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "password", type: "varchar" }),
    __metadata("design:type", String)
], StudentEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "grade", default: "0" }),
    __metadata("design:type", String)
], StudentEntity.prototype, "grade", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "credit", default: 30 }),
    __metadata("design:type", Number)
], StudentEntity.prototype, "credit", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => lessonEntity_entity_1.LessonEntity, (lesson) => lesson.students),
    __metadata("design:type", Array)
], StudentEntity.prototype, "lessons", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => gradeEntity_entity_1.GradeEntity, (grade) => grade.student, { onDelete: "CASCADE" }),
    __metadata("design:type", Array)
], StudentEntity.prototype, "grades", void 0);
exports.StudentEntity = StudentEntity = __decorate([
    (0, typeorm_1.Entity)()
], StudentEntity);
//# sourceMappingURL=studentEntity.entity.js.map