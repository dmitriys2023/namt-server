import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {StudentsService} from "../students/students.service";
import {CreateStudentsDto} from "../students/dto/create-students.dto";
import {GroupsService} from "./groups.service";
import {CreateGroupsDto} from "./dto/create-groups.dto";

@Controller('groups')
export class GroupsController {
    constructor(private readonly groupsService:GroupsService) {
    }
    @Get()
    getAll(){
        return this.groupsService.findAll()
    }
    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id:number){
        return this.groupsService.findOne(id)
    }

    @Post()
    create(@Body() createGroupsDto:CreateGroupsDto){
        return this.groupsService.create(createGroupsDto)
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id:number, @Body() body:CreateGroupsDto){
        return this.groupsService.update(id, body)
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id:number){
        return this.groupsService.remove(id)
    }
}
