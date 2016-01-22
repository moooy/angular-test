import {Component , OnInit} from 'angular2/core';
import {TableService} from '../../services/table.service';
import {EventService} from '../../services/event.service';
import {escape} from "querystring";



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
    public checkRows: Array<any> =[];



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

        this._eventService.addClick.subscribe(res =>{
            this._tableService.getAddOpinion();
        });

        this._tableService.add.subscribe(res =>{
            this._eventService.messageModal.emit(res);
        })

        this._eventService.messageModalSubmit.subscribe(res => {
            this._tableService.postAddResult(res);
        })

        this._eventService.deleteClick.subscribe(res =>{
            this._eventService.warnModal.emit(this.checkRows);
        })

        this._eventService.fixClick.subscribe(res =>{
            console.log(this.checkRows);
            if(this.checkRows.length ==1){
                this._eventService.editModal.emit(this.checkRows[0]);
            }else if(this.checkRows.length == 0){
                this._eventService.warnModal.emit({"warn":"请选择数据"});
            }else{
                this._eventService.warnModal.emit({"warn":"请选择一条数据"})
            }

        })

        this._eventService.editModalSubmit.subscribe(res =>{
            console.log("edit data :"+res);
            this._tableService.postFix(res);
        })

        this._eventService.searchClick.subscribe(res =>{
            console.log("search data:"+res);
            this._tableService.postSearch(res);
        })

        this._eventService.exactClick.subscribe(res =>{
            this._tableService.getSearchOpinion();
        })

        this._tableService.search.subscribe(res =>{
            this._eventService.searchOpinion.emit(res);
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
            pagination : true,
            checkboxHeader : false
        }).on('check.bs.table',function(e,row){
            temp_this.checkRows.push(row);
        }).on('uncheck.bs.table',function(e,row){
            var index = -1;
            for (var i = 0; i < temp_this.checkRows.length; i++) {
                if (temp_this.checkRows[i] == row) index = i;
            }
            temp_this.checkRows.splice(index,1);
        }).on('uncheck-all.bs.table',function(e,row){
            temp_this.checkRows.splice(0,temp_this.checkRows.length);
        });
    }
}
