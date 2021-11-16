import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailToDirective } from './mail-to.directive';
import { FormatPhonePipe } from './format-phone.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MailToDirective, FormatPhonePipe],
  imports: [CommonModule, HttpClientModule],
  exports: [MailToDirective, FormatPhonePipe],
})
export class SharedModule {}
