import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Students} from "./students/entity/students.entity";
import { EmploymentModule } from './employment/employment.module';
import { GroupsModule } from './groups/groups.module';
import { SpecialisationsModule } from './specialisations/specialisations.module';
import {Specialisations} from "./specialisations/entity/specialisations.entity";
import {Groups} from "./groups/entity/groups.entity";
import {Employment} from "./employment/entity/employement.entity";
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import {Users} from "./users/entities/user.entity";


@Module({
  imports: [
      StudentsModule,
      EmploymentModule,
      GroupsModule,
      SpecialisationsModule,
      UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql.freedb.tech',
      port: 3306,
      username: 'freedb_admin2023',
      password: 'SZ!@@fySrM55cH&',
      database: 'freedb_namt_2023',
      entities: [Students, Specialisations, Groups, Employment, Users],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
