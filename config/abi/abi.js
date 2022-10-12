export const abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_id_cat",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "sum",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_code_word",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "_secure",
				"type": "bool"
			}
		],
		"name": "add_trans",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_apl",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "answer",
				"type": "bool"
			}
		],
		"name": "apl_admin_answer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "apl_change_status",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id_trans",
				"type": "uint256"
			}
		],
		"name": "cancelTrans",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id_trans",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_code_word",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "answer_recipient",
				"type": "bool"
			}
		],
		"name": "recipient_answer",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_login",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "_password",
				"type": "bytes32"
			}
		],
		"name": "registration",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id_trans",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "answer_admin",
				"type": "bool"
			}
		],
		"name": "secure_answer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "answers",
		"outputs": [
			{
				"internalType": "address",
				"name": "admin",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "aplications",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id_apl",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "polz",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "confrims",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "end",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_login",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "_password",
				"type": "bytes32"
			}
		],
		"name": "avtorization",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "categorys",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id_cat",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name_cat",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "samples",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id_samp",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_cat",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name_samp",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "sum",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "translates",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id_trans",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_cat",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "sum",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "code_word",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "secure",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "admin_answer",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "polz_confrim",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "end",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "attempts",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "address",
				"name": "login",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "password",
				"type": "bytes32"
			},
			{
				"internalType": "bool",
				"name": "check_admin",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "viewAnswer",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "admin",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "user",
						"type": "address"
					}
				],
				"internalType": "struct Perevod.Answer[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "viewAplications",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id_apl",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "polz",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "confrims",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "end",
						"type": "bool"
					}
				],
				"internalType": "struct Perevod.ApplicationRole[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "viewCat",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id_cat",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name_cat",
						"type": "string"
					}
				],
				"internalType": "struct Perevod.Category[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "viewSamples",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id_samp",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "id_cat",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name_samp",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "sum",
						"type": "uint256"
					}
				],
				"internalType": "struct Perevod.Sample[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "viewTrans",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id_trans",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "id_cat",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "sender",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "recipient",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "sum",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "code_word",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "secure",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "admin_answer",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "polz_confrim",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "end",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "attempts",
						"type": "uint256"
					}
				],
				"internalType": "struct Perevod.Translate[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_polz",
				"type": "address"
			}
		],
		"name": "viewUser",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "login",
						"type": "address"
					},
					{
						"internalType": "bytes32",
						"name": "password",
						"type": "bytes32"
					},
					{
						"internalType": "bool",
						"name": "check_admin",
						"type": "bool"
					}
				],
				"internalType": "struct Perevod.User",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]