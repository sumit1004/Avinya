const quizData = {
    mathematics: [
        {
            id: 'math-number-system',
            title: 'Number System',
            description: 'Test your understanding of real numbers, integers, and decimals',
            difficulty: 'easy',
            questions: [
                {
                    question: 'What is the smallest prime number?',
                    options: ['0', '1', '2', '3'],
                    correctAnswer: 2
                },
                {
                    question: 'What is the result of 2^3?',
                    options: ['6', '8', '4', '9'],
                    correctAnswer: 1
                }
            ],
            timeMinutes: 5,
            topics: ['numbers', 'primes', 'basic math']
        },
        {
            id: 'math-advanced-algebra',
            title: 'Advanced Algebra',
            description: 'Complex algebraic expressions, quadratic equations, and polynomials',
            difficulty: 'hard',
            questions: [
                {
                    question: 'If α and β are the roots of the quadratic equation x² + px + q = 0, what is α² + β²?',
                    options: ['p² - 2q', 'p² + 2q', '2q - p²', 'p - 2q'],
                    correctAnswer: 0
                },
                {
                    question: 'The sum of the series 1 + 4 + 9 + 16 + ... + n² is:',
                    options: ['n(n+1)(2n+1)/5', 'n(n+1)(2n+1)/6', 'n(n+1)(2n+2)/6', 'n(n+1)(2n+1)/4'],
                    correctAnswer: 1
                }
            ],
            timeMinutes: 15,
            topics: ['advanced algebra', 'quadratic equations', 'series']
        },
        {
            id: 'math-trigonometry-advanced',
            title: 'Advanced Trigonometry',
            description: 'Complex trigonometric equations and identities',
            difficulty: 'hard',
            questions: [
                {
                    question: 'What is the value of sin²θ + cos²θ?',
                    options: ['0', '1', '2', 'depends on θ'],
                    correctAnswer: 1
                },
                {
                    question: 'If sin θ = 3/5, then cos θ equals:',
                    options: ['4/5', '5/3', '3/4', '5/4'],
                    correctAnswer: 0
                }
            ],
            timeMinutes: 10,
            topics: ['trigonometry', 'identities', 'equations']
        },
        {
            id: 'math-probability',
            title: 'Probability Concepts',
            description: 'Probability theory and applications',
            difficulty: 'medium',
            questions: [
                {
                    question: 'When rolling two dice, what is the probability of getting a sum of 7?',
                    options: ['1/6', '1/12', '1/36', '6/36'],
                    correctAnswer: 0
                },
                {
                    question: 'What is the probability of drawing a king from a standard deck of cards?',
                    options: ['1/13', '1/26', '4/52', '1/4'],
                    correctAnswer: 2
                }
            ],
            timeMinutes: 8,
            topics: ['probability', 'statistics', 'combinations']
        }
    ],
    physics: [
        {
            id: 'physics-newton-laws',
            title: 'Newton\'s Laws of Motion',
            description: 'Test your knowledge of fundamental laws of motion',
            difficulty: 'medium',
            questions: [
                {
                    question: 'Which law states that an object remains at rest or in motion unless acted upon by a force?',
                    options: ['First Law', 'Second Law', 'Third Law', 'Fourth Law'],
                    correctAnswer: 0
                },
                {
                    question: 'F = ma is the mathematical form of which law?',
                    options: ['First Law', 'Second Law', 'Third Law', 'Conservation of Energy'],
                    correctAnswer: 1
                }
            ],
            timeMinutes: 10,
            topics: ['mechanics', 'newton laws', 'motion']
        },
        {
            id: 'physics-advanced-mechanics',
            title: 'Advanced Mechanics',
            description: 'Complex problems in mechanics and gravitation',
            difficulty: 'hard',
            questions: [
                {
                    question: 'A body is thrown vertically upward with velocity 19.6 m/s. Maximum height reached by the body is: (g = 9.8 m/s²)',
                    options: ['19.6 m', '20 m', '38.4 m', '40 m'],
                    correctAnswer: 1
                },
                {
                    question: 'The escape velocity from Earth\'s surface is 11.2 km/s. The escape velocity from a planet of same mass but double the radius would be:',
                    options: ['5.6 km/s', '7.92 km/s', '15.84 km/s', '22.4 km/s'],
                    correctAnswer: 1
                }
            ],
            timeMinutes: 20,
            topics: ['mechanics', 'gravitation', 'projectile motion']
        },
        {
            id: 'physics-electromagnetism',
            title: 'Electromagnetic Theory',
            description: 'Basic concepts of electromagnetism',
            difficulty: 'medium',
            questions: [
                {
                    question: 'Which law relates the induced EMF to the rate of change of magnetic flux?',
                    options: ['Ohm\'s Law', 'Faraday\'s Law', 'Ampere\'s Law', 'Coulomb\'s Law'],
                    correctAnswer: 1
                },
                {
                    question: 'The SI unit of magnetic flux is:',
                    options: ['Tesla', 'Weber', 'Henry', 'Gauss'],
                    correctAnswer: 1
                }
            ],
            timeMinutes: 12,
            topics: ['electromagnetism', 'magnetic fields', 'induction']
        }
    ],
    chemistry: [
        {
            id: 'chem-periodic-table',
            title: 'Periodic Table Basics',
            description: 'Test your knowledge of chemical elements and their properties',
            difficulty: 'medium',
            questions: [
                {
                    question: 'What is the atomic number of Carbon?',
                    options: ['4', '6', '8', '12'],
                    correctAnswer: 1
                },
                {
                    question: 'Which element has the symbol Fe?',
                    options: ['Fluorine', 'Francium', 'Iron', 'Iodine'],
                    correctAnswer: 2
                }
            ],
            timeMinutes: 8,
            topics: ['periodic table', 'elements', 'atomic structure']
        },
        {
            id: 'chem-organic-compounds',
            title: 'Organic Chemistry',
            description: 'Basic organic compounds and reactions',
            difficulty: 'hard',
            questions: [
                {
                    question: 'Which hydrocarbon has the formula C2H4?',
                    options: ['Ethane', 'Ethene', 'Ethyne', 'Methane'],
                    correctAnswer: 1
                },
                {
                    question: 'The general formula for alkanes is:',
                    options: ['CnH2n', 'CnH2n+2', 'CnH2n-2', 'CnHn'],
                    correctAnswer: 1
                }
            ],
            timeMinutes: 15,
            topics: ['organic chemistry', 'hydrocarbons', 'compounds']
        }
    ],
    biology: [
        {
            id: 'bio-human-body',
            title: 'Human Body Systems',
            description: 'Test your knowledge of human anatomy and physiology',
            difficulty: 'medium',
            questions: [
                {
                    question: 'Which organ is responsible for pumping blood throughout the body?',
                    options: ['Brain', 'Lungs', 'Heart', 'Liver'],
                    correctAnswer: 2
                },
                {
                    question: 'How many pairs of ribs does a typical human have?',
                    options: ['10', '12', '14', '16'],
                    correctAnswer: 1
                }
            ],
            timeMinutes: 10,
            topics: ['anatomy', 'physiology', 'human body']
        },
        {
            id: 'bio-genetics-basic',
            title: 'Basic Genetics',
            description: 'Fundamental concepts of genetics',
            difficulty: 'medium',
            questions: [
                {
                    question: 'What is the probability of getting a recessive phenotype in F2 generation?',
                    options: ['1/2', '1/4', '3/4', '1/8'],
                    correctAnswer: 1
                },
                {
                    question: 'Which structure carries genetic information in cells?',
                    options: ['Ribosome', 'DNA', 'Mitochondria', 'Golgi body'],
                    correctAnswer: 1
                }
            ],
            timeMinutes: 10,
            topics: ['genetics', 'inheritance', 'DNA']
        }
    ],
    'computer-science': [
        {
            id: 'cs-python-basics',
            title: 'Python Programming Basics',
            description: 'Test your knowledge of Python programming fundamentals',
            difficulty: 'easy',
            questions: [
                {
                    question: 'What is the correct way to create a comment in Python?',
                    options: ['//', '/* */', '#', '<!-- -->'],
                    correctAnswer: 2
                },
                {
                    question: 'Which of these is NOT a Python data type?',
                    options: ['int', 'float', 'string', 'varchar'],
                    correctAnswer: 3
                }
            ],
            timeMinutes: 8,
            topics: ['python', 'programming', 'basics']
        },
        {
            id: 'cs-data-structures',
            title: 'Data Structures',
            description: 'Basic data structures and their applications',
            difficulty: 'medium',
            questions: [
                {
                    question: 'Which data structure follows LIFO principle?',
                    options: ['Queue', 'Stack', 'List', 'Tree'],
                    correctAnswer: 1
                },
                {
                    question: 'Time complexity of binary search is:',
                    options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
                    correctAnswer: 1
                }
            ],
            timeMinutes: 12,
            topics: ['data structures', 'algorithms', 'complexity']
        }
    ],
    english: [
        {
            id: 'eng-tenses',
            title: 'English Tenses',
            description: 'Test your knowledge of various English tenses',
            difficulty: 'medium',
            questions: [
                {
                    question: 'Which tense is used in: "I have been working"?',
                    options: ['Present Perfect', 'Present Perfect Continuous', 'Past Perfect', 'Past Continuous'],
                    correctAnswer: 1
                },
                {
                    question: 'Which sentence is in Simple Present tense?',
                    options: ['I am running', 'I run', 'I ran', 'I have run'],
                    correctAnswer: 1
                }
            ],
            timeMinutes: 10,
            topics: ['grammar', 'tenses', 'english']
        },
        {
            id: 'eng-grammar-advanced',
            title: 'Advanced Grammar',
            description: 'Complex grammar rules and usage',
            difficulty: 'hard',
            questions: [
                {
                    question: 'Which sentence contains a gerund?',
                    options: [
                        'He likes to swim',
                        'Swimming is good exercise',
                        'He swam yesterday',
                        'He will swim tomorrow'
                    ],
                    correctAnswer: 1
                },
                {
                    question: 'Identify the correct subjunctive mood:',
                    options: [
                        'I wish I was there',
                        'I wish I were there',
                        'I wish I am there',
                        'I wish I have been there'
                    ],
                    correctAnswer: 1
                }
            ],
            timeMinutes: 15,
            topics: ['grammar', 'syntax', 'parts of speech']
        }
    ],
    history: [
        {
            id: 'hist-world-wars',
            title: 'World Wars',
            description: 'Test your knowledge of World War I and II',
            difficulty: 'medium',
            questions: [
                {
                    question: 'In which year did World War I begin?',
                    options: ['1912', '1914', '1916', '1918'],
                    correctAnswer: 1
                },
                {
                    question: 'Which country dropped atomic bombs on Japan in 1945?',
                    options: ['Soviet Union', 'United Kingdom', 'United States', 'China'],
                    correctAnswer: 2
                }
            ],
            timeMinutes: 12,
            topics: ['world wars', 'modern history', '20th century']
        },
        {
            id: 'hist-indian-freedom',
            title: 'Indian Freedom Movement',
            description: 'Key events in Indian independence struggle',
            difficulty: 'medium',
            questions: [
                {
                    question: 'In which year did the Quit India Movement start?',
                    options: ['1857', '1919', '1942', '1947'],
                    correctAnswer: 2
                },
                {
                    question: 'Who is known as the Father of the Nation in India?',
                    options: [
                        'Jawaharlal Nehru',
                        'Mahatma Gandhi',
                        'Subhas Chandra Bose',
                        'Sardar Patel'
                    ],
                    correctAnswer: 1
                }
            ],
            timeMinutes: 10,
            topics: ['indian history', 'freedom movement', 'independence']
        }
    ],
    geography: [
        {
            id: 'geo-world-capitals',
            title: 'World Capitals',
            description: 'Test your knowledge of world capitals',
            difficulty: 'medium',
            questions: [
                {
                    question: 'What is the capital of France?',
                    options: ['London', 'Berlin', 'Paris', 'Madrid'],
                    correctAnswer: 2
                },
                {
                    question: 'Which city is the capital of Japan?',
                    options: ['Seoul', 'Beijing', 'Tokyo', 'Bangkok'],
                    correctAnswer: 2
                }
            ],
            timeMinutes: 8,
            topics: ['capitals', 'countries', 'world geography']
        },
        {
            id: 'geo-climate',
            title: 'Climate and Weather',
            description: 'Understanding climate patterns and weather systems',
            difficulty: 'medium',
            questions: [
                {
                    question: 'Which layer of the atmosphere contains the ozone layer?',
                    options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'],
                    correctAnswer: 1
                },
                {
                    question: 'What causes the seasons on Earth?',
                    options: [
                        'Distance from the Sun',
                        'Earth\'s tilted axis',
                        'Rotation of Earth',
                        'Revolution of Earth'
                    ],
                    correctAnswer: 1
                }
            ],
            timeMinutes: 12,
            topics: ['climate', 'weather', 'atmosphere']
        }
    ]
};

