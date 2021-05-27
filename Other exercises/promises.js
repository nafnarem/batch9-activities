

let data = {firstName: "John",
age: 31, email: "johnparreno@gmail.com"}
                

const findUserData = (data) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if(data) {
                resolve(`${data.firstName}  ${data.age} ${data.email}`);
            } else {
                reject("Not found");
            }
        }, 1000)
    })
}

findUserData(data)
.then( (success) => console.log(success))
.catch( (error) => console.log(error) );

findUserData(null)
.then( (success) => console.log(success))
.catch( (error) => console.log(error) );