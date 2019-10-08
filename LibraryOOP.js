class Library {
  constructor(title, isCheckedOut = false, rating = []){
    this._title = title;
    this._isCheckedOut = isCheckedOut;
    this._rating = rating;
  }

	get title(){
    return this._title;
  }

	get isCheckedOut(){
    return this._isCheckedOut;
  }
    
  set isCheckedOut(check){
    this._isCheckedOut = check;
  }

	get rating(){
    return this._rating;
  }

	toggleCheckOutStatus(){
    this._isCheckedOut = !this._isCheckedOut
  }


	getAverageRating(){
    const reducer = (accumulator, currentValue) => 		accumulator + currentValue;
		return this._rating.reduce(reducer)  / this._rating.length
  }
	
	addRating(newRaiting){
    return this._rating.push(newRaiting)
  }
}

class Book extends Library{
  constructor(author, title, pages, isCheckedOut, rating){
    super(title, isCheckedOut, rating);
    this._author = author;
    this._pages = pages;
  }
  
  get author(){
    return this._author;
  }
  
  get pages(){
    return this._pages;
  }
}

class Movie extends Library{
  constructor(director, title, runTime, movieCast, isCheckedOut, rating){
    super(title, isCheckedOut, rating);
    this._director = director;
    this._runTime = runTime;
    this._movieCast = movieCast;
  }
  
  get director(){
    return this._director;
  }
  
  get runTime(){
    return this._runTime;
  }
  
  get movieCast(){
    return this._movieCast;
  }
}


class CD extends Library{
  constructor(artist, title, songs, songTitles, isCheckedOut, rating){
    super(title, isCheckedOut, rating);
    this._artist = artist;
    this._songs = songs;
    this._songTitles = songTitles;
  }
  
	shuffle(){
	const shuffleIt = this._songTitles.sort(() => Math.random() - 0.5);
	return shuffleIt ;
	}

  
  get artist(){
    return this._artist;
  }
  
  get songs(){
    return this._songs;
  }
  
  get songTitles(){
    return this._songTitles;
  }
}


const madonna = new Library('Madonna', true, [10, 7, 5, 12]);
madonna.getAverageRating()
madonna.addRating(15)
console.log(madonna.getAverageRating())
console.log(madonna.rating)


const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)
historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(5);
historyOfEverything.addRating(10);
historyOfEverything.addRating(7);
historyOfEverything.getAverageRating();
console.log(historyOfEverything.getAverageRating())
console.log( historyOfEverything)


const speed = new Movie('Jan de Bont', 'Speed', 116, ['Keanu Reeves', 'Dennis Hopper', 'Sandra Bullock'])
speed.toggleCheckOutStatus();
speed.addRating(1);
speed.addRating(1);
speed.addRating(2);
console.log(speed)

const spiceGirls = new CD('Spice Girls', "Spice", 10, ["Wannabe", "Say You'll Be There", 	"2 Become 1", "Love Thing"]);
spiceGirls.addRating(2);
spiceGirls.addRating(5);
spiceGirls.addRating(4);
spiceGirls.addRating(5);
spiceGirls.shuffle()

console.log(spiceGirls)
console.log(spiceGirls.getAverageRating())

