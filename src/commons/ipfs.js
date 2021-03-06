import { Keyring } from '@polkadot/api';
import {create} from 'ipfs-http-client';
const seeds = process.env.REACT_APP_CRUST_SEED;
const keyring = new Keyring();
const pair = keyring.addFromUri(seeds);
const sig = pair.sign(pair.address);
const sigHex = '0x' + Buffer.from(sig).toString('hex');

const authHeader = Buffer.from(`sub-${pair.address}:${sigHex}`).toString('base64');
const ipfsGateway = 'https://crustwebsites.net';

// const ipfs = create({
//     url: ipfsGateway + '/api/v0',
//     headers: {
//         authorization: 'Basic ' + authHeader
//     }
// });

const ipfs = create({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' })

export default ipfs;