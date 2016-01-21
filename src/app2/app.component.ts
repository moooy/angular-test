import {Component} from "angular2/core";
import {ToolbarComponent} from "./components/toolbar/toolbar.component";
import {TableComponent} from './components/table/evotable.component';
import {MessageModalComponent} from './components/modals/message/message.modal.component';

@Component({
    selector: "app",
    template: `
        <div class="toolbar-container">
            <cedar-toolbar></cedar-toolbar>
        </div>
        <div class="table-container">
            <cedar-table></cedar-table>
        </div>
        <div class="modal-container">
            <table-modal></table-modal>
        </div>
    `,
    directives:[ToolbarComponent,TableComponent,MessageModalComponent]
})

export class APPComponent {
    constructor(){

    }


}