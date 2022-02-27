import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function ProjectIcon({ name, icon, link }) {
	const iconUrl = useBaseUrl(icon);
	return (
		iconUrl && (
			<a href={link}>
				<img className={styles.projectImage} src={iconUrl} alt={name} title={name} />
			</a>
		)
	)
}

function Main({ imageUrl, title, description, link, projects }) {
	const imgUrl = useBaseUrl(imageUrl);
	return (
		<div className={clsx('col col--3')}>
			{imgUrl && (
				<div className="text--center">
					<a href={link}>
						<img className={styles.teamImage} src={imgUrl} alt={title} />
					</a>
				</div>
			)}
			<h3>{title}</h3>
			<p>{description}</p>
			{projects && (
				<div className={clsx('text--center')}>
					{projects.map((props, idx) => (
						<ProjectIcon key={idx} {...props} />
					))}
				</div>
			)}
		</div>
	);
}

export default function Team(props) {
	return (team && team.length > 0 ? (
		<section className={styles.team}>
			<div className="container">
				<h2>The Team</h2>
				<div className="row">
					{team.map((props, idx) => (
						<Main key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	) : null)
}

const substrate = {
	name: 'Substrate',
	icon: 'img/substrate.png',
	link: 'https://github.com/paritytech/substrate',
};

const polkadot = {
	name: 'Polkadot',
	icon: 'img/polkadot.svg',
	link: 'https://polkadot.network',
};

const kusama = {
	name: 'Kusama',
	icon: 'img/kusama.svg',
	link: 'https://kusama.network',
};

const cosmos = {
	name: 'Cosmos',
	icon: 'img/cosmos.svg',
	link: 'https://cosmos.network/',
}

const tendermint = {
	name: 'Tendermint',
	icon: 'img/tendermint.svg',
	link: 'https://tendermint.com/',
}

const interchain = {
	name: 'Interchain',
	icon: 'img/interchain.svg',
	link: 'https://interchain.io/',
}

const team = [
	{
		title: 'Marko Baricevic',
		imageUrl: 'img/marko.png',
		description: (
			<>
				Founder
			</>
		),
		link: 'https://www.linkedin.com/in/marko-baricevic/',
		projects: [cosmos, tendermint, interchain]
	},
	{
		title: 'Onur Akpolat',
		imageUrl: 'img/onur.jpg',
		description: (
			<>
				Founder
			</>
		),
		link: 'https://github.com/0xnr',
		projects: [cosmos, tendermint, interchain]
	},
	{
		title: 'Shawn Tabrizi',
		imageUrl: 'img/shawn.jpg',
		description: (
			<>
				Founder
			</>
		),
		link: 'https://www.linkedin.com/in/shawn-tabrizi/',
		projects: [substrate, polkadot, kusama],
	},
	{
		title: 'Will Pankiewicz',
		imageUrl: 'img/will.jpg',
		description: (
			<>
				Founder
			</>
		),
		link: 'https://www.linkedin.com/in/william-pankiewicz/',
		projects: [substrate, polkadot, kusama],
	},
];
