function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function binaryAnimation(repeat = true) {
	let title = document.querySelector(".binary")
	let finalTitle = title.innerText.split("");

	let length = finalTitle.length;

	// Track each letter if it is already found.
	let tracker = [];
	for (let i = 0; i < length; i++) {
		tracker.push(false);
	}

	// Configuration for animation
	let totalTime = 5_000;
	let animationTime = 200;
	let chance = .05;

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
		await binaryAnimation(repeat);
	}
}

binaryAnimation(true);
