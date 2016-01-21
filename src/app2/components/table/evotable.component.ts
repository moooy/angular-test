import {Component , OnInit} from 'angular2/core';
import {TableService} from '../../services/table.service';
import {EventService} from '../../services/event.service';


@Component({
  selector: 'cedar-table',
  template: `
        <table class="table"></table>
  `,
})

export class TableComponent implements OnInit{
   public columns : Array<any> = [];
   public data : Array<any> = [];
   private _table = {};
    public columnOpinion = {};



   constructor(private _tableService : TableService,private _eventService : EventService){}


    /*
     *订阅数据完成消息，获取数据
     */
    ngOnInit(){
        this._tableService.change.subscribe(res => {
            this.columns = res.columns;
            this.data = res.data;
            this.initTable();
        });

        this._eventService.add.subscribe(res =>{
            this._tableService.getAddOpinion();
        });

        this._tableService.add.subscribe(res =>{
            this.columnOpinion = res;
        })
    }


    /*
     * 初始化表格
     */
    initTable(){
        var temp_this = this;
        temp_this._table = $("table").bootstrapTable({
            columns : temp_this.columns,
            data : temp_this.data,
            pagination : true
        });
    }
}
