import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Module } from '@nestjs/common';
import { DBService } from './db.service';
// import { Controller } from './.controller';

@Module({
    // controllers: [Controller],
    imports: [TypeOrmModule.forRootAsync({
        useClass: DBService
    })],
    // providers: [],
})
export class DBModule {};