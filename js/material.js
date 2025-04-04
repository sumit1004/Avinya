document.addEventListener('DOMContentLoaded', function() {
    // Add sidebar toggle functionality
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');
    
    menuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        sidebar.classList.toggle('active');
    });

    // Handle PDF downloads
    document.querySelectorAll('.view-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const materialTitle = this.parentElement.querySelector('h3').textContent;
            // Add download logic here
            console.log(`Downloading ${materialTitle}...`);
            // Simulate download start
            this.textContent = 'Downloading...';
            setTimeout(() => {
                this.textContent = 'Download';
            }, 2000);
        });
    });

    // Function to load study materials
    function loadMaterials() {
        // Add loading logic for PDFs and question banks
        console.log('Loading study materials...');
    }

    loadMaterials();
});
