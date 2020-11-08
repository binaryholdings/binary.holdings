import React, { useState } from 'react';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { set } from 'core-js/fn/dict';

export default function PolkadotConnect(props) {
	const { setApi, endpoint } = props;
	const wsProvider = new WsProvider(endpoint);
	ApiPromise.create({ provider: wsProvider })
	.then(api => {
		window.api = api;
		setApi(api)
	});


	return null;
}
