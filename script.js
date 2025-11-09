function stringChop(str, size) {
  // your code here
	 if (!str) return [];

  // Convert size to number (because prompt() returns string)
  size = Number(size);

  const result = [];

  // Loop through the string, jumping by 'size' each time
  for (let i = 0; i < str.length; i += size) {
    // slice string from i to i + size
    result.push(str.slice(i, i + size));
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
