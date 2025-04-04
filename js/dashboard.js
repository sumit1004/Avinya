document.addEventListener('DOMContentLoaded', () => {
    // Load user data from localStorage
    const token = localStorage.getItem('token');
    
    // Check if user is logged in
    if (!token) {
        window.location.href = 'login.html';  // Changed back to login.html
        return;
    }

    // Find current user from dummyUsers array
    const currentUser = dummyUsers[0]; // For demo purposes
    
    // Update profile information
    document.getElementById('studentName').textContent = currentUser.name;
    document.getElementById('studentClass').textContent = `Class: ${currentUser.class}`;
    document.getElementById('studentEmail').textContent = `Email: ${currentUser.email}`;
    document.getElementById('studentPhone').textContent = `Phone: ${currentUser.mobile}`;

    // Populate recent activities
    const activities = [
        { type: 'video', title: 'Generated Physics Lecture Video', time: '2 hours ago' },
        { type: 'notes', title: 'Created Chemistry Notes', time: '1 day ago' },
        { type: 'doubt', title: 'Asked doubt in Mathematics', time: '3 days ago' }
    ];

    const activityList = document.querySelector('.activity-list');
    activities.forEach(activity => {
        const div = document.createElement('div');
        div.className = 'activity-item';
        div.innerHTML = `
            <p>${activity.title}</p>
            <span>${activity.time}</span>
        `;
        activityList.appendChild(div);
    });

    // Populate pending items
    const pendingItems = [
        'Complete Physics Quiz',
        'Review Chemistry Notes',
        'Check doubt responses'
    ];

    const pendingList = document.querySelector('.pending-list');
    pendingItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'pending-item';
        div.innerHTML = `<p>${item}</p>`;
        pendingList.appendChild(div);
    });
});

// Modal functionality
function openDoubtModal() {
    document.getElementById('doubtModal').style.display = 'block';
}

function openQuizModal() {
    document.getElementById('quizModal').style.display = 'block';
}

// Close modals when clicking the close button or outside
document.querySelectorAll('.close-btn').forEach(btn => {
    btn.onclick = function() {
        this.closest('.modal').style.display = 'none';
    }
});

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

// Handle doubt form submission
document.getElementById('doubtForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    // Handle doubt submission here
    alert('Your doubt has been submitted!');
    document.getElementById('doubtModal').style.display = 'none';
    e.target.reset();
});

// Handle quiz topic selection
document.querySelectorAll('.quiz-topic-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const subject = this.dataset.subject;
        // Handle quiz start here
        alert(`Starting ${subject} quiz...`);
        document.getElementById('quizModal').style.display = 'none';
    });
});
