import { TodoDTO } from '../dto/todo.dto'
import { TodoService } from './todo.service';
import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';


@Controller('/todo')
export class TodoController {

    constructor(private todo: TodoService){}

    @Get('/get') 
    async read() {
        return await this.todo.get()
    }

    @Post('/post')
    async create(@Body(ValidationPipe) body: TodoDTO) {
        return await this.todo.create(body)
    }

    @Delete('/:id')
    async delete(@Param('id') id) {
        return await this.todo.delete(id)
    }

    @Put('/update/:id') 
    async update(@Body(ValidationPipe) body: TodoDTO, @Param('id') id) {
        return await this.todo.update(id, body)
    }

}