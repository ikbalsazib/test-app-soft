import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Client} from '../../interfaces/common/client.interface';
import { FilterData } from 'src/app/interfaces/gallery/filter-data';

const API_PROJECT = environment.apiBaseLink + '/api/client/';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  /**
   * addClient
   * getAllClients
   */

  getAllClients(filterData: FilterData, searchQuery?: string) {
    let params = new HttpParams();
    if (searchQuery) {
      params = params.append('q', searchQuery);
    }
    return this.httpClient.post<{ data: Client[], count: number, success: boolean }>(API_PROJECT + 'get-all', filterData, {params});
  }

}
