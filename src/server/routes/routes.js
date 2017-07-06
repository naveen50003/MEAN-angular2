let router = require('express').Router;
let path = require('path');
class Router {
    constructor() {
        this.router = router();
        this.init();
    }
    init() {

        this.router.get('/', (req, res, next) => {
            res.sendfile(path.resolve('src/index.html'));
        });
        this.router.get('/api/movies',(req,res) =>{
            let movieItems = [
                { "$id": "1", "title":"Gone Girl","image":"images/movie1.jpg", "rating": "3", "releaseDate": "2014-02-22"},
                {"$id": "2", "title":"Good Life","image":"images/movie2.jpg", "rating": "4", "releaseDate": "2014-06-24"},
                {"$id": "3", "title":"Hero of Color City","image":"images/movie3.jpg", "rating": "0", "releaseDate": "2014-11-23"},
                {"$id": "4", "title":"Guardians of the Galaxy","image":"images/movie4.jpg", "rating": "5", "releaseDate": "2014-07-01"},
                {"$id": "5", "title":"Drop","image":"images/movie5.jpg", "rating": "0", "releaseDate": "2014-12-01"},
                {"$id": "6", "title":"If I Stay","image":"images/movie6.jpg", "rating": "0", "releaseDate": "2015-01-01"}
            ]
            res.json({data:movieItems})
        })
//object : key-value pairs "{}"
    }
}
module.exports = new Router().router;
