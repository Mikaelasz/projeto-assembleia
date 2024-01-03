import { Module } from '@nestjs/common';
import { dataBaseProviders } from './database.providers';

@Module({
    providers: [...dataBaseProviders],
    export: [...dataBaseProviders]
})
export class DatabaseModule {}
