import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LimitService {

  constructor(private http: HttpClient) {
  }

  getLimits() {
    return this.http.get('http://asutp-ssrem:8088');
  }
}
