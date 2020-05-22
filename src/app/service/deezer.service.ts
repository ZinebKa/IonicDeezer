import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DeezerService {
  TAG:String="TagServiceDeezer";
  
  constructor(private http:HttpClient) { }

  getAuthors(artist:string):Promise<DataSearchArtist> {
    console.log(`${this.TAG} getAuthors ${artist}`);
    const url: string = 'https://api.deezer.com/search/artist?q=' + encodeURI(artist);
    console.log(`${this.TAG} url: ${url}`);
    return new Promise(resolve => {
    this.http.get(url).subscribe(data => {
    let json: DataSearchArtist = data as DataSearchArtist;
    resolve(json);
    }, err => {
    console.log(err);
    });
    });
  }

  getAlbums(artist: string): Promise<DataSearchAlbum>{
    console.log(`${this.TAG} getAlbums ${artist}`);
    const url: string='https://api.deezer.com/search/album?q=' + encodeURI(artist);
    console.log(`${this.TAG} url: ${url}`);
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        let json: DataSearchAlbum = data as DataSearchAlbum;
        resolve(json);
      }, err => {
        console.log(err);
      });
    });
  }
  
  getTracks(album: number): Promise<DataSearchTracks> {
    console.log(`${this.TAG} getTracks ${album}`);
    const url: string = 'https://api.deezer.com/album/' + album + '/tracks';
    console.log(`${this.TAG} url: ${url}`);
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        let json: DataSearchTracks = data as DataSearchTracks;
        resolve(json);
      }, err => {
        console.log(err);
      });
    });
  }
} 
  
   export class Artist {
    id: number;
    name: string;
    link: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    nb_album: number;
    nb_fan: number;
    radio: boolean;
    tracklist: string;
    type: string;
   }
   
   export class DataSearchArtist {
    data: Artist[];
    total: number;
    next: string;
   }
  
   export class Album {
    id: number;
    title: string;
    link: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
    genre_id: number;
    nb_tracks: number;
    record_type: string;
    tracklist: string;
    explicit_lyrics: boolean;
    artist: Artist;
    type: string;
  }
  
  export class DataSearchAlbum {
    data: Album[];
    total: number;
    next: string;
  }
  
  export class Tracks {
    id: number;
    readable: boolean;
    title: string;
    title_short: string;
    title_version: string;
    link: string;
    duration: number;
    rank: number;
    explicit_lyrics: boolean;
    explicit_content_lyrics: number;
    explicit_content_cover: number;
    preview: string;
    artist: Artist;
    type: string;
  }
  
  export class DataSearchTracks {
    data: Tracks[];
  }
  
  export class RootObject {
    id: number;
    title: string;
    upc: string;
    link: string;
    share: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
    genre_id: number;
    genres: Genres;
    label: string;
    nb_tracks: number;
    duration: number;
    fans: number;
    rating: number;
    release_date: string;
    record_type: string;
    available: boolean;
    tracklist: string;
    explicit_lyrics: boolean;
    explicit_content_lyrics: number;
    explicit_content_cover: number;
    contributors: Contributor[];
    artist: Artist;
    type: string;
    tracks: Tracks;
  }
  
  export class Contributor {
    id: number;
    name: string;
    link: string;
    share: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    radio: boolean;
    tracklist: string;
    type: string;
    role: string;
  }
  
  export class Datum {
    id: number;
    name: string;
    picture: string;
    type: string;
  }
  
  export class Genres {
    data: Datum[];
  }
