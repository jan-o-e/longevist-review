import {
  Button,
  Heading,
  Text,
  Flex as HStack,
  VStack,
} from "@chakra-ui/react"
import NextLink from "next/link"
import { useAccount } from "wagmi"

import { collection } from "../data/sampleData.json";
import Post from "../components/posts/Post"


export default function PaperList() {
  const { isConnected } = useAccount()

  const data = collection;

  console.log(data);

  return (
    <>
      <HStack justify="space-between" mb={6}>
        <Heading>Pre-Prints for Review</Heading>
        <NextLink href="/issue" passHref>
          {isConnected && (
            <Button as="a" colorScheme="purple">
              Add a paper to be reviewed
            </Button>
          )}
        </NextLink>
      </HStack>
      <VStack align={"left"} spacing={4}>
        {data.map((post, i) => (
            <HStack>
                <Text>▲</Text>
                <Text px={2}>{i+1}. </Text>
                <Post post={post} index={i}/>
            </HStack>
        ))}
      </VStack>
    </>
  )
}
