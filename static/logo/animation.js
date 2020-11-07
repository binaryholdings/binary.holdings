// Configuration for animation
const totalTime = 5_000;
const animationTime = 200;
const chance = .05;

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function binaryAnimation(repeat = true) {
	let title = document.querySelector(".binary")
	let finalTitle = title.getAttribute("final") || title.innerText;
	finalTitle = finalTitle.split("");

	let length = finalTitle.length;

	// Track each letter if it is already found.
	let tracker = [];
	for (let i = 0; i < length; i++) {
		tracker.push(false);
	}

	for (let i = 0; i < totalTime; i += animationTime) {
		// The string we will construct.
		let tempString = [];
		// If all values are found, we will exit early.
		let allTrue = true;
		for (let j = 0; j < length; j++) {
			let random = Math.random();
			// If it was already found, or it is a space, push the final letter.
			if (tracker[j] || finalTitle[j] == " ") {
				tempString.push(finalTitle[j]);
			// Else there is a 1 - 2x chance to generate a random binary digit.
			} else if (chance < random && random < 1.0 - chance) {
				let zeroOrOne = Math.round(random);
				tempString.push(zeroOrOne);
				allTrue = false;
			// And a 2x chance to find the right letter.
			} else {
				tempString.push(finalTitle[j]);
				tracker[j] = true;
			}
		}

		// All values have been found.
		if (allTrue) { break };

		title.innerText = tempString.join("");
		await sleep(animationTime);
	}

	// Loop is finished, make sure final title is placed.
	title.innerText = finalTitle.join("");

	if (repeat) {
		await sleep(totalTime);
		await binaryDissolve(repeat);
	}
}

async function binaryDissolve(repeat = true) {
	let title = document.querySelector(".binary")

	// Start with the inner text
	let finalTitle = title.innerText.split("");
	let length = finalTitle.length;

	let extraCycles = 5;

	for (let i = 0; i < length + extraCycles; i ++) {
		// The string we will construct.
		let tempString = [];
		for (let j = 0; j < length; j++) {
			if (j <= i && finalTitle[j] != " ") {
				let random = Math.random();
				let zeroOrOne = Math.round(random);
				tempString.push(zeroOrOne);
			} else {
				tempString.push(finalTitle[j])
			}
		}

		title.innerText = tempString.join("");
		await sleep(animationTime);
	}

	if (repeat) {
		await binaryAnimation(repeat);
	}
}

binaryAnimation(true);