// DOM elements
const subjectSelectionView = document.getElementById('subjectSelectionView');
const quizSelectionView = document.getElementById('quizSelectionView');
const quizTakingView = document.getElementById('quizTakingView');
const quizResultsView = document.getElementById('quizResultsView');
const searchResultsView = document.getElementById('searchResultsView');

const selectedSubjectTitle = document.getElementById('selectedSubjectTitle');
const quizList = document.getElementById('quizList');
const searchResultsList = document.getElementById('searchResultsList');
const searchResultsCount = document.getElementById('searchResultsCount');

const quizSearch = document.getElementById('quizSearch');
const searchButton = document.getElementById('searchButton');
const difficultyFilter = document.getElementById('difficultyFilter');
const timeFilter = document.getElementById('timeFilter');
const backFromSearch = document.getElementById('backFromSearch');

// Current state
let currentSubject = '';
let currentQuiz = null;
let currentQuestion = 0;
let userAnswers = [];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Set up subject card click handlers
    const subjectCards = document.querySelectorAll('.subject-card');
    subjectCards.forEach(card => {
        card.addEventListener('click', () => {
            const subject = card.getAttribute('data-subject');
            showQuizzesForSubject(subject);
        });
    });
    
    // Set up navigation buttons
    document.getElementById('backToSubjects').addEventListener('click', showSubjectSelection);
    document.getElementById('backToQuizzes').addEventListener('click', () => showQuizzesForSubject(currentSubject));
    document.getElementById('backToSubjectsFromResults').addEventListener('click', showSubjectSelection);
    backFromSearch.addEventListener('click', showSubjectSelection);
    
    // Set up search functionality
    searchButton.addEventListener('click', performSearch);
    quizSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Set up filter change handlers
    difficultyFilter.addEventListener('change', performSearch);
    timeFilter.addEventListener('change', performSearch);
    
    // Menu toggle functionality
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');
    
    menuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        sidebar.classList.toggle('active');
    });
});

