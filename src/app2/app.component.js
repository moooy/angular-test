var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var toolbar_component_1 = require("./components/toolbar/toolbar.component");
var evotable_component_1 = require('./components/table/evotable.component');
var message_modal_component_1 = require('./components/modals/message/message.modal.component');
var warn_modal_component_1 = require('./components/modals/warn/warn.modal.component');
var APPComponent = (function () {
    function APPComponent() {
    }
    APPComponent = __decorate([
        core_1.Component({
            selector: "app",
            template: "\n        <div class=\"toolbar-container\">\n            <cedar-toolbar></cedar-toolbar>\n        </div>\n        <div class=\"table-container\">\n            <cedar-table></cedar-table>\n        </div>\n        <div class=\"modal-container\">\n            <table-modal></table-modal>\n        </div>\n        <div class=\"modal-container\">\n            <warn-modal></warn-modal>\n        </div>\n    ",
            directives: [toolbar_component_1.ToolbarComponent, evotable_component_1.TableComponent, message_modal_component_1.MessageModalComponent, warn_modal_component_1.WarnModalComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], APPComponent);
    return APPComponent;
})();
exports.APPComponent = APPComponent;
