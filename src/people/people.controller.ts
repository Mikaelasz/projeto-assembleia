import { Controller, Res, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PeopleService } from './people.service';
import { Response } from 'express';
import { Person, personUpdatingRequest } from './person';

@Controller('people')
export class PeopleController {

    constructor(
        private service: PeopleService
    ){}

    @Get()
    list(@Res() response: Response){
        const list = this.service.list();
        return response.status(200).send(list);
    }

    @Get('/:id')
    getById(@Param('id') id: number, @Res() response: Response){
        const person = this.service.findById(id);
        if(!person){
            return response.status(404).send();
        }
        return response.status(200).send(person);
    }

    @Post()
    save(@Body() person: Person, @Res() response: Response){
        this.service.save(person);
        return response.status(201).send("Salvo com sucesso");
    }

    @Put('/:id')
    update(
        @Param('id') id: number, 
        @Body() personUpdateData: personUpdatingRequest, 
        @Res() response: Response){

        const person = this.service.findById(id);
        if(!person){
            return response.status(404).send();
        }


        this.service.update(id, personUpdateData);
       
        return response.status(204).send("Atualizado com sucesso");
    }

    @Delete('/:id')
    delete(@Param('id') id: number, @Res() response: Response){
        const person = this.service.findById(id);
        if(!person){
            return response.status(404).send();
        }

        this.service.delete(id);
        
        return response.status(204).send();
    }
}
