const games = [
    { id: 1, title: "Elden Ring", genre: "RPG", rating: 9.5, realeaseDate: 2022, multiPlayer: true },
    { id: 2, title: "FIFA 25", genre: "Sports", rating: 8.0, realeaseDate: 2025, multiPlayer: true },
    { id: 3, title: "The Witcher 3", genre: "RPG", rating: 9.8, realeaseDate: 2015 },
    { id: 4, title: "God of War", genre: "Action", rating: 9.7, realeaseDate: 2018 }
];
function filterbyGenre(games, genre) {
    return games.filter(item => item.genre == genre);
}
console.log(filterbyGenre(games, 'RPG'));
function multiPlayerFunc(games) {
    return games.filter(item => item.multiPlayer);
}
console.log(multiPlayerFunc(games));
export {};
//# sourceMappingURL=index.js.map