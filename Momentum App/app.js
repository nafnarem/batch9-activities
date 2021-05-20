//todolist
const LOCAL_STORAGE_USER_KEY = 'user'
let displayName = localStorage.getItem(LOCAL_STORAGE_USER_KEY)
const quotesDisplay = document.querySelector('.modal-body');
const userForm = document.querySelector('[data-user-form]');
const userInput = document.querySelector('[data-user-input]');
let userName = document.querySelector('[data-name]');
let btn = document.getElementById('quoteButton');
let output = document.getElementById('output');
const newQuote = document.querySelector('[data-user-quote]')
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const focusInput= document.querySelector('[data-focus-input]')
const focusForm= document.querySelector('[data-focus-form]')
let focusDisplay = document.querySelector('[data-focus-display')
const quoteForm = document.querySelector('[data-quote-form]')
let focusMoreBtn= document.querySelector('[data-focus-more]')
let dataFocusTitle= document.querySelector('[data-focus-title]')
let nightMode = document.querySelector('[data-night-mode]')
let hamburger1 = document.querySelector('[data-burger1]')
let hamburger2 = document.querySelector('[data-burger2]')
let hamburger3 = document.querySelector('[data-burger3]')
const displayList= document.querySelector('[data-listDisplay]')
const displayTask= document.querySelector('[data-list-display-container]')
if(displayName){
  userName.innerHTML=displayName;
}
focusForm.addEventListener('submit', e=>{
  e.preventDefault()
  focusDisplay.textContent = focusInput.value;
  focusInput.classList.toggle('hide')
  focusMoreBtn.classList.toggle('reveal')
  dataFocusTitle.textContent="Today's Focus";

})
focusMoreBtn.addEventListener('click', e=>{

  focusForm.classList.toggle('hide');
  focusMoreBtn.classList.toggle('hide');
})

//Display User

  
  userForm.addEventListener('submit', e => { 
  e.preventDefault()
  localStorage.setItem(LOCAL_STORAGE_USER_KEY, userInput.value);
  userName.innerHTML = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
  closeModal(modal)
})

//Modal

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
  quotesDisplay.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
newQuote.style.width = btn.style.width;
newQuote.style.padding = "17px";
//quotes
var quotes = [
  "Stay Hungry. Stay Foolish. - Steve Jobs",
  "Good Artists Copy, Great Artists Steal.- Pablo Picasso",
  "Argue with idiots, and you become an idiot.- Paul Graham",
  "Be yourself; everyone else is already taken. - Oscar Wilde",
  "Simplicity is the ultimate sophistication. - Leonardo Da Vinci",
  "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty. – Winston Churchill",
  "Don’t Let Yesterday Take Up Too Much Of Today. – Will Rogers",
  "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character. – Unknown",
  "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up. – Inspirational Quote By Vince Lombardi",
  "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.” – Steve Jobs",
  "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do. – Rob Siltanen",
  "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough. – Og Mandino",
  "Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur. – Mohnish Pabrai",
  "We May Encounter Many Defeats But We Must Not Be Defeated. – Maya Angelou",
  "Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do. – Johann Wolfgang Von Goethe",
  "Do. Or do not. There is no try. - Yoda"
]

btn.addEventListener('click', function(){
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  output.innerHTML = randomQuote;
})


quoteForm.addEventListener('submit', e => { 
  e.preventDefault()
    quotes.push(newQuote.value);
    output.innerHTML= quotes[quotes.length-1];
    newQuote.value= "";
  }
)

nightMode.addEventListener('click', e=>{
  var element = document.body;
  let toggle = document.getElementById("toggle").getAttribute("style");
  
  if (toggle == "transform: translateX(0px);" ) {
    document.getElementById("toggle").style.transform = "translateX(60px)";
 }

 else {
    document.getElementById("toggle").style.transform = "translateX(0px)";
 }
  element.classList.toggle("dark-mode");
}
) 

hamburger1.addEventListener('click', e=>{
  hamburger1.classList.toggle('change');
  displayList.classList.toggle('hide');

}

)


hamburger2.addEventListener('click', e=>{
  hamburger2.classList.toggle('change');
  displayTask.classList.toggle('hide');
}

)

hamburger3.addEventListener('click', e=>{
  hamburger3.classList.toggle('change');
}

)