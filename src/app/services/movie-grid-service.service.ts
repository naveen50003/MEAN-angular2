import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {MovieItemType} from '../shared';

//Import Rxjs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MovieGridServiceService {

  constructor(private http:Http) { }

  private baseUrl="http://localhost:2000/api/movies";

  getMovies():Observable<MovieItemType[]>{
    return this.http.get(this.baseUrl)
                    .map((res:Response) =>{
                        return res.json().data as MovieItemType[] ;
                      })
                    .catch((error:any)=>Observable.throw(error.json().error || 'Server error'));
  }
}
