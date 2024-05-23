function addTwoNums(num1, num2){
    console.log(num1+num2);
}
const res = addTwoNums(3,5);

console.log("Result: "+res);  //Undefined

console.log("---------------------------------------")

function addTwo(num1,num2){
    const res = num1+num2;
    return res;
}
const result = addTwo(5,7)
console.log(result)
console.log("---------------------------------------")


function loginUserMsg(username){
    if(!username ){
        console.log("enter a name")
        return
    }
    return `${username}, just logged in.`
}

console.log(loginUserMsg("jalaj"))
console.log(loginUserMsg())   //undefined aayega


//Default min string
function loginUserMsgg(username ="Jas"){
    if(!username ){
        console.log("enter a name")
        return
    }
    return `${username}, just logged in.`
}

console.log(loginUserMsgg())
console.log(loginUserMsgg("Yo Yo Honey Singh"))

//Rest operator (... return an array)

function calculateCart (...nums){
    return nums;
}
console.log(calculateCart(200,400,250,150))

//return 250 and 150 
function calculateCart1 (val1,val2, ...nums){   
    return nums;
}
console.log(calculateCart1(200,400,250,150))

const user = {
    username: "Jalaj",
    email: "jalaj@gmail.com"
}

function handleObj(anyobject){
    console.log(`Username is: ${anyobject.username}, and email is ${anyobject.email}`)
}
console.log(handleObj(user))

const arr = [1,5,2,8,9]
function returnSec(getArray){
    return getArray[1]
}
console.log(returnSec(arr))