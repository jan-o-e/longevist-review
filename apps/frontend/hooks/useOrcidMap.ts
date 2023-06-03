import { ethers } from "ethers"
import { useEffect, useState } from "react"
import { useTokenContract } from "./useTokenContract"

export const useOrcidMap = (address?: string) => {
  const { orcidContract } = useTokenContract()
  const [mappedOrcid, setMappedOrcid] = useState<string>()

  useEffect(() => {
    if (!orcidContract || !address || !ethers.utils.isAddress(address)) {
      setMappedOrcid(undefined)
      return
    }

    ;(async () => {
      setMappedOrcid(await orcidContract.addressToOrcid(address))
    })()
  }, [address, orcidContract])

  return { orcid: mappedOrcid }
}
