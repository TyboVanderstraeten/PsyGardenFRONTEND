import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventDataService } from '../../event-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Link } from '../../link.model';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.css']
})
export class AddLinkComponent implements OnInit {
  private _id: Number;
  private _subscription: any;
  private _link: FormGroup;
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
    this._link = this._formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      url: ['', Validators.required]
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
    }
  }

  onSubmit() {
    this._eventDataService.addLinkToEvent(
      this._id, new Link(
        this._link.value.name,
        this._link.value.url
      )
    ).subscribe((response) => {
      if (response) {
        this._router.navigate(['all-events']);
      } else {
        this._errorMessage = 'Could not add link';
      }
    });
  }

}
