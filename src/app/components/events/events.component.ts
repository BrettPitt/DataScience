import { Component, OnInit } from '@angular/core';
import {EventService} from "../../services/event.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events = {name: String, description: String, date: Date};

  constructor(private eventService: EventService) { }

  ngOnInit(){
    this.eventService.getEvents()
      .subscribe(
        res => this.events = res,
        err => console.log(err)
      );
  }

}
