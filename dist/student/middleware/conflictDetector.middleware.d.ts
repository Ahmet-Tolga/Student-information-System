import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { StudentService } from "../student.service";
import { LessonService } from "src/lesson/lesson.service";
export declare class ConflictDetectorMiddlewareStudent implements NestMiddleware {
    private readonly studentService;
    private readonly lessonservice;
    constructor(studentService: StudentService, lessonservice: LessonService);
    use(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>>>;
    private checkTimeConflict;
}
