import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
import { SearchPipe } from "./search-pipe";
import { NgbPopover } from "@ng-bootstrap/ng-bootstrap";
import { LengthPipePipe } from "./length-pipe-pipe";

@NgModule({
    imports : [
        RouterOutlet,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        SearchPipe,
        NgbPopover,
    ],

    exports : [
        RouterOutlet,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,


        SearchPipe,
        NgbPopover

        
    ]
})

export class SharedModule{}