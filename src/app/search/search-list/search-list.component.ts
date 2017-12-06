import { Component, OnInit, Output, EventEmitter, Input   } from '@angular/core';
import { ApiConn } from '../../api-conn.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
  @Input() public songs:any;
  listSearch:any[] = [];
  @Output() chooseFromList: EventEmitter<string> = new EventEmitter<string>();

  constructor(public apiConn: ApiConn) {
    this.apiConn.getListSearch().subscribe(listSearch => {
      this.listSearch = Object.values(listSearch);
      console.log(Object.values(listSearch));

    })

  }
  ngOnInit() {
  }
  ngOnChanges() {
    //console.log(this.searchSong);
this.getList();
  }
  onSearchList(searchWord:string){
    this.chooseFromList.emit(searchWord);
  }

getList(){
  this.apiConn.getListSearch().subscribe(listSearch => {
    this.listSearch = Object.values(listSearch);
    console.log(Object.values(listSearch));
  })
}

}
