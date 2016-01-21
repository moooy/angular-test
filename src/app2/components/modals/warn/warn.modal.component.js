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
var event_service_1 = require('../../../services/event.service');
var WarnModalComponent = (function () {
    function WarnModalComponent(_eventService) {
        var _this = this;
        this._eventService = _eventService;
        this.length = 0;
        this.contents = [];
        this._eventService.warnModal.subscribe(function (res) {
            _this.contents = res;
            console.log(_this.contents);
            console.log(Array.isArray(_this.contents));
            if (!Array.isArray(_this.contents)) {
                _this.length = -1;
            }
            else {
                _this.length = _this.contents.length;
            }
            ;
            console.log(_this.length);
            _this.show();
        });
    }
    WarnModalComponent.prototype.show = function () {
        $('#warnModal').modal('show');
    };
    WarnModalComponent.prototype.onsubmit = function () {
        console.log(this.contents);
        this._eventService.warnModalSubmit.emit(this.contents);
    };
    WarnModalComponent = __decorate([
        core_1.Component({
            selector: 'warn-modal',
            templateUrl: './app2/components/modals/warn/warn.modal.component.html',
            styleUrls: ['./app2/components/modals/warn/warn.modal.component.css'],
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService])
    ], WarnModalComponent);
    return WarnModalComponent;
})();
exports.WarnModalComponent = WarnModalComponent;
