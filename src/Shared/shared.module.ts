import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
import { SearchPipe } from "./search-pipe";

@NgModule({
    imports : [
        RouterOutlet,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        SearchPipe
    ],

    exports : [
        RouterOutlet,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        SearchPipe
    ]
})

export class SharedModule{}