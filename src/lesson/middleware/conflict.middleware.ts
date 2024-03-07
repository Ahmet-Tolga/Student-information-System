import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { TeacherService } from "src/teacher/teacher.service";

@Injectable()
export class ConflictDetectorMiddleware implements NestMiddleware {
    constructor(private readonly teacherService: TeacherService) {}

    async use(req: Request, res: Response, next: NextFunction) {
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
        } catch (error) {
            console.error("An error occurred in ConflictDetectorMiddleware:", error);
            return res.status(500).json({ message: "Internal Server Error", success: false });
        }
    }

    private checkTimeConflict(startTime1: string, endTime1: string, startTime2: string, endTime2: string): boolean {
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
}
