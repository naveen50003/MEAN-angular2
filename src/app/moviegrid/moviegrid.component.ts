import { Component, OnInit ,EventEmitter} from '@angular/core';
import {MovieItemType} from '../shared';
import {
	MovieGridServiceService
} from '../services/movie-grid-service.service';
@Component({
  selector: 'app-moviegrid',
  templateUrl: './moviegrid.component.html',
  styleUrls: ['./moviegrid.component.css']
})
export class MoviegridComponent implements OnInit {

	movieItems : MovieItemType[];
	sortValue :string;
	sortingCerteria:string[] = ["title","releaseDate"];
	select = new EventEmitter();
  	constructor(private movieGridService : MovieGridServiceService) {
		  this.movieGridService.getMovies().subscribe(
			data =>{
				console.log(data);
				this.movieItems = data;
				if(this.movieItems){}
					//this.select.emit(this.sortingCerteria["releaseDate"]);
			},
			err=>{
				console.log(err);
			}
		)
		//this.itemChange = function(value) { this.sortValue = value};
	   }
	
	ngOnInit() {
		
		
			//console.log('ngOnit after getUsers()' + this.movieItems);
			
		
		/*this.movieItems = [
		    { "$id": "1", "title":"Gone Girl","image":"images/movie1.jpg", "rating": "3", "releaseDate": "2014-02-22"},
		    {"$id": "2", "title":"Good Life","image":"images/movie2.jpg", "rating": "4", "releaseDate": "2014-06-24"},
		    {"$id": "3", "title":"Hero of Color City","image":"images/movie3.jpg", "rating": "0", "releaseDate": "2014-11-23"},
		    {"$id": "4", "title":"Guardians of the Galaxy","image":"images/movie4.jpg", "rating": "5", "releaseDate": "2014-07-01"},
		    {"$id": "5", "title":"Drop","image":"images/movie5.jpg", "rating": "0", "releaseDate": "2014-12-01"},
		    {"$id": "6", "title":"If I Stay","image":"images/movie6.jpg", "rating": "0", "releaseDate": "2015-01-01"}
		]*/
		
	}
	itemChanged(e){
		//console.log(e);
		this.sortValue = e.target.value;
	}
	
	
	//any issues??

	
}
