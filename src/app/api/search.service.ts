import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) { }

  public getCovid(place: String) 
  {
    //return this.http.get('https://covid-api.mmediagroup.fr/v1/cases?country='+place);

    return this.http.get('https://corona.lmao.ninja/v2/countries/'+place+'?yesterday&strict&query%20');
  }

  public getCovidContinents(place_continent: String)
  {
    return this.http.get('https://corona.lmao.ninja/v2/continents/'+place_continent+'?yesterday&strict');
  }
}


