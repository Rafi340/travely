import request from 'Services/httpService';
// import {IProduct} from 'types'
// const url = 'https://fakestoreapi.com/';
class ProductService{
    getProduct(): Promise<any> {
      return  request.get(`/products`);
    }

    getProductBYId(id: string): Promise<any>{
        return request.get(`/products/${id}`);
    }

    addProduct(body: {}): Promise<any> {
        return request.post(`/products/$(id)`,body);
    }

    updateProduct(id:string, body: {}): Promise<any> {
        return request.post(`/products/${id}`, body);
    }

    deleteProduct(id:string): Promise<any>{
        return request.delete(`/products/${id}`);
    }
}
export default new ProductService();