// Show quizzes for a specific subject
function showQuizzesForSubject(subject) {
    currentSubject = subject;
    
    // Update the title
    const subjectName = document.querySelector(`.subject-card[data-subject="${subject}"] h3`).textContent;
    selectedSubjectTitle.textContent = `${subjectName} Quizzes`;
    
    // Clear the quiz list
    quizList.innerHTML = '';
    
    // Add quizzes for the selected subject
    const quizzes = quizData[subject] || [];
    
    if (quizzes.length === 0) {
        quizList.innerHTML = `
            <div class="no-results">
                <h3>No Quizzes Available</h3>
                <p>There are currently no quizzes available for this subject.</p>
                <button onclick="showSubjectSelection()">Back to Subjects</button>
            </div>
        `;
    } else {
        quizzes.forEach(quiz => {
            const quizItem = document.createElement('div');
            quizItem.className = 'quiz-item';
            quizItem.setAttribute('data-quiz-id', quiz.id);
            
            quizItem.innerHTML = `
                <div class="quiz-info">
                    <h3 class="quiz-title">${quiz.title}</h3>
                    <p class="quiz-description">${quiz.description}</p>
                    <div class="quiz-meta">
                        <div class="quiz-meta-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            ${quiz.timeMinutes} minutes
                        </div>
                        <div class="quiz-meta-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 6H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 12H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3 6H3.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3 12H3.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3 18H3.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            ${quiz.questions.length} questions
                        </div>
                    </div>
                </div>
                <div class="quiz-difficulty difficulty-${quiz.difficulty}">${quiz.difficulty}</div>
            `;
            
            quizItem.addEventListener('click', () => {
                startQuiz(subject, quiz.id);
            });
            
            quizList.appendChild(quizItem);
        });
    }
    
    // Show the quiz selection view
    hideAllViews();
    quizSelectionView.classList.add('active-view');
}

