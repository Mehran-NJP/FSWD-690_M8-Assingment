/*
M8 Assignment - Part 1, Practice with Arrays
Open the browser console to see the output.
*/

console.log("========== PART 1: PRACTICE WITH ARRAYS ==========");

// 1. Create a string array with five favorite movies and display the second movie.
let movies = ["Interstellar", "The Dark Knight", "Inception", "Arrival", "Spirited Away"];
console.log("1.", movies[1]);

// 2. Declare an array called movies using the function constructor method.
movies = new Array(5);
movies[0] = "Interstellar";
movies[1] = "The Dark Knight";
movies[2] = "Inception";
movies[3] = "Arrival";
movies[4] = "Spirited Away";
console.log("2.", movies[0]);

// 3. Add a new movie into the 3rd position and display the new length.
movies.splice(2, 0, "Blade Runner 2049");
console.log("3.", movies.length);

// 4. Delete the first movie and display the contents of the array.
movies = ["Interstellar", "The Dark Knight", "Inception", "Arrival", "Spirited Away"];
delete movies[0];
console.log("4.", movies);

// 5. Use a for/in loop to display 7 movies.
movies = [
    "Interstellar",
    "The Dark Knight",
    "Inception",
    "Arrival",
    "Spirited Away",
    "The Matrix",
    "Parasite"
];
console.log("5.");
for (const index in movies) {
    console.log(movies[index]);
}

// 6. Use a for/of loop to display each movie.
console.log("6.");
for (const movie of movies) {
    console.log(movie);
}

// 7. Use a for/of loop to display each movie in sorted view.
console.log("7.");
for (const movie of [...movies].sort()) {
    console.log(movie);
}

// 8. Create leastFavMovies and display both arrays with formatting.
const leastFavMovies = ["Movie 43", "Cats", "The Last Airbender"];
console.log("8.");
console.log("Movies I like:\n");
for (const movie of movies) {
    console.log(movie);
}
console.log("\nMovies I regret watching:\n");
for (const movie of leastFavMovies) {
    console.log(movie);
}

// 9. Merge arrays and display in reverse sorted order.
movies = movies.concat(leastFavMovies);
console.log("9.");
for (const movie of [...movies].sort().reverse()) {
    console.log(movie);
}

// 10. Return just the last item in the array.
console.log("10.", movies.at(-1));

// 11. Return just the first item in the array.
console.log("11.", movies[0]);

// 12. Retrieve movies you do not like and return their indices, then replace them with movies you do like.
const dislikedMovies = ["Movie 43", "Cats", "The Last Airbender"];
const dislikedIndices = movies
    .map((movie, index) => (dislikedMovies.includes(movie) ? index : -1))
    .filter((index) => index !== -1);
console.log("12. Disliked movie indices:", dislikedIndices);

const replacementMovies = ["Whiplash", "Dune", "Everything Everywhere All at Once"];
dislikedIndices.forEach((index, replacementIndex) => {
    movies[index] = replacementMovies[replacementIndex];
});
console.log("12. Updated movies:", movies);

// 13. Multi-dimensional array with rankings. Filter out only movie names by primitive type.
movies = [
    ["Interstellar", 1],
    ["The Dark Knight", 2],
    ["Inception", 3],
    ["Arrival", 4],
    ["Spirited Away", 5]
];
console.log("13.");
for (const movie of movies) {
    const movieName = movie.filter((item) => typeof item === "string");
    console.log(movieName[0]);
}

// 14. Employees array and anonymous function.
const employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
const showEmployee = function (employeeList) {
    console.log("14.");
    console.log("Employees:\n");
    for (const employee of employeeList) {
        console.log(employee);
    }
};
showEmployee(employees);

// 15. Filter false, null, 0, and blank values from an array.
function filterValues(arr) {
    return arr.filter((value) => value !== false && value !== null && value !== 0 && value !== "");
}
console.log("15.", filterValues([58, "", "abcd", true, null, false, 0]));

// 16. Get a random item from an array.
function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
console.log("16.", getRandomItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 17. Get the largest number from a numeric array.
function getLargestNumber(arr) {
    return Math.max(...arr);
}
console.log("17.", getLargestNumber([14, 77, 3, 98, 42, 65, 9, 100, 56, 21]));
