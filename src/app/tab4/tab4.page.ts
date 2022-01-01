import { Component } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { HistoryService } from '../api/history.service';
import { CountryRecord } from '../models/country-record.model';
import { ContinentRecord } from '../models/continent-record.model';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  countryHistory: CountryRecord[] = []
  continentHistory: ContinentRecord[] = []

  constructor(private history: HistoryService) {
  }

  ionViewWillEnter(){
    this.countryHistory = this.history.getCountry();
    this.continentHistory = this.history.getContinent();
  }
    

}
