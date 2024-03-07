import { PartialType } from "@nestjs/mapped-types";
import { CreateLessonDto } from "./CreateLessonDto.dto";

export class UpdateLessonDto extends PartialType(CreateLessonDto){};