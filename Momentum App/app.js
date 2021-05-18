//todolist
const LOCAL_STORAGE_USER_KEY = 'user'
let displayName = localStorage.getItem(LOCAL_STORAGE_USER_KEY)
const quotesDisplay = document.querySelector('.modal-body');
const userForm = document.querySelector('[data-user-form]');
const userInput = document.querySelector('[data-user-input]');
let userName = document.querySelector('[data-name]');
let btn = document.getElementById('quoteButton');
let output = document.getElementById('output');
let btnQuote= document.getElementById('quoteSubmit')
const newQuote = document.querySelector('[data-user-quote]')
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

if(displayName){
  userName.innerHTML=displayName;
}
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

//quotes
var quotes = [
  "Stay Hungry. Stay Foolish. - Steve Jobs",
  "Good Artists Copy, Great Artists Steal.- Pablo Picasso",
  "Argue with idiots, and you become an idiot.- Paul Graham",
  "Be yourself; everyone else is already taken. - Oscar Wilde",
  "Simplicity is the ultimate sophistication. - Leonardo Da Vinci",
  "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty. – Winston Churchill",
  "Don’t Let Yesterday Take Up Too Much Of Today. – Will Rogers",
  "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.” – Unknown",
  "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Inspirational Quote By Vince Lombardi",
  "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.” – Steve Jobs",
  "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.” – Rob Siltanen",
  "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.” – Og Mandino",
  "Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.” – Mohnish Pabrai",
  "We May Encounter Many Defeats But We Must Not Be Defeated.” – Maya Angelou",
  "Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do. – Johann Wolfgang Von Goethe"
]

btn.addEventListener('click', function(){
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  output.innerHTML = randomQuote;
})


btnQuote.addEventListener('click', function(){
  if(newQuote.value.length>5){
    quotes.push(newQuote.value);
    output.innerHTML= quotes[quotes.length-1];
    newQuote.value= "";
  }
  this.preventDefault;
})
