import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist';
import { Todo } from 'src/entities/todo.entities';


@Injectable()

export class DBService implements TypeOrmOptionsFactory {

    constructor(private config: ConfigService) {}

    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
      const type =  this.config.get('type')
      const url =  this.config.get('POSTGRES_URL')
      // const port =  this.config.get('port')
      // const username =  this.config.get('name')
      // const password =  this.config.get('password')
      // const database =  this.config.get('database')
      const synchronize =  this.config.get('synchronize')
      const entities = [Todo]
      const sslMode = 'require'; 
      // console.log(type, host, port, username, password, database, synchronize)

      return {
        type,
        url,
        ssl: {
          rejectUnauthorized: false, // Set to true if you want to verify the server's certificate
          ca: 'path/to/ca.crt', // Path to the CA certificate file (if required)
      },
      extra: {
          ssl: {
              sslmode: sslMode,
          },
      },
        // host,
        // port,
        // username,
        // password,
        // database,
        synchronize,
        entities,
      }
    }
    
}