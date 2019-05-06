import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EventDataService } from '../event-data.service';
import { Event } from 'src/app/modules/event/event.model';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  private _id: Number;
  private _subscription: any;
  private _event: FormGroup;
  private _errorMessage: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _eventDataService: EventDataService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._subscription = this._route.params.subscribe(params => {
      this._id = +params['id'];
    });
    this._event = this._formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required]],
      dateGroup: this._formBuilder.group({
        startDate: ['', [Validators.required]],
        endDate: ['', [Validators.required]],
      }, { validators: [this.checkDates, this.checkStartDate, this.checkEndDate] }),
      country: ['', [Validators.required, Validators.maxLength(100)]],
      region: ['', [Validators.maxLength(100)]],
      city: ['', [Validators.required, Validators.maxLength(100)]],
      street: ['', [Validators.required, Validators.maxLength(100)]],
      streetNr: ['', [Validators.maxLength(10)]],
      zipCode: ['', [Validators.required, Validators.maxLength(10)]],
      headerImageURL: ['', [Validators.required]]
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
    this._id = 0;
  }


  checkDates(control: AbstractControl): { [key: string]: any } {
    const startDate = control.get('startDate');
    const endDate = control.get('endDate');
    return startDate.value <= endDate.value ? null : { datesNotValid: true };
  }

  checkStartDate(control: AbstractControl): { [key: string]: any } {
    const startDate = control.get('startDate');
    const today = new Date().toISOString();
    return today <= startDate.value ? null : { startDateInPast: true };

  }

  checkEndDate(control: AbstractControl): { [key: string]: any } {
    const endDate = control.get('endDate');
    const today = new Date().toISOString();
    return today <= endDate.value ? null : { endDateInPast: true };
  }

  getErrorMessage(errors: any) {
    if (!errors) {
      return null;
    }
    if (errors.required) {
      return 'is required';
    } else if (errors.minlength) {
      return `needs at least ${errors.minlength.requiredLength} characters (got ${errors.minlength.actualLength})`;
    } else if (errors.maxLength) {
      return `can have max. ${errors.maxLength.requiredLength} characters (got ${errors.maxLength.actualLength})`;
    } else if (errors.startDateInPast) {
      return 'start date is in the past';
    } else if (errors.endDateInPast) {
      return 'end date is in the past';
    } else if (errors.datesNotValid) {
      return 'dates are not valid'
    }
  }

  onSubmit() {
    this._eventDataService.editEvent(
      this._id,
      new Event(
        this._event.value.name,
        this._event.value.description,
        this._event.value.dateGroup.startDate,
        this._event.value.dateGroup.endDate,
        this._event.value.country,
        this._event.value.region,
        this._event.value.city,
        this._event.value.street,
        this._event.value.streetNr,
        this._event.value.zipCode,
        this._event.value.headerImageURL,
        [], [], []
      )).subscribe((response) => {
        if (response) {
          this._router.navigate(['all-events']);
        } else {
          this._errorMessage = 'Could not edit event';
        }
      });
  }

}
