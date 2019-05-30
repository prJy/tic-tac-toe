const players = {    
    data: [
        {
            id: 1,
            name: "Player One",
            score: 0,
            containerID: "playerOne",
            totalWins: 0,
            symbol: 'O', 
        },
        {
            id: 2,
            name: "Player Two",
            score: 0,
            containerID: "playerTwo",
            totalWins: 0,
            symbol: 'X', 
        },
    ],
    setName: function(index, newName) {
        this.data[index].name = newName;
        scoreBoard.buildPlayersInfoAndScore();
    },    
    addWins: function(index) {
        this.data[index].totalWins +=1;
        this.clearScore();
    },
    clearScore: function() {
        this.data.forEach((player)=>{
            player.score = 0;
        });
    },
    getPlayerInfo: function(index){
        return this.data[index];
    },
    changeName: function (id) {
        var name = prompt("How should I address you?");
        console.log(name);
        if (name == null) {
           return false; 
        }
        this.data.forEach((player, index) => {
            console.log(player);
            if(player.id == id){
                this.setName(index, name);
            }
        });
    }
}