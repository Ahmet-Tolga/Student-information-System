import { Injectable } from "@nestjs/common";

@Injectable()
export class GradeConversionService {
    convertToFourPoint(grades: number[], credits: number[]): number {
      if (grades.length !== credits.length) {
        throw new Error('credit and grades must be same length');
      }
  
      let totalWeightedGrade = 0;
      let totalCredits = 0;
  
      for (let i = 0; i < grades.length; i++) {
        const grade = grades[i];
        const credit = credits[i];
  
        let fourPointGrade: number;
        if (grade >= 90) {
          fourPointGrade = 4.0;
        } else if (grade >= 85) {
          fourPointGrade = 3.7;
        } else if (grade >= 80) {
          fourPointGrade = 3.3;
        } else if (grade >= 75) {
          fourPointGrade = 3.0;
        } else if (grade >= 70) {
          fourPointGrade = 2.7;
        } else if (grade >= 65) {
          fourPointGrade = 2.3;
        } else if (grade >= 60) {
          fourPointGrade = 2.0;
        } else if (grade >= 55) {
          fourPointGrade = 1.7;
        } else if (grade >= 50) {
          fourPointGrade = 1.3;
        } else if (grade >= 45) {
          fourPointGrade = 1.0;
        } else {
          fourPointGrade = 0.0;
        }
        const weightedGrade = fourPointGrade * credit;
        totalWeightedGrade += weightedGrade;
        totalCredits += credit;
      }
      const averageGrade = totalWeightedGrade / totalCredits;
  
      return averageGrade;
    }
  }
  
  