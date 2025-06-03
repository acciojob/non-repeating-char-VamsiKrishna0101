function firstNonRepeatedChar(str) {
 // Write your code here
	let map=new Map()
for(let value of str){
 map.set(value,(map.get(value)||0)+1)
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
