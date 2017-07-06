import { Component, OnInit,Input } from '@angular/core';
import {MovieItemType} from '../../shared';

@Component({
  selector: 'app-movieitem',
  templateUrl: './movieitem.component.html',
  styleUrls: ['./movieitem.component.css']
})
export class MovieitemComponent implements OnInit {

	@Input() moviesList:MovieItemType;
	rate:any;
	max:number=5;
	isreadOnly:boolean;
	/*hoveringOver:(value:number)=>void=(value:number)=>{
  	
  	}*/
  	hoveringOver:(value:number)=>void = (value:number)=>{
  		this.rate = value;

  	}
  	constructor() {
  	
  	//new Date(this.moviesList.releaseDate);
  	}

  	ngOnInit() {
	  	//new Date(this.moviesList.releaseDate);
	  	this.rate = parseInt(this.moviesList.rating);
	  	if(!this.rate){

	  		this.rate = "Not rated";
	  		this.isreadOnly = true;
	  	}
	  	//this.rate = this.moviesList.rating;
  	}



}
