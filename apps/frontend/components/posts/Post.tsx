import { Link, Text } from "@chakra-ui/react";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

export default function Post(props: { post: any, index: number }) {
  const post = props.post;
  const date = new Date(post.date);
  const index = props.index;

  const dateStr = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`

  return (
    <div>
      <Text>
        <Link href={`/${index}`}>
          <b>{post.title}</b>
        </Link>
      </Text>
      <Text fontSize="xs">
        <i>{dateStr}</i> | <i>{post.category}</i> | <i>{post.server}</i>
      </Text>
    </div>
  )
}