import { Injectable } from "@nestjs/common";

@Injectable()
export class HelloService{

    hello(name: string) : string{
        return "hello" + name;
    }

}