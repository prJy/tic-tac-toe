const notify = {
    sendMessage: function(msg) {            
        scoreBoard.narrator.updateMessage(msg);
    },
    sendAlert: function(msg){
        alert(msg);
    },
    currentUserChanged: function() {
        this.sendMessage(`Playing now: ${game.currentPlayer.name}`);                        
    },
    currentlyPlaying: function() {
        this.sendMessage(`${game.currentPlayer.name} starts`);                        
    },
    roundWinner: function() {
        this.sendMessage(`${game.currentPlayer.name} wins the round`);        
    },
    gameWinner: function() {
        this.sendMessage(`${game.currentPlayer.name} win the game!`);
    },
    showGameTie: function() {
        this.sendAlert(`This game is a tie`);
    },
}