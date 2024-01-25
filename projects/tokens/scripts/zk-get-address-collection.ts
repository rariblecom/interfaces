// factory at 0x5F577Dd877b0136ab7ed8A4d7b303aD38348a1Ea

// "0x9301194711E0015316AA0d9e0F184dFB87f70582",
// "0x85a26E6D52239817570Ff643bA09E3AA5393A805",
// "0x11983886da3c379E507A874649C96D7EEd086c32"

import { ERC721RaribleFactoryC2 } from "../typechain-types"
import { arrayify } from 'ethers/lib/utils';
import hre from "hardhat";
import {utils} from "zksync-web3";
// https://sepolia.explorer.zksync.io/tx/0xadb7f5955bb0f87fe2de2fa777a0d03ded56c3a11ffdca7e6f47883f89a5d47e#eventlog
// taget address 0xff0e7865e797bac2fe9cf30996abcd9ddc8de84c

async function main() {
  console.log("zk-get-address-collection.ts");
  const factoryFactory721 = await hre.zksyncEthers.getContractFactory("ERC721RaribleFactoryC2") as ERC721RaribleFactoryC2;
  console.log("start deploy")
  const factory721 = factoryFactory721.attach("0x5F577Dd877b0136ab7ed8A4d7b303aD38348a1Ea");
  const targetAddress = await factory721["getAddress(string,string,string,string,uint256)"]("test", "test", "test", "test", 1000);

  console.log("factory721 deployed to:", factory721.address);

  console.log("factory721 cacl collection address:", targetAddress);
  console.log("factory721 true collection address:", "0xff0e7865e797bac2fe9cf30996abcd9ddc8de84c");

  const bytecode = "0x000400000000000200000000030100190000006003300270000000b40430019700030000004103550002000000010355000000b40030019d00000001012001900000000b0000c13d000000000100001902ca00560000040f000000010100003902ca00560000040f0001000000000002000100000005001d000000b405000041000000b40630009c00000000030580190000004003300210000000b40640009c00000000040580190000006004400210000000000334019f000000b40410009c0000000001058019000000c001100210000000000113019f02ca02750000040f000000010900002900000000030100190000006003300270000000b403300197000000200430008c000000000503001900000020050080390000001f0450018f00000005055002720000002f0000613d000000000600001900000005076002100000000008790019000000000771034f000000000707043b00000000007804350000000106600039000000000756004b000000270000413d000000010220018f000000000604004b0000003f0000613d0000000505500210000000000651034f00000000055900190000000304400210000000000705043300000000074701cf000000000747022f000000000606043b0000010004400089000000000646022f00000000044601cf000000000474019f0000000000450435000100000003001f00030000000103550000000001020019000000000001042d000000b405000041000000b40630009c00000000030580190000004003300210000000b40640009c00000000040580190000006004400210000000000334019f000000b40410009c0000000001058019000000c001100210000000000113019f02ca027a0000040f00000000030100190000006003300270000100b40030019d0003000000010355000000010120018f000000000001042d000d0000000000020000000007000031000000000101004b000000940000613d00000002010003670000001f0270018f0000000503700272000000670000613d00000000040000190000000505400210000000000651034f000000000606043b000000800550003900000000006504350000000104400039000000000534004b0000005f0000413d000000000402004b000000760000613d0000000503300210000000000131034f00000003022002100000008003300039000000000403043300000000042401cf000000000424022f000000000101043b0000010002200089000000000121022f00000000012101cf000000000141019f00000000001304350000008006700039000000400060043f000000400170008c000001a00000413d000000800800043d000000a00200043d000000b80120009c000001a00000213d000000a001200039000000000361004b000001a00000213d00000080022000390000000003020433000000b80430009c000001a00000213d0000000004130019000000000464004b000001a00000213d0000000000360435000000a00770003900000000020204330000000003000019000000000423004b000001060000813d000000000473001900000000051300190000000005050433000000000054043500000020033000390000008c0000013d0000008001000039000000400010043f000000b501000041000000000201041a000700000002001d000000b601000041000000800010043f000900b70020019b0000000001000415000000090110008a00000020011000c9000600000007001d02ca02630000040f0000000702000029000000b702200197000000060300006b000000ce0000c13d000000000101004b000001a00000613d0000000001000414000000040320008c000000b00000613d00000004040000390000008003000039000000000503001902ca000d0000040f000000000101004b000000d90000613d00000001020000310000001f0120008c000001a00000a13d000100b50000003d000002b50000013d000000ba0000613d0000000007000019000100b90000003d000002c30000013d000000b70000413d000000000705004b000000be0000613d000100be0000003d0000028c0000013d0000000001000414000000040530008c0000012f0000c13d00000003010003670000001f0420018f0000000503200272000000c90000613d0000000005000019000100c80000003d000002a60000013d000000c60000413d000000000504004b0000013d0000613d000100cd0000003d0000027f0000013d0000013d0000013d000000000101004b000001a00000613d0000000001000414000000040320008c000000e80000613d00000004040000390000008003000039000000000503001902ca000d0000040f000000000101004b000000e80000c13d000000030100036700000001020000310000001f0420018f0000000503200272000000e20000613d0000000005000019000100e10000003d000002a60000013d000000df0000413d000000000504004b000000e60000613d000100e60000003d0000027f0000013d000000000100001902ca024f0000040f00000001020000310000001f0120008c000001a00000a13d000100ed0000003d000002b50000013d000000f20000613d0000000007000019000100f10000003d000002c30000013d000000ef0000413d000000000705004b000000f60000613d000100f60000003d0000028c0000013d0000000001000414000000040530008c0000013e0000c13d00000003010003670000001f0420018f0000000503200272000001010000613d0000000005000019000101000000003d000002a60000013d000000fe0000413d000000000504004b0000014b0000613d000101050000003d0000027f0000013d0000014b0000013d000500000006001d000400000007001d00000000047200190000001f01200190000001120000613d0000000002140049000000030110021000000100011000890000000043020434000000000313022f00000000011301cf0000000000120435000600000004001d000000400040043f000d00000008001d00000000010004150000000d0110008a00000020011000c9000700000008001d02ca02630000040f00000006030000290000000402300039000000000101004b0000014e0000c13d000000bb010000410000000000130435000000200100003900000000001204350000006401300039000000c10200004100000000002104350000004401300039000000c2020000410000000000210435000000240130003900000025020000390000000000210435000000400100043d0000000002130049000000840220003902ca024f0000040f000101310000003d000002ad0000013d000001360000613d0000000006000019000101350000003d000002bc0000013d000001330000413d000000000605004b0000013a0000613d0001013a0000003d000002990000013d000000000101004b0000013d0000c13d000000e60000013d0000014b0000013d000101400000003d000002ad0000013d000001450000613d0000000006000019000101440000003d000002bc0000013d000001420000413d000000000605004b000001490000613d000101490000003d000002990000013d000000000101004b000000e60000613d0000000001000019000000000300001902ca02580000040f000300000002001d000000b6010000410000000000130435000000400100043d000600000001001d0000000701000029000c00b70010019b00000000010004150000000c0110008a00000020011000c902ca02630000040f0000000706000029000000b702600197000000000101004b000001a00000613d0000000001000414000000040320008c000001680000613d000000060500002900000003045000690000000003050019000200000002001d02ca000d0000040f0000000202000029000000000101004b000000d90000613d0000000103000031000000200130008c000001a00000413d000200000002001d000300000003001d000000400100043d000600000001001d0000000001010433000b00000001001d00000000010004150000000b0110008a00000020011000c902ca02630000040f000000000101004b000001860000c13d00000006030000290000006401300039000000bf0200004100000000002104350000004401300039000000c0020000410000000000210435000000240130003900000034020000390000000000210435000000bb010000410000000000130435000000040130003900000020020000390000012a0000013d000000b5010000410000000702000029000000000021041b00000005010000290000000001010433000000000101004b000001920000c13d000000200100003900000100001004430000012000000443000000be01000041000002cb0001042e000000b60100004100000006020000290000000000120435000000400100043d000700000001001d000800020000002d0000000001000415000000080110008a00000020011000c902ca02630000040f0000000202000029000000000101004b0000000303000029000001a20000c13d0000000001000019000002cc000104300000000001000414000000040420008c000001ce0000c13d000300000003001d000000400400043d00000000350404340000006001400039000000400010043f0000004001400039000000b9020000410000000000210435000000ba01000041000600000003001d00000000001304350000002101000039000200000004001d0000000000140435000700000005001d000a00000005001d00000000010004150000000a0110008a00000020011000c902ca02630000040f000000400400043d000000000101004b000001d90000c13d0000006401400039000000bc0200004100000000002104350000004401400039000000bd020000410000000000210435000000240140003900000026020000390000000000210435000000bb010000410000000000140435000000040140003900000020020000390000000000210435000000400100043d0000000002140049000000840220003902ca024f0000040f000000070500002900000006035000690000000404300039000000000305001902ca000d0000040f000000000101004b000000d90000613d0000000103000031000000200130008c000001a00000413d000001a50000013d0000000501000029000000000601043300000000020600190000000001040019000000040700002900000000730704340000001f0520008c000001e40000a13d0000000001310436000000200220008a000001de0000013d00000003052002100000010005500089000000010550020f000000000202004b00000000050060190000000002500049000000000223016f000000010350008a0000000005010433000000000335016f000000000223019f00000000002104350000000101000039000000400300043d00000000050004140000000702000029000000b702200197000000040720008c0000000307000029000001fd0000613d00000000014600190000000004310049000000000105001902ca00430000040f000000010700003100000060020000390000008003000039000000000407004b000002240000613d0000003f02700039000000200300008a000000000332016f000000400200043d0000000003320019000000400030043f0000001f0470018f000000000372043600000003050003670000000506700272000002150000613d000000000700001900000005087002100000000009830019000000000885034f000000000808043b00000000008904350000000107700039000000000867004b0000020d0000413d000000000704004b000002240000613d0000000506600210000000000565034f00000000066300190000000304400210000000000706043300000000074701cf000000000747022f000000000505043b0000010004400089000000000545022f00000000044501cf000000000474019f0000000000460435000000000101004b0000018d0000c13d0000000002020433000000000102004b0000023f0000c13d000000400100043d000000bb02000041000000000021043500000004021000390000002003000039000000000032043500000024021000390000000204000029000000000304043300000000003204350000004401100039000000000204043300000000030000190000000606000029000000000423004b000002410000813d00000000041300190000000005630019000000000505043300000000005404350000002003300039000002370000013d000000000103001902ca024f0000040f00000000031200190000001f012001900000024b0000613d0000000002130049000000030110021000000100011000890000000034020434000000000414022f00000000011401cf0000000000120435000000400100043d000000000213004902ca024f0000040f000000000001042f000000b403000041000000b40420009c0000000002038019000000b40410009c000000000103801900000040011002100000006002200210000000000112019f000002cc00010430000000b404000041000000b40520009c0000000002048019000000b40510009c000000000104801900000040011002100000006002200210000000000112019f000000e002300210000000000121019f000002cb0001042e000000c3020000410000000000200439000000050110027000000000010100310000000400100443000000b4010000410000000002000414000000b40320009c0000000002018019000000c001200210000000c4011001c7000080020200003902ca02750000040f0000000102200190000002740000613d000000000101043b000000000001042d000000000001042f00000278002104230000000102000039000000000001042d0000000002000019000000000001042d0000027d002104250000000102000039000000000001042d0000000002000019000000000001042d00000003044002100000000503300210000000000503043300000000054501cf000000000545022f000000000131034f000000000101043b0000010004400089000000000141022f00000000014101cf000000000151019f0000000000130435000000010000013b00000003055002100000000506600210000000000706043300000000075701cf000000000757022f000000000161034f000000000101043b0000010005500089000000000151022f00000000015101cf000000000171019f0000000000160435000000010000013b00000003055002100000000504400210000000000604043300000000065601cf000000000656022f000000000343034f000000000303043b0000010005500089000000000353022f00000000035301cf000000000363019f0000000000340435000000010000013b0000000506500210000000000761034f000000000707043b00000000007604350000000105500039000000000635004b000000010000013b0000000002030019000000000300001902ca00430000040f000000030300036700000001020000310000001f0520018f0000000504200272000000010000013b000000020100036700000000040000310000001f0540018f000000400300043d00000000030304330000000506400272000000010000013b0000000507600210000000000873034f000000000808043b00000000008704350000000106600039000000000746004b000000010000013b0000000508700210000000000981034f000000000909043b00000000009804350000000107700039000000000867004b000000010000013b000002ca00000432000002cb0001042e000002cc0001043000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d505c60da1b00000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffff00000000000000000000000000000000000000000000000000000001000000006400000000000000000000000000000000000000000000000000000000000000426561636f6e50726f78793a2066756e6374696f6e2063616c6c206661696c6508c379a0000000000000000000000000000000000000000000000000000000006e74726163740000000000000000000000000000000000000000000000000000416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f00000002000000000000000000000000000000400000010000000000000000006f6e206973206e6f74206120636f6e7472616374000000000000000000000000426561636f6e50726f78793a20626561636f6e20696d706c656d656e746174697472616374000000000000000000000000000000000000000000000000000000426561636f6e50726f78793a20626561636f6e206973206e6f74206120636f6e1806aa1896bbf26568e884a7374b41e002500962caba6a15023a8d90e8508b830200000200000000000000000000000000000024000000000000000000000000000000000000000000000000000000000000000000000000000000000000000049551771d2b8ee9f18c691ef0657b67fd96c2ac2aeaf1bb92dd15866502c4630"
  const calc_address2 = utils.create2Address(factory721.address, utils.hashBytecode(bytecode), arrayify("0x03E8"), '0x');
  console.log("factory721 cacl calc_address2 address:", calc_address2);
  console.log(factory721.address);
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});