import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiAuthService {

    constructor(private httpClient: HttpClient) {
    }

    /**
     * get url => req.paramS
     * @param url 
     * @param token 
     * @param options 
     */
    getDynamicUrl(url: string) {
        return this.httpClient.get(url)
            .toPromise()
            .then(data => {
                let rtn: any;
                rtn = data;
                return rtn;
            });
    }

    createObjectKey = (obj, key, value) => {
        Object.defineProperty(obj, key, { value: value, writable: true, enumerable: true, configurable: true });
        obj.length = obj.length ? obj.length + 1 : 1;
        return obj;
    }

    deleteObjectKey = (obj, key) => {
        if (delete obj[key]) obj.length = obj.length ? obj.length - 1 : undefined;
        return obj;
    }
}