const score: Array<number> = []
const names: Array<string> = []

function identityOne (val: boolean | number): boolean | number {
    return val;
}

function identifyTwo(val: any): any {
    return val;
}

function identityThree<Type> (val: Type): Type {
    return val;
}

identityThree("")

function identityFour<T> (val: T): T {
    return val;
}

interface Bottle { 
    brand: string
    type: number
}

identityFour<Bottle>({
    brand: "",
    type : 234
})

function getSearchProduct<T>(products: T[]): T{

    //do some db operations
    return products[2];
}

// const getMoreSearchProducts = <T>() => {}
const getMoreSearchProducts = <T>(products: T[])) : T => {
      return products[2];
}