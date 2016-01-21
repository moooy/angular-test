import {Component,EventEmitter} from 'angular2/core';
import {EventService} from  '../../../services/event.service';

@Component({
  selector:'edit-modal',
  templateUrl:'./app2/components/modals/message/message.modal.component.html',
  styleUrls:['./app2/components/modals/message/message.modal.component.css'],
})
export class EditModalComponent{
     public rep_results ={};
     public keys = {};
     public contents = {};

     constructor(private _eventService:EventService){
         this._eventService.editModal.subscribe(res => {
             this.extractData(res);
             this.show();
         })
     }

     //显示模态框
     show(){
         $('#editModal').modal('show');
     }

    //提交动作
     onsubmit(){
         console.log(this.contents);
         this._eventService.editModalSubmit.emit(this.contents);
     }

    extractData(res:Object){
        var keys = [];
        var values = [];
        for (var key in res){
            if(key != '0'){
                keys.push(key);
                values[key] = (res[key]);
            }
        }
        this.keys = key;
        this.contents = values;
    }

}
