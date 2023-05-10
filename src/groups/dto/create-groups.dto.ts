import {IsNumber, IsString} from "class-validator";
import {JoinColumn} from "typeorm";
import {Students} from "../../students/entity/students.entity";

export class CreateGroupsDto {
    title:string;
}