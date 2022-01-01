import { Component } from '@angular/core';
import { SearchService } from '../api/search.service';
import { HistoryService } from '../api/history.service';
import { CountryRecord } from '../models/country-record.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  place:string
  country:string
  continent:string
  cases:string
  active:string
  recovered:string
  deaths:string
  population:string

  ciarka:string

  todayStats:string 
  todayCases:string
  todayDeaths:string
  todayRecovered:string

  place_output:string
  cases_output:string
  active_output:string
  recovered_output:string
  deaths_output:string
  population_output:string

  todayCases_output:string
  todayDeaths_output:string
  todayRecovered_output:string

  sourceImg:string

  constructor(private searchService:SearchService, private history: HistoryService) {}

  public getData():void
  {
    if(this.place != null){
      this.searchService.getCovid(this.place).subscribe((data)=>{
        console.log(data);
        this.country = data['country'];
        this.continent = data['continent']
        this.sourceImg = data['countryInfo']['flag']
        this.cases = data['cases'];
        this.cases_output = "Cases: ";
        this.active = data['active'];
        this.active_output = "Active cases: ";
        this.recovered = data['recovered'];
        this.recovered_output = "Recovered: ";
        this.deaths = data['deaths'];
        this.deaths_output = "Deaths: ";
        this.population = data['population'];
        this.population_output = "Population: ";
        this.ciarka = ", ";
        this.todayStats = "Today statistics";
        this.todayCases = data['todayCases'];
        this.todayCases_output = "Today cases: ";
        this.todayDeaths = data['todayDeaths'];
        this.todayDeaths_output = "Today deaths: ";
        this.todayRecovered = data['todayRecovered'];
        this.todayRecovered_output = "Today recovered: ";
        let record = new CountryRecord(this.country);
        this.saveHistory(record);
      }, error=>{
        console.log(error);
        this.country = "Wrong name of country";
        this.continent = ""
        this.cases = "";
        this.cases_output = "";
        this.active = "";
        this.active_output = "";
        this.recovered = "";
        this.recovered_output = "";
        this.deaths = "";
        this.deaths_output = "";
        this.population = "";
        this.population_output = "";
        this.ciarka = "";
        this.todayStats = "";
        this.todayCases = "";
        this.todayCases_output = "";
        this.todayDeaths = "";
        this.todayDeaths_output = "";
        this.todayRecovered = "";
        this.todayRecovered_output = "";
        this.sourceImg = null;
      }
      );
    }
    else{
      this.country = "Empty input";
      this.continent = "";
      this.cases = "";
      this.cases_output = "";
      this.recovered = "";
      this.recovered_output = "";
      this.deaths = "";
      this.deaths_output = " ";
      this.population = "";
      this.population_output = "";
      this.ciarka = "";
      this.todayStats = "";
      this.todayCases = "";
      this.todayCases_output = "";
      this.todayDeaths = "";
      this.todayDeaths_output = "";
      this.todayRecovered = "";
      this.todayRecovered_output = "";
      this.sourceImg = null;
    } 
  }

  saveHistory(record: CountryRecord)
  {
      this.history.countryHistory.unshift(record);
      this.history.setObject('country_history', this.history.countryHistory);
  }
}
