import {Component,EventEmitter} from 'angular2/core';
import {EventService} from  '../../services/event.service';


@Component({
  selector: 'cedar-toolbar',
  templateUrl: './app/components/toolbar/toolbar.component.html',
  styleUrls: ['./app/components/toolbar/toolbar.component.css'],
})
export class ToolbarComponent{

  public isActive = false;//精确查询条件是否激活

  constructor(private _eventService:EventService){}

  addclick(){
    this._eventService.add.emit({option:'add'});
  }
}
