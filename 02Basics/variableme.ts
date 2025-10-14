let greetings: string = "hello Jaswinder";

console.log(greetings);

let userId: number = 324134;

let isUserLoggedIn: boolean = false;

let hero: string;
function getHero(): string{
    return "thor";
}

hero = getHero();

function signUp(name: string, email: string, isPaid: boolean){
}
signUp("jaswinder", "jsn@gmail.com", true);

let login = (name: string, email: string, ispiad: boolean = false) => {}
login("j", "j@j.com");

function numberCheck(n: number){
    if(n > 5){
        return true;
    }
    
    return  "200 Okay";
}

const getHello = (greeting: string) : string =>  {
    return "";
}

const heros = ["spiderman", "Ironman", "Antman", "Thor", "Loki"];

heros.map( (hero) : string => {
    return `here is the ${hero}`;
});

function consoleError(errmsg: string): void{
    console.log(errmsg);
}

function handleError(errmsg: string): never{
   throw new Error(errmsg);
   
}

export {};