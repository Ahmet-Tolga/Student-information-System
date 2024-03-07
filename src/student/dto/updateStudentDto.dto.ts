import { PartialType } from "@nestjs/mapped-types";
import { CreateStudentDto } from "./createStudentDto.dto";

export class UpdateStudentDto extends PartialType(CreateStudentDto){};