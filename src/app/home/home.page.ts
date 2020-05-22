import { Component } from '@angular/core';
import { DeezerService, Artist, DataSearchArtist } from '../service/deezer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  TAG: String = "TagHome";
  ListArtiste : Artist[];

  constructor(public service : DeezerService, public router: Router) { }


  onSearchArtist(event: any){
    let val = event.target.value;
    this.service.getAuthors(val).then((result:DataSearchArtist) => {
      console.log(`${this.TAG} data = ${JSON.stringify(result)}`);
      this.ListArtiste = result.data;
    });
  }

    toAlbum(name:any) { 
      this.router.navigate(['/albums/'+name]);
  }
}
