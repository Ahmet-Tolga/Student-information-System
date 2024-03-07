import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEnum, IsNumber, IsOptional, IsString, IsUUID, Max, Min } from "class-validator";
import { DayType } from "../types/days.enum";
import { IsTimeFormat } from "./IsTimeFormat";

export class CreateLessonDto{
    @ApiProperty()
    @IsString()
    lessonName:string;

    @ApiProperty()
    @IsNumber()
    @Min(2)
    @Max(6)
    credit:number;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    maxStudent?:number;

    @ApiProperty()
    @IsEnum(DayType) 
    dayOfLesson:string;  

    @ApiProperty()
    @IsString()
    @IsTimeFormat()
    startTime:string;

    @ApiProperty()
    @IsString()
    @IsTimeFormat()
    endTime:string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    @IsUUID()
    teacherId?:string;
}