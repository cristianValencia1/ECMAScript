function newFuntion(name, age, country){
    var name = name || "David";
    console.log("🚀 ~ file: index.js ~ line 3 ~ newFuntion ~ name", name)
    var age = age || "30";
    console.log("🚀 ~ file: index.js ~ line 5 ~ newFuntion ~ age", age)
    var country = country || "Pereira";
    console.log("🚀 ~ file: index.js ~ line 7 ~ newFuntion ~ country", country)
    
}
function newFuntion2(name = "David", age = "30", country = "Pereira"){
console.log("🚀 ~ file: index.js ~ line 11 ~ newFuntion2 ~ country", country)
console.log("🚀 ~ file: index.js ~ line 11 ~ newFuntion2 ~ age", age)
console.log("🚀 ~ file: index.js ~ line 11 ~ newFuntion2 ~ name", name)
    
    
}

newFuntion()
newFuntion2()