// SPDX-License-Identifier: MIT

pragma solidity 0.7.6;
pragma abicoder v2;

import "@rarible/lib-asset/contracts/LibAsset.sol";
import "@rarible/libraries/contracts/LibDeal.sol";
import "@rarible/libraries/contracts/LibFee.sol";

interface ITransferManager {
    function doTransfers(
        LibAsset.Asset memory makeMatch,
        LibAsset.Asset memory takeMatch,
        LibDeal.Data memory left,
        LibDeal.Data memory right,
        LibFee.TransferAddresses memory addresses,
        LibFee.MatchFees memory matchFees
    ) payable external returns (uint totalMakeValue, uint totalTakeValue);
}