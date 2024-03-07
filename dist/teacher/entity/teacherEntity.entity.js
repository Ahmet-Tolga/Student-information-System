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
exports.TeacherEntity = void 0;
const lessonEntity_entity_1 = require("../../lesson/entity/lessonEntity.entity");
const typeorm_1 = require("typeorm");
let TeacherEntity = class TeacherEntity {
};
exports.TeacherEntity = TeacherEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], TeacherEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "name", type: "varchar" }),
    __metadata("design:type", String)
], TeacherEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "password", type: "varchar" }),
    __metadata("design:type", String)
], TeacherEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => lessonEntity_entity_1.LessonEntity, (lesson) => lesson.Teacher),
    __metadata("design:type", Array)
], TeacherEntity.prototype, "lessons", void 0);
exports.TeacherEntity = TeacherEntity = __decorate([
    (0, typeorm_1.Entity)()
], TeacherEntity);
//# sourceMappingURL=teacherEntity.entity.js.map