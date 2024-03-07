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
exports.ConflictDetectorMiddleware = void 0;
const common_1 = require("@nestjs/common");
const teacher_service_1 = require("../../teacher/teacher.service");
let ConflictDetectorMiddleware = class ConflictDetectorMiddleware {
    constructor(teacherService) {
        this.teacherService = teacherService;
    }
    async use(req, res, next) {
        try {
            const teacher = await this.teacherService.findATeacherById(req.body.teacherId);
            const lessons = await teacher.lessons;
            for (const lesson of lessons) {
                if (lesson.dayOfLesson === req.body.dayOfLesson &&
                    this.checkTimeConflict(lesson.startTime, lesson.endTime, req.body.startTime, req.body.endTime)) {
                    return res.status(400).json({ message: "Teacher has a conflict lesson", success: false });
                }
            }
            next();
        }
        catch (error) {
            console.error("An error occurred in ConflictDetectorMiddleware:", error);
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
exports.ConflictDetectorMiddleware = ConflictDetectorMiddleware;
exports.ConflictDetectorMiddleware = ConflictDetectorMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [teacher_service_1.TeacherService])
], ConflictDetectorMiddleware);
//# sourceMappingURL=conflict.middleware.js.map