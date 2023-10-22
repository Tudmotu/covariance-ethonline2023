const CovarianceHubABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "field",
          "type": "string"
        }
      ],
      "name": "InvalidContribution",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidStateTransition",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotAllowed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotEnoughFundsInSafe",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "SenderIsNotInitiator",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "contribId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "assertionId",
          "type": "bytes32"
        }
      ],
      "stateMutability": "nonpayable",
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
      "name": "assertionByContribution",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "assertionId",
          "type": "bytes32"
        }
      ],
      "name": "assertionDisputedCallback",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "assertionId",
          "type": "bytes32"
        },
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "name": "assertionResolvedCallback",
      "outputs": [],
      "stateMutability": "nonpayable",
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
      "name": "campaignById",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "rewardAmount",
          "type": "uint256"
        },
        {
          "internalType": "contract IERC20",
          "name": "rewardToken",
          "type": "address"
        },
        {
          "internalType": "contract Safe",
          "name": "initiator",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "title",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "ipfsCid",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "maxPoints",
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
          "name": "_campaignId",
          "type": "uint256"
        }
      ],
      "name": "campaignContributions",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "contributionId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "contributor",
              "type": "address"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "campaignId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "challengeIndex",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "internalType": "struct Contribution",
              "name": "contribution",
              "type": "tuple"
            }
          ],
          "internalType": "struct ContributionInfo[]",
          "name": "contribs",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract Safe",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "campaignsByAccount",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "campaignId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "challengeIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "internalType": "struct Contribution[]",
          "name": "contributions",
          "type": "tuple[]"
        }
      ],
      "name": "contribute",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "contribId",
          "type": "uint256"
        }
      ],
      "name": "contribution",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "campaignId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "challengeIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "internalType": "struct Contribution",
          "name": "contrib",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "contributionByAssertion",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
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
      "name": "contributionStatus",
      "outputs": [
        {
          "internalType": "enum Status",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "rewardAmount",
              "type": "uint256"
            },
            {
              "internalType": "contract IERC20",
              "name": "rewardToken",
              "type": "address"
            },
            {
              "internalType": "contract Safe",
              "name": "initiator",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "title",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "ipfsCid",
              "type": "string"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "kpi",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "points",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "maxContributions",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "contributionsSpent",
                  "type": "uint256"
                }
              ],
              "internalType": "struct Challenge[]",
              "name": "challenges",
              "type": "tuple[]"
            },
            {
              "internalType": "uint256",
              "name": "maxPoints",
              "type": "uint256"
            }
          ],
          "internalType": "struct Campaign",
          "name": "campaign",
          "type": "tuple"
        }
      ],
      "name": "createCampaign",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "contributor",
          "type": "address"
        }
      ],
      "name": "getAccountContributions",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "contribs",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "getCampaign",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "rewardAmount",
              "type": "uint256"
            },
            {
              "internalType": "contract IERC20",
              "name": "rewardToken",
              "type": "address"
            },
            {
              "internalType": "contract Safe",
              "name": "initiator",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "title",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "ipfsCid",
              "type": "string"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "kpi",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "points",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "maxContributions",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "contributionsSpent",
                  "type": "uint256"
                }
              ],
              "internalType": "struct Challenge[]",
              "name": "challenges",
              "type": "tuple[]"
            },
            {
              "internalType": "uint256",
              "name": "maxPoints",
              "type": "uint256"
            }
          ],
          "internalType": "struct Campaign",
          "name": "campaign",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract CovarianceSafePlugin",
          "name": "_plugin",
          "type": "address"
        }
      ],
      "name": "setPlugin",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "contribId",
          "type": "uint256"
        }
      ],
      "name": "settle",
      "outputs": [
        {
          "internalType": "bool",
          "name": "isApproved",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
  