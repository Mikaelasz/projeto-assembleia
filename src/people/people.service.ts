import { Injectable } from '@nestjs/common';
import { Person, personUpdatingRequest } from './person'

@Injectable()
export class PeopleService {

    people: Person[] =  []

    list() : Person [] {
        return this.people;
    }

    save(person: Person){
        this.people.push(person);
    }
    
    findById(id: number) : Person {
        const foundPerson = this.people.find(person => person.id == id)
        return foundPerson;
    }

    update(id: number, updatingPerson: personUpdatingRequest){
         this.people.forEach(person =>{
            if(id == person.id){
                person.name = updatingPerson.name;
            }
        })
    }

    delete(id: number){        
        const newList = this.people.filter( person => person.id != id)
        this.people = newList;
    }

}
