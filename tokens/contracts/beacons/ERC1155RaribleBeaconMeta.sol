// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/proxy/beacon/UpgradeableBeacon.sol";

contract ERC1155RaribleBeaconMeta is UpgradeableBeacon {
    constructor(address impl) UpgradeableBeacon(impl) {

    }
}
