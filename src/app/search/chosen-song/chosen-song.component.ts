
import { Component, NgModule, Pipe, PipeTransform,OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

//import { SafePipe } from './safeIframe.pipe';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(iframePlaySong) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(iframePlaySong);
  }
}
@Component({
  selector: 'app-chosen-song',
  templateUrl: './chosen-song.component.html',
  styleUrls: ['./chosen-song.component.css']
})
export class ChosenSongComponent implements OnInit {
@Input() public imgSong:any;
@Input() public idSong:any;
@Input() public playIframe:any;
iframePlaySong:string = '';
//playIframe = false;
  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {

  }

  playSong(){
    this.iframePlaySong = 'https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/'+this.idSong+'&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;show_teaser=false&amp;auto_play=true';
    this.playIframe = true;
  }
}
