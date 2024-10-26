function stringChop(str, size) {
  // your code here
let chan = Math.ceil(str.length / size);
let arr = [];
	for(let i=0;i<chan;i++)
	{
	  let temp = str.slice(0+(size*i), size + (size*i));
	  arr.push(temp);
	}
return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = Number(prompt("Enter Chunk Size."));
alert(stringChop(str, size));
