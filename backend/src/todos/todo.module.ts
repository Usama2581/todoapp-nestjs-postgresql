import { TodoController } from './todo.controller';
import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from '../entities/todo.entities';


@Module({
    imports: [TypeOrmModule.forFeature([ Todo ])],
    controllers: [TodoController],
    providers: [TodoService],
})


export class TodoModule {};