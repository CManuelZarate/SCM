import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getNoticias(): Observable<any> {
    const url='https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=4a044745840e477497adc2b31472ddb0';

    return this.http.get(url);
  }
}
