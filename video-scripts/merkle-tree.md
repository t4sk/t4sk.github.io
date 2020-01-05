# intro

- what is a merkle tree
- code
- other goals
  - exploring the limitation of Solidity
    - cannot push to dynamic memory array

# merkle tree

- construction
- use case
- proof construction
- verification
- txhash(txs) vs merkle tree (txs)
- code

# outro

- merkle tree
  - merkle root
  - merkle proof

```
pragma solidity ^0.5.11;

contract MerkleProof {
    function verify(
        bytes32[] memory proof, bytes32 root, bytes32 leaf, uint index
    )
        public pure returns (bool)
    {
        bytes32 hash = leaf;

        for (uint i = 0; i < proof.length; i++) {
            bytes32 proofElement = proof[i];

            if (index % 2 == 0) {
                hash = keccak256(abi.encodePacked(hash, proofElement));
            } else {
                hash = keccak256(abi.encodePacked(proofElement, hash));
            }

            index = index / 2;
        }

        return hash == root;
    }
}

contract TestMerkleProof is MerkleProof {
    bytes32[] public hashes;

    constructor() public {
        string[4] memory transactions = [
            "alice -> bob",
            "bob -> dave",
            "carol -> alice",
            "dave -> bob"
        ];

        for (uint i = 0; i < transactions.length; i++) {
            hashes.push(keccak256(abi.encodePacked(transactions[i])));
        }

        uint n = transactions.length;
        uint offset = 0;

        while (n > 0) {
            for (uint i = 0; i < n - 1; i+=2) {
                hashes.push(
                    keccak256(abi.encodePacked(
                        hashes[offset + i],
                        hashes[offset + i + 1]
                    ))
                );
            }
            offset += n;
            n = n / 2;
        }
    }

    function getRoot() public view returns (bytes32) {
        return hashes[hashes.length - 1];
    }

    /* verify
        3rd leaf
        0x2c52130a69b3254240c961f6acfb09713f4f9cc14aa498cbf844b94a27da64ff

        root
        0x415e49eafecf2263e29c49dcf6473e52dbf4b0f03090ff949b52aabc88aa1e8b

        index
        2

        proof
        0x5e2393c41c2785095aa424cf3e033319468b6dcebda65e61606ee2ae2a198a87
        0x2bdf15e9913a52d9f36bb7e62634a6079cc32fc2fe975aadfcbc67b7e3a8a61b

        ["0x5e2393c41c2785095aa424cf3e033319468b6dcebda65e61606ee2ae2a198a87", "0x2bdf15e9913a52d9f36bb7e62634a6079cc32fc2fe975aadfcbc67b7e3a8a61b"], 0x415e49eafecf2263e29c49dcf6473e52dbf4b0f03090ff949b52aabc88aa1e8b, 0x2c52130a69b3254240c961f6acfb09713f4f9cc14aa498cbf844b94a27da64ff, 2
    */
}
```
