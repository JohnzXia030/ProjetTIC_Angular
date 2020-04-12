import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoVerificationService {

constructor() { }
isEmail(search:string):boolean
{
    var  serchfind:boolean;

    var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    serchfind = reg.test(search);

    console.log(serchfind)
    return serchfind
}
}
