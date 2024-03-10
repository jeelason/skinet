import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../shared/models/pagination';
import { Product } from '../shared/models/product';
import { Type } from '../shared/models/type';
import { Brand } from '../shared/models/brand';
import { ShopParams } from '../shared/models/shopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/'

  constructor(private http: HttpClient) { }

  getProducts(ShopParams: ShopParams) {  //make sure order is good here for component
    let params = new HttpParams();
    
    if (ShopParams.brandId > 0) params = params.append('brandId', ShopParams.brandId);
    if (ShopParams.typeId > 0) params = params.append('typeId', ShopParams.typeId);
    params = params.append('sort', ShopParams.sort);
    params = params.append('pageIndex', ShopParams.pageNumber); //in ProductSpecParams.cs we called it pageIndex
    params = params.append('pageSize', ShopParams.pageSize);
    if (ShopParams.search) params = params.append('search', ShopParams.search);
    

    return this.http.get<Pagination<Product[]>>(this.baseUrl + 'products', {params});
  }

  getBrands() {
    return this.http.get<Brand[]>(this.baseUrl + 'products/brands');
  }

  getTypes() {
    return this.http.get<Type[]>(this.baseUrl + 'products/types');
  }
}
