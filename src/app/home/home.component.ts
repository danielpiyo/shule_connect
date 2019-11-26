import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import {single, multi_public, multi_private} from './charts.data'
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AppSettings } from './app.settings';
import { Settings } from './app.settings.model';
// import { analytics } from './analytics.data';

export interface User {
  name: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myControl = new FormControl();
  options: User[] = [
                      { name: 'Mary' },
                      { name: 'Shelley' },
                      { name: 'Igor' }
                    ];
  filteredOptions: Observable<User[]>;
  state: any;

  // chart
  public single: any[]; 
  public multi_private: any[];
  public multi_public: any[];
  public showLegend = true;
  public gradient = true;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  }; 
  public showLabels = true; 
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;

  public showXAxis = true;
  public showYAxis = true;  
  public showXAxisLabel = true;
  public xAxisLabel = 'Nature of School';
  public showYAxisLabel = true;
  public yAxisLabel = 'No of Schools';
  public autoScale = true;
  
  // analytics
  // public analytics: any[];
  // public showXAxis = true;
  // public showYAxis = true; 
  // public showXAxisLabel = true;
  // public xAxisLabel = 'Year';
  // public showYAxisLabel = false;
  // public yAxisLabel = 'Profit';  
  // public autoScale = true;
  // public roundDomains = true;

  @ViewChild('resizedDiv', null) resizedDiv: ElementRef;
  public previousWidthOfResizedDiv = 0;

  constructor(public appSettings:AppSettings) {
    this.settings = this.appSettings.settings; 
    Object.assign(this, {single, multi_public, multi_private}); 
  }

  

  ngOnInit() {
    // this.analytics = analytics

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  advanced_search(){
    this.state = 'advanced'
  }

  // ngAfterViewChecked() {
  //   if (this.previousWidthOfResizedDiv !== this.resizedDiv.nativeElement.clientWidth){
  //     this.analytics = [...analytics];
  //   }
  //   this.previousWidthOfResizedDiv = this.resizedDiv.nativeElement.clientWidth;
  // }

}
