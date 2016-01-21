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
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._tableService.change.subscribe(function (res) {
            _this.columns = res.columns;
            _this.data = res.data;
            _this.initTable();
        });
        this._eventService.add.subscribe(function (res) {
            _this._tableService.getAddOpinion();
        });
        this._tableService.add.subscribe(function (res) {
            _this.columnOpinion = res;
        });
    };
    TableComponent.prototype.initTable = function () {
        var temp_this = this;
        temp_this._table = $("table").bootstrapTable({
            columns: temp_this.columns,
            data: temp_this.data,
            pagination: true
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
