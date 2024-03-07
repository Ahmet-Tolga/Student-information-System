"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeConversionService = void 0;
const common_1 = require("@nestjs/common");
let GradeConversionService = class GradeConversionService {
    convertToFourPoint(grades, credits) {
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
exports.GradeConversionService = GradeConversionService;
exports.GradeConversionService = GradeConversionService = __decorate([
    (0, common_1.Injectable)()
], GradeConversionService);
//# sourceMappingURL=baseConverter.js.map