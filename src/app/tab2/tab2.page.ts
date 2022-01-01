import { Component } from '@angular/core';
import { SearchService } from '../api/search.service';
import { HistoryService } from '../api/history.service';
import { ContinentRecord } from '../models/continent-record.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  place_continent:string
  continent:string
  cases:string
  cases_output:string
  active:string
  active_output:string
  deaths:string
  deaths_output:string
  population:string
  population_output:string
  recovered:string
  recovered_output:string

  todayStats:string 
  todayCases:string
  todayDeaths:string
  todayRecovered:string
  todayCases_output:string
  todayDeaths_output:string
  todayRecovered_output:string

  constructor(private searchService:SearchService, private history: HistoryService) {}

  public getDataCon():void
  {
    if(this.place_continent != null){
      this.searchService.getCovidContinents(this.place_continent).subscribe((data)=>{
        console.log(data);
        this.continent = data['continent'];
        this.population = data['population'];
        this.population_output = "Population: ";
        this.cases = data['cases'];
        this.cases_output = "Cases: ";
        this.active = data['active'];
        this.active_output = "Active cases: ";
        this.deaths = data['deaths'];
        this.deaths_output = "Deaths: ";
        this.recovered = data['recovered'];
        this.recovered_output = "Recovered: ";
        this.todayStats = "Today statistics";
        this.todayCases = data['todayCases'];
        this.todayCases_output = "Today cases: ";
        this.todayDeaths = data['todayDeaths'];
        this.todayDeaths_output = "Today deaths: ";
        this.todayRecovered = data['todayRecovered'];
        this.todayRecovered_output = "Today recovered: ";
        let record = new ContinentRecord(this.continent);
        this.saveHistory(record);      
      }, error=>{
        console.log(error);
        this.continent = "Wrong name of continent";
        this.population = ""
        this.population_output = "";
        this.cases = "";
        this.cases_output = "";
        this.active = "";
        this.active_output = "";
        this.recovered = "";
        this.recovered_output = "";
        this.todayStats = "";
        this.todayCases = "";
        this.todayCases_output = "";
        this.todayDeaths = "";
        this.todayDeaths_output = "";
        this.todayRecovered = "";
        this.todayRecovered_output = "";  
      }
      );
    }
    else{
      this.continent = "Empty input";
        this.population = ""
        this.population_output = "";
        this.cases = "";
        this.cases_output = "";
        this.active = "";
        this.active_output = "";
        this.recovered = "";
        this.recovered_output = "";
        this.todayStats = "";
        this.todayCases = "";
        this.todayCases_output = "";
        this.todayDeaths = "";
        this.todayDeaths_output = "";
        this.todayRecovered = "";
        this.todayRecovered_output = ""; 
    } 
  }
  saveHistory(record: ContinentRecord)
  {
      this.history.continentHistory.unshift(record);
      this.history.setObject('continent_history', this.history.continentHistory);
  }
}
