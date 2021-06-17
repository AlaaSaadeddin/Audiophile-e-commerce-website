import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speaker-card',
  templateUrl: './speaker-card.component.html',
  styleUrls: ['./speaker-card.component.scss']
})
export class SpeakerCardComponent implements OnInit {
  newProduct : boolean = false;

  textContent : any = {primaryTitle:'NEW PRODUCT',mainTitle:'ZX9 SPEAKER',
  description:'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.'}

  constructor() { }

  ngOnInit(): void {
  }

}
