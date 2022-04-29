import { Component } from '@angular/core';
import {
  FormControl, FormGroup, Validators,
} from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddCustomItem } from 'src/app/redux/actions/add-custom-item.action';
import { DateValidator } from '../../validators/date.validator';
import { UrlValidator } from '../../validators/url.validator';

const minTitleLength: number = 3;

const maxTitleLength: number = 20;

const maxDescriptionLength: number = 255;

@Component({
  selector: 'app-new-card-form',
  templateUrl: './new-card-form.component.html',
  styleUrls: ['./new-card-form.component.scss'],
})
export class NewCardFormComponent {
  public form: FormGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(minTitleLength),
      Validators.maxLength(maxTitleLength),
    ]),
    description: new FormControl('', [
      Validators.maxLength(maxDescriptionLength),
    ]),
    img: new FormControl('', [
      Validators.required,
      UrlValidator.isCorrect,
    ]),
    video: new FormControl('', [
      Validators.required,
      UrlValidator.isCorrect,
    ]),
    date: new FormControl('', [
      Validators.required,
      DateValidator.isCorrect,
    ]),
  });

  constructor(private store: Store) {}

  public cardSubmit(): void {
    this.store.dispatch(new AddCustomItem(this.form.value));
    this.form.reset();
  }
}
