"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const database_module_1 = require("./database/database.module");
const typeorm_1 = require("@nestjs/typeorm");
const studentEntity_entity_1 = require("./student/entity/studentEntity.entity");
const teacherEntity_entity_1 = require("./teacher/entity/teacherEntity.entity");
const student_module_1 = require("./student/student.module");
const teacher_module_1 = require("./teacher/teacher.module");
const lesson_module_1 = require("./lesson/lesson.module");
const grade_module_1 = require("./grade/grade.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            database_module_1.DatabaseModule,
            student_module_1.StudentModule,
            teacher_module_1.TeacherModule,
            typeorm_1.TypeOrmModule.forFeature([studentEntity_entity_1.StudentEntity, teacherEntity_entity_1.TeacherEntity]),
            lesson_module_1.LessonModule,
            grade_module_1.GradeModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map