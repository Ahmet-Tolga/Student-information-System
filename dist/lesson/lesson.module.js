"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonModule = void 0;
const common_1 = require("@nestjs/common");
const lesson_controller_1 = require("./lesson.controller");
const lesson_service_1 = require("./lesson.service");
const typeorm_1 = require("@nestjs/typeorm");
const lessonEntity_entity_1 = require("./entity/lessonEntity.entity");
const teacher_service_1 = require("../teacher/teacher.service");
const teacherEntity_entity_1 = require("../teacher/entity/teacherEntity.entity");
const conflict_middleware_1 = require("./middleware/conflict.middleware");
const gradeEntity_entity_1 = require("../grade/entity/gradeEntity.entity");
const grade_service_1 = require("../grade/grade.service");
const student_service_1 = require("../student/student.service");
const student_module_1 = require("../student/student.module");
const studentEntity_entity_1 = require("../student/entity/studentEntity.entity");
let LessonModule = class LessonModule {
    configure(consumer) {
        consumer.apply(conflict_middleware_1.ConflictDetectorMiddleware).forRoutes({ path: "/lesson/create", method: common_1.RequestMethod.POST });
    }
};
exports.LessonModule = LessonModule;
exports.LessonModule = LessonModule = __decorate([
    (0, common_1.Module)({
        controllers: [lesson_controller_1.LessonController],
        providers: [lesson_service_1.LessonService, teacher_service_1.TeacherService, grade_service_1.GradeService, student_service_1.StudentService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([lessonEntity_entity_1.LessonEntity, teacherEntity_entity_1.TeacherEntity, gradeEntity_entity_1.GradeEntity, studentEntity_entity_1.StudentEntity]), student_module_1.StudentModule
        ]
    })
], LessonModule);
//# sourceMappingURL=lesson.module.js.map