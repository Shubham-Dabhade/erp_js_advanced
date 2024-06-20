try {
    let result = someNonExistentFunction();
} catch (error) {
    console.log(error.message); // someNonExistentFunction is not defined
}

// Custom error
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

try {
    throw new CustomError('Something went wrong!');
} catch (error) {
    console.log(error.name); // CustomError
    console.log(error.message); // Something went wrong!
}
