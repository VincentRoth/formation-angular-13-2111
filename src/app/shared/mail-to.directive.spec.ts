import { ElementRef } from '@angular/core';
import { MailToDirective } from './mail-to.directive';

describe('MailToDirective', () => {
  let directive: MailToDirective;

  beforeEach(() => {
    directive = new MailToDirective(
      new ElementRef(document.createElement('a'))
    );
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
