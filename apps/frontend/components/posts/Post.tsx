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

export default function Post(props: { post: any }) {
    const post = props.post;
    const date = new Date(post.date);

    const dateStr = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`

    return (
        <div>
            <Text>
                <Link href={`https://www.biorxiv.org/content/${post.doi}v${post.version}`} isExternal>
                    <b>{post.title}</b>
                </Link>
            </Text>
            <Text fontSize="xs">
                <i>{dateStr}</i> | <i>{post.category}</i> | <i>{post.server}</i>
            </Text>
        </div>
    )
}