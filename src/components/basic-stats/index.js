import BN from 'bn.js';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

function Main(props) {

	const { api } = props;

	const tokenSymbol = "KSM";

	let validators = ["DTLcUu92NoQw4gg6VmNgXeYQiNywDhfYMQBPYg2Y1W6AkJF", "FFdDXFK1VKG5QgjvqwxdVjo8hGrBveaBFfHnWyz1MAmLL82"];

	let [nominators, setNominators] = useState(0);
	let [totalStake, setTotalStake] = useState(0.0);
	let [totalPayouts, setTotalPayouts] = useState(0.0);

	// Convert a big number balance to expected float with correct units.
	function toUnit(balance, decimals) {
		const base = new BN(10).pow(new BN(decimals));
		const dm = new BN(balance).divmod(base);
		return parseFloat(dm.div.toString() + "." + dm.mod.toString())
	}

	useEffect(() => {
		let unsub = null;

		let decimals = api.registry.chainDecimals;
		api.derive.staking.accounts(validators, accounts => {


			let nominators = 0;
			let totalStake = new BN();
			let totalPayouts = 0;

			for (const account of accounts) {
				nominators += account.exposure.others.length;
				totalStake = totalStake.add(account.exposure.total.toBn());
			}

			setNominators(nominators);
			setTotalStake(toUnit(totalStake, decimals));
			setTotalPayouts(totalPayouts);
		}).then(u => {
			unsub = u;
		})
		.catch(console.error);

		return () => unsub && unsub();
	}, [api, api.derive.staking])

	return (
		<section className={styles.section}>
			<div className="container">
				<div className="row">
					<div className="col col--4">
						<h3 className={styles.featuredTitle}>Total Nominators</h3>
						<p className={styles.featuredNumber}>{nominators}</p>
					</div>
					<div className="col col--4">
						<h3 className={styles.featuredTitle}>Total Stake</h3>
						<p className={styles.featuredNumber}>{totalStake.toLocaleString()} {tokenSymbol}</p>
					</div>
					<div className="col col--4">
						<h3 className={styles.featuredTitle}>Total Payouts</h3>
						<p className={styles.featuredNumber}>{totalPayouts.toLocaleString()} {tokenSymbol}</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default function BasicStats(props) {
	const { api } = props;
	return api && api.derive && api.derive.staking ? (
		<Main {...props} />
	) : null;
}
