import { Link } from "@chakra-ui/react";

export default function Post(props: { post: any, index: number }) {
    const post = props.post;
    const index = props.index;

    return (
        <div>
            <p>
                {`${index}. `}
                <Link href={`https://www.biorxiv.org/content/${post.doi}v${post.version}`} isExternal>
                    <b>{post.title}</b>
                </Link>
            </p>
        </div>
    )
}