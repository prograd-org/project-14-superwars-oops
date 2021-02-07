const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    // "Popcorn",
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

// Player Class
class Player {
    constructor(id, name, type) {
        // Create member variables and assign values
        // Type your code
        this.id = id;
        this.name = name;
        this.type = type;
        this.image = "images/super-" + id + ".png";
        this.strength = this.getRandomStrength;

    }

    // getting random strength
    getRandomStrength = () => {
        return Math.ceil(Math.random() * 100) + 1;
    }

    // Create a player for displaying
    view = () => {
        // Accumulate HTML template
        // Type your code here
        let player = document.createElement('div');
        player.classList.add('player');
        player.setAttribute('play-id', this.id);
        let image = document.createElement('img');
        image.setAttribute('src', this.image);
        let name = document.createElement('div');
        name.textContent = this.name;
        let strength = document.createElement('div');
        strength.textContent = this.strength;
        strength.className = 'strength';
        player.append(image, name, strength);

        return player;
    }
}

// Superwar Class
class Superwar {
    constructor(players) {
        // Create a field players 
        // Use Map method to loop through players argument and create new players
        // Type your code here
        var i = 0;
        players.map(items => {

            if (i % 2 == 0) {
                this.type = "hero";
            } else {
                this.type = "villain";
            }
            return Player(i + 1, players[i], this.type);
        });

    }

    // Display players in HTML
    viewPlayers = () => {
        let team = document.getElementById('heroes');
        team.innerHTML = '';
        let fragment =
            this.buildPlayers('hero');
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
            .forEach(player => fragment.append(player.view()));
        return fragment;
    }

}


window.onload = () => {
    const superwar = new Superwar(PLAYERS);
    superwar.viewPlayers();
}