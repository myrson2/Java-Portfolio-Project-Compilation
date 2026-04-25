const main = document.querySelector('#main');
const main_contents = document.querySelector('.main-contents');
const nav =document.querySelector('nav');
const header = document.querySelector('header');
const contact = document.querySelector('#contact-section');
const midterm = document.querySelector('#midterm-section')

header.addEventListener('click', e => {
    if(e.target.closest('.contact')){
        console.log('Contact');
        header.style.display = 'none';
        contact.style.display = 'block';
    }

    if(e.target.closest('.midterm')) {
        header.style.display = 'none';
        midterm.style.display = 'block';
    }
})

function contact_home() {
    header.style.display = 'block';
    contact.style.display = 'none';
}

function midterm_home() {
    header.style.display = 'block';
    midterm.style.display = 'none';
}

function final_home() {
    alert("Not Implemented");
}

// 1. Target the specific articles, not the parent container
const allButtons = document.querySelectorAll('nav ul li button');
const contentSections = document.querySelectorAll('.main-contents article');

nav.addEventListener('click', e => {
    const button = e.target.closest('button');
    if (!button) return;

    // UI Update: Move the 'active' class to the clicked button
    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // 2. Logic to match Button IDs with Section IDs
    const filterType = button.id; // e.g., 'quizzes', 'activities', 'seatwork'

    contentSections.forEach(section => {
        if (filterType === 'all') {
            section.style.display = 'block';
        } else {
            /* Normalize the keyword:
               - If button is 'quizzes', it matches 'quiz' in #midterm-quiz
               - If button is 'activities', it matches 'activity' in #midterm-activity
               - If button is 'seatwork', it remains 'seatwork'
            */
            const filterKeyword = filterType === 'quizzes' 
                ? 'quiz' 
                : filterType.replace(/ies$/, 'y').replace(/s$/, '');
            
            // Check if the article ID (e.g., "midterm-seatwork") contains the keyword
            const isMatch = section.id.includes(filterKeyword);
            section.style.display = isMatch ? 'block' : 'none';
        }
    });

    console.log(`Filtering by: ${filterType}`);
});