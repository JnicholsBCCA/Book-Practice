class Book{
constructor (title, author, year, genre, pages){
this.title = title;
this.author = author;
this.year = year;
this.genre = genre;
this.pages = pages;
}

getSummary(){
    return `${this.title} by ${this.author}, published in ${this.year}.`;
}

isClassic() {
    let currentYear = 2024;
    return currentYear - this.year >= 30; 
}

updateYear(year){
this.year = year;
}

isLongBook(){
if (this.pages > 400){
    return true
} else {
    return false}
}

getGenre(){
    return this.genre;
}

static processTitles(titles) {
    return titles.map(title => title.length);
}
}
