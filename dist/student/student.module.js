"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModule = void 0;
const common_1 = require("@nestjs/common");
const student_controller_1 = require("./student.controller");
const student_service_1 = require("./student.service");
const typeorm_1 = require("@nestjs/typeorm");
const studentEntity_entity_1 = require("./entity/studentEntity.entity");
const lesson_service_1 = require("../lesson/lesson.service");
const lessonEntity_entity_1 = require("../lesson/entity/lessonEntity.entity");
const grade_service_1 = require("../grade/grade.service");
const gradeEntity_entity_1 = require("../grade/entity/gradeEntity.entity");
const conflictDetector_middleware_1 = require("./middleware/conflictDetector.middleware");
const teacherEntity_entity_1 = require("../teacher/entity/teacherEntity.entity");
const teacher_service_1 = require("../teacher/teacher.service");
const baseConverter_1 = require("./baseConverter");
let StudentModule = class StudentModule {
    configure(consumer) {
        consumer.apply(conflictDetector_middleware_1.ConflictDetectorMiddlewareStudent).forRoutes({ path: "/student/addlesson/:student_id", method: common_1.RequestMethod.POST });
    }
};
exports.StudentModule = StudentModule;
exports.StudentModule = StudentModule = __decorate([
    (0, common_1.Module)({
        controllers: [student_controller_1.StudentController],
        providers: [student_service_1.StudentService, lesson_service_1.LessonService, grade_service_1.GradeService, teacher_service_1.TeacherService, baseConverter_1.GradeConversionService],
        imports: [typeorm_1.TypeOrmModule.forFeature([studentEntity_entity_1.StudentEntity, lessonEntity_entity_1.LessonEntity, gradeEntity_entity_1.GradeEntity, teacherEntity_entity_1.TeacherEntity])]
    })
], StudentModule);
//# sourceMappingURL=student.module.js.map