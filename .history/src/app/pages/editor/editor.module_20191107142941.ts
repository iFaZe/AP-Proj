import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './editor.routing';
import { SharedModule } from '../../shared/shared.module';
import { EditorComponent } from './editor.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppModule } from 'src/app/app.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        NgxPaginationModule,
        routing,
        AppModule
    ],
    declarations: [
        EditorComponent
    ]
})
export class EditorModule { }
