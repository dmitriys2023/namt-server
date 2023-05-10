import {IsNumber, IsString} from "class-validator";

export class SearchEmploymentDto {

    @IsNumber()
    studentID: number;
}

export class SearchEmploymentStatusDto {

    @IsString()
    status: string;
    @IsString()
    group:string;
}