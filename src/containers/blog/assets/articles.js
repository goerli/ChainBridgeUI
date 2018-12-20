const articles = [
  {
    href: 'https://medium.com/chainsafe-systems/chainsafe-systems-g%C3%B6rlitestnet-2583fa13107e',
    title: `ChainSafe@Systems:~$ ./görliTestnet.sh`,
    meta: 'Aidan Hyman, September 13, 2018',
    avatar: require('../../../assets/images/goerli.png'),
    content: `This past weekend ChainSafe Systems participated in ETHBerlin. We worked on the Görli Testnet, 
    the first cross-client proof of authority testnet for Ethereum. What is a testnet and why did we build one? 
    Before deploying smart contracts to the Ethereum mainnet, it is vital to first conduct a series of tests. 
    This requires a network that is almost identical in practice to the mainnet but with different economic incentives. 
    Testnets are used by developers to test contracts for free, without the concern of gas costs. What makes the economic 
    incentives different between the two clients, is the use of Proof of Authority (PoA) as a consensus mechanism as opposed 
    to Proof of Work (PoW). The main contrast between the two, is that one is protected by mass computation (PoW), 
    while the other is protected by a set group of validator nodes (PoA). For a more detailed proposal about the Görli 
    Testnet please read this document by Afri Schoedon, our incredible teammate that made this project a reality!...`,
  },
  {
    href: 'https://dev.to/5chdn/the-grli-testnet-proposal---a-call-for-participation-58pf',
    title: `The Görli Testnet Proposal - A Call for Participation.`,
    meta: 'Afri Schoedon, September 13, 2018',
    avatar: require('../../../assets/images/goerli.png'),
    content: `There are many Ethereum testnets available for experimenting with smart contracts and deploying
    decentralised applications before going live on the main Ethereum network. However, there is no testnet 
    available that is both widely usable across all client implementations, and robust enough to guarantee 
    consistent availability and high reliability....`,
  },
  {
    href: 'https://www.ethnews.com/paritys-schoedon-pushes-for-universal-ethereum-testnet',
    title: `Parity's Schoedon Pushes For Universal Ethereum Testnet`,
    meta: 'Alison Berreman, September 13, 2018',
    avatar: require('../../../assets/images/goerli.png'),
    content: `On September 13, Afri Schoedon of Parity Technologies posted a call for participation to create a more universal testnet. 
    The idea seems to have arisen at the recent ETHBerlin hackathon where Schoedon worked alongside members of the ChainSafe team. 
    In his proposal, he notes that the existing testnets do not adequately support all clients and aren't "robust enough to guarantee 
    consistent availability and high reliability."He proposes the community come together to build Görli, a public Ethereum test network.
    Schoedon's preferred specifications are that clients choose a proof-of-authority (PoA) engine, such as Aura or Clique, and implement it. 
    As it stands, Parity and Geth already use PoA testnets for efficiency's sake. The existing proof-of-work testnet, Ropsten, 
    is technically compatible with both Parity and Geth, but has had reliability issues. PoA chains do not require as 
    much participation or hash power (or any hash power at all, for that matter), making them the more reliable choice....`,
  },
  {
    href: 'https://medium.com/ethereum-classic/building-a-better-unified-testnet-3f48490cd4e1',
    title: `Building a Better, Unified, Testnet`,
    meta: 'Anthony Lusardi, November 20, 2018',
    avatar: require('../../../assets/images/goerli.png'),
    content: `If you’ve ever tried to use a testnet on the various Ethereums you’ve likely encountered issues including the need to mine your own blocks, 
    client incompatibility, and difficulty getting transactions included in blocks. These issues vary depending on which chain you’re using but ultimately 
    it means that developers, especially new ones, experience substantial friction testing their applications in a live environment. Enter Goerli, a project 
    led by Afri Schoedon & Aidan Hyman, with a broad base of contributors that will unify PoA testnets on most major clients including parity, geth-etc/eth, 
    and mantis*. Ultimately Goerli will make deploying and using PoA testnets easy so we all may have reliable developer experiences....`,
  },
  {
    href: 'https://bitcoinexchangeguide.com/gorli-testnet-for-ethereum-blockchain-network-to-help-token-projects-test-properly/',
    title: `Görli Testnet For Ethereum Blockchain Network To Help Token Projects Test Properly`,
    meta: 'Bitcoin Exchange Guide News Team, September 17, 2018',
    avatar: require('../../../assets/images/goerli.png'),
    content: `Most Ethereum testnets help people to experiment with deploying decentralized apps and smart contracts before they go live on the primary Ethereum network. 
    However, only a few of these testnets are managing to stay secure and consistent. The latest Ethereum testnet app, Görli Testnet will resolve all of these problems.
    Before a smart contract can be distributed onto the Ethereum mainnet, the developer must carry a range of test to guarantee the safety and efficiency of the platform. 
    This testing process requires the creation of a similar network to that of the mainnet. Nevertheless, since most blockchain systems use smart contracts for paying gas 
    for all their computations within the primary system, determining how to run these testnets for free remains a critical challenge that developers face....`,
  },
  {
    href: 'https://github.com/goerli/testnet',
    title: `Goerli Testnet Github README`,
    meta: 'Goerli Organization, September 7, 2018',
    avatar: require('../../../assets/images/goerli.png'),
    content: `There are many Ethereum testnets available for experimenting with smart contracts and deploying decentralised applications 
    before going live on the main Ethereum network. However, there is no testnet available that is both widely usable across all client implementations, 
    and robust enough to guarantee consistent availability and high reliability. This is what Görli and Kotti try to be. Read more on the motivation 
    in the Testnet Proposal. Note: Neither Görli nor Kotti are launched yet. There is a pre-testnet configuration available below helping all 
    interested parties to test the integration prior official launch....`,
  },
];

export default articles;