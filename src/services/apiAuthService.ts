import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { RequestInterceptor } from '../interceptors/requestInterceptor';

@Injectable()
export class ApiAuthService {

    tokenObject: any;

    constructor(private httpClient: HttpClient,
        private reqInterceptor: RequestInterceptor) {
    }

    /**
     * get url => req.paramS
     * @param url 
     * @param token 
     * @param options 
     */
    getDynamicUrl(url: string, token?: any, options?: any) {
        //lay token cua phien xac thuc
        this.reqInterceptor.setRequestToken(token && token.length ? token : token && this.tokenObject ? this.tokenObject.token : '');
        return this.httpClient.get(url, options)
            .toPromise()
            .then(data => {
                let rtn: any;
                rtn = data;
                return rtn;
            });
    }

    /**
     * post json_data => req.json_data
     * @param url 
     * @param json_data 
     * @param token 
     */
    postDynamicForm(url: string, json_data: Object, token?: any) {
        //lay token cua phien xac thuc
        this.reqInterceptor.setRequestToken(token && token.length ? token : token && this.tokenObject ? this.tokenObject.token : '');
        return this.httpClient.post(url, JSON.stringify(json_data))
            .toPromise()
            .then(data => {
                let rtn: any;
                rtn = data;
                return rtn;
            });
    }
}