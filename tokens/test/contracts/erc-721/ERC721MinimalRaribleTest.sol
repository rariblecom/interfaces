// SPDX-License-Identifier: MIT

pragma solidity ^0.7.6;
pragma abicoder v2;

import "../../../contracts/erc-721-minimal/ERC721RaribleMinimal.sol";

contract ERC721MinimalRaribleTest is ERC721RaribleMinimal {

    address OFR;
    function setOFR(address _OFR) external {
        OFR = _OFR;
    }

    function OPERATOR_FILTER_REGISTRY() public view override returns(address) {
        return OFR;
    }
}