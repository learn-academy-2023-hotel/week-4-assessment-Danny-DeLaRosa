// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("shuffleItems", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining items.", () => {
        expect(shuffleItems(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
        expect(shuffleItems(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
})

const colors1 = ["purple", "blue", "green", "yellow", "pink"]        
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.
   
// Pseudo code:
// create a function that takes in the arrays
const shuffleItems = (array) => {
    // create a variable to remove purple from the array
    let splitArray = array.splice(1)
    // shuffle the array without purple using the fisher-yates method
    for (let i = splitArray.length - 1; i > 0; i--){
        let randomNum = Math.floor(Math.random() * (i + 1));
        let whoKnows = splitArray[1]
        // swap the elements in the split array
        splitArray[1] = splitArray[randomNum]
        splitArray[randomNum] = whoKnows
    }
    return splitArray
}

//if I am being completely honest. i have no clue what i just did. after the for loop, i had to just copy an example of the Fisher Yates Method to this function.

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
describe("tallyCounter", () => {
    it("takes in an object that contains up votes and down votes and returns the end tally.", () => {
        expect(tallyCounter(votes1)).toEqual(11)
        expect(tallyCounter(votes2)).toEqual(-31)
    })
})
const votes1 = { upVotes: 13, downVotes: 2 }
// // Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// // Expected output: -31

// // b) Create the function that makes the test pass.

// // Pseudo code:
// create a function that takes in the objects above.
const tallyCounter = (obj) => {
    // return the difference of the keys in the obejects
    return obj.upVotes - obj.downVotes
}