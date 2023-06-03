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
  VStack,
} from "@chakra-ui/react"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import NextLink from "next/link"
import { useEffect, useState } from "react"
import { useAccount } from "wagmi"

import { collection } from "../data/sampleData.json";
import Post from "../components/posts/Post"



export default function PaperList() {
  const { isConnected } = useAccount()

  const data = collection;

  console.log(data);

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
      <VStack align={"left"} spacing={4}>
        {data.map((post, i) => (
            <Post post={post} index={i+1} />
        ))}
      </VStack>
    </>
  )
}
