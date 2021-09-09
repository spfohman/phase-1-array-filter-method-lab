// Code your solution here
function findMatching(drivers, name){  
    //var name="Bobby"
    return drivers.filter(obj =>
    obj.toLowerCase().indexOf(name.toLowerCase()) >= 0);
}

function fuzzyMatch(drivers, letters){
    return drivers.filter(obj=>
        obj.toLowerCase().indexOf(letters.toLowerCase())===0);
}

function matchName(drivers, name){
    return drivers.filter(obj=> obj.name.includes(name));
    

}