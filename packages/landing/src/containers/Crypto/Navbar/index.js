import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { DrawerContext } from 'common/contexts/DrawerContext';
import { MENU_ITEMS } from 'common/data/Crypto';
import LogoImage from '../../../pages/Logo/pikapad.png';
import LogoImageAlt from '../../../pages/Logo/pikapad.png';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Fortmatic from 'fortmatic';
import Torus from '@toruslabs/torus-embed';
import Authereum from 'authereum';
import { Bitski } from 'bitski';
import Link from 'next/link';
import NavbarWrapper from 'common/components/Navbar';
import Drawer from 'common/components/Drawer';
import Button from 'common/components/Button';
import Logo from 'common/components/UIElements/Logo';
import Box from 'common/components/Box';
import HamburgMenu from 'common/components/HamburgMenu';
import Container from 'common/components/UI/Container';
import ScrollSpyMenu from 'common/components/ScrollSpyMenu';

const supportedChains = [
  {
    name: 'Ethereum Mainnet',
    short_name: 'eth',
    chain: 'ETH',
    network: 'mainnet',
    chain_id: 1,
    network_id: 1,
    rpc_url: 'https://mainnet.infura.io/v3/%API_KEY%',
    native_currency: {
      symbol: 'ETH',
      name: 'Ethereum',
      decimals: '18',
      contractAddress: '',
      balance: '',
    },
  },
  {
    name: 'Ethereum Ropsten',
    short_name: 'rop',
    chain: 'ETH',
    network: 'ropsten',
    chain_id: 3,
    network_id: 3,
    rpc_url: 'https://ropsten.infura.io/v3/%API_KEY%',
    native_currency: {
      symbol: 'ETH',
      name: 'Ethereum',
      decimals: '18',
      contractAddress: '',
      balance: '',
    },
  },
  {
    name: 'Ethereum Rinkeby',
    short_name: 'rin',
    chain: 'ETH',
    network: 'rinkeby',
    chain_id: 4,
    network_id: 4,
    rpc_url: 'https://rinkeby.infura.io/v3/%API_KEY%',
    native_currency: {
      symbol: 'ETH',
      name: 'Ethereum',
      decimals: '18',
      contractAddress: '',
      balance: '',
    },
  },
  {
    name: 'Ethereum Görli',
    short_name: 'gor',
    chain: 'ETH',
    network: 'goerli',
    chain_id: 5,
    network_id: 5,
    rpc_url: 'https://goerli.infura.io/v3/%API_KEY%',
    native_currency: {
      symbol: 'ETH',
      name: 'Ethereum',
      decimals: '18',
      contractAddress: '',
      balance: '',
    },
  },
  {
    name: 'RSK Mainnet',
    short_name: 'rsk',
    chain: 'RSK',
    network: 'mainnet',
    chain_id: 30,
    network_id: 30,
    rpc_url: 'https://public-node.rsk.co',
    native_currency: {
      symbol: 'RSK',
      name: 'RSK',
      decimals: '18',
      contractAddress: '',
      balance: '',
    },
  },
  {
    name: 'Ethereum Kovan',
    short_name: 'kov',
    chain: 'ETH',
    network: 'kovan',
    chain_id: 42,
    network_id: 42,
    rpc_url: 'https://kovan.infura.io/v3/%API_KEY%',
    native_currency: {
      symbol: 'ETH',
      name: 'Ethereum',
      decimals: '18',
      contractAddress: '',
      balance: '',
    },
  },
  {
    name: 'Ethereum Classic Mainnet',
    short_name: 'etc',
    chain: 'ETC',
    network: 'mainnet',
    chain_id: 61,
    network_id: 1,
    rpc_url: 'https://ethereumclassic.network',
    native_currency: {
      symbol: 'ETH',
      name: 'Ethereum',
      decimals: '18',
      contractAddress: '',
      balance: '',
    },
  },
  {
    name: 'POA Network Sokol',
    short_name: 'poa',
    chain: 'POA',
    network: 'sokol',
    chain_id: 77,
    network_id: 77,
    rpc_url: 'https://sokol.poa.network',
    native_currency: {
      symbol: 'POA',
      name: 'POA',
      decimals: '18',
      contractAddress: '',
      balance: '',
    },
  },
  {
    name: 'POA Network Core',
    short_name: 'skl',
    chain: 'POA',
    network: 'core',
    chain_id: 99,
    network_id: 99,
    rpc_url: 'https://core.poa.network',
    native_currency: {
      symbol: 'POA',
      name: 'POA',
      decimals: '18',
      contractAddress: '',
      balance: '',
    },
  },
  {
    name: 'xDAI Chain',
    short_name: 'xdai',
    chain: 'POA',
    network: 'dai',
    chain_id: 100,
    network_id: 100,
    rpc_url: 'https://dai.poa.network',
    native_currency: {
      symbol: 'xDAI',
      name: 'xDAI',
      decimals: '18',
      contractAddress: '',
      balance: '',
    },
  },
  {
    name: 'Callisto Mainnet',
    short_name: 'clo',
    chain: 'callisto',
    network: 'mainnet',
    chain_id: 820,
    network_id: 1,
    rpc_url: 'https://clo-geth.0xinfra.com/',
    native_currency: {
      symbol: 'CLO',
      name: 'CLO',
      decimals: '18',
      contractAddress: '',
      balance: '',
    },
  },
  {
    name: 'Binance Smart Chain',
    short_name: 'bsc',
    chain: 'smartchain',
    network: 'mainnet',
    chain_id: 56,
    network_id: 56,
    rpc_url: 'https://bsc-dataseed1.defibit.io/',
    native_currency: {
      symbol: 'BNB',
      name: 'BNB',
      decimals: '18',
      contractAddress: '',
      balance: '',
    },
  },
];

