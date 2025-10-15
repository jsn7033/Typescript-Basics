/*
union is used when we are not sure about the data type
try to keep it as strict as possible means don't add too many data types
score: number | string means score can be assigned a number and a string value at the same time

*/
//union on simple variable
var score = 33;
score = 44;
score = "55";
//union operation with objects
var jaswinder = {
    name: "Jaswinder",
    id: 34534
};
jaswinder = {
    username: "jsn123",
    id: 293485093
};
//with function
function getDbId(id) {
    //some operation
    console.log("Db id is ".concat(id));
}
getDbId(234532);
getDbId("3d4085vbfd0934dfg");
