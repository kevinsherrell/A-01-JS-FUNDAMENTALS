////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////


const x = 6

// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.
function sumPlusX(num1, num2) {
    return num1 + num2 + x;
}

// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.
const sumPlusXarrow = (num1, num2) => num1 + num2 + x;
// 3. Write a function that returns another function. (use arrow functions please)
const returnFunction = () => {
    const f = (a, b) => a + b + x;

    return f;
}

// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.

// ANSWER: This is an example of a closure. The inside function has access to all variables within the scope of the outer function.

const getFunction = () => {
    const y = 5;

    const insideFunc = (a) => y + a;

    return insideFunc;
};

console.log(getFunction()(2))

// 5. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError"  and log the result to the console.
// Make sure to handle errors that could be thrown by "couldThrowError()"
// If there is an error log "sorry, there was an error" to the console.

const couldThrowError = () => {

    if (Math.ceil(Math.random() * 2) < 2) {
        throw new Error("Error was thrown");
    }

    return 'success'
}

const questionFive = (callback => {
    try {
        const result = callback();
        if (result === 'success') {
            console.log(result);
            return
        }
    } catch (err) {
        console.log("sorry, there was an error");
    }

})

questionFive(couldThrowError);
////////////////////////////////////////////////////////////
//// Handling data:
////////////////////////////////////////////////////////////


const userData = [
    {
        id: '111',
        name: 'Peter',
        favorites: {
            food: ['burgers', 'pizza'],
            activites: ['basketball', "baseball"]
        },
    },
    {
        id: '222',
        name: 'John',
        favorites: {
            food: ['burgers', 'tacos'],
            activites: ['football', "golf"]
        },
    },
    {
        id: '333',
        name: 'Mary',
        favorites: {
            food: ['pizza', 'tacos', 'fried chicken'],
            activites: ['volleyball', "softball"]
        },
    }
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const mapped = userData.map(item => {
    return {id: item.id, favoriteFoods: item.favorites.food.length};
})
console.log("mapped", mapped);
// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

const reduced = userData.reduce((accumulator, currentValue) => {
    if (currentValue.favorites.food.includes("pizza")) accumulator.push(currentValue.name);
    console.log("accumulator", accumulator);
    return accumulator;
}, [])

console.log("REDUCED", reduced);
// 7. Show an example of a switch statement being used
const switchExample = () => {
    const random = Math.floor(Math.random() * 6);
    switch (random) {
        case 1:
            console.log(random);
            break;
        case 2:
            console.log(random);
            break
        case 3:
            console.log(random);
            break;
        case 4:
            console.log(random);
            break;
        case 5:
            console.log(random);
        default:
            console.log(0);
    }
}
switchExample();
////////////////////////////////////////////////////////////
//// OBJECT AND ARRAY DESTRUCTURING
////////////////////////////////////////////////////////////


const userPersonalData = {
    name: 'peter',
    age: '56',
    birthday: 'jan 1st',
};
const userGameData = {
    score: 4546,
    accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
};


// 8. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }
const _user = {...userPersonalData, ...userGameData};
console.log("user", _user);
// 9. Make a copy of your new user object but override the birthday to december 31st
const editedUser = {..._user, birthday: "december 1st"};
console.log("edited user", editedUser);

// 10. Use the spread operator to make a copy of the accomplishments array and store it in a new variable
const newAccomplishments = [...userGameData.accomplishments];
console.log("new accomplishments",newAccomplishments);

//  11.Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food

var user = {
    name: 'pete',
    age: '32',
    favoriteThings: {
        food: ['pizza', 'tacos', 'burgers', 'italian'],
        movies: [],
    },
};


// 12. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //


// 13. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food. 
//    the food variable should have all the array items starting from the third one.
const data = ['peter', '34', 'apple', 'oranges', 'pizza', 'tacos'];


// 14. use object destructuring to grab the following from the userInfo object:
// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing

const userInfo = {
    name: 'Peter',
    favorites: {
        needs: {
            food: ['burger', 'pizza', 'tacos', 'fried chicken', 'sushi'],
        },
        wants: {
            things: ['cars', 'jewelry'],
        },
    },
};

var fetchData = () => new Promise((resolve, reject) => {
    console.log('fetchingData from imaginary database')
    setTimeout(() => {
        try {
            // fetchingData from imaginary database
            if ((Math.ceil(Math.random() * 2)) < 2) {
                throw new Error('Error!')
            }
            resolve({name: 'john', age: 42})
        } catch (error) {
            reject(error);
        }
    }, 5000);
});


module.exports = fetchData;


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
var fetchData = () => new Promise((resolve, reject) => {
    console.log('fetchingData from imaginary database')
    setTimeout(() => {
        try {
            // fetchingData from imaginary database
            if ((Math.ceil(Math.random() * 2)) < 2) {
                throw new Error('Error!')
            }
            resolve({name: 'john', age: 42})
        } catch (error) {
            reject(error);
        }
    }, 5000);
});


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////