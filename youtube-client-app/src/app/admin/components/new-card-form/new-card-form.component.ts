import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { add } from 'src/app/redux/actions/custom-cards.actions';
import { DetailsItem } from 'src/app/youtube/models/details-item.model';
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

  customCards$: Observable<DetailsItem[]>;
  
  constructor(private store: Store<{ customCards: DetailsItem[] }>) {
    this.customCards$ = store.select('customCards')
  }

  ngOnInit(): void {
    this.customCards$.subscribe((val) => console.log(val))
  }

  submit() {
    const item = {
      "kind": "youtube#video",
      "etag": "",
      "id": "",
      "snippet": {
        "publishedAt": "2019-05-30T12:42:19.000Z",
        "channelId": "",
        "title": "",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "",
        "tags": [],
        "categoryId": "",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "",
          "description": ""
        },
      },
      "statistics": {
        "viewCount": "0",
        "likeCount": "0",
        "favoriteCount": "0",
        "commentCount": "0"
      }
    }
    item.snippet.publishedAt = `${this.form.value.date}T00:00:00.000Z`
    item.snippet.title = this.form.value.title
    item.snippet.description = this.form.value.description
    item.snippet.thumbnails.default.url = this.form.value.img
    console.log('submit click')
    this.store.dispatch(add({cardInfo: item}));
  }

  add() {
    this.store.dispatch(add(''));
  }

}
