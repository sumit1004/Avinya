document.addEventListener('DOMContentLoaded', function() {
    const chatIcon = document.getElementById('chatIcon');
    const chatWindow = document.getElementById('chatWindow');
    const closeChat = document.getElementById('closeChat');
    const userInput = document.getElementById('userInput');
    const sendMessage = document.getElementById('sendMessage');
    const chatMessages = document.getElementById('chatMessages');
    const typingIndicator = document.getElementById('typingIndicator');
    
    // Get current page for context
    const currentPage = window.location.pathname.split('/').pop().split('.')[0];
    
    // Toggle chat window
    chatIcon.addEventListener('click', function() {
        chatWindow.style.display = 'flex';
        chatIcon.style.display = 'none';
    });
    
    closeChat.addEventListener('click', function() {
        chatWindow.style.display = 'none';
        chatIcon.style.display = 'flex';
    });
    
    // Send message when button is clicked
    sendMessage.addEventListener('click', sendUserMessage);
    
    // Send message when Enter key is pressed
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendUserMessage();
        }
    });
    
    function sendUserMessage() {
        const message = userInput.value.trim();
        if (message === '') return;
        
        // Add user message to chat
        addMessage(message, 'user');
        userInput.value = '';
        
        // Show typing indicator
        typingIndicator.style.display = 'block';
        
        // Simulate typing delay and response
        setTimeout(() => {
            typingIndicator.style.display = 'none';
            const response = getSimpleResponse(message);
            addMessage(response, 'bot');
        }, 1000);
    }

    // Simple response function
    function getSimpleResponse(message) {
        const responses = {
            'hello': 'Hi there! How can I help you today?',
            'hi': 'Hello! How can I assist you?',
            'help': 'I can help you with information about our educational platform, study materials, and features.',
            'features': 'Avinya offers smart notes generation, study materials, educational tools, and more!',
            'default': 'Thank you for your message. Please contact our support team for detailed assistance.'
        };

        message = message.toLowerCase();
        
        for (let key in responses) {
            if (message.includes(key)) {
                return responses[key];
            }
        }
        return responses.default;
    }

    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Save chat history to localStorage
    function saveChatHistory() {
        const messages = chatMessages.innerHTML;
        localStorage.setItem('avinyaChatHistory', messages);
    }
    
    // Load chat history from localStorage
    function loadChatHistory() {
        const savedMessages = localStorage.getItem('avinyaChatHistory');
        if (savedMessages) {
            chatMessages.innerHTML = savedMessages;
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }
    
    // Save chat history when window is closed or navigated away
    window.addEventListener('beforeunload', saveChatHistory);
    
    // Load chat history when page loads
    loadChatHistory();
});