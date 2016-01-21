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
var table_service_1 = require('../../services/table.service');
var event_service_1 = require('../../services/event.service');
var TableComponent = (function () {
    function TableComponent(_tableService, _eventService) {
        this._tableService = _tableService;
        this._eventService = _eventService;
        this.columns = [];
        this.data = [];
        this._table = {};
        this.columnOpinion = {};
        this.checkRows = [];
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._tableService.change.subscribe(function (res) {
            _this.columns = res.columns;
            _this.data = res.data;
            _this.initTable();
        });
        this._eventService.addClick.subscribe(function (res) {
            _this._tableService.getAddOpinion();
        });
        this._tableService.add.subscribe(function (res) {
            _this._eventService.messageModal.emit(res);
        });
        this._eventService.messageModalSubmit.subscribe(function (res) {
            _this._tableService.postAddResult(res);
        });
        this._eventService.deleteClick.subscribe(function (res) {
            _this._eventService.warnModal.emit(_this.checkRows);
        });
        this._eventService.fixClick.subscribe(function (res) {
            if (_this.checkRows.length == 1) {
                _this._eventService.editModal.emit(_this.checkRows[0]);
            }
            else if (_this.checkRows.length == 0) {
                _this._eventService.warnModal.emit({ "warn": "请选择数据" });
            }
            else {
                _this._eventService.warnModal.emit({ "warn": "请选择一条数据" });
            }
        });
    };
    TableComponent.prototype.initTable = function () {
        var temp_this = this;
        temp_this._table = $("table").bootstrapTable({
            columns: temp_this.columns,
            data: temp_this.data,
            pagination: true
        }).on('check.bs.table', function (e, row) {
            temp_this.checkRows.push(row);
        }).on('uncheck.bs.table', function (e, row) {
            var index = -1;
            for (var i = 0; i < temp_this.checkRows.length; i++) {
                if (temp_this.checkRows[i] == row)
                    index = i;
            }
            temp_this.checkRows.splice(index, 1);
        }).on('uncheck-all.bs.table', function (e, row) {
            temp_this.checkRows.splice(0, temp_this.checkRows.length);
        });
    };
    TableComponent = __decorate([
        core_1.Component({
            selector: 'cedar-table',
            template: "\n        <table class=\"table\"></table>\n  ",
        }), 
        __metadata('design:paramtypes', [table_service_1.TableService, event_service_1.EventService])
    ], TableComponent);
    return TableComponent;
})();
exports.TableComponent = TableComponent;
