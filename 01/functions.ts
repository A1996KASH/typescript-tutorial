function addTwo(num: number) {
    return num +2
}

addTwo(5)


// set return type of function
function addTwoNNumbers(num: number): number {
    return num + 2
}

function consoleMsg(msg: string): void {
    console.log(msg)
}

function throwError(msg: string): never {
    throw new Error(msg);
}
const newFuction = (num1: number): string | boolean => {
    if(num1 > 5) {
        return true
    }
    return 'Hello'
}

addTwo(2) // return type is not defined can return string also
addTwoNNumbers(45)
consoleMsg('Hello')
throwError('Error occured')


export {}