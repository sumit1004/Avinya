class CoinSystem {
    constructor() {
        this.coins = parseInt(localStorage.getItem('coins')) || 0;
        this.completedQuizzes = JSON.parse(localStorage.getItem('completedQuizzes') || '[]');
        this.updateCoinDisplay();
        this.setupRewardSystem();
    }

    updateCoinDisplay() {
        // Update all coin displays
        document.querySelectorAll('.coin-display, #totalCoins').forEach(display => {
            if (display) display.textContent = this.coins;
        });
        localStorage.setItem('coins', this.coins.toString());
    }

    addCoins(amount) {
        this.coins += amount;
        this.updateCoinDisplay();
        this.showCoinAnimation(amount);
    }

    setupRewardSystem() {
        // Listen for quiz completion
        document.addEventListener('quizComplete', (event) => {
            if (event.detail.coinsEarned > 0 && !this.completedQuizzes.includes(event.detail.quizId)) {
                this.addCoins(event.detail.coinsEarned);
                this.completedQuizzes.push(event.detail.quizId);
                localStorage.setItem('completedQuizzes', JSON.stringify(this.completedQuizzes));
            }
        });

        // Memory Game rewards
        document.addEventListener('memoryGameComplete', () => {
            this.addCoins(50);
        });

        // Sudoku rewards
        document.addEventListener('sudokuComplete', () => {
            this.addCoins(100);
        });

        // Setup redeem buttons
        document.querySelectorAll('.redeem-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const cost = parseInt(e.target.previousElementSibling.textContent);
                if (this.coins >= cost) {
                    this.coins -= cost;
                    this.updateCoinDisplay();
                    alert('Successfully redeemed!');
                } else {
                    alert('Not enough coins!');
                }
            });
        });

        // Setup help modal
        const modal = document.getElementById('helpModal');
        const btn = document.getElementById('helpBtn');
        const span = document.querySelector('.close');

        btn.onclick = () => {
            modal.style.display = "block";
        }

        span.onclick = () => {
            modal.style.display = "none";
        }

        window.onclick = (event) => {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        // Setup search functionality
        const searchInput = document.getElementById('courseSearch');
        const searchBtn = document.getElementById('searchBtn');

        const performSearch = () => {
            const searchTerm = searchInput.value.toLowerCase();
            const shopItems = document.querySelectorAll('.shop-item');

            shopItems.forEach(item => {
                const courseName = item.dataset.name;
                const cost = parseInt(item.dataset.cost);
                
                if (courseName.includes(searchTerm) || 
                    cost <= parseInt(searchTerm) || 
                    searchTerm === '') {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        };

        searchInput.addEventListener('input', performSearch);
        searchBtn.addEventListener('click', performSearch);

        // Add search by pressing Enter
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    showCoinAnimation(amount) {
        const animation = document.createElement('div');
        animation.className = 'coin-animation';
        animation.textContent = `+${amount} 🪙`;
        document.body.appendChild(animation);
        
        setTimeout(() => {
            animation.remove();
        }, 2000);
    }
}

// Initialize coin system
document.addEventListener('DOMContentLoaded', () => {
    window.coinSystem = new CoinSystem();
    
    // Update initial coin display
    const totalCoins = parseInt(localStorage.getItem('coins')) || 0;
    document.querySelectorAll('.coin-display, #totalCoins').forEach(display => {
        if (display) display.textContent = totalCoins;
    });
});
