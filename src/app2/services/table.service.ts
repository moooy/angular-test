import {Injectable,EventEmitter} from 'angular2/core';
import {Http,Response} from 'angular2/http';
import 'rxjs/add/operator/map'

@Injectable()
export class TableService {

   private columnsUrl = 'test/table.colums.json';
   private dataUrl = 'test/table.data.json';
   private addOpinionUrl = 'test/table.add.json';
   private addResultUrl = '';
   private deleteUrl = '';
   private fixUrl = '';
    private  searchUrl = 'test/search.opinion.json';
   public columns :Array<any>  = [];
   public data :Array<any> = [];
   public addOpinion:Array<any> = [];
    public searchOpinion:Array<any> = [];

   public change: EventEmitter<Object>;
   public add:EventEmitter<Object>;
   public delete:EventEmitter<Object>;
    public search:EventEmitter<Object>;


  constructor(private _http:Http){
    this.change = new EventEmitter();
    this.add = new EventEmitter();
    this.delete = new  EventEmitter();
      this.search = new EventEmitter();
    this.getTableColums();
  }
  /*
     获取表格列信息
  */
   getTableColums(): void{
           this._http.get(this.columnsUrl)
               .map(res => res.json())
             .subscribe(res => {this.columns = res;this.getTableData()});
   }

   /*
     获取表格数据信息
   */
   getTableData(): void{
        this._http.get(this.dataUrl)
             .map(res => res.json())
            .subscribe(res => {
              this.data = res;
              this.change.emit({columns:this.columns,data:this.data});
            });
   }

  /*
   获取增加表格数据的列配置
  */
   getAddOpinion(): void{
        this._http.get(this.addOpinionUrl)
            .map(res => res.json())
            .subscribe(res => {
              this.addOpinion = res;
              this.add.emit(this.addOpinion);
            });
   }

    /*
    * 获取查询条件
    * */
    getSearchOpinion():void{
        this._http.get(this.searchUrl)
            .map(res => res.json())
            .subscribe(res => {
                this.searchOpinion = res;
                this.search.emit(this.searchOpinion);
            });
    }

   /*
     增加表格数据请求
   */
   postAddResult(params: Object): void{
     this._http.post(this.addResultUrl,
      JSON.stringify(params))
      .subscribe(res =>{//请求成功

      },
      err => {//请求失败

      }
    )
   }

   postDelete(params: Object): void{
     this._http.post(this.deleteUrl,
     JSON.stringify(params))
     .subscribe(

     ),
     err =>{

     }
   }

   //确认删除请求
   deleteSumit(){
      this.delete.emit({});
   }

  //提交更改表格信息
  postFix(params: Object): void{
    this._http.post(this.fixUrl,
    JSON.stringify(params))
    .subscribe(

    ),
    err =>{

    }
  }

    //提交搜索请求
    postSearch(params:Object){
        this._http.post(this.searchUrl,
            JSON.stringify(params))
        .subscribe()
    }

}
