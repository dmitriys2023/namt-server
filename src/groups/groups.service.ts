import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Students} from "../students/entity/students.entity";
import {Repository} from "typeorm";
import {CreateStudentsDto} from "../students/dto/create-students.dto";
import {Groups} from "./entity/groups.entity";
import {CreateGroupsDto} from "./dto/create-groups.dto";

@Injectable()
export class GroupsService {
    constructor(
        @InjectRepository(Groups)
        private groupsRepository: Repository<Groups>,
    ) {}


    findAll(){
        return this.groupsRepository.find({
            order:{
                title:'ASC'
            }
        })
    }

    findOne(id:number):Promise<Groups | null>{
        return this.groupsRepository.findOneBy({ id })
    }

    async create(groups: CreateGroupsDto){
        return await this.groupsRepository.save(groups)
    }

    async update(id:number, groups:CreateGroupsDto){
        return await this.groupsRepository.update(id, groups)
    }


    async remove(id:number){

        return await this.groupsRepository.delete(id)
    }

}