// Perform search based on query and filters
function performSearch() {
    const query = quizSearch.value.trim().toLowerCase();
    const difficultyValue = difficultyFilter.value;
    const timeValue = timeFilter.value;
    
    if (query === '' && difficultyValue === '' && timeValue === '') {
        // If no search criteria, just show subject selection
        showSubjectSelection();
        return;
    }
    
    // Collect all quizzes from all subjects
    let allQuizzes = [];
    for (const subject in quizData) {
        quizData[subject].forEach(quiz => {
            allQuizzes.push({
                ...quiz,
                subject: subject
            });
        });
    }
    
    // Filter quizzes based on search criteria
    let filteredQuizzes = allQuizzes;
    
    // Filter by search query
    if (query !== '') {
        filteredQuizzes = filteredQuizzes.filter(quiz => {
            // Search in title, description, and topics
            return quiz.title.toLowerCase().includes(query) || 
                   quiz.description.toLowerCase().includes(query) ||
                   (quiz.topics && quiz.topics.some(topic => topic.includes(query)));
        });
    }
    
    // Filter by difficulty
    if (difficultyValue !== '') {
        filteredQuizzes = filteredQuizzes.filter(quiz => quiz.difficulty === difficultyValue);
    }
    
    // Filter by time
    if (timeValue !== '') {
        filteredQuizzes = filteredQuizzes.filter(quiz => {
            if (timeValue === 'short') return quiz.timeMinutes < 10;
            if (timeValue === 'medium') return quiz.timeMinutes >= 10 && quiz.timeMinutes <= 20;
            if (timeValue === 'long') return quiz.timeMinutes > 20;
            return true;
        });
    }
    
    // Update search results count
    searchResultsCount.textContent = `${filteredQuizzes.length} quizzes found`;
    
    // Clear the search results list
    searchResultsList.innerHTML = '';
    
    // Display search results
    if (filteredQuizzes.length === 0) {
        searchResultsList.innerHTML = `
            <div class="no-results">
                <h3>No Quizzes Found</h3>
                <p>We couldn't find any quizzes matching your search criteria.</p>
                <p>Try adjusting your search terms or filters.</p>
                <button onclick="showSubjectSelection()">Back to Subjects</button>
            </div>
        `;
    } else {
        filteredQuizzes.forEach(quiz => {
            const quizItem = document.createElement('div');
            quizItem.className = 'quiz-item';
            quizItem.setAttribute('data-quiz-id', quiz.id);
            
            // Get the subject name
            const subjectName = document.querySelector(`.subject-card[data-subject="${quiz.subject}"] h3`).textContent;
            
            // Highlight the search term in title and description
            let highlightedTitle = quiz.title;
            let highlightedDescription = quiz.description;
            
            if (query !== '') {
                highlightedTitle = highlightSearchTerm(quiz.title, query);
                highlightedDescription = highlightSearchTerm(quiz.description, query);
            }
            
            quizItem.innerHTML = `
                <div class="quiz-info">
                    <h3 class="quiz-title">${highlightedTitle}</h3>
                    <p class="quiz-description">${highlightedDescription}</p>
                    <div class="quiz-meta">
                        <div class="quiz-meta-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            ${quiz.timeMinutes} minutes
                        </div>
                        <div class="quiz-meta-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 6H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 12H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3 6H3.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3 12H3.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3 18H3.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            ${quiz.questions.length} questions
                        </div>
                        <div class="quiz-meta-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            ${subjectName}
                        </div>
                    </div>
                </div>
                <div class="quiz-difficulty difficulty-${quiz.difficulty}">${quiz.difficulty}</div>
            `;
            
            quizItem.addEventListener('click', () => {
                startQuiz(quiz.subject, quiz.id);
            });
            
            searchResultsList.appendChild(quizItem);
        });
    }
    
    // Show the search results view
    hideAllViews();
    searchResultsView.classList.add('active-view');
}

