import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { TeacherService } from "src/teacher/teacher.service";
export declare class ConflictDetectorMiddleware implements NestMiddleware {
    private readonly teacherService;
    constructor(teacherService: TeacherService);
    use(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>>>;
    private checkTimeConflict;
}
