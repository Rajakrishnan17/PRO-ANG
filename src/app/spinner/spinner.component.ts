import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../_service/spinner.service';
import { shallowEqual } from '@angular/router/src/utils/collection';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  isVisible: boolean = false;

  constructor(
    public spinner: SpinnerService,
    public activatedrouter: ActivatedRoute
    ) {
    this.spinner.show.subscribe(
      (SUCCESS) => {
        this.isVisible = SUCCESS;
      } );
    console.log(this.activatedrouter.snapshot.data);
  }

  ngOnInit() {
  }

}
