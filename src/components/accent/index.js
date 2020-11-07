import React from 'react';

export default function Accent(props) {
	let start = props.children;
	let split = start.split(" ");
	let final = [];

	for (let word of split) {
		switch (word) {
			case "zero":
				final.push(<span className="binaryBlue">{word}{" "}</span>);
				break;
			case "one":
				final.push(<span className="binaryPink">{word}{" "}</span>);
				break;
			case "B1NARY":
					final.push(
						<>
							<span>B</span>
							<span className="binaryPink">1</span>
							<span>NARY</span>
						</>
					);
					break;
			case "H0LDINGS":
				final.push(
					<>
						<span>H</span>
						<span className="binaryPink">0</span>
						<span>LDINGS</span>
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
