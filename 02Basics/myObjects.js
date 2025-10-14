var User = {
    name: "jaswnder",
    email: "jsnagi@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({
    name: "Jaswinder",
    isPaid: false,
    email: "jsnagi" //function createUser donn't accept this parameter
});
//to avoid above behaviour I can create a object separately
var newUser = {
    name: "Jaswinder",
    isPaid: false,
    email: "jsn@gmail.com"
    /* this is not defined in the function. but this way we can still
    pass it */
};
createUser(newUser); //now it won't complain about email 
//syntax for object as return type
function createCourse() {
    return { name: "jaswinder" };
}
