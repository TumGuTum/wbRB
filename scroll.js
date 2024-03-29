let horizontScroll = document.querySelector('.containerL');
let RightBtn = document.getElementById('RightBtn');
let LeftBtn = document.getElementById('LeftBtn');

RightBtn.addEventListener('click', () => {
    horizontScroll.scrollTo({
        left: horizontScroll.scrollLeft + 390,
        behavior: 'smooth'
    });
});

LeftBtn.addEventListener('click', () => {
    horizontScroll.scrollTo({
        left: horizontScroll.scrollLeft - 390,
        behavior: 'smooth'
    });
});
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }


