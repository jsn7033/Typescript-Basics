/* 
union is used when we are not sure about the data type
try to keep it as strict as possible means don't add too many data types
score: number | string means score can be assigned a number and a string value at the same time

*/

//union on simple variable
let score: number | string = 33;

score = 44
score = "55"

/* 
similarly a variable, union will work on objects too
*/
type User = {
    id: number
    name: string
}

type Admin= {
    username: string
    id: number
}

//union operation with objects
let jaswinder : User | Admin  = {
    name: "Jaswinder",
    id: 34534
}


jaswinder = {
    username: "jsn123",
    id: 293485093

}

//with function
function getDbId(id : number | string){
    //some operation
    console.log(`Db id is ${id}`)

    //issue here is we cannot directly do manipulation 

    // directly this action is not allowed as it doesn't know datatype we are using
    // id.toLowerCase();

    //check datatype and then it allows manipulation
    if(typeof id === "string"){
      id =   id.toLowerCase();
    }

    if(typeof id === "number"){
        id += 1;
    }

}

getDbId(234532);
getDbId("3d4085vbfd0934dfg")


//array

//it allows acceptance of both string or integer values
const data : (number | string)[] = [1,2,3, "jsn"]

// actual usecase
/* it’s a way of restricting the variable to only a few allowed string options — like an “enum,” but lighter and simpler. */
let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
seatAllotment = "crew"  // not allowed
//

export {}