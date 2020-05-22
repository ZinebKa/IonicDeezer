import { Component, OnInit } from '@angular/core';
import { DeezerService, Album, DataSearchAlbum } from '../service/deezer.service';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.page.html',
  styleUrls: ['./albums.page.scss'],
})
export class AlbumsPage implements OnInit {

  name: string;
  listeAlbums:Album[];

  constructor(private activatedRoute: ActivatedRoute, public service: DeezerService, public router : Router ) { }

  toTrack(id:any) {
    this.router.navigate(['tracks/'+id]);
  }

  ngOnInit() {
  this.name = this.activatedRoute.snapshot.paramMap.get('name');
  this.service.getAlbums(this.name).then((result:DataSearchAlbum)=>{
    console.log(`${this.name} data = ${JSON.stringify(result)}`);
    this.listeAlbums = result.data;
  })
  }


}
