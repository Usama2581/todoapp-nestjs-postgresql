import { Type } from "class-transformer";
import { IsNotEmpty } from "class-validator";


export class TodoDTO {

    @IsNotEmpty()
    @Type(() => String)
    text: string;
}