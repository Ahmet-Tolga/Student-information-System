import { IsNumber, IsString, IsUUID, Max, Min } from "class-validator";

export class SetGradeDto{
    @IsString()
    @IsUUID()
    studentId:string;

    @IsString()
    @IsUUID()
    teacherId:string;

    @IsNumber()
    @Max(100)
    @Min(0)
    grade:number;
}