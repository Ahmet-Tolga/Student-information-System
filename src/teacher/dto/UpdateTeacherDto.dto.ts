import { PartialType } from "@nestjs/mapped-types";
import { CreateTeacherDto } from "./CreateTeacherDto.dto";

export class UpdateTeacherDto extends PartialType(CreateTeacherDto){};