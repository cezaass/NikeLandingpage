import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";


const CustomerReviews = () => {
  return (
    <section className="max-conatiner">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our
        <span className="text-coral-red">  Customer's </span>
        Say?
      </h3>
      <p className="m-auto mt-4 max-w-lg  text-center info-text"> Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.</p>
<div className="mt-24 flex flex-1 justify-center items-center max-lg:flex-col gap-1">
  {reviews.map((review)=>(
    <ReviewCard key={review.customerName}
    imgURL={review.imgURL}
    customerName={review.customerName}
    rating={review.rating}
    feedback={review.feedback}
    />
  ))}
</div>
    </section>
  )
};

export default CustomerReviews;