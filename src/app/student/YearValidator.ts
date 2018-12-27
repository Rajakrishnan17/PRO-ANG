import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

export class YearValidator {

  static dateExceed() {
    return (group: FormGroup): { [key: string]: boolean } => {
      console.log('Inside DateExceed Method');
      const jDate = group.get('joinDate');
      const eDate = group.get('endDate');
      if (new Date(eDate.value) < new Date(jDate.value)) {
        console.log('Condition failed Error');
        return { 'dateError': true };
      } else {
        console.log('Condition Passed No Error');
        return null;
      }
    };

  }
}
