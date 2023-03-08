import {Injectable} from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ResponsePayload} from '../../interfaces/core/response-payload.interface';
import {Tag} from '../../interfaces/common/tag.interface';
import { FilterData } from 'src/app/interfaces/gallery/filter-data';

const API_PROJECT = environment.apiBaseLink + '/api/tag/';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  /**
   * getAllTags
   */


  getAllTags(filterData: FilterData, searchQuery?: string) {
    let params = new HttpParams();
    if (searchQuery) {
      params = params.append('q', searchQuery);
    }
    return this.httpClient.post<{ data: Tag[], count: number, success: boolean }>(API_PROJECT + 'get-all', filterData, {params});
  }

}