function initWeb3(provider) {
  const web3 = new Web3(provider);

  web3.eth.extend({
    methods: [
      {
        name: 'chainId',
        call: 'eth_chainId',
        outputFormatter: web3.utils.hexToNumber,
      },
    ],
  });

  return web3;
}

export function getChainData(chainId) {
  const chainData = supportedChains.filter(
    (chain) => chain.chain_id === chainId
  )[0];

  if (!chainData) {
    throw new Error('ChainId missing or not supported');
  }

  const API_KEY = process.env.REACT_APP_INFURA_ID;

  if (
    chainData.rpc_url.includes('infura.io') &&
    chainData.rpc_url.includes('%API_KEY%') &&
    API_KEY
  ) {
    const rpcUrl = chainData.rpc_url.replace('%API_KEY%', API_KEY);

    return {
      ...chainData,
      rpc_url: rpcUrl,
    };
  }

  return chainData;
}

const INITIAL_STATE = {
  fetching: false,
  address: '',
  web3: null,
  provider: null,
  connected: false,
  chainId: 1,
  networkId: 1,
  assets: [],
  showModal: false,
  pendingRequest: false,
  result: null,
};

class Navbar extends React.Component {
  static contextType = DrawerContext;
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE,
    };

    this.web3Modal = new Web3Modal({
      network: this.getNetwork(),
      cacheProvider: true,
      providerOptions: this.getProviderOptions(),
    });
    // const { state, dispatch } = useContext(DrawerContext);
    // // Toggle drawer
  }

  toggleHandler = () => {
    const { state, dispatch } = this.context;
    dispatch({
      type: 'TOGGLE',
    });
  };

  componentDidMount() {
    if (this.web3Modal.cachedProvider) {
      this.onConnect();
    } else {
    }
  }

  onConnect = async () => {
    const provider = await this.web3Modal.connect();

    await this.subscribeProvider(provider);

    const web3 = initWeb3(provider);

    const accounts = await web3.eth.getAccounts();

    const address = accounts[0];

    const networkId = await web3.eth.net.getId();

    const chainId = await web3.eth.chainId();

    await this.setState({
      web3,
      provider,
      connected: true,
      address,
      chainId,
      networkId,
    });
    await this.getAccountAssets();
  };

  subscribeProvider = async (provider) => {
    if (!provider.on) {
      return;
    }
    provider.on('close', () => this.resetApp());
    provider.on('accountsChanged', async (accounts) => {
      await this.setState({ address: accounts[0] });
      await this.getAccountAssets();
    });
    provider.on('chainChanged', async (chainId) => {
      const { web3 } = this.state;
      const networkId = await web3.eth.net.getId();
      await this.setState({ chainId, networkId });
      await this.getAccountAssets();
    });

    provider.on('networkChanged', async (networkId) => {
      const { web3 } = this.state;
      const chainId = await web3.eth.chainId();
      await this.setState({ chainId, networkId });
      await this.getAccountAssets();
    });
  };

  getNetwork = () => {
    const { chainId } = this.state;
    getChainData(chainId).network;
  };

  getProviderOptions = () => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: process.env.REACT_APP_INFURA_ID,
        },
      },
      torus: {
        package: Torus,
      },
      fortmatic: {
        package: Fortmatic,
        options: {
          key: process.env.REACT_APP_FORTMATIC_KEY,
        },
      },
      authereum: {
        package: Authereum,
      },
      bitski: {
        package: Bitski,
        options: {
          clientId: process.env.REACT_APP_BITSKI_CLIENT_ID,
          callbackUrl: window.location.href + 'bitski-callback.html',
        },
      },
    };
    return providerOptions;
  };

  getAccountAssets = async () => {
    const { address, chainId } = this.state;
    this.setState({ fetching: true });
    try {
      // get account balances
      const assets = await apiGetAccountAssets(address, chainId);

      await this.setState({ fetching: false, assets });
    } catch (error) {
      console.error(error); // tslint:disable-line
      await this.setState({ fetching: false });
    }
  };

  render() {
    const { state, dispatch } = this.context;
    const { address } = this.state;
    const { navbarStyle, logoStyle, button, row, menuWrapper } = this.props;
    return (
      <NavbarWrapper {...navbarStyle} className="saas_navbar">
        <Container>
          <Box {...row}>
            <Logo
              href="#"
              logoSrc={LogoImage}
              title="Portfolio"
              logoStyle={logoStyle}
              className="main-logo"
            />
            <Logo
              href="#"
              logoSrc={LogoImageAlt}
              title="Portfolio"
              logoStyle={logoStyle}
              className="logo-alt"
            />
            <Box {...menuWrapper}>
              <ScrollSpyMenu
                className="main_menu"
                menuItems={MENU_ITEMS}
                offset={-70}
              />
              <Link href="#">
                <a className="navbar_button">
                  <Button {...button} title="Pre-Sale Form" />
                </a>
              </Link>

              <Link href="#">
                <a className="navbar_button" style={{ marginLeft: 15 }}>
                  <Button
                    {...button}
                    title={address || 'Connect Wallet'}
                    onClick={() => {
                      this.onConnect();
                    }}
                  />
                </a>
              </Link>
              <Drawer
                width="420px"
                placement="right"
                drawerHandler={<HamburgMenu barColor="#fff" />}
                open={state.isOpen}
                toggleHandler={this.toggleHandler}
              >
                <ScrollSpyMenu
                  className="mobile_menu"
                  menuItems={MENU_ITEMS}
                  drawerClose={true}
                  offset={-100}
                />
                <Link href="#">
                  <a className="navbar_button">
                    <Button {...button} title="Pre-Sale Form" />
                  </a>
                </Link>

                <Link href="#">
                  <a className="navbar_button">
                    <Button
                      {...button}
                      title={address || 'Connect Wallet'}
                      onClick={() => {
                        this.onConnect();
                      }}
                    />
                  </a>
                </Link>
              </Drawer>
            </Box>
          </Box>
        </Container>
      </NavbarWrapper>
    );
  }
}

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px',
    display: 'block',
  },
  row: {
    flexBox: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logoStyle: {
    maxWidth: ['120px', '130px'],
  },
  button: {
    type: 'button',
    fontSize: '13px',
    fontWeight: '700',
    borderRadius: '4px',
    pl: '15px',
    pr: '15px',
    colors: 'secondaryWithBg',
    minHeight: 'auto',
    height: '40px',
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
  },
};

export default Navbar;