// Helper function to highlight search terms
function highlightSearchTerm(text, term) {
    if (!term) return text;
    
    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, '<span class="search-highlight">$1</span>');
}

// Show subject selection view
function showSubjectSelection() {
    hideAllViews();
    subjectSelectionView.classList.add('active-view');
}

// Hide all views
function hideAllViews() {
    subjectSelectionView.classList.remove('active-view');
    quizSelectionView.classList.remove('active-view');
    quizTakingView.classList.remove('active-view');
    quizResultsView.classList.remove('active-view');
    searchResultsView.classList.remove('active-view');
}

// Start a quiz
function startQuiz(subject, quizId) {
    const quiz = quizData[subject].find(q => q.id === quizId);
    if (!quiz || !quiz.questions) return;
    
    // Initialize quiz state
    currentQuiz = quiz;
    currentQuestion = 0;
    userAnswers = new Array(quiz.questions.length).fill(null);
    
    // Update quiz title
    document.getElementById('currentQuizTitle').textContent = quiz.title;
    
    // Update progress information
    document.getElementById('totalQuestions').textContent = quiz.questions.length;
    updateQuizProgress();
    
    // Display first question
    displayCurrentQuestion();
    
    // Show quiz taking view
    hideAllViews();
    quizTakingView.classList.add('active-view');
    
    // Set up navigation buttons
    const prevButton = document.getElementById('prevQuestion');
    const nextButton = document.getElementById('nextQuestion');
    const submitButton = document.getElementById('submitQuiz');
    
    prevButton.onclick = showPreviousQuestion;
    nextButton.onclick = showNextQuestion;
    submitButton.onclick = submitQuiz;
    
    // Update button states
    updateNavigationButtons();
}

