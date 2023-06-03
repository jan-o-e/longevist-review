import {
  Button,
  Heading,
  Table,
  Link,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Flex,
} from "@chakra-ui/react"
import NextLink from "next/link"
import { useEffect, useState } from "react"
import { useAccount } from "wagmi"

export default function PaperList() {
  const { isConnected } = useAccount()
  return (
    <>
      <Flex justify="space-between" mb={6}>
        <Heading>Pre-Prints for Review</Heading>
        <NextLink href="/issue" passHref>
          {isConnected && (
            <Button as="a" colorScheme="purple">
              Add a paper to be reviewed
            </Button>
          )}
        </NextLink>
      </Flex>
      <Table>
        <Tr>
          <Th>TLDR-ID</Th>
          <Th>Authors</Th>
          <Th>Deadline</Th>
          <Th>Paper CID</Th>
          <Th>Actions</Th>
        </Tr>
      </Table>
    </>
  )
}
