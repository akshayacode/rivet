export const Playground = {
  abi: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'a',
          type: 'uint256',
        },
        {
          internalType: 'bool',
          name: 'b',
          type: 'bool',
        },
        {
          components: [
            {
              internalType: 'uint256',
              name: 'x',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'y',
              type: 'bool',
            },
          ],
          internalType: 'struct Playground.Foo',
          name: 'c',
          type: 'tuple',
        },
        {
          components: [
            {
              internalType: 'uint256',
              name: 'x',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'y',
              type: 'bool',
            },
          ],
          internalType: 'struct Playground.Foo[]',
          name: 'd',
          type: 'tuple[]',
        },
      ],
      name: 'test_rivet_1',
      outputs: [
        {
          internalType: 'bool',
          name: 'success',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  bytecode: {
    object:
      '0x608060405234801561001057600080fd5b5061027c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063095ea7b31461003b578063bd01249914610065575b600080fd5b61005161004936600461007d565b600092915050565b604051901515815260200160405180910390f35b610051610073366004610168565b6000949350505050565b6000806040838503121561009057600080fd5b82356001600160a01b03811681146100a757600080fd5b946020939093013593505050565b803580151581146100c557600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610109576101096100ca565b604052919050565b60006040828403121561012357600080fd5b6040516040810181811067ffffffffffffffff82111715610146576101466100ca565b6040528235815290508061015c602084016100b5565b60208201525092915050565b60008060008060a0858703121561017e57600080fd5b84359350602061018f8187016100b5565b9350604061019f88828901610111565b9350608087013567ffffffffffffffff808211156101bc57600080fd5b818901915089601f8301126101d057600080fd5b8135818111156101e2576101e26100ca565b6101f0858260051b016100e0565b818152858101925060069190911b83018501908b82111561021057600080fd5b928501925b81841015610236576102278c85610111565b83529284019291850191610215565b989b979a5095985050505050505056fea264697066735822122097c0529379d9c93ca9a59cef6424cf7e8fc250a9732cf97d0a33a09678fc531a64736f6c63430008120033',
    sourceMap: '58:305:0:-:0;;;;;;;;;;;;;;;;;;;',
    linkReferences: {},
  },
  deployedBytecode: {
    object:
      '0x608060405234801561001057600080fd5b50600436106100365760003560e01c8063095ea7b31461003b578063bd01249914610065575b600080fd5b61005161004936600461007d565b600092915050565b604051901515815260200160405180910390f35b610051610073366004610168565b6000949350505050565b6000806040838503121561009057600080fd5b82356001600160a01b03811681146100a757600080fd5b946020939093013593505050565b803580151581146100c557600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610109576101096100ca565b604052919050565b60006040828403121561012357600080fd5b6040516040810181811067ffffffffffffffff82111715610146576101466100ca565b6040528235815290508061015c602084016100b5565b60208201525092915050565b60008060008060a0858703121561017e57600080fd5b84359350602061018f8187016100b5565b9350604061019f88828901610111565b9350608087013567ffffffffffffffff808211156101bc57600080fd5b818901915089601f8301126101d057600080fd5b8135818111156101e2576101e26100ca565b6101f0858260051b016100e0565b818152858101925060069190911b83018501908b82111561021057600080fd5b928501925b81841015610236576102278c85610111565b83529284019291850191610215565b989b979a5095985050505050505056fea264697066735822122097c0529379d9c93ca9a59cef6424cf7e8fc250a9732cf97d0a33a09678fc531a64736f6c63430008120033',
    sourceMap:
      '58:305:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;287:74;;;;;;:::i;:::-;353:4;287:74;;;;;;;;538:14:1;;531:22;513:41;;501:2;486:18;287:74:0;;;;;;;140:141;;;;;;:::i;:::-;265:12;140:141;;;;;;;14:354:1;82:6;90;143:2;131:9;122:7;118:23;114:32;111:52;;;159:1;156;149:12;111:52;185:23;;-1:-1:-1;;;;;237:31:1;;227:42;;217:70;;283:1;280;273:12;217:70;306:5;358:2;343:18;;;;330:32;;-1:-1:-1;;;14:354:1:o;565:160::-;630:20;;686:13;;679:21;669:32;;659:60;;715:1;712;705:12;659:60;565:160;;;:::o;730:127::-;791:10;786:3;782:20;779:1;772:31;822:4;819:1;812:15;846:4;843:1;836:15;862:275;933:2;927:9;998:2;979:13;;-1:-1:-1;;975:27:1;963:40;;1033:18;1018:34;;1054:22;;;1015:62;1012:88;;;1080:18;;:::i;:::-;1116:2;1109:22;862:275;;-1:-1:-1;862:275:1:o;1142:475::-;1192:5;1240:4;1228:9;1223:3;1219:19;1215:30;1212:50;;;1258:1;1255;1248:12;1212:50;1291:4;1285:11;1335:4;1327:6;1323:17;1406:6;1394:10;1391:22;1370:18;1358:10;1355:34;1352:62;1349:88;;;1417:18;;:::i;:::-;1453:4;1446:24;1518:23;;1503:39;;1488:6;-1:-1:-1;1488:6:1;1575:35;1606:2;1591:18;;1575:35;:::i;:::-;1570:2;1562:6;1558:15;1551:60;;1142:475;;;;:::o;1622:1232::-;1766:6;1774;1782;1790;1843:3;1831:9;1822:7;1818:23;1814:33;1811:53;;;1860:1;1857;1850:12;1811:53;1896:9;1883:23;1873:33;;1925:2;1946:35;1977:2;1966:9;1962:18;1946:35;:::i;:::-;1936:45;;2000:2;2021:50;2063:7;2058:2;2047:9;2043:18;2021:50;:::i;:::-;2011:60;;2122:3;2111:9;2107:19;2094:33;2146:18;2187:2;2179:6;2176:14;2173:34;;;2203:1;2200;2193:12;2173:34;2241:6;2230:9;2226:22;2216:32;;2286:7;2279:4;2275:2;2271:13;2267:27;2257:55;;2308:1;2305;2298:12;2257:55;2344:2;2331:16;2366:2;2362;2359:10;2356:36;;;2372:18;;:::i;:::-;2412:36;2444:2;2439;2436:1;2432:10;2428:19;2412:36;:::i;:::-;2482:15;;;2513:12;;;;-1:-1:-1;2564:1:1;2560:10;;;;2552:19;;2548:28;;;2588:19;;;2585:39;;;2620:1;2617;2610:12;2585:39;2644:11;;;;2664:160;2680:6;2675:3;2672:15;2664:160;;;2746:35;2773:7;2768:3;2746:35;:::i;:::-;2734:48;;2697:12;;;;2802;;;;2664:160;;;1622:1232;;;;-1:-1:-1;1622:1232:1;;-1:-1:-1;;;;;;;1622:1232:1:o',
    linkReferences: {},
  },
  methodIdentifiers: {
    'approve(address,uint256)': '095ea7b3',
    'test_rivet_1(uint256,bool,(uint256,bool),(uint256,bool)[])': 'bd012499',
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.18+commit.87f61d96"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"a","type":"uint256"},{"internalType":"bool","name":"b","type":"bool"},{"components":[{"internalType":"uint256","name":"x","type":"uint256"},{"internalType":"bool","name":"y","type":"bool"}],"internalType":"struct Playground.Foo","name":"c","type":"tuple"},{"components":[{"internalType":"uint256","name":"x","type":"uint256"},{"internalType":"bool","name":"y","type":"bool"}],"internalType":"struct Playground.Foo[]","name":"d","type":"tuple[]"}],"name":"test_rivet_1","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"src/Playground.sol":"Playground"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":200},"remappings":[]},"sources":{"src/Playground.sol":{"keccak256":"0xf8a0f8b63ed39dcd499f0e82918cad3635c722a92d535654910936b9afc0f979","license":"MIT","urls":["bzz-raw://c4dec678c43023fa20ffb142b4692b17fdc958168aceca87b27c76ae37a1a2b5","dweb:/ipfs/QmSXnE5MBw1Kr6drcdYN67UrHqHepFDyDnZtML4oJDisrP"]}},"version":1}',
  metadata: {
    compiler: {
      version: '0.8.18+commit.87f61d96',
    },
    language: 'Solidity',
    output: {
      abi: [
        {
          inputs: [
            {
              internalType: 'address',
              name: 'spender',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256',
            },
          ],
          stateMutability: 'nonpayable',
          type: 'function',
          name: 'approve',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool',
            },
          ],
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'a',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'b',
              type: 'bool',
            },
            {
              internalType: 'struct Playground.Foo',
              name: 'c',
              type: 'tuple',
              components: [
                {
                  internalType: 'uint256',
                  name: 'x',
                  type: 'uint256',
                },
                {
                  internalType: 'bool',
                  name: 'y',
                  type: 'bool',
                },
              ],
            },
            {
              internalType: 'struct Playground.Foo[]',
              name: 'd',
              type: 'tuple[]',
              components: [
                {
                  internalType: 'uint256',
                  name: 'x',
                  type: 'uint256',
                },
                {
                  internalType: 'bool',
                  name: 'y',
                  type: 'bool',
                },
              ],
            },
          ],
          stateMutability: 'nonpayable',
          type: 'function',
          name: 'test_rivet_1',
          outputs: [
            {
              internalType: 'bool',
              name: 'success',
              type: 'bool',
            },
          ],
        },
      ],
      devdoc: {
        kind: 'dev',
        methods: {},
        version: 1,
      },
      userdoc: {
        kind: 'user',
        methods: {},
        version: 1,
      },
    },
    settings: {
      remappings: [],
      optimizer: {
        enabled: true,
        runs: 200,
      },
      metadata: {
        bytecodeHash: 'ipfs',
      },
      compilationTarget: {
        'src/Playground.sol': 'Playground',
      },
      libraries: {},
    },
    sources: {
      'src/Playground.sol': {
        keccak256:
          '0xf8a0f8b63ed39dcd499f0e82918cad3635c722a92d535654910936b9afc0f979',
        urls: [
          'bzz-raw://c4dec678c43023fa20ffb142b4692b17fdc958168aceca87b27c76ae37a1a2b5',
          'dweb:/ipfs/QmSXnE5MBw1Kr6drcdYN67UrHqHepFDyDnZtML4oJDisrP',
        ],
        license: 'MIT',
      },
    },
    version: 1,
  },
  ast: {
    absolutePath: 'src/Playground.sol',
    id: 35,
    exportedSymbols: {
      Playground: [34],
    },
    nodeType: 'SourceUnit',
    src: '32:332:0',
    nodes: [
      {
        id: 1,
        nodeType: 'PragmaDirective',
        src: '32:24:0',
        nodes: [],
        literals: ['solidity', '^', '0.8', '.18'],
      },
      {
        id: 34,
        nodeType: 'ContractDefinition',
        src: '58:305:0',
        nodes: [
          {
            id: 6,
            nodeType: 'StructDefinition',
            src: '84:50:0',
            nodes: [],
            canonicalName: 'Playground.Foo',
            members: [
              {
                constant: false,
                id: 3,
                mutability: 'mutable',
                name: 'x',
                nameLocation: '110:1:0',
                nodeType: 'VariableDeclaration',
                scope: 6,
                src: '105:6:0',
                stateVariable: false,
                storageLocation: 'default',
                typeDescriptions: {
                  typeIdentifier: 't_uint256',
                  typeString: 'uint256',
                },
                typeName: {
                  id: 2,
                  name: 'uint',
                  nodeType: 'ElementaryTypeName',
                  src: '105:4:0',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256',
                  },
                },
                visibility: 'internal',
              },
              {
                constant: false,
                id: 5,
                mutability: 'mutable',
                name: 'y',
                nameLocation: '126:1:0',
                nodeType: 'VariableDeclaration',
                scope: 6,
                src: '121:6:0',
                stateVariable: false,
                storageLocation: 'default',
                typeDescriptions: {
                  typeIdentifier: 't_bool',
                  typeString: 'bool',
                },
                typeName: {
                  id: 4,
                  name: 'bool',
                  nodeType: 'ElementaryTypeName',
                  src: '121:4:0',
                  typeDescriptions: {
                    typeIdentifier: 't_bool',
                    typeString: 'bool',
                  },
                },
                visibility: 'internal',
              },
            ],
            name: 'Foo',
            nameLocation: '91:3:0',
            scope: 34,
            visibility: 'public',
          },
          {
            id: 23,
            nodeType: 'FunctionDefinition',
            src: '140:141:0',
            nodes: [],
            body: {
              id: 22,
              nodeType: 'Block',
              src: '279:2:0',
              nodes: [],
              statements: [],
            },
            functionSelector: 'bd012499',
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: 'test_rivet_1',
            nameLocation: '149:12:0',
            parameters: {
              id: 18,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 8,
                  mutability: 'mutable',
                  name: 'a',
                  nameLocation: '179:1:0',
                  nodeType: 'VariableDeclaration',
                  scope: 23,
                  src: '171:9:0',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256',
                  },
                  typeName: {
                    id: 7,
                    name: 'uint256',
                    nodeType: 'ElementaryTypeName',
                    src: '171:7:0',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256',
                    },
                  },
                  visibility: 'internal',
                },
                {
                  constant: false,
                  id: 10,
                  mutability: 'mutable',
                  name: 'b',
                  nameLocation: '195:1:0',
                  nodeType: 'VariableDeclaration',
                  scope: 23,
                  src: '190:6:0',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_bool',
                    typeString: 'bool',
                  },
                  typeName: {
                    id: 9,
                    name: 'bool',
                    nodeType: 'ElementaryTypeName',
                    src: '190:4:0',
                    typeDescriptions: {
                      typeIdentifier: 't_bool',
                      typeString: 'bool',
                    },
                  },
                  visibility: 'internal',
                },
                {
                  constant: false,
                  id: 13,
                  mutability: 'mutable',
                  name: 'c',
                  nameLocation: '217:1:0',
                  nodeType: 'VariableDeclaration',
                  scope: 23,
                  src: '206:12:0',
                  stateVariable: false,
                  storageLocation: 'memory',
                  typeDescriptions: {
                    typeIdentifier: 't_struct$_Foo_$6_memory_ptr',
                    typeString: 'struct Playground.Foo',
                  },
                  typeName: {
                    id: 12,
                    nodeType: 'UserDefinedTypeName',
                    pathNode: {
                      id: 11,
                      name: 'Foo',
                      nameLocations: ['206:3:0'],
                      nodeType: 'IdentifierPath',
                      referencedDeclaration: 6,
                      src: '206:3:0',
                    },
                    referencedDeclaration: 6,
                    src: '206:3:0',
                    typeDescriptions: {
                      typeIdentifier: 't_struct$_Foo_$6_storage_ptr',
                      typeString: 'struct Playground.Foo',
                    },
                  },
                  visibility: 'internal',
                },
                {
                  constant: false,
                  id: 17,
                  mutability: 'mutable',
                  name: 'd',
                  nameLocation: '241:1:0',
                  nodeType: 'VariableDeclaration',
                  scope: 23,
                  src: '228:14:0',
                  stateVariable: false,
                  storageLocation: 'memory',
                  typeDescriptions: {
                    typeIdentifier:
                      't_array$_t_struct$_Foo_$6_memory_ptr_$dyn_memory_ptr',
                    typeString: 'struct Playground.Foo[]',
                  },
                  typeName: {
                    baseType: {
                      id: 15,
                      nodeType: 'UserDefinedTypeName',
                      pathNode: {
                        id: 14,
                        name: 'Foo',
                        nameLocations: ['228:3:0'],
                        nodeType: 'IdentifierPath',
                        referencedDeclaration: 6,
                        src: '228:3:0',
                      },
                      referencedDeclaration: 6,
                      src: '228:3:0',
                      typeDescriptions: {
                        typeIdentifier: 't_struct$_Foo_$6_storage_ptr',
                        typeString: 'struct Playground.Foo',
                      },
                    },
                    id: 16,
                    nodeType: 'ArrayTypeName',
                    src: '228:5:0',
                    typeDescriptions: {
                      typeIdentifier:
                        't_array$_t_struct$_Foo_$6_storage_$dyn_storage_ptr',
                      typeString: 'struct Playground.Foo[]',
                    },
                  },
                  visibility: 'internal',
                },
              ],
              src: '161:87:0',
            },
            returnParameters: {
              id: 21,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 20,
                  mutability: 'mutable',
                  name: 'success',
                  nameLocation: '270:7:0',
                  nodeType: 'VariableDeclaration',
                  scope: 23,
                  src: '265:12:0',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_bool',
                    typeString: 'bool',
                  },
                  typeName: {
                    id: 19,
                    name: 'bool',
                    nodeType: 'ElementaryTypeName',
                    src: '265:4:0',
                    typeDescriptions: {
                      typeIdentifier: 't_bool',
                      typeString: 'bool',
                    },
                  },
                  visibility: 'internal',
                },
              ],
              src: '264:14:0',
            },
            scope: 34,
            stateMutability: 'nonpayable',
            virtual: false,
            visibility: 'public',
          },
          {
            id: 33,
            nodeType: 'FunctionDefinition',
            src: '287:74:0',
            nodes: [],
            body: {
              id: 32,
              nodeType: 'Block',
              src: '359:2:0',
              nodes: [],
              statements: [],
            },
            functionSelector: '095ea7b3',
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: 'approve',
            nameLocation: '296:7:0',
            parameters: {
              id: 28,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 25,
                  mutability: 'mutable',
                  name: 'spender',
                  nameLocation: '312:7:0',
                  nodeType: 'VariableDeclaration',
                  scope: 33,
                  src: '304:15:0',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address',
                  },
                  typeName: {
                    id: 24,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '304:7:0',
                    stateMutability: 'nonpayable',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address',
                    },
                  },
                  visibility: 'internal',
                },
                {
                  constant: false,
                  id: 27,
                  mutability: 'mutable',
                  name: 'amount',
                  nameLocation: '329:6:0',
                  nodeType: 'VariableDeclaration',
                  scope: 33,
                  src: '321:14:0',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256',
                  },
                  typeName: {
                    id: 26,
                    name: 'uint256',
                    nodeType: 'ElementaryTypeName',
                    src: '321:7:0',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256',
                    },
                  },
                  visibility: 'internal',
                },
              ],
              src: '303:33:0',
            },
            returnParameters: {
              id: 31,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 30,
                  mutability: 'mutable',
                  name: '',
                  nameLocation: '-1:-1:-1',
                  nodeType: 'VariableDeclaration',
                  scope: 33,
                  src: '353:4:0',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_bool',
                    typeString: 'bool',
                  },
                  typeName: {
                    id: 29,
                    name: 'bool',
                    nodeType: 'ElementaryTypeName',
                    src: '353:4:0',
                    typeDescriptions: {
                      typeIdentifier: 't_bool',
                      typeString: 'bool',
                    },
                  },
                  visibility: 'internal',
                },
              ],
              src: '352:6:0',
            },
            scope: 34,
            stateMutability: 'nonpayable',
            virtual: false,
            visibility: 'public',
          },
        ],
        abstract: false,
        baseContracts: [],
        canonicalName: 'Playground',
        contractDependencies: [],
        contractKind: 'contract',
        fullyImplemented: true,
        linearizedBaseContracts: [34],
        name: 'Playground',
        nameLocation: '67:10:0',
        scope: 35,
        usedErrors: [],
      },
    ],
    license: 'MIT',
  },
  id: 0,
} as const