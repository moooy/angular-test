import {Component,EventEmitter} from 'angular2/core';
import {EventService} from  '../../services/event.service';


@Component({
  selector: 'cedar-toolbar',
  templateUrl: './app2/components/toolbar/toolbar.component.html',
  styleUrls: ['./app2/components/toolbar/toolbar.component.css'],
})
export class ToolbarComponent{

  public isActive = false;//精确查询条件是否激活
  public searchText :string  ;
  public searchOpinion =[];
  public searchCondition = {};

  constructor(private _eventService:EventService){
    this._eventService.searchOpinion.subscribe(res =>{
      this.searchOpinion = res;
      this.isActive = !this.isActive;
    })
  }

  addclick(){
    this._eventService.addClick.emit({});
  }

  deleteclick(){
    this._eventService.deleteClick.emit({});
  }

  fixclick(){
    this._eventService.fixClick.emit({})}

  searchclick(){
    this._eventService.searchClick.emit({"condition":this.searchText})
  }

  exactSearch(){
    this.searchCondition = {};
    if(!this.isActive){
      this._eventService.exactClick.emit({});
    }else{
      this.isActive = !this.isActive;
    }
  }

  exactsearch(){
    console.log(this.searchCondition);
    this._eventService.searchClick.emit(this.searchCondition);
  }
}
