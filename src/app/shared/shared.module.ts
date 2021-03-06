import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailToDirective } from './mail-to.directive';
import { FormatPhonePipe } from './format-phone.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TimeInterceptor } from './api/time.interceptor';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [MailToDirective, FormatPhonePipe],
  imports: [CommonModule, HttpClientModule],
  exports: [MailToDirective, FormatPhonePipe, TranslateModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true },
  ],
})
export class SharedModule {}
