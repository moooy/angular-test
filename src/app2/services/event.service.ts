import {Injectable,EventEmitter} from "angular2/core";

@Injectable()

export class EventService{
    public add : EventEmitter<Object>;

    constructor(){
        this.add = new EventEmitter();
    }
}
