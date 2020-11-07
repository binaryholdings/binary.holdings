import React, { useState } from 'react';
import styles from './styles.module.css';

export default function Hero(props) {

	let [nominators, setNominators] = useState(15);
	let [totalStake, setTotalStake] = useState(15000.69);
	let [totalPayouts, setTotalPayouts] = useState(1000.69);

	return (
		<section className={styles.section}>
			<div className="container">
				<div className="row">
					<div className="col col--4">
						<h3>Total Nominators</h3>
						<p className={styles.featuredNumber}>{nominators}</p>
					</div>
					<div className="col col--4">
						<h3>Total Stake</h3>
						<p className={styles.featuredNumber}>${totalStake.toLocaleString()}</p>
					</div>
					<div className="col col--4">
						<h3>Total Payouts</h3>
						<p className={styles.featuredNumber}>${totalPayouts.toLocaleString()}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
