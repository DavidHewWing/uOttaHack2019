import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MessagingService {


  messages: string[] = [];

  messageSent = new Subject();
  messageToArray = new Subject();
  sendBully = new Subject();


  constructor() { }

}
