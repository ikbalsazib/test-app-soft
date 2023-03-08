import {Injectable} from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ResponsePayload} from '../../interfaces/core/response-payload.interface';
import { OurService } from 'src/app/interfaces/common/our-service.interface';
import { FilterData } from 'src/app/interfaces/gallery/filter-data';

const API_PROJECT = environment.apiBaseLink + '/api/our-service/';


@Injectable({
  providedIn: 'root'
})
export class OurServiceService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  /**
   * getAllOurServices
   */

  getAllOurServices(filterData: FilterData, searchQuery?: string) {
    let params = new HttpParams();
    if (searchQuery) {
      params = params.append('q', searchQuery);
    }
    return this.httpClient.post<{ data: OurService[], count: number, success: boolean }>(API_PROJECT + 'get-all', filterData, {params});
  }
  getOurServiceById(id: string, select?: string) {
    let params = new HttpParams();
    if (select) {
      params = params.append('select', select);
    }
    return this.httpClient.get<{ data: OurService, message: string, success: boolean }>(API_PROJECT + 'get-ourService/' + id, {params});
  }
  getOurServicesBySlug(slug: string, select?: string) {
    let params = new HttpParams();
    if (select) {
      params = params.append('select', select);
    }
    return this.httpClient.get<{ data: OurService, message: string, success: boolean }>(API_PROJECT + slug, {params});
  }

}
