import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddCustomItem } from 'src/app/redux/items-state';
import { DateValidator } from '../../validators/date.validator';
import { UrlValidator } from '../../validators/url.validator';

@Component({
  selector: 'app-new-card-form',
  templateUrl: './new-card-form.component.html',
  styleUrls: ['./new-card-form.component.scss']
})
export class NewCardFormComponent implements OnInit {
  public form = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    description: new FormControl('', [
      Validators.maxLength(255)
    ]),
    img: new FormControl('', [
      Validators.required,
      UrlValidator.isCorrect
    ]),
    video: new FormControl('', [
      Validators.required,
      UrlValidator.isCorrect
    ]),
    date: new FormControl('', [
      Validators.required,
      DateValidator.isCorrect
    ]),
  })
  
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form.value)
    // this.store.select(state => state).subscribe(val => console.log(val))
    // this.store.dispatch(new AddCard(this.form.value)).subscribe(() => this.form.reset());
    this.store.dispatch(new AddCustomItem(this.form.value))
 }
}
