const nightClubRegister = [
    {
        name: 'Tony',
        lastname: 'Stark',
        age: 25,
        gender: 'male'
    },
    {
        name: 'Harry',
        lastname: 'Potter',
        age: 16,
        gender: 'male'
    },
    {
        name: 'Hermione',
        lastname: 'Granger',
        age: 17,
        gender: 'female'
    },
    {
        name: 'Steve',
        lastname: 'Rogers',
        age: 62,
        gender: 'male'
    }
]

for (i = 0; i < nightClubRegister.length; i++) {
    if(nightClubRegister[i].age<=18){
        if(nightClubRegister[i].gender === 'male'){
            console.log("Sorry you are not old enough to enter this establishment Mr. " + nightClubRegister[i].lastname+ "!");  
        }
        else{
            console.log("Sorry you are not old enough to enter this establishment Miss " + nightClubRegister[i].lastname+ "!");   
        }
    }
    if(nightClubRegister[i].gender === 'male'){
        console.log("Welcome Mr. " + nightClubRegister[i].lastname+ "!");   
    }
    else{
        console.log("Welcome Miss " + nightClubRegister[i].lastname+ "!");   
    }
  }