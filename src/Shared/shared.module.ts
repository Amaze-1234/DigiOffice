import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";

@NgModule({
    imports : [
        RouterOutlet,
        FormsModule,
        CommonModule,
        ReactiveFormsModule
    ],

    exports : [
        RouterOutlet,
        FormsModule,
        CommonModule,
        ReactiveFormsModule
    ]
})

export class SharedModule{}