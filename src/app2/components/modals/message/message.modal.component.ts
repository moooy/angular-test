import {Component,EventEmitter} from 'angular2/core';
import {EventService} from  '../../../services/event.service';
//import {TableService} from  '../../../services/table.service';

@Component({
  selector:'table-modal',
  templateUrl:'./app2/components/modals/message/message.modal.component.html',
  styleUrls:['./app2/components/modals/message/message.modal.component.css'],
})
export class MessageModalComponent{
     public rep_results ={};
     public contents = {};

     constructor(private _eventService:EventService){
         this._eventService.messageModal.subscribe(res => {
             this.contents = res;
             this.show();
         })
     }

     //显示模态框
     show(){
         $('#tableModal').modal('show');
     }

    //提交动作
     onsubmit(){
         console.log(this.contents);
         this._eventService.messageModalSubmit.emit(this.contents);
     }

}
