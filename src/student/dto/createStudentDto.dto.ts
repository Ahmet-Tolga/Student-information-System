import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString, Max, Min, MinLength} from "class-validator";

export class CreateStudentDto{
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name:string;

    @ApiProperty()
    @IsString()
    @MinLength(8)
    password:string;

    @ApiProperty()
    @IsOptional()
    @IsNumberString()
    @Max(4)
    @Min(0)
    grade?: string;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    @Min(30)
    @Max(50)
    credit?:number;
}