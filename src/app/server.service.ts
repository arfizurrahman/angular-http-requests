import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class ServerService {
    constructor(private http: HttpClient) {}
    storeServers(servers: any[]){
        return this.http.post('https://angular-http-37f1b.firebaseio.com/data.json',servers);
    }
}