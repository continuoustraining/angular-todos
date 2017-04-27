import {AbstractControl} from '@angular/forms';

export class addFormValidator {

  static assigned(control: AbstractControl): {[key: string]: boolean} {
    const t = {assigned: true};
    const f = {assigned: false};

    console.log('addFormValidator ' + typeof control.value + '|' +control.value+ '|');

    if (null === control.value || '' === control.value || undefined === control.value) {
      console.log('return true');
      return t;
    }

    if ((typeof control.value) !== 'string') {
      console.log('return false');
      return f;
    }

    if (control.value.length > 32) {
      console.log('return false');
      return f;
    }

    console.log('return true');
    return t;
  }
}
