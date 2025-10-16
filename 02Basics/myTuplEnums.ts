
const user: string[] = ["hc"]


let  tuser : [string, number, boolean] ;
tuser = ["hc", 234, false];

let rgb : [number, number, number] = [234,234,213];

type User = [number, string]

const newUser: User = [234, "example@gmail.com"]

//down side
//it allows all methods from array and now this bug is closed by Microsoft
// newUser.push(true)