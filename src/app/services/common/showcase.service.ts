import {Injectable} from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ResponsePayload} from '../../interfaces/core/response-payload.interface';
import {Showcase} from '../../interfaces/common/showcase.interface';
import { FilterData } from 'src/app/interfaces/gallery/filter-data';

const API_PROJECT = environment.apiBaseLink + '/api/showcase/';


@Injectable({
  providedIn: 'root'
})
export class ShowcaseService {

  constructor(
    private httpClient: HttpClient
  ) {
  }
  /**
   * getAllShowcases
   */
  getAllShowcases(filterData: FilterData, searchQuery?: string) {
    let params = new HttpParams();
    if (searchQuery) {
      params = params.append('q', searchQuery);
    }
    return this.httpClient.post<{ data: Showcase[], count: number, success: boolean }>(API_PROJECT + 'get-all', filterData, {params});
  }
}
