import {Component,EventEmitter} from 'angular2/core';
import {EventService} from  '../../../services/event.service';
import {TableService} from  '../../../services/table.service';

@Component({
  selector:'table-modal',
  templateUrl:'./app2/components/modals/message/message.modal.component.html',
  styleUrls:['./app2/components/modals/message/message.modal.component.css'],
})
export class MessageModalComponent{
     public rep_results ={};


     constructor(private _eventService:EventService,private _tableService:TableService){
         this._tableService.add.subscribe(res => {
             this.rep_results = res;
             $('#tableModal').modal('show');
         })
     }

    /*
    * 提交动作
    * */
     onsubmit(){

     }

}
