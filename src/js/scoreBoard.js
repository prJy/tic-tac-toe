const scoreBoard = {   
    container: null, 
    narrator: {
        container: null,
        updateMessage: function(text){
            this.container.innerText = text;
        },
    },        
    init: function() {
        this.buildContainers();
    },    
    buildContainers: function (){
        this.buildScoreBoard();
        this.buildPlayersInfoAndScore();
        this.buildNarrator();
    },   
    buildScoreBoard: function(){        
        this.container = builder.buildContainer(game.options.scoreBoardID);
        game.container.parentNode.insertBefore(this.container, game.container);
    },
    buildPlayersInfoAndScore: function() {         
        players.data.forEach((player) => {            
            let playerContainer = this.createPlayerContainer(player);            
            this.container.insertBefore(playerContainer, this.container.firstChild);            
        });                            
    },
    buildNarrator: function (){
        let playerContainer = document.getElementById(players.data[0].containerID);
        this.narrator.container = builder.buildContainer("gameMSG");        
        playerContainer.parentNode.insertBefore(this.narrator.container, playerContainer);
    },
    fetchPlayerText: function(player) {        
        return `<a href="javascript: players.changeName(${player.id})"><span class="playerName">${player.name}</span> </a> <span class="score score-player${player.id}">${player.score}</span>`;
    },
    createPlayerContainer: function(player) {        
        playerContainer = builder.buildContainer(player.containerID);
        playerContainer.innerHTML = this.fetchPlayerText(player);
        return playerContainer;
    },           
}