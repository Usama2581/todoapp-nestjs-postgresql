import { Injectable, ServiceUnavailableException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Like, Repository } from "typeorm";
import { Todo } from '../entities/todo.entities';
@Injectable()

export class TodoService {

    constructor(@InjectRepository(Todo) private todo: Repository<Todo>) {
        // console.log(todo)
    }

    async create(body) {
        const { text } = body
        console.log(text)
        const result = await this.todo.findOne({ where: { text } })
        if (result) {
            throw new ServiceUnavailableException('Task is available in your list')
        }
        else {
            return await this.todo.save(body)
        }

    }

    async get() {
        return await this.todo.find()
    }

    async update(id, body) {
        return await this.todo.update(id, body)    //pass id first
    }

    async delete(id) {
        return await this.todo.delete(id)
    }


}