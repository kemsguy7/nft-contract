
// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const NftModule = buildModule("NftModule", (m) => {

  const lock = m.contract("KemsguyNft");

  return { lock };
});

export default NftModule;