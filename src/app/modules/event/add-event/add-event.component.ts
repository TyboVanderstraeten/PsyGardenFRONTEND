import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EventDataService } from '../event-data.service';
import { Event } from 'src/app/modules/event/event.model';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  private _event: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _eventDataService: EventDataService
  ) { }

  ngOnInit() {
    this._event = this._formBuilder.group({
      name: [''],
      description: [''],
      startDate: [''],
      endDate: [''],
      country: [''],
      region: [''],
      city: [''],
      street: [''],
      streetNr: [''],
      zipCode: [''],
      headerImageURL: ['']
    });
  }

  onSubmit() {
    this._eventDataService.addNewEvent(
      new Event(
        this._event.value.name,
        this._event.value.description,
        this._event.value.startDate,
        this._event.value.endDate,
        this._event.value.country,
        this._event.value.region,
        this._event.value.city,
        this._event.value.street,
        this._event.value.streetNr,
        this._event.value.zipCode,
        this._event.value.headerImageURL,
        [], [], []
      )
    ).subscribe((response) => {
      console.log("Event added" + response.name);
    }
    );
  }

}
