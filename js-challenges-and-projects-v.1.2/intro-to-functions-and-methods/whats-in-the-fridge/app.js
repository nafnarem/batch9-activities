const downButton = document.querySelector('#down')
const upButton = document.querySelector('#up')
const buyListDisplay = document.querySelector('#first-list')
const fridgeListDisplay = document.querySelector('#second-list')

const buyList = ['chicharon', 'buko pie', 'mango', 'bacon' ]
const fridge = []

//Challenge: Please fill the fridge array with 5 items of your choice. 
fridge.push('iceCream');
fridge.push('cake');
fridge.push('milk');
fridge.push('pizza');
fridge.push('spaghetti');

//Challenge 2: You have bought some chicharon.
//Please remove it from the buyList and add it to the items in fridge.
buyList.shift();
fridge.push('chicharon');

//Challenge 3: Write a function that will remove an item from the fridge,
//and put it in the buyList, on the press of the moveUp button.

function moveUp(){
    //your code
    let item = fridge[0];
    if(fridge[0]!=null){
        fridge.shift();
        buyList.unshift(item);
        buyListDisplay.innerHTML = buyList;
        fridgeListDisplay.innerHTML = fridge;
    }

}

upButton.addEventListener('click', moveUp)

//Challenge 4: Write a function that will remove the last item in the buyList, 
//and put it in the fridge.

function moveDown(){
    //your code
    let item = buyList[buyList.length-1];
    if(buyList[0]!=null){
        buyList.pop();
        fridge.push(item);
        buyListDisplay.innerHTML = buyList;
        fridgeListDisplay.innerHTML = fridge;
    }
}

downButton.addEventListener('click', moveDown)

buyListDisplay.innerHTML = buyList
fridgeListDisplay.innerHTML = fridge