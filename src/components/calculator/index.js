import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col, Table } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';
import styles from './styles.module.css';
import clsx from 'clsx'

export default function Hero(props) {

	let [value, setValue] = useState(200);
	let [daily, setDaily] = useState(0);
	let [monthly, setMonthly] = useState(0);
	let [yearly, setYearly] = useState(0);
	let [toDollars, setToDollars] = useState(30);
	let [returns, setReturns] = useState(.069);
	let [symbol, setSymbol] = useState("KSM");
	let [max, setMax] = useState(30000);

	useEffect(() => {
		// Math for returns here.
		setDaily((value * returns / 365).toFixed(2))
		setMonthly((value * returns / 12).toFixed(2))
		setYearly((value * returns).toFixed(2))

	}, [value, symbol]);

	return (
		<section className={styles.section}>
			<div className="container">
				<div className="row">
					<div className="col col--6">
						<Card className={styles.card}>
							<Card.Body>
								<Row>
									<Col md={8}>
										<div>How much {symbol} do you have?</div>
										<div className={styles.value}>{value}</div>
									</Col>
									<Col md={4}>
										<div>Yearly Returns</div>
										<div className={styles.returns}>+{returns * 100}%</div>
									</Col>
								</Row>
								<RangeSlider
									className={styles.slider}
									value={value}
									tooltip={'off'}
									max={max}
									onChange={e => setValue(e.target.value)}
								/>
								<Table bordered variant="dark" responsive className="d-table">
									<tbody>
										<tr>
											<td>Daily Earnings</td>
											<td>{daily} {symbol}</td>
											<td>${(daily * toDollars).toFixed(2)}</td>
										</tr>
										<tr>
											<td>Monthly Earnings</td>
											<td>{monthly} {symbol}</td>
											<td>${(monthly * toDollars).toFixed(2)}</td>
										</tr>
										<tr>
											<td>Yearly Earnings</td>
											<td>{yearly} {symbol}</td>
											<td>${(yearly * toDollars).toFixed(2)}</td>
										</tr>
									</tbody>
								</Table>
								<Button variant="success">Start Staking</Button>
							</Card.Body>
						</Card>
					</div>
					<div className={clsx("col col--6 my-auto", styles.lead)}>
						<h1>Calculate your income</h1>
						<p>
							Easily calculate and compare your income using this widget. We estimate your projected
							earnings in USD.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
