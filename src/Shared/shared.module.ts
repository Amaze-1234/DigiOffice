import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
import { SearchPipe } from "./search-pipe";
import { NgbPopover } from "@ng-bootstrap/ng-bootstrap";
import { LengthPipePipe } from "./length-pipe-pipe";
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxDropzoneModule } from "ngx-dropzone";

@NgModule({
    imports : [
        RouterOutlet,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        SearchPipe,
        NgbPopover,
        NgMultiSelectDropDownModule,
        NgxDropzoneModule
    ],

    exports : [
        RouterOutlet,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        SearchPipe,
        NgbPopover,
         NgMultiSelectDropDownModule,
         NgxDropzoneModule        
    ]
})

export class SharedModule{}