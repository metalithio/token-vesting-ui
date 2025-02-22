export default {
	abi: [
	    {
	      "constant": true,
	      "inputs": [],
	      "name": "duration",
	      "outputs": [
	        {
	          "name": "",
	          "type": "uint256"
	        }
	      ],
	      "payable": false,
	      "type": "function"
	    },
	    {
	      "constant": true,
	      "inputs": [],
	      "name": "cliff",
	      "outputs": [
	        {
	          "name": "",
	          "type": "uint256"
	        }
	      ],
	      "payable": false,
	      "type": "function"
	    },
	    {
	      "constant": true,
	      "inputs": [
	        {
	          "name": "token",
	          "type": "address"
	        }
	      ],
	      "name": "releasableAmount",
	      "outputs": [
	        {
	          "name": "",
	          "type": "uint256"
	        }
	      ],
	      "payable": false,
	      "type": "function"
	    },
	    {
	      "constant": false,
	      "inputs": [
	        {
	          "name": "token",
	          "type": "address"
	        }
	      ],
	      "name": "release",
	      "outputs": [],
	      "payable": false,
	      "type": "function"
	    },
	    {
	      "constant": true,
	      "inputs": [
	        {
	          "name": "token",
	          "type": "address"
	        }
	      ],
	      "name": "vestedAmount",
	      "outputs": [
	        {
	          "name": "",
	          "type": "uint256"
	        }
	      ],
	      "payable": false,
	      "type": "function"
	    },
	    {
	      "constant": true,
	      "inputs": [],
	      "name": "beneficiary",
	      "outputs": [
	        {
	          "name": "",
	          "type": "address"
	        }
	      ],
	      "payable": false,
	      "type": "function"
	    },
	    {
	      "constant": false,
	      "inputs": [
	        {
	          "name": "token",
	          "type": "address"
	        }
	      ],
	      "name": "revoke",
	      "outputs": [],
	      "payable": false,
	      "type": "function"
	    },
	    {
	      "constant": true,
	      "inputs": [],
	      "name": "revocable",
	      "outputs": [
	        {
	          "name": "",
	          "type": "bool"
	        }
	      ],
	      "payable": false,
	      "type": "function"
	    },
	    {
	      "constant": true,
	      "inputs": [],
	      "name": "owner",
	      "outputs": [
	        {
	          "name": "",
	          "type": "address"
	        }
	      ],
	      "payable": false,
	      "type": "function"
	    },
	    {
	      "constant": true,
	      "inputs": [
	        {
	          "name": "",
	          "type": "address"
	        }
	      ],
	      "name": "released",
	      "outputs": [
	        {
	          "name": "",
	          "type": "uint256"
	        }
	      ],
	      "payable": false,
	      "type": "function"
	    },
	    {
	      "constant": true,
	      "inputs": [],
	      "name": "start",
	      "outputs": [
	        {
	          "name": "",
	          "type": "uint256"
	        }
	      ],
	      "payable": false,
	      "type": "function"
	    },
	    {
	      "constant": false,
	      "inputs": [
	        {
	          "name": "newOwner",
	          "type": "address"
	        }
	      ],
	      "name": "transferOwnership",
	      "outputs": [],
	      "payable": false,
	      "type": "function"
	    },
	    {
	      "constant": true,
	      "inputs": [
	        {
	          "name": "",
	          "type": "address"
	        }
	      ],
	      "name": "revoked",
	      "outputs": [
	        {
	          "name": "",
	          "type": "bool"
	        }
	      ],
	      "payable": false,
	      "type": "function"
	    },
	    {
	      "inputs": [
	        {
	          "name": "_beneficiary",
	          "type": "address"
	        },
	        {
	          "name": "_start",
	          "type": "uint256"
	        },
	        {
	          "name": "_cliff",
	          "type": "uint256"
	        },
	        {
	          "name": "_duration",
	          "type": "uint256"
	        },
	        {
	          "name": "_revocable",
	          "type": "bool"
	        }
	      ],
	      "payable": false,
	      "type": "constructor"
	    },
	    {
	      "anonymous": false,
	      "inputs": [
	        {
	          "indexed": false,
	          "name": "amount",
	          "type": "uint256"
	        }
	      ],
	      "name": "Released",
	      "type": "event"
	    },
	    {
	      "anonymous": false,
	      "inputs": [],
	      "name": "Revoked",
	      "type": "event"
	    },
	    {
	      "anonymous": false,
	      "inputs": [
	        {
	          "indexed": true,
	          "name": "previousOwner",
	          "type": "address"
	        },
	        {
	          "indexed": true,
	          "name": "newOwner",
	          "type": "address"
	        }
	      ],
	      "name": "OwnershipTransferred",
	      "type": "event"
	    }
	  ]
}