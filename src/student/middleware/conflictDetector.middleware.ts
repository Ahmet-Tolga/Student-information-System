import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { StudentService } from "../student.service";
import { LessonService } from "src/lesson/lesson.service";

@Injectable()
export class ConflictDetectorMiddlewareStudent implements NestMiddleware {
    constructor(private readonly studentService:StudentService,private readonly lessonservice:LessonService) {}

    async use(req: Request, res: Response, next: NextFunction) {
        try {
            const student = await this.studentService.findAStudentById(req.params.student_id);
            const lesson = await this.lessonservice.findOneById(req.body.lesson_id);

            for (const i of student.lessons) {
                if (lesson.dayOfLesson === i.dayOfLesson &&
                    this.checkTimeConflict(lesson.startTime, lesson.endTime, i.startTime,i.endTime )) {
                    return res.status(400).json({ message: "You have a conflict lesson!", success: false });
                }
            }
            
            next();
        } catch (error) {
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
