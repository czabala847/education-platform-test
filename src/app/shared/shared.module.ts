import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderComponent } from './components/header/header.component';
import { ImageRenderPipe } from './pipes/image-render.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { ContentsComponent } from './components/contents/contents.component';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ImageRenderPipe,
    FooterComponent,
    ContentCardComponent,
    ContentsComponent,
    DialogConfirmComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule, FlexLayoutModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    ImageRenderPipe,
    FlexLayoutModule,
    ContentsComponent,
    DialogConfirmComponent,
  ],
})
export class SharedModule {}
