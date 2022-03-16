import request from 'Services/httpService';
// import {IStore} from 'types'
class StoreService{
    getStore(): Promise<any> {
      return  request.get('/store');
    }

    getPorductBYId(id: string): Promise<any>{
        return request.get(`/store/${id}`);
    }

    addStore(body: {}): Promise<any> {
        return request.post(`/store/$(id)`,body);
    }

    updateStore(id:string, body: {}): Promise<any> {
        return request.post(`/store/${id}`, body);
    }

    deleteStore(id:string): Promise<any>{
        return request.delete(`/store/${id}`);
    }
}
export default new StoreService()