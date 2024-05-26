// a.) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective
// class properties to these values.

// b.The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
class Movie{
    constructor(title, studio, rating="PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

      // c.Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

    static getPG(movies){
        let pgmovies =[];

        for (const movie of movies) {
            if(movie.rating == "PG"){
                pgmovies.push(movie)
            }
        }
        return pgmovies;
    }
}

//   d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,the studio “Eon Productions”, and the rating “PG­13”

let res = new Movie("Casino Royale", "Eon Productions", "PG13");

console.log("The class movie details: ", res);

// Using getPG method to get the movies with rating PG

let picture = Movie.getPG([
    {title: "Movie1", Studio: "ABC", rating: "PG13"},
    {title: "Movie2", Studio: "IJK", rating: "PG"},
    {title: "Movie3", Studio: "XYZ", rating: "PG13"},
    {title: "Movie4", Studio: "PQR", rating: "PG13"},
    {title: "Movie5", Studio: "MNO", rating: "U/A"},
    {title: "Movie6", Studio: "STU", rating: "PG"},
    {title: "Movie7", Studio: "VWX", rating: "U/A"},
    {title: "Movie8", Studio: "YZA", rating: "PG"},
    {title: "Movie9", Studio: "BCD", rating: "U/A"},
    {title: "Movie10", Studio: "EFG", rating: "PG"},
]) ;


console.log("These are the PG rating Movies: ",picture);





