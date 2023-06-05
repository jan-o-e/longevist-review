import { Heading, Link, VStack, Text } from "@chakra-ui/react";

export default function PostInfo(props: { post: any }) {
  const post = props.post;

  return (
    <div>
      {/* @ts-ignore */}
      <VStack spacing={4} align={"left"}>
        <Heading size={'md'}>
          <Link href={`https://www.biorxiv.org/content/${post.doi}v${post.version}`} isExternal>
            {post.title}
          </Link>
        </Heading>
        <Text>
          <b>Abstract</b>
          <br />
          <p>{post.abstract}</p>
        </Text>
      </VStack>
    </div>
  )
}