import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Max, Min } from "class-validator";

export class CreateGradeDto{
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    lessonName:string;

    @ApiProperty()
    @IsString()
    @IsUUID()
    lessonId:string;

    @ApiProperty()
    @IsString()
    @IsUUID()
    studentId:string;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    @Max(100)
    @Min(0)
    grade?:number;
}