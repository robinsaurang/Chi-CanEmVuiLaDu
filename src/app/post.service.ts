import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  urls = 'http://fakerestapi.azurewebsites.net/api/Books';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) {
  }

  getOneBook(id): Observable<any> {
    return this.http.get(`${this.urls}/${id}`);
  }

  getContent(): Observable<any> {
    return this.http.get(this.urls);
  }

  deleteBookDetail(id: number): Observable<{}> {
    return this.http.delete( `${this.urls}/${id}`, this.httpOptions);
  }
  addBook(data):Observable<any>{
    return this.http.post(this.urls, data, this.httpOptions);
  }
}
