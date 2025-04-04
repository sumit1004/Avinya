class MemoryGame extends Phaser.Scene {
    constructor() {
        super({ key: 'MemoryGame' });
        this.cards = [];
        this.firstCard = null;
        this.secondCard = null;
        this.canFlip = true;
        this.moves = 0;
        this.matches = 0;
        this.timeElapsed = 0;
        this.attemptsLeft = 15;
    }

    create() {
        this.createCards();
        this.startTimer();
        
        document.getElementById('restartGame').addEventListener('click', () => {
            this.restartGame();
        });
    }

    createCards() {
        const symbols = ['🔋', '💡', '⚡', '🔌', '📱', '💻', '🔍', '⚙️'];
        const cardPairs = [...symbols, ...symbols];
        this.shuffleArray(cardPairs);

        const gameBoard = document.getElementById('memoryGame');
        gameBoard.innerHTML = '';

        cardPairs.forEach((symbol, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.dataset.value = symbol;
            card.dataset.index = index;
            
            card.innerHTML = `
                <div class="card-front"></div>
                <div class="card-back">${symbol}</div>
            `;

            card.addEventListener('click', () => this.flipCard(card));
            gameBoard.appendChild(card);
            this.cards.push(card);
        });
    }

    flipCard(card) {
        if (!this.canFlip || card.classList.contains('flipped') || card === this.firstCard) return;

        card.classList.add('flipped');

        if (!this.firstCard) {
            this.firstCard = card;
        } else {
            this.secondCard = card;
            this.moves++;
            this.attemptsLeft--;
            this.updateStats();
            this.checkForMatch();
        }
    }

    checkForMatch() {
        this.canFlip = false;
        const isMatch = this.firstCard.dataset.value === this.secondCard.dataset.value;

        if (isMatch) {
            this.matches++;
            this.resetCards();
            if (this.matches === 8) this.gameOver(true);
        } else {
            setTimeout(() => {
                this.firstCard.classList.remove('flipped');
                this.secondCard.classList.remove('flipped');
                this.resetCards();
                if (this.attemptsLeft === 0) this.gameOver(false);
            }, 1000);
        }
    }

    resetCards() {
        this.firstCard = null;
        this.secondCard = null;
        this.canFlip = true;
    }

    startTimer() {
        this.timerInterval = setInterval(() => {
            this.timeElapsed++;
            const minutes = Math.floor(this.timeElapsed / 60);
            const seconds = this.timeElapsed % 60;
            document.getElementById('timer').textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    updateStats() {
        document.getElementById('moves').textContent = this.moves;
        document.getElementById('attempts').textContent = this.attemptsLeft;
    }

    gameOver(won) {
        clearInterval(this.timerInterval);
        setTimeout(() => {
            alert(won ? 
                `Congratulations! You won in ${this.moves} moves!` : 
                'Game Over! Out of attempts!');
        }, 500);
    }

    restartGame() {
        this.moves = 0;
        this.matches = 0;
        this.timeElapsed = 0;
        this.attemptsLeft = 15;
        this.updateStats();
        clearInterval(this.timerInterval);
        this.startTimer();
        this.createCards();
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'memoryGame',
    width: 300,
    height: 300,
    scene: MemoryGame
};

window.addEventListener('load', () => {
    new Phaser.Game(config);
});
