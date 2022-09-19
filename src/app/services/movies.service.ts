import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  url: string = "../../assets/data/data.tsv"
  constructor(private http: HttpClient) { }


  getData() {
    return this.http.get(this.url, { responseType: 'text' });


  }

}