function displayCurrentQuestion() {
    const questionContainer = document.getElementById('questionContainer');
    const question = currentQuiz.questions[currentQuestion];
    
    questionContainer.innerHTML = `
        <div class="question-text">${question.question}</div>
        <div class="options-list">
            ${question.options.map((option, index) => `
                <div class="option-item ${userAnswers[currentQuestion] === index ? 'selected' : ''}" 
                     onclick="selectAnswer(${index})">
                    <div class="option-marker"></div>
                    <div class="option-text">${option}</div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Update question number
    document.getElementById('currentQuestionNum').textContent = currentQuestion + 1;
    updateQuizProgress();
}

function selectAnswer(index) {
    userAnswers[currentQuestion] = index;
    displayCurrentQuestion(); // Refresh to show selection
    updateNavigationButtons();
}

function showPreviousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayCurrentQuestion();
        updateNavigationButtons();
    }
}

function showNextQuestion() {
    if (currentQuestion < currentQuiz.questions.length - 1) {
        currentQuestion++;
        displayCurrentQuestion();
        updateNavigationButtons();
    }
}

function updateNavigationButtons() {
    const prevButton = document.getElementById('prevQuestion');
    const nextButton = document.getElementById('nextQuestion');
    const submitButton = document.getElementById('submitQuiz');
    
    prevButton.disabled = currentQuestion === 0;
    nextButton.classList.toggle('hidden', currentQuestion === currentQuiz.questions.length - 1);
    submitButton.classList.toggle('hidden', currentQuestion !== currentQuiz.questions.length - 1);
}

function updateQuizProgress() {
    const progressFill = document.getElementById('progressFill');
    const progress = ((currentQuestion + 1) / currentQuiz.questions.length) * 100;
    progressFill.style.width = `${progress}%`;
}

