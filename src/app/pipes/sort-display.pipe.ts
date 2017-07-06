import {Pipe,PipeTransform} from '@angular/core';
import {MovieItemType} from '../shared';
/*@Pipe ({
	name:'sortPurePipe',
});

export class SortDisplayPipe implements PipeTransform{
	transform(array: string){
		console.log(array);
	}
}

/////// Identical except for the pure flag
@Pipe({
  name: 'sortImpurePipe',
  pure: false
})
export class SortImpurePipe extends SortDisplayPipe{
	//console.log("entered impure sort");

}*/
@Pipe({ name: 'sortPurePipe' })
export class SortDisplayPipe implements PipeTransform {
  transform(array: MovieItemType[],value:string) {
    // return allHeroe,s.filter(hero => hero.canFly);
    console.log(array);
    console.log(value);
    if(value === "title"){

    	array.sort(function(a,b){
	    	var nameA = a.title.toLowerCase(); 
	    	var nameB= b.title.toLowerCase(); 
	    	if(nameA<nameB) 
	    		return -1; 
	    	if(nameA >nameB) 
	    		return 1; 
    	return 0
    	}) 
    }
    else{

    	array.sort(function(a,b){

    		//return new Date(a.releaseDate) ;
    		var dateA = new Date(a.releaseDate);
    		var dateB = new Date(b.releaseDate);
    		if(dateA  < dateB)
    			return -1;
			if(dateA > dateB)
				return 1;
			return 0;
    		
    	})
    }
    return array;
  }
}

/////// Identical except for the pure flag
@Pipe({
  name: 'sortImpurePipe',
  pure: false
})
export class SortImpurePipe extends SortDisplayPipe {}