// Function to load an HTML fragment into a DOM element
function loadHTML(id, file) {
  return fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

// Load all sections and initialize AOS after loading
Promise.all([
  loadHTML('header', 'page/header.html'),
  loadHTML('content', 'page/home.html'),
//   loadHTML('footer', 'page/footer.html')
]).then(() => {
  AOS.init({
    duration: 1500,
    once: false, // Animation repeats every time
  });
});

//load aos


function viewfunct(){
    let add = document.getElementById('nav-view');
    if(add.classList.contains('clicked')){
       add.classList.remove('clicked');
       add.innerHTML = '&#9776;'; 
    }else{
        add.classList.add('clicked');
        add.innerHTML = '&times;';
    }
    console.log('clicked');
}
// let view_nav = document.getElementById('nav-view');
//   view_nav.addEventListener('click', () => {
    
//      view_nav.classList.add('clicked');
//   })