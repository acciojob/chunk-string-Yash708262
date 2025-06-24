function stringChop(str, size) {
  // your code here
	 if (!str) return []; // Handle null or undefined input

    const chunks = [];
    for (let i = 0; i < str.length; i += length) {
        chunks.push(str.slice(i, i + length));
    }
    return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
