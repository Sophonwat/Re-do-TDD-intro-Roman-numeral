//description: test function for testing the functions
function test(description) { //start a test and print the description of the test

    console.log(description); //print the description of the test

    return {
        isEqual, //return the function isEqual
        dosNotThrowError //return the function dosNotThrowError
    }
}

//description: function to test if the function does not throw an error
//
function dosNotThrowError(testFunction, description) { //doesNotThrowError check if a function runs without throwing an error

    try {
        testFunction(); //tried to run the test function
        console.log(`🟢 ${description}`); //Print green circle if no error
    } catch (error) {
        console.log(error); //prints the error
        console.log(`🔴 ${description}`) //Prints red circle if there is an error
    }

}


function isInRange(recived, expectedLowerBound, expectedUpperBound, description) {

    if (recived >= expectedLowerBound && recived <= expectedUpperBound) { //isInRange checks if the recived value is in the range of the expected values
        console.log(`🟢 ${description}`); //Print green circle if in range
    } else {
        console.log(`🔴 ${description}. Expected ${expected}, recived ${recived}`);
    }

}

function isEqual(recived, expected, description) { //isEqual checks if the recived value is equal to the expected value

    if (recived === expected) {
        console.log(`🟢 ${description}`); //print green circle if equal
    } else {
        console.log(`🔴 ${description}. Expected ${expected}, recived ${recived}`);
    }

}

export default test