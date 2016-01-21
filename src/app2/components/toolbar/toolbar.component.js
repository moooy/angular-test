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
var event_service_1 = require('../../services/event.service');
var ToolbarComponent = (function () {
    function ToolbarComponent(_eventService) {
        this._eventService = _eventService;
        this.isActive = false;
    }
    ToolbarComponent.prototype.addclick = function () {
        this._eventService.add.emit({ option: 'add' });
    };
    ToolbarComponent = __decorate([
        core_1.Component({
            selector: 'cedar-toolbar',
            templateUrl: './app/components/toolbar/toolbar.component.html',
            styleUrls: ['./app/components/toolbar/toolbar.component.css'],
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService])
    ], ToolbarComponent);
    return ToolbarComponent;
})();
exports.ToolbarComponent = ToolbarComponent;
