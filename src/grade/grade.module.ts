import { Module } from '@nestjs/common';
import { GradeService } from './grade.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GradeEntity } from './entity/gradeEntity.entity';

@Module({
  controllers: [],
  providers: [GradeService],
  imports:[TypeOrmModule.forFeature([GradeEntity])]
})
export class GradeModule {}
