import { TodoDTO } from '../dto/todo.dto';
import { TodoService } from './todo.service';
export declare class TodoController {
    private todo;
    constructor(todo: TodoService);
    read(): Promise<import("../entities/todo.entities").Todo[]>;
    create(body: TodoDTO): Promise<any>;
    delete(id: any): Promise<import("typeorm").DeleteResult>;
    update(body: TodoDTO, id: any): Promise<import("typeorm").UpdateResult>;
}
