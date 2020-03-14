import { Injectable } from '@angular/core';
import {SqlQuery} from './sql-query';
import {HttpClient} from "@angular/common/http";
import {Exercise, jsonExo} from './exercise';

@Injectable({
  providedIn: 'root'
})
export class CorrectionService {

  constructor() { }
}