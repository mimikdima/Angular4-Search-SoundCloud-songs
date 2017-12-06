import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiConn{
shows: Array<any>;
  constructor(public http: Http){}



  getSong(song){
      return this.http.get('https://api.soundcloud.com/tracks?linked_partitioning=2&client_id=ggX0UomnLs0VmW7qZnCzw&offset=6&limit=6&q='+song).map(res => res.json())
  }
  nextSong(nextSong){
      return this.http.get(nextSong).map(res => res.json())
  }

  getListSearch(){
     return this.http.get('https://front-end-developer-exam.firebaseio.com/data.json').map(res => res.json())
     //return this.http.get('http://localhost/test/').map(res => res.json())
    //  return this.http.get('../serverSide/index.php').map(res => res.json())
  }

  addToSearch(song){
    return this.http.post('https://front-end-developer-exam.firebaseio.com/data.json',song).map(res => res.json());
    //return this.http.post('http://localhost/test/add.php',song);
  }

}
