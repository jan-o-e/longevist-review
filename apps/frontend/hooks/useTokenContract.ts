import { useState } from "react"
import { orchidAbi } from "@app/contracts"
import { Contract, ethers } from "ethers"
import { useEffect } from "react"
import { useAccount, useNetwork, useSigner } from "wagmi"

//mumbai orcid contract: 0x74a58601b3765516196EBF7db47A1959eD886097

type ChainLocation = {
  address: string
  block: number
}

export const contractConfig: Record<
  string,
  { orcid: ChainLocation }
> = {
  maticmum: {
    orcid: {
      address: "0x74a58601b3765516196EBF7db47A1959eD886097",
      block: 28464119,
    } 
  },
  foundry: {
    orcid: { address: "0x5FbDB2315678afecb367f032d93F642f64180aa3", block: 0 }
  }
}

export function useTokenContract() {
  const { isConnected } = useAccount()
  const { chain } = useNetwork()
  const { data: signer } = useSigner()

  const [orcidContract, setOrcidContract] = useState<Contract>()
  const [chainConfig, setChainConfig] = useState<{
    orcid: ChainLocation
    antreview: ChainLocation
  }>()

  useEffect(() => {
    if (!isConnected || !chain?.network || !signer) return

    const orcidContractAddress = contractConfig[chain.network].orcid.address
    setOrcidContract(
      new ethers.Contract(orcidContractAddress, orchidAbi, signer)
    )
    setChainConfig(contractConfig[chain.network])
  }, [chain?.network, isConnected, signer])

  return {orcidContract, chainConfig }
}
