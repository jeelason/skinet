import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../shared/models/pagination';
import { Product } from '../shared/models/product';
import { Type } from '../shared/models/type';
import { Brand } from '../shared/models/brand';
import { ShopParams } from '../shared/models/shopParams';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/'
  products: Product[] = [];
  brands: Brand[] = [];
  types: Type[] = [];

  constructor(private http: HttpClient) { }

  getProducts(ShopParams: ShopParams) {  //make sure order is good here for component
    let params = new HttpParams();
    
    if (ShopParams.brandId > 0) params = params.append('brandId', ShopParams.brandId);
    if (ShopParams.typeId > 0) params = params.append('typeId', ShopParams.typeId);
    params = params.append('sort', ShopParams.sort);
    params = params.append('pageIndex', ShopParams.pageNumber); //in ProductSpecParams.cs we called it pageIndex
    params = params.append('pageSize', ShopParams.pageSize);
    if (ShopParams.search) params = params.append('search', ShopParams.search);
    

    return this.http.get<Pagination<Product[]>>(this.baseUrl + 'products', {params}).pipe(
      map(response => {
        this.products = response.data;
        return response;
      })
    );
  }
  // storing data inside the service instead of the component
  getProduct(id: number) {
    const product = this.products.find(p => p.id === id);
    if (product) return of(product);
    return this.http.get<Product>(this.baseUrl + 'products/' + id);
  }

  getBrands() {
    if (this.brands.length > 0) return of(this.brands);
    return this.http.get<Brand[]>(this.baseUrl + 'products/brands').pipe(
      map(brands => this.brands = brands)
    );
  }

  getTypes() {
    if (this.types.length > 0) return of(this.types)
    return this.http.get<Type[]>(this.baseUrl + 'products/types').pipe(
    map(types => this.types = types));
  }
}
