// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.9.0;
pragma abicoder v2;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@rarible/royalties/contracts/impl/RoyaltiesV2Impl.sol";
import "@rarible/royalties/contracts/LibRoyaltiesV2.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract TestERC721WithRoyaltiesV2OwnableUpgradeable is Initializable, RoyaltiesV2Impl, ERC721Upgradeable, OwnableUpgradeable {
    function initialize() public initializer {
        __Ownable_init_unchained();
    }
    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
        return interfaceId == LibRoyaltiesV2._INTERFACE_ID_ROYALTIES || super.supportsInterface(interfaceId);
    }
    function mint(address to, uint tokenId, LibPart.Part[] memory _fees) external {
        _mint(to, tokenId);
        _saveRoyalties(tokenId, _fees);
    }
}
