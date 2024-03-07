"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStudentDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const createStudentDto_dto_1 = require("./createStudentDto.dto");
class UpdateStudentDto extends (0, mapped_types_1.PartialType)(createStudentDto_dto_1.CreateStudentDto) {
}
exports.UpdateStudentDto = UpdateStudentDto;
;
//# sourceMappingURL=updateStudentDto.dto.js.map