/* let count = Math.random();
count=count
while (count<100) {
    console.log( "This is Number- ", (count));
    count++;
}


 */

/* let maximumn =parseInt( prompt("Eneter a Number:"));
while(!maximumn){
    maximumn =parseInt( prompt("Eneter a valid Number:"));
}
const targetnum=Math.floor(Math.random()*maximumn)+1;
console.log(targetnum);



let guass=parseInt( prompt("Enter your first guess! :"));
let attampt = 1;
while(guass !== targetnum){
    attampt++;
    if (guass>targetnum) {
        guass=parseInt (prompt("Number is too high"));
        
    } else { guass=parseInt (prompt('Too low'));
        
    }

}
console.log(`You win! it took you ${attampt}`); */

let inputData = prompt("What You want to do? \n New \n Delete \n List \n Quit");
const todos = ["Collect Checken Eggs", "Clean Letter Box"];

while (inputData !== "Quit" && inputData !== "q") {
  if (inputData === "list") {
    console.log("-----------------------------------");
    for (let index = 0; index < todos.length; index++) {
      console.log(`${index}: ${todos[index]}`);
    }

    console.log("-----------------------------------");
  } else if (inputData === "New" && inputData === "N") {
    const newtodo = prompt("Ok ! What you Want to Add");
    todos.push(newtodo);
    console.log(`${newtodo} Add to Our list`);
  } else if (inputData === "Delete" && inputData === "D") {
    const deleteData = prompt("Enter a index to delete!");
    todos.splice(deleteData, 1);
    console.log(deleteData);
  }
  inputData = prompt("What You want to do? \n New \n Delete \n List \n Quit");
}

console.log("You Quit this Application!");
