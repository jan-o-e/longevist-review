import { Review } from "../../types";

export default function ReviewList(props: {reviews: Review[]}) {
  const reviews = props.reviews;

  return (
    <div>
      {[...reviews].reverse().map((review, i) => (
        <div key={i} className="py-4">
          <b>{review.address}</b>
          <br />
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  )
}