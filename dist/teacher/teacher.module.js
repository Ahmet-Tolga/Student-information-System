"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherModule = void 0;
const common_1 = require("@nestjs/common");
const teacher_controller_1 = require("./teacher.controller");
const teacher_service_1 = require("./teacher.service");
const typeorm_1 = require("@nestjs/typeorm");
const teacherEntity_entity_1 = require("./entity/teacherEntity.entity");
const lesson_service_1 = require("../lesson/lesson.service");
const lesson_module_1 = require("../lesson/lesson.module");
const student_service_1 = require("../student/student.service");
const student_module_1 = require("../student/student.module");
const gradeEntity_entity_1 = require("../grade/entity/gradeEntity.entity");
const grade_service_1 = require("../grade/grade.service");
const lessonEntity_entity_1 = require("../lesson/entity/lessonEntity.entity");
const studentEntity_entity_1 = require("../student/entity/studentEntity.entity");
let TeacherModule = class TeacherModule {
};
exports.TeacherModule = TeacherModule;
exports.TeacherModule = TeacherModule = __decorate([
    (0, common_1.Module)({
        controllers: [teacher_controller_1.TeacherController],
        providers: [teacher_service_1.TeacherService, lesson_service_1.LessonService, student_service_1.StudentService, grade_service_1.GradeService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([teacherEntity_entity_1.TeacherEntity, gradeEntity_entity_1.GradeEntity, lessonEntity_entity_1.LessonEntity, studentEntity_entity_1.StudentEntity]),
            lesson_module_1.LessonModule,
            student_module_1.StudentModule
        ],
    })
], TeacherModule);
//# sourceMappingURL=teacher.module.js.map