class SudokuGame {
    constructor() {
        this.board = Array(9).fill().map(() => Array(9).fill(0));
        this.solution = Array(9).fill().map(() => Array(9).fill(0));
        this.difficulty = 'Easy';
        this.selectedCell = null;
        this.mistakes = 0;
        this.init();
    }

    init() {
        this.createBoard();
        this.setupEventListeners();
    }

    createBoard() {
        const sudokuBoard = document.getElementById('sudokuBoard');
        sudokuBoard.innerHTML = '';

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                if (i % 3 === 0) cell.classList.add('border-top');
                if (j % 3 === 0) cell.classList.add('border-left');
                cell.dataset.row = i;
                cell.dataset.col = j;
                sudokuBoard.appendChild(cell);
            }
        }
    }

    setupEventListeners() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.addEventListener('click', () => this.selectCell(cell));
        });

        document.addEventListener('keydown', (e) => {
            if (this.selectedCell && /^[1-9]$/.test(e.key)) {
                this.fillNumber(parseInt(e.key));
            }
        });

        document.getElementById('newGame').addEventListener('click', () => {
            this.difficulty = document.getElementById('difficulty').value;
            this.generateNewPuzzle();
        });

        document.getElementById('checkSolution').addEventListener('click', () => {
            this.checkSolution();
        });

        document.getElementById('hint').addEventListener('click', () => {
            this.getHint();
        });
    }

    generateNewPuzzle() {
        // Generate a valid Sudoku puzzle based on difficulty
        this.generateSolution();
        this.board = this.solution.map(row => [...row]);
        
        // Remove numbers based on difficulty
        const cellsToRemove = {
            'Easy': 30,
            'Medium': 40,
            'Hard': 50
        }[this.difficulty];

        let removed = 0;
        while (removed < cellsToRemove) {
            const row = Math.floor(Math.random() * 9);
            const col = Math.floor(Math.random() * 9);
            if (this.board[row][col] !== 0) {
                this.board[row][col] = 0;
                removed++;
            }
        }

        this.updateDisplay();
    }

    generateSolution() {
        // Simple backtracking algorithm to generate a valid solution
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (this.solution[i][j] === 0) {
                    numbers.sort(() => Math.random() - 0.5);
                    for (let num of numbers) {
                        if (this.isValid(i, j, num)) {
                            this.solution[i][j] = num;
                            if (this.generateSolution()) return true;
                            this.solution[i][j] = 0;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    isValid(row, col, num) {
        // Check row
        for (let i = 0; i < 9; i++) {
            if (this.solution[row][i] === num) return false;
        }

        // Check column
        for (let i = 0; i < 9; i++) {
            if (this.solution[i][col] === num) return false;
        }

        // Check 3x3 box
        const boxRow = Math.floor(row / 3) * 3;
        const boxCol = Math.floor(col / 3) * 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.solution[boxRow + i][boxCol + j] === num) return false;
            }
        }

        return true;
    }

    selectCell(cell) {
        if (this.selectedCell) {
            this.selectedCell.classList.remove('selected');
        }
        this.selectedCell = cell;
        cell.classList.add('selected');
    }

    fillNumber(num) {
        const row = parseInt(this.selectedCell.dataset.row);
        const col = parseInt(this.selectedCell.dataset.col);
        
        if (this.board[row][col] === 0) {
            this.selectedCell.textContent = num;
            this.board[row][col] = num;
            
            if (this.solution[row][col] !== num) {
                this.selectedCell.classList.add('mistake');
                this.mistakes++;
            } else {
                this.selectedCell.classList.remove('mistake');
            }
        }
    }

    updateDisplay() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach((cell, index) => {
            const row = Math.floor(index / 9);
            const col = index % 9;
            const value = this.board[row][col];
            cell.textContent = value || '';
            cell.classList.toggle('given', value !== 0);
        });
    }

    checkSolution() {
        let isComplete = true;
        
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const cell = document.querySelector(`[data-row="${i}"][data-col="${j}"]`);
                cell.classList.remove('mistake'); // Clear previous mistakes
                
                // Check if cell is empty or incorrect
                if (this.board[i][j] === 0 || this.board[i][j] !== this.solution[i][j]) {
                    isComplete = false;
                    cell.classList.add('mistake');
                }
            }
        }

        if (isComplete) {
            alert('Congratulations! You solved the puzzle!');
        } else {
            alert('There are some mistakes. Keep trying!');
        }
    }

    getHint() {
        // Find first empty cell and show its solution
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (this.board[i][j] === 0) {
                    const cell = document.querySelector(`[data-row="${i}"][data-col="${j}"]`);
                    const correctNumber = this.solution[i][j];
                    
                    // Show the hint
                    cell.classList.add('hint');
                    cell.textContent = correctNumber;
                    
                    // Remove hint highlight after 2 seconds but keep the number
                    setTimeout(() => {
                        cell.classList.remove('hint');
                        this.board[i][j] = correctNumber;
                    }, 2000);
                    return;
                }
            }
        }
    }
}

// Wait for DOM to load before initializing
document.addEventListener('DOMContentLoaded', () => {
    const game = new SudokuGame();
    // Generate initial puzzle
    game.generateNewPuzzle();
});
