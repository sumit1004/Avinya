const GEMINI_API_KEY = 'AIzaSyDrnWM6Pd_JHcr6nWpLtf1qF86q_ydTPWw';

document.getElementById('timetableForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const result = document.getElementById('timetableResult');
    result.innerHTML = '<p>Generating your personalized timetable...</p>';
    
    const formData = {
        subjects: document.getElementById('subjects').value,
        studyHours: document.getElementById('studyHours').value,
        preferences: document.getElementById('preferences').value,
        breakTime: document.getElementById('breakTime').value,
        additionalInfo: document.getElementById('additionalInfo').value
    };

    try {
        const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GEMINI_API_KEY}`
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `Create a detailed weekly study timetable with these parameters:
                        - Subjects: ${formData.subjects}
                        - Study hours per day: ${formData.studyHours}
                        - Preferred time: ${formData.preferences}
                        - Break duration: ${formData.breakTime} minutes
                        - Additional requirements: ${formData.additionalInfo}
                        
                        Please provide a structured timetable that:
                        1. Maximizes learning efficiency
                        2. Includes appropriate breaks
                        3. Considers the preferred study time
                        4. Balances all subjects
                        5. Includes revision slots
                        
                        Format the response in a clear, readable way.`
                    }]
                }]
            })
        });

        const data = await response.json();
        result.innerHTML = `<pre>${data.candidates[0].content.parts[0].text}</pre>`;
    } catch (error) {
        result.innerHTML = `<p class="error">Error generating timetable. Please try again.</p>`;
        console.error('Error:', error);
    }
});
