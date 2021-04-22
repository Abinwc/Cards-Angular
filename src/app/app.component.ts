import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { JsonService } from './service/json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private readonly service: JsonService,private readonly http: HttpClient){
  }

  ngOnInit(){
    this.getJsonData()
  }
  number=[{ albumId: 1,
    id: 1,
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952"},{ albumId: 1,
    id: 1,
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952"},{ albumId: 1,
    id: 1,
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952"},{ albumId: 1,
    id: 1,
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952"},]

  data;

  async getJsonData(){
  
   await this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe(v=>{
      this.data=v;
      console.log(v)
      return v
    })
    

  } 
}
