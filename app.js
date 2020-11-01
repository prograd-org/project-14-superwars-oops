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
    this.strength = this.getRandomStrength();
    this.image = "images/super-" + (id + 1) + ".png";
    this.type = type;
  }

  // getting random strength
  getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
  };

  // Create a player for displaying
  view = () => {
    // Accumulate HTML template
    // Type your code here
    //create a div for each player for name,type,strength//
    let player_id = document.createElement("div");
    player_id.classList.add("player");
    player_id.setAttribute("data-id", this.id);

    //create a img section //
    let player_image = document.createElement("img");
    player_image.setAttribute("src", this.image);

    //create a div for player name//
    let player_name = document.createElement("div");
    player_name.classList.add("name");
    player_name.innerHTML = this.name;

    //create a div for player's strength//
    let player_strength = document.createElement("div");
    player_strength.classList.add("strength");
    player_strength.innerHTML = this.strength;

    //append all the individual created elements to the main player' division//
    player_id.append(player_image, player_name, player_strength);

    return player_id;
  };
}

// Superwar Class
class Superwar {
  constructor(players) {
    // Create a field players
    // Use Map method to loop through players argument and create new players
    // Type your code here

    //players refer to the array of players given beforehand//
    //here map function for mapping out the players based on their id's//
    this.players = players.map((item, i) => {
      let type = i % 2 == 0 ? "hero" : "villain";
      //create a new object of class Player//
      return new Player(i, item, type);
    });
  }

  // Display players in HTML
  viewPlayers = () => {
    let team = document.getElementById("heroes");
    team.innerHTML = "";
    let fragment = this.buildPlayers("hero");
    team.append(fragment);

    team = document.getElementById("villains");
    team.innerHTML = "";
    fragment = this.buildPlayers("villain");
    team.append(fragment);
  };

  // Build players fragment
  buildPlayers = (type) => {
    let fragment = document.createDocumentFragment();
    this.players
      .filter((player) => player.type == type)
      .forEach((player) => fragment.append(player.view()));
    return fragment;
  };
}

window.onload = () => {
  const superwar = new Superwar(PLAYERS);
  superwar.viewPlayers();
};
