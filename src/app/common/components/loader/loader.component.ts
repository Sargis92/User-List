import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
  private loadingSubscription: Subscription | undefined;
  public isSpinnerVisible = true;
  // public isSpinnerVisible = false;


  constructor(private utilService: UtilService) {
    this.loadingSubscription = this.utilService.appLoading$.subscribe(loading => this.isSpinnerVisible = loading);
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.isSpinnerVisible = false;
    this.loadingSubscription?.unsubscribe();
  }

}
