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
            this.image = "images/super-" + (id + 1) + ".png";
            this.strength = getRandomStrength();
            this.type = type;
        }

    }

    // getting random strength
    getRandomStrength = () => {
        return Math.ceil(Math.random() * 100);
    }

    // Create a player for displaying
    
view=()=>{
    let player=document.createElement('div');
    player.classList.add('player')
    player.setAttribute("data-id",this.id)
    let img=document.createElement('img');
    img.setAttribute('src',this.image)
    let name=document.createElement('h3');
    name.innerHTML=this.name;
    let strength=document.createElement('h3');
    strength.textContent=this.strength;
    strength.className="strength"
    player.append(img,name,strength)
    
    return player;
}
// Superwar Class
class Superwar {
    constructor(players) {
     this.players=players.map((player,n)=>{

    let type=(n%2==0)?'hero':'villain'
    return new Player(n,player,type)
})


    // Create a field players 
    // Use Map method to loop through players argument and create new players
    // Type your code here
    

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