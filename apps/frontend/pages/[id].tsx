import { collection } from "../data/sampleData.json";
import PostInfo from "../components/posts/PostInfo";
import { GetServerSideProps } from "next";
import ReviewBox from "../components/posts/ReviewBox";
import { VStack } from "@chakra-ui/react";
import { useState } from "react";
import ReviewList from "../components/posts/ReviewList";
import { Review } from "../types";




export default function PostPage(props: {post: any}) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const post = props.post;

  const addReview = (address: string, review: string) => {
    setReviews(reviews.concat([{address, content: review}]));
  };

  return (
    <>
      <VStack spacing={5} align={"left"}>
        <PostInfo post={post} />
        <ReviewBox addReview={addReview} />
        <ReviewList reviews={reviews}/>
      </VStack>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<{
  post: any;
}> = async (context) => {

  const id = Number(context.query.id);
  const postData = collection[id];

  if (!postData) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post: postData
    }
  }
}