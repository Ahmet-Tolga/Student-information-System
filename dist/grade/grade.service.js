"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const gradeEntity_entity_1 = require("./entity/gradeEntity.entity");
const typeorm_2 = require("typeorm");
let GradeService = class GradeService {
    constructor(gradeRepository) {
        this.gradeRepository = gradeRepository;
    }
    ;
    async saveGrade(grade) {
        return await this.gradeRepository.save(grade);
    }
    async createAndSave(grade) {
        return await this.gradeRepository.save(grade);
    }
    async deleteGradeByStudentAndLesson(studentId, lessonId) {
        const grade = await this.gradeRepository.findOne({ where: { studentId, lessonId } });
        if (grade) {
            return await this.gradeRepository.delete(grade);
        }
        else {
            throw new Error("No grade found for the given student ID and lesson ID.");
        }
    }
    async deleteByLessonId(lesson_id) {
        const grades = await this.gradeRepository.find({ where: { lessonId: lesson_id } });
        grades.forEach(async (grade) => {
            await this.gradeRepository.delete(grade);
        });
    }
    async deleteByStudentId(student_id) {
        const grades = await this.gradeRepository.find({ where: { studentId: student_id } });
        grades.forEach(async (grade) => {
            await this.gradeRepository.delete(grade);
        });
    }
    async findOneByStudentId(student_id, lesson_id) {
        return await this.gradeRepository.findOne({ where: { studentId: student_id, lessonId: lesson_id } });
    }
    async convertToFourPoint(grades, credits) {
        if (grades.length !== credits.length) {
            throw new Error('credit and grades must be same length');
        }
        let totalWeightedGrade = 0;
        let totalCredits = 0;
        for (let i = 0; i < grades.length; i++) {
            const grade = grades[i];
            const credit = credits[i];
            let fourPointGrade;
            if (grade >= 90) {
                fourPointGrade = 4.0;
            }
            else if (grade >= 85) {
                fourPointGrade = 3.7;
            }
            else if (grade >= 80) {
                fourPointGrade = 3.3;
            }
            else if (grade >= 75) {
                fourPointGrade = 3.0;
            }
            else if (grade >= 70) {
                fourPointGrade = 2.7;
            }
            else if (grade >= 65) {
                fourPointGrade = 2.3;
            }
            else if (grade >= 60) {
                fourPointGrade = 2.0;
            }
            else if (grade >= 55) {
                fourPointGrade = 1.7;
            }
            else if (grade >= 50) {
                fourPointGrade = 1.3;
            }
            else if (grade >= 45) {
                fourPointGrade = 1.0;
            }
            else {
                fourPointGrade = 0.0;
            }
            const weightedGrade = fourPointGrade * credit;
            totalWeightedGrade += weightedGrade;
            totalCredits += credit;
        }
        const averageGrade = totalWeightedGrade / totalCredits;
        return averageGrade;
    }
};
exports.GradeService = GradeService;
exports.GradeService = GradeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(gradeEntity_entity_1.GradeEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GradeService);
//# sourceMappingURL=grade.service.js.map