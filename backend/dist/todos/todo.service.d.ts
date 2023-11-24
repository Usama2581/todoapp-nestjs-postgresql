import { Repository } from "typeorm";
import { Todo } from '../entities/todo.entities';
export declare class TodoService {
    private todo;
    constructor(todo: Repository<Todo>);
    create(body: any): Promise<any>;
    get(): Promise<Todo[]>;
    update(id: any, body: any): Promise<import("typeorm").UpdateResult>;
    delete(id: any): Promise<import("typeorm").DeleteResult>;
}
