board = {    
    board: null, 
    init: function() {
        this.createEmptyGameBoard();
        this.drawGameBoard();
    },
    createEmptyGameBoard: function() {
        this.board = Array(9).fill('');
    },
    drawGameBoard: function() {                
        let html = this.createGameBoardContentHTML();        
        this.renderGameContainer(html);   
    }, 
    createGameBoardContentHTML: function(){        
        let content = "";
        for (let position in this.board) {
            content += `<div id="div${position}" onclick="board.play('${position}');">${this.board[position]}</div>`;
        }        
        return content;       
    },
    renderGameContainer: function(html) {
        game.container.innerHTML = html;
    },
    clear: function(){        
        this.init();
    },
    isFull: function(){
        let filled = 0;
        this.board.forEach((cell) => {
            if(cell != ''){
                filled++;
            }
        });
        return (filled == 9);        
    },
    play: function(position){                            
        if (game.isOver == true) return false;   

        if (this.board[position] === '') {            
            this.board[position] = game.currentPlayer.symbol;
            this.drawGameBoard();            
            if (!game.checkGameWinner()) {
                game.checkGameTie();
            }            
            return true;
        }
        else {
            return false;
        }
    },

    
}