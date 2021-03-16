const tabuleiro = {
    board: ['','','','','','','','',''],
    players:{
        options: ['x', 'o'],
        turn_index: 0,
        change: function() {
            this.turn_index = (this.turn_index === 0 ? 1 : 0);
        }
    },

    container_element: null,
    gameOver: false,
    winning_sequences: [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ],

    init: function(container) {
        this.container_element = container;

    },

    play: function(position) {
        if(this.gameOver) return false;
        if(this.board[position] === '' ) {
            this.board[position] = this.players.options [this.players.turn_index];
            this.draw();
            let winning_sequences_index = this.check_winner(this.players.options[this.players.turn_index]);
            if(winning_sequences_index >= 0) {
                this.game_is_over();
            } else {
                this.players.change();
            }
            return true;
        } else {
            return false;
        }
    },

    game_is_over: function() {
        this.gameOver = true;
        console.log("cabôô!")
    },

    start : function() {
        this.board.fill('');
        this.draw();
        this.gameOver = false;
    },

    check_winner: function(player) {
        for(i in this.winning_sequences) {
            if (this.board[this.winning_sequences[i][0]] == player &&
                this.board[this.winning_sequences[i][1]] == player &&
                this.board[this.winning_sequences[i][2]] == player){
                    console.log('Venceu!');
                
            return i;
        }
    };
        return -1;
},



    draw: function() {
        let content ='';

        for(i in this.board) {
            content += '<div onclick="tabuleiro.play('+ i +')">'+ this.board[i] + '</div>';
        }

        this.container_element.innerHTML = content;
    }

};