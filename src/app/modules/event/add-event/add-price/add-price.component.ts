import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventDataService } from '../../event-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Price } from '../../price.model';

@Component({
  selector: 'app-add-price',
  templateUrl: './add-price.component.html',
  styleUrls: ['./add-price.component.css']
})
export class AddPriceComponent implements OnInit {
  private _id: Number;
  private _subscription: any;
  private _price: FormGroup;
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
    this._price = this._formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required]],
      cost: ['', [Validators.required, Validators.max(5000)]]
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
    this._id = 0;
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
    } else if (errors.max) {
      return `can be max. 5000`;
    }
  }

  onSubmit() {
    this._eventDataService.addPriceToEvent(
      this._id,
      new Price(
        this._price.value.name,
        this._price.value.description,
        this._price.value.cost
      )
    ).subscribe((response) => {
      if (response) {
        this._router.navigate([`add-event/${response.eventId}/add-link`]);
      } else {
        this._errorMessage = 'Could not add price';
      }
    });
  }
}
