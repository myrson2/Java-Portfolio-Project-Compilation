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

const allButtons = nav.querySelectorAll('button');
const contentSections = document.querySelectorAll('.main-contents article');

nav.addEventListener('click', e => {
    const button = e.target.closest('button');
    if (!button) return;

    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // 2. Optimized Filtering Logic
    const filterType = button.id; 

    contentSections.forEach(section => {
        if (filterType === 'all') {
            section.style.display = 'block';
        } else {
           
            const filterKeyword = filterType.replace(/ies$/, 'y').replace(/s$/, '');
            const isMatch = section.id.includes(filterKeyword);
            section.style.display = isMatch ? 'block' : 'none';
        }
    });

    console.log(`Filtering by: ${filterType}`);
});
