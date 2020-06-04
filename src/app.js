const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    //"Popcorn",
    // "Gemwoman",
    // "Bolt",
    // "Antwoman",
    // "Mask",
    // "Tiger",
    // "Captain",
    // "Catwoman",
    // "Fish",
    // "Hulk",
    // "Ninja",
    // "Black Cat",
    // "Volverine",
    // "Thor",
    // "Slayer",
    // "Vader",
    // "Slingo"
];
// new
// Player Class
class Player {
    constructor(id, name, type) {
        // Create member variables and assign values
        // Type your code

        this.id = id;
        this.name = name;
        this.image = "images/super-" + (id + 1) + ".png";
        this.strength = this.getRandomStrength();
        this.type = type;


    }

    // getting random strength
    getRandomStrength = () => {
        return Math.ceil(Math.random() * 100);
    }

    // Create a player for displaying
    view = () => {
        // Accumulate HTML template
        // Type your code here
        var wrapper = document.createElement('div');

        let player = `<div class="player" data-id="${this.id}">
            <img src="${this.image}">
            <div class="name">${this.name}</div>
            <div class="strength">${this.strength}</div>
        </div>`
        wrapper.innerHTML = player;
        return wrapper.firstChild;
        // return player
    }
}

// Superwar Class
class Superwar {
    constructor(players) {
        // Create a field players 
        // Use Map method to loop through players argument and create new players
        // Type your code here

        this.players = players.map((player, index) => {
            if (index % 2 == 0) {
                return new Player(index, player, "hero");
            }
            else {
                return new Player(index, player, "villain");
            }
        });

    }

    // Display players in HTML
    viewPlayers = () => {
        let team = document.getElementById('heroes');
        team.innerHTML = '';
        let fragment =
            this.buildPlayers('hero');
        console.log(fragment)
        team.append(fragment);

        team = document.getElementById('villains');
        team.innerHTML = '';
        fragment =
            this.buildPlayers('villain');
        team.append(fragment);
    }

    // Build players fragment 
    buildPlayers = (type) => {
        let fragment = document.createDocumentFragment();
        this.players
            .filter(player => player.type == type)
            .forEach((player) => {
                console.log(player.view());
                fragment.append(player.view())
            });
        return fragment;
    }

}

window.onload = () => {
    const superwar = new Superwar(PLAYERS);
    console.log(superwar);
    superwar.viewPlayers();
}