var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
require('rxjs/add/operator/map');
var TableService = (function () {
    function TableService(_http) {
        this._http = _http;
        this.columnsUrl = 'test/table.colums.json';
        this.dataUrl = 'test/table.data.json';
        this.addOpinionUrl = 'test/table.add.json';
        this.addResultUrl = '';
        this.deleteUrl = '';
        this.fixUrl = '';
        this.searchUrl = 'test/search.opinion.json';
        this.columns = [];
        this.data = [];
        this.addOpinion = [];
        this.searchOpinion = [];
        this.change = new core_1.EventEmitter();
        this.add = new core_1.EventEmitter();
        this.delete = new core_1.EventEmitter();
        this.search = new core_1.EventEmitter();
        this.getTableColums();
    }
    TableService.prototype.getTableColums = function () {
        var _this = this;
        this._http.get(this.columnsUrl)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) { _this.columns = res; _this.getTableData(); });
    };
    TableService.prototype.getTableData = function () {
        var _this = this;
        this._http.get(this.dataUrl)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            _this.data = res;
            _this.change.emit({ columns: _this.columns, data: _this.data });
        });
    };
    TableService.prototype.getAddOpinion = function () {
        var _this = this;
        this._http.get(this.addOpinionUrl)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            _this.addOpinion = res;
            _this.add.emit(_this.addOpinion);
        });
    };
    TableService.prototype.getSearchOpinion = function () {
        var _this = this;
        this._http.get(this.searchUrl)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            _this.searchOpinion = res;
            _this.search.emit(_this.searchOpinion);
        });
    };
    TableService.prototype.postAddResult = function (params) {
        this._http.post(this.addResultUrl, JSON.stringify(params))
            .subscribe(function (res) {
        }, function (err) {
        });
    };
    TableService.prototype.postDelete = function (params) {
        this._http.post(this.deleteUrl, JSON.stringify(params))
            .subscribe(),
            function (err) {
            };
    };
    TableService.prototype.deleteSumit = function () {
        this.delete.emit({});
    };
    TableService.prototype.postFix = function (params) {
        this._http.post(this.fixUrl, JSON.stringify(params))
            .subscribe(),
            function (err) {
            };
    };
    TableService.prototype.postSearch = function (params) {
        this._http.post(this.searchUrl, JSON.stringify(params))
            .subscribe();
    };
    TableService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TableService);
    return TableService;
})();
exports.TableService = TableService;
