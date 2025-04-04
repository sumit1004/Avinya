const GEMINI_API_KEY = 'AIzaSyDo6eezix-jKdMYxKgNL17D-ftRTA5WZwY';
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

document.getElementById('generateBtn').addEventListener('click', generateNotes);
document.getElementById('copyBtn').addEventListener('click', copyNotes);
document.getElementById('downloadBtn').addEventListener('click', downloadNotes);
document.getElementById('saveBtn').addEventListener('click', saveNotes);

async function generateNotes() {
    const subject = document.getElementById('subject').value;
    const topic = document.getElementById('topic').value;
    const complexity = document.getElementById('complexity').value;
    const noteType = document.getElementById('noteType').value;

    if (!subject || !topic) {
        alert('Please fill in all required fields');
        return;
    }

    const loader = document.querySelector('.loader');
    const notesOutput = document.getElementById('notesOutput');
    const notesActions = document.querySelector('.notes-actions');
    
    loader.style.display = 'block';
    notesOutput.innerHTML = '';
    notesActions.style.display = 'none';

    try {
        const prompt = `Generate detailed ${noteType} notes for ${subject} subject on the topic "${topic}" at ${complexity} level. Please include:
        1. Clear headings and subheadings
        2. Key concepts and definitions
        3. Examples where applicable
        4. Summary points`;
        
        const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }],
                safetySettings: [{
                    category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                    threshold: "BLOCK_MEDIUM_AND_ABOVE"
                }]
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || `HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
            const generatedText = data.candidates[0].content.parts[0].text;
            notesOutput.innerHTML = generatedText
                .replace(/\n/g, '<br>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/^# (.*?)$/gm, '<h2>$1</h2>')
                .replace(/^## (.*?)$/gm, '<h3>$1</h3>');
            
            notesActions.style.display = 'flex';
        } else {
            throw new Error('No valid response content');
        }
    } catch (error) {
        console.error('API Error:', error);
        notesOutput.innerHTML = `Error: ${error.message}. Please try again.`;
    } finally {
        loader.style.display = 'none';
    }
}

function copyNotes() {
    const notesContent = document.getElementById('notesOutput').innerText;
    navigator.clipboard.writeText(notesContent);
    alert('Notes copied to clipboard!');
}

function downloadNotes() {
    const notesContent = document.getElementById('notesOutput').innerText;
    const blob = new Blob([notesContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'smart-notes.txt';
    a.click();
    window.URL.revokeObjectURL(url);
}

function saveNotes() {
    const notesContent = document.getElementById('notesOutput').innerText;
    // Implement saving to local storage or backend
    const savedNotes = JSON.parse(localStorage.getItem('savedNotes') || '[]');
    savedNotes.push({
        id: Date.now(),
        subject: document.getElementById('subject').value,
        topic: document.getElementById('topic').value,
        content: notesContent,
        date: new Date().toISOString()
    });
    localStorage.setItem('savedNotes', JSON.stringify(savedNotes));
    alert('Notes saved to dashboard!');
}

// Add sidebar toggle functionality
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', (e) => {
    e.preventDefault();
    sidebar.classList.toggle('active');
});
