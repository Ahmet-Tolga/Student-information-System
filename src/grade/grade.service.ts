import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GradeEntity } from './entity/gradeEntity.entity';
import { Repository } from 'typeorm';
import { CreateGradeDto } from './dto/createGradeDto.dto';

@Injectable()
export class GradeService {
    constructor(@InjectRepository(GradeEntity) private readonly gradeRepository:Repository<GradeEntity>){};
    
    async saveGrade(grade:GradeEntity){
        return await this.gradeRepository.save(grade);
    }

    async createAndSave(grade:CreateGradeDto){
        return await this.gradeRepository.save(grade);
    }

    async deleteGradeByStudentAndLesson(studentId: string, lessonId: string) {
        const grade = await this.gradeRepository.findOne({ where: { studentId, lessonId } });
        if (grade) {
            return await this.gradeRepository.delete(grade);
        } else {
            throw new Error("No grade found for the given student ID and lesson ID.");
        }
    }

    async deleteByLessonId(lesson_id:string){
        const grades=await this.gradeRepository.find({where:{lessonId:lesson_id}});
        grades.forEach(async(grade)=>{
            await this.gradeRepository.delete(grade);
        })
    }

    async deleteByStudentId(student_id:string){
        const grades=await this.gradeRepository.find({where:{studentId:student_id}});
        grades.forEach(async(grade)=>{
            await this.gradeRepository.delete(grade);
        })
    }

    async findOneByStudentId(student_id:string,lesson_id:string){
        return await this.gradeRepository.findOne({where:{studentId:student_id,lessonId:lesson_id}});
    }

    async convertToFourPoint(grades: number[], credits: number[]): Promise<number> {
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

