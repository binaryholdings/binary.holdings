import React from 'react';

export default function Accent(props) {
	let start = props.children;
	let split = start.split(" ");
	let final = [];

	for (let id in split) {
		let word = split[id];
		switch (word) {
			case "zero":
				final.push(<span key={id} className="binaryBlue">{word}{" "}</span>);
				break;
			case "one":
				final.push(<span key={id} className="binaryPink">{word}{" "}</span>);
				break;
			case "B1NARY":
					final.push(
						<>
							<span key={id}>B</span>
							<span key={id} className="binaryPink">1</span>
							<span key={id}>NARY</span>
						</>
					);
					break;
			case "H0LDINGS":
				final.push(
					<>
						<span key={id}>H</span>
						<span key={id} className="binaryPink">0</span>
						<span key={id}>LDINGS</span>
					</>
				);
				break;
			default:
				final.push(word + " ");
		}
	}

	return (
		final
	);
}
