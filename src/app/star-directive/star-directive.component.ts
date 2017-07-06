import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-directive',
  templateUrl: './star-directive.component.html',
  styleUrls: ['./star-directive.component.css']
})
export class StarDirectiveComponent implements OnInit {

	rate:number=7;
	max:number=10;
	/*isReadonly:boolean=false;
	resetStar:()=>void=()=>{

		this.overStar = 0;
	}*/
	overStar:number;
	hoveringOver:(value:number)=>void=(value:number)=>{
		this.overStar = value;
	}
  constructor() { }

  ngOnInit() {
  }

}
