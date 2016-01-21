import {Component,EventEmitter} from 'angular2/core';
import {EventService} from  '../../../services/event.service';

@Component({
    selector:'warn-modal',
    templateUrl:'./app2/components/modals/warn/warn.modal.component.html',
    styleUrls:['./app2/components/modals/warn/warn.modal.component.css'],
})
export class WarnModalComponent{
    public length :Number = 0;
    public contents = [] ;

    constructor(private _eventService:EventService){
        this._eventService.warnModal.subscribe(res => {
            this.contents = res;
            console.log(this.contents);
            console.log(Array.isArray(this.contents));
            if(!Array.isArray(this.contents)){
                this.length = -1
            }else{
                this.length = this.contents.length;
            };

            console.log(this.length);
            this.show();
        })
    }

    //显示模态框
    show(){
        $('#warnModal').modal('show');
    }

    //提交动作
    onsubmit(){
        console.log(this.contents);
        this._eventService.warnModalSubmit.emit(this.contents);
    }

}