function submitQuiz() {
    // Calculate results
    let correctAnswers = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === currentQuiz.questions[index].correctAnswer) {
            correctAnswers++;
        }
    });
    
    // Calculate percentage and coins earned
    const percentage = Math.round((correctAnswers / currentQuiz.questions.length) * 100);
    let coinsEarned = 0;
    
    // Calculate coins based on performance and difficulty
    if (percentage >= 90) {
        coinsEarned = currentQuiz.difficulty === 'hard' ? 100 :
                      currentQuiz.difficulty === 'medium' ? 75 : 50;
    } else if (percentage >= 70) {
        coinsEarned = currentQuiz.difficulty === 'hard' ? 75 :
                      currentQuiz.difficulty === 'medium' ? 50 : 25;
    } else if (percentage >= 50) {
        coinsEarned = currentQuiz.difficulty === 'hard' ? 50 :
                      currentQuiz.difficulty === 'medium' ? 25 : 10;
    }
    
    // Check if quiz was already completed
    const completedQuizzes = JSON.parse(localStorage.getItem('completedQuizzes') || '[]');
    if (!completedQuizzes.includes(currentQuiz.id)) {
        // Add coins
        const currentCoins = parseInt(localStorage.getItem('coins') || '0');
        const newTotal = currentCoins + coinsEarned;
        localStorage.setItem('coins', newTotal.toString());
        
        // Mark quiz as completed
        completedQuizzes.push(currentQuiz.id);
        localStorage.setItem('completedQuizzes', JSON.stringify(completedQuizzes));
        
        // Show coin animation
        const animation = document.createElement('div');
        animation.className = 'coin-animation';
        animation.textContent = `+${coinsEarned} 🪙`;
        document.body.appendChild(animation);
        
        setTimeout(() => {
            animation.remove();
        }, 2000);
    } else {
        coinsEarned = 0; // No coins for repeated quizzes
    }
    
    // Update all coin displays on the page
    const totalCoins = parseInt(localStorage.getItem('coins') || '0');
    document.querySelectorAll('.coin-display, #totalCoins').forEach(display => {
        if (display) display.textContent = totalCoins;
    });
    
    // Update results view
    document.getElementById('scorePercentage').textContent = `${percentage}%`;
    document.getElementById('scoreCircle').style.strokeDasharray = `${percentage}, 100`;
    document.getElementById('correctAnswers').textContent = correctAnswers;
    document.getElementById('incorrectAnswers').textContent = currentQuiz.questions.length - correctAnswers;
    document.getElementById('totalQuestionCount').textContent = currentQuiz.questions.length;
    document.getElementById('resultQuizTitle').textContent = currentQuiz.title;
    
    // Add coins earned display
    const resultsFeedback = document.getElementById('resultsFeedback');
    resultsFeedback.innerHTML = `
        <div class="coins-earned">
            <h3>Coins Earned: ${coinsEarned} 🪙</h3>
            <p>Total Coins: ${totalCoins} 🪙</p>
            ${coinsEarned === 0 ? '<p>You have already completed this quiz!</p>' : '<p>Keep learning to earn more coins!</p>'}
        </div>
    `;
    
    // Dispatch event for coin system
    document.dispatchEvent(new CustomEvent('quizComplete', {
        detail: {
            coinsEarned,
            quizId: currentQuiz.id,
            totalCoins
        }
    }));
    
    // Show results view
    hideAllViews();
    quizResultsView.classList.add('active-view');
}

// Add this coin animation style at the bottom of the file
const style = document.createElement('style');
style.textContent = `
    .coin-animation {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 215, 0, 0.9);
        color: white;
        padding: 20px;
        border-radius: 10px;
        font-size: 24px;
        font-weight: bold;
        animation: coinPopup 2s ease-out forwards;
        z-index: 1000;
    }
    
    @keyframes coinPopup {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
        10% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
        20% { transform: translate(-50%, -50%) scale(1); }
        80% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
    }
`;
document.head.appendChild(style);