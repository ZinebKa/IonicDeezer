import { Component, OnInit } from '@angular/core';
import { DeezerService, Tracks, DataSearchTracks } from '../service/deezer.service';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.page.html',
  styleUrls: ['./tracks.page.scss'],
})
export class TracksPage implements OnInit {

  id:number;
  listeTracks:Tracks[];
  audio:HTMLAudioElement;
  
  constructor( private activatedRoute:ActivatedRoute, public deezerService : DeezerService, public router: Router) { }

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.deezerService.getTracks(this.id).then((result:DataSearchTracks)=> {
    this.listeTracks = result.data;
    this.audio = new Audio();
  
  });
  }

  play(src:any) {
    this.audio.src = src;
    this.audio.load();
    this.audio.play();
  }

  pause() {
    if(this.audio.paused) this.audio.play();
    else this.audio.pause();
  }

}
