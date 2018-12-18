const data = [
  {
    "title": "What is the Goerli Testnet Propsal",
    "content": `A cross-client proof-of-authority Ethereum testnet. There are many Ethereum testnets available for experimenting 
    with smart contracts and deploying decentralised applications before going live on the main Ethereum network. However, there 
    is no testnet available that is both widely usable across all client implementations, and robust enough to guarantee consistent 
    availability and high reliability. `
  },
  {
    "title": "Background",
    "content": `The idea for the Görli testnet first came about at the Eth Berlin Hackathon in September of 2018. The project arose out of 
    the need for a testnet that is both widely usable across all client implementations, and robust enough to guarantee consistent availability 
    and high reliability. This combination of features is necessary for optimal testing for DApps and smart contracts on the Ethereum network 
    and does not currently exist. The Gorli testnet will be the first of its kind to guarantee consistent availability and high reliability while 
    being usable across all client implementations. Because the Ethereum network is open source, it features contributions from a variety of 
    developers and organizations. This means that the network can be accessed through a variety of different clients. An Ethereum client 
    is a command line interface that enables a user to run a full ethereum node and to interact with the Ethereum network. These interactions 
    could include mining ether, funds transfer, smart contract creation and deployment, block history exploration and more. In order to conduct 
    comprehensive tests, developers need to be able to test their software across all of the major Ethereum clients, especially the two main clients, 
    Geth and Parity. Different clients are created using different programming languages and often take advantage of the various specific capabilities 
    enabled by that language. For example, the Go Ethereum or “Geth” client, is written in Go, and the Parity client is written in Rust. This diversity 
    is important as it increases the flexibility and dynamism of the Ethereum network, but it also poses a major issue for anyone seeking to test 
    software across multiple clients. Past and current testnets are either unable to test across more than one client, or lack consistent availability 
    and reliability. For example, the Olympic and Morden testnets were used in the early days of Ethereum but both have now been abandoned by the 
    community. The Kovan network is still in use, but does not support cross client testing, and features a certain PoA engine that make it 
    incompatible for more than one client. In fact, the only testnet currently available across different client implementations is the Ropsten testnet. 
    Unfortunately, Ropsten is experiencing several major issues that seriously detract from its functionality. To begin with, Ropsten still features 
    a PoW engine even though the Ethereum community has been moving away from PoW and towards PoA. Ropsten’s PoW engine has also created serious issues 
    with stability and security. Since Ropsten is a test network, it carries no actual monetary value. PoW mining on networks bearing no value is 
    impossible to incentivise, and this results in low hash rates that reduce the network’s utility and could facilitate an easy takeover by potential 
    attackers. Furthermore, it is largely accepted that the future of the Ethereum network will lie in a PoA network, and not in a PoW one, so it makes 
    sense to pursue a PoA testnet. According to Parity’s Afri Shoedon, the only reason that Ropsten still exists is because it remains the only way 
    to test DApps and smart contracts on both Geth and Parity. As Shoedon states, “...there is no testnet available that is both widely usable 
    across all client implementations, and robust enough to guarantee consistent availability and high reliability.” Now, that EIP-1011, the hybrid Casper 
    PoW/PoS testnet idea has been abandoned by latest Ethereum research, the Görli testnet could be the next-generation public Ethereum test network.`,
  },
  {
    "title": "What are the Existing Public Testnets",
    "content": "Olympic, Morden, Ropsten, Kovan, Rinkeby"
  },
  { 
    "title": "What do we Propose?",
    "content": `Sufficiently specifying a proof-of-authority engine, such as Aura or Clique, in an EIP, to implement one or multiple of 
    these engines across different clients, such as Geth and Parity Ethereum, and to bootstrap a new simplistic Görli proof-of-authority 
    testnet based on the available implementations that mimics main network conditions.`
  },
];

export default data;