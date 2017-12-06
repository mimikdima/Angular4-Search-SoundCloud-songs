import { Component, OnInit } from '@angular/core';
import { ApiConn } from '../api-conn.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  songs:any[];
  searchedList:any[] =[];
  searchSong:string = '';
  nextList:string = '';
  imgSong:string = '';
  playIframe:any = false;
  idSong:number = 0;
  constructor(public apiConn: ApiConn) {}


 ngOnInit() {

  }
onNext(){
  this.apiConn.nextSong(this.nextList).subscribe(song => {
    this.songs = Object.values(song.collection);
    this.songs = this.songs;
    this.nextList = song.next_href;
    //this.songs = song;
  })
}



getImgSong(urlImg:string, idSong:number){
  //console.log(urlImg);
  this.idSong = idSong;
  //console.log(this.songId);
  if(urlImg !== null){this.imgSong = urlImg;}
  else{this.imgSong = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfcQF05ig_KQcWxC9Fr_GriTlFZrkwds2YRCAqJbxTs3btBQmU1A';}
  this.playIframe = false;
}

listSongs:any;

onSearchList(itemFromList:string){
//console.log(itemFromList);

  this.searchSong = itemFromList;
  this.idSong = 0;
  this.apiConn.getSong(this.searchSong).subscribe(song => {
    this.songs = Object.values(song.collection);
    this.nextList = song.next_href;
  })
}


onSearch(){
  this.apiConn.getSong(this.searchSong).subscribe(song => {
    this.songs = Object.values(song.collection);
    this.songs = this.songs;
//console.log(this.songs);
    this.nextList = song.next_href;
  //  this.imgSong = this.songs[0].artwork_url;
    //console.log(this.songs[0].artwork_url);
  //    console.log(this.songs);
    //this.songs = song;
    this.searchedList.push(this.searchSong);
  //  console.log(this.searchedList);
  })
this.listSongs = {name: this.searchSong};
//console.log(this.listSongs);
  this.apiConn.addToSearch(this.listSongs).subscribe(searchSong =>{
  //  console.log(searchSong);
    //this.listSongs;
  });

//console.log(this.listSongs);

//console.log(this.song);

  	/*
	var page_size = 6;
	// find all sounds of buskers licensed under 'creative commons share alike'
		SC.get('/tracks', {
		  limit: page_size, q: $('#search').val(),linked_partitioning : next_page
		}).then(function(tracks) {
		  console.log(tracks);
	  var next = tracks['next_href'];
		song = tracks['collection'][0]['id'];
		  console.log('/tracks/'+song);
		  iframe = $('#ddd').attr('src','https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/'+song+'&amp;color=%23ff5500&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true&amp;auto_play=true');

		  next_page++;
		//  $('#box3').html(tracks['id']);
   $.each(tracks['collection'],function(i) {

        name =  tracks['collection'][i]['artwork_url'];
        console.log(name);
		$('#box2').html('<img src="'+name+'">')+'<br/>'+'<br/>';
		$('#box3').html(tracks["collection"][i]["title"] )+'<br/>';
        });

SC.stream('/tracks/'+song).then(function(player){
  //player.play();
});

		});
		*/

}



}
