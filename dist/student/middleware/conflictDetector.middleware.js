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
exports.ConflictDetectorMiddlewareStudent = void 0;
const common_1 = require("@nestjs/common");
const student_service_1 = require("../student.service");
const lesson_service_1 = require("../../lesson/lesson.service");
let ConflictDetectorMiddlewareStudent = class ConflictDetectorMiddlewareStudent {
    constructor(studentService, lessonservice) {
        this.studentService = studentService;
        this.lessonservice = lessonservice;
    }
    async use(req, res, next) {
        try {
            const student = await this.studentService.findAStudentById(req.params.student_id);
            const lesson = await this.lessonservice.findOneById(req.body.lesson_id);
            for (const i of student.lessons) {
                if (lesson.dayOfLesson === i.dayOfLesson &&
                    this.checkTimeConflict(lesson.startTime, lesson.endTime, i.startTime, i.endTime)) {
                    return res.status(400).json({ message: "You have a conflict lesson!", success: false });
                }
            }
            next();
        }
        catch (error) {
            return res.status(500).json({ message: "Internal Server Error", success: false });
        }
    }
    checkTimeConflict(startTime1, endTime1, startTime2, endTime2) {
        const [start1Hour, start1Minute] = startTime1.split(":").map(Number);
        const [end1Hour, end1Minute] = endTime1.split(":").map(Number);
        const [start2Hour, start2Minute] = startTime2.split(":").map(Number);
        const [end2Hour, end2Minute] = endTime2.split(":").map(Number);
        const start1 = start1Hour * 60 + start1Minute;
        const end1 = end1Hour * 60 + end1Minute;
        const start2 = start2Hour * 60 + start2Minute;
        const end2 = end2Hour * 60 + end2Minute;
        return !(end1 <= start2 || end2 <= start1);
    }
};
exports.ConflictDetectorMiddlewareStudent = ConflictDetectorMiddlewareStudent;
exports.ConflictDetectorMiddlewareStudent = ConflictDetectorMiddlewareStudent = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [student_service_1.StudentService, lesson_service_1.LessonService])
], ConflictDetectorMiddlewareStudent);
//# sourceMappingURL=conflictDetector.middleware.js.map