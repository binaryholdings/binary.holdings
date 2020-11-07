import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function Hero(props) {
	const [animationLoaded, setAnimationLoaded] = useState(false);

	let animationScript = useBaseUrl("logo/animation.js");

	useEffect(() => {
		var loadScript = function (src) {
			var tag = document.createElement('script');
			tag.async = false;
			tag.src = src;
			var body = document.getElementsByTagName('body')[0];
			body.appendChild(tag);
		}

		if (!animationLoaded) {
			loadScript(animationScript);
			setAnimationLoaded(true);
		}
	});

	return (
		<div className={styles.heroWrapper}>
			<div className={clsx(styles.glitch, styles.glitchFront)}>
				{props.children}
			</div>
			<div className={clsx('binary', styles.glitch)} final={props.children}>
				{props.children}
			</div>
			<div className={clsx(styles.glitch, styles.glitchBack)}>
				{props.children}
			</div>
		</div>
	);
}
