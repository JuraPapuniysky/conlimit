import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LimitService {

  constructor(private http: HttpClient) {
  }

  getLimits() {
    return this.http.get('http://10.109.71.239:8008/config-numbers/config-number');
  }
}
