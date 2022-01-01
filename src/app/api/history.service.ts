import { Injectable } from '@angular/core';
import { Storage } from "@capacitor/storage";
import { CountryRecord } from '../models/country-record.model';
import { ContinentRecord } from '../models/continent-record.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() { }

  countryHistory: CountryRecord[] = []
  continentHistory: ContinentRecord[] = []

  public getCountry(){
    return this.countryHistory;
  }

  public getContinent(){
    return this.continentHistory;
  }

  async setString (key:string, value:string) {
    await Storage.set({key, value});     
  }

  async getString(key:string): Promise<{value:any}> {
    return (await Storage.get({key}));    
  }

  async setObject(key:string, value:any){
    await Storage.set({key, value: JSON.stringify(value)});
  }

  async getObject(key:string): Promise<{value:any}>{
    const ret = await Storage.get({key});
    return JSON.parse(ret.value);
  }

  async removeItem(key:string){
    await Storage.remove({key});
  }

  async clear(){
    await Storage.clear();
  }
}
