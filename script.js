function firstNonRepeatedChar(str) {
 // Write your code here
	let map=new Map()
for(let value of str){
    if(map.has(value)){
        map.set(value,map.get(value)+1)
    }else{
        map.set(value,1)
    }
}
for(let value of str){
    if(map.get(value)==1){
        return value
    }
}
return "null"
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
