import {Injectable,EventEmitter} from "angular2/core";

@Injectable()

export class EventService{
    public messageModal : EventEmitter<Object>;
    public messageModalSubmit : EventEmitter<Object>;
    public addClick : EventEmitter<Object>;

    public warnModal :EventEmitter<Object>;
    public warnModalSubmit : EventEmitter<Object>;
    public deleteClick : EventEmitter<Object>;

    public fixClick : EventEmitter<Object>;

    constructor(){
        this.messageModal = new EventEmitter();
        this.addClick = new EventEmitter();
        this.messageModalSubmit = new EventEmitter();

        this.warnModal = new EventEmitter();
        this.warnModalSubmit = new EventEmitter();
        this.deleteClick = new EventEmitter();

        this.fixClick = new  EventEmitter();
    }
}
