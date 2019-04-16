import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable()
export class ServerService {
    constructor(private http: HttpClient) {}
    storeServers(servers: any[]){
        const headers= new HttpHeaders({'Content-Type':'application/json'});
        // return this.http.post('https://angular-http-37f1b.firebaseio.com/data.json',servers, {headers: headers});
        return this.http.put('https://angular-http-37f1b.firebaseio.com/data.json',servers, {headers: headers});
    }

    getServers(){
        return this.http.get('https://angular-http-37f1b.firebaseio.com/data')
        .pipe(map(
            (response: any) => {
                for(const server of response){
                    server.name = 'FETCHED_' + server.name;
                }
                return response;
            }
        ))
        .pipe(catchError(
            (error)=>{
                return throwError("Something went wrong");
            }
        ));
    }

    getAppName(){
        return this.http.get('https://angular-http-37f1b.firebaseio.com/appName.json');
    }
}