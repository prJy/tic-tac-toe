const game = {
    isOver: false,
    options: {
        gameID: "prjy-game",
        scoreBoardID: "prjy-scoreBoard",  
        panelID: "prjy-panel"       
    },     
    init: function (_options) {
        this.isOver = false;
        scoreBoard.init();
        board.init(); 
        panel.init();                    
    },  
    start: function() {
        this.init();
        this.container.setAttribute("class", "started");
    },
    restart: function (){
        players.addWins(this.turn.current);
        this.start();
    },             
    get container() {
        return builder.getContainer(this.options.gameID);
    },
    turn: {
        current: 0,
        change: function(){
            this.current = (this.current === 0) ? 1 : 0;            
            notify.currentUserChanged();
        }
    },
    get currentPlayer(){
        return players.getPlayerInfo(this.turn.current);
    },   

    winningSentences: [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ],

    check_winning_sequences: function(simbol) {
        for ( i in this.winningSentences ) {
            if (board.board[ this.winningSentences[i][0] ] == simbol &&
                board.board[ this.winningSentences[i][1] ] == simbol &&
                board.board[ this.winningSentences[i][2] ] == simbol) {                
                return i;
            }
        };
        return -1;
    },     
    checkGameWinner: function() {
        let winning_sequences_index = this.check_winning_sequences(this.currentPlayer.symbol);
        if (winning_sequences_index >= 0){
            this.showWinner(winning_sequences_index); 
            buttons.enableButton(0);
            return true;           
        } else {
            this.turn.change();
            return false;
        }
    },
    checkGameTie: function(){
        if (board.isFull()) {
            this.isOver = true;
            notify.showGameTie();
            this.start();
        }
    },
    showWinner: function(winIndex) {
        this.showWinningSequence(winIndex);
        notify.gameWinner();        
        this.finish();  
    }, 
    showWinningSequence: function(winIndex){
        let winner = this.winningSentences[winIndex];
        for(let i =0; i < winner.length; i++){
            document.getElementById(`div${winner[i]}`).style.color = "white";
            document.getElementById(`div${winner[i]}`).style.backgroundColor = "red";            
        }  
    },
    finish: function() {
        if (this.isOver == true) return false;
        this.isOver = true;
        this.currentPlayer.score += 1;   
        scoreBoard.buildPlayersInfoAndScore();

        if (this.currentPlayer.score == 2) {           
            console.log('GAME OVER'); 
            let restartGame = confirm(`Player ${game.currentPlayer.name} win the game.\nDo you want do restart game?`);
            if(restartGame) this.restart();          
        }
        
    },
}