// SPDX-License-Identifier: MIT

pragma solidity 0.7.6;
pragma abicoder v2;

import "../../contracts/libs/LibBrokenLine.sol";

contract BrokenLineTest {
    LibBrokenLine.BrokenLine public brokenLineTestLocal;
    event resultRemoveLine(uint bias, uint slope, uint cliff);

    struct LineOld {
        uint32 start;
        uint96 bias;
        uint96 slope;
    }

    function addTest(LineOld memory lineOld, uint id, uint32 cliff) public {
        LibBrokenLine.Line memory line;
        line.start = lineOld.start;
        line.bias = lineOld.bias;
        line.slope = lineOld.slope;
        line.cliff = cliff;
        LibBrokenLine.add(brokenLineTestLocal, id, line);
    }

    function update(uint32 timeTo) public {
        LibBrokenLine.update(brokenLineTestLocal, timeTo);
    }

    function getCurrent() view public returns (LibBrokenLine.Line memory) {
        return brokenLineTestLocal.initial;
    }

    function getActualValue(uint32 timeTo) external returns (uint bias) {
        return LibBrokenLine.actualValue(brokenLineTestLocal, timeTo);
    }

    function removeTest(uint id, uint32 toTime) public {
        (uint bias, uint slope, uint cliff) = LibBrokenLine.remove(brokenLineTestLocal, id, toTime);
        emit resultRemoveLine(bias, slope, cliff);
    }

    function getSlopeChanges(uint time) external view returns (int96) {
        return brokenLineTestLocal.slopeChanges[time];
    }
}
