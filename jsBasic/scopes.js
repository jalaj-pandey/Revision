var aa =300
if(true){
    aa = 15
}
console.log(aa)  



let a = 300
if(true){
    let a = 150
    const b = 20
    console.log("Inner a:", a)
}
console.log(a)



function one(){
    const username = "Jalaj"
    function two(){
        const website = "youtube"  
        console.log(username)    //child function can access its parents property  called closer
    }
    // console.log(website)         // it can not access website 
    two()
}

one()


console.log("------------------------")


console.log(addOne(5))
function addOne(num){
    return num+1;
}
console.log(addOne(5))



//hoisting

// console.log(addTwo(5))   //will throw error

//Known as expression 
const addTwo = function(num){
    return num+2;
}

console.log(addTwo(5))