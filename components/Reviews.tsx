import { StarIcon } from "lucide-react";
import Image from "next/image";
import { DUMMY_REVIEWS, type Review } from "@/data/reviews";
import { cn } from "@/lib/utils";

type ReviewsGridProps = {
  reviews: Review[];
};

type ReviewCardProps = Omit<Review, "id"> & {
  lastReview: boolean;
};

const ReviewCard = ({
  name,
  avatar,
  rating,
  shortText,
  review,
  timeAgo,
  lastReview,
}: ReviewCardProps) => {
  return (
    <div
      className={cn(
        "bg-white p-4 rounded-lg max-w-[28ch] flex flex-col gap-4 shadow-md",
        lastReview ? "md:col-span-2 lg:col-span-3" : ""
      )}
    >
      <div className="flex items-center gap-2">
        <Image
          src={avatar}
          alt={`${name}'s avatar`}
          width={50}
          height={50}
          className="rounded-full"
        />
        <p className="text-lg font-bold">{name}</p>
      </div>
      <div className="flex items-center gap-1 text-yellow-500">
        {[...Array(rating)].map((_, index) => (
          <StarIcon key={index} className="w-4 h-4" fill="currentColor" />
        ))}
      </div>
      <p className="text-sm text-muted-foreground mb-2">{shortText}</p>
      <p className="text-sm text-muted-foreground">{review}</p>
      <span className="text-sm text-muted-foreground">{timeAgo}</span>
    </div>
  );
};

const ReviewsGrid = ({ reviews }: ReviewsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:col-span-2 lg:col-span-3 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-7">
      {reviews.map((review, index) => (
        <ReviewCard
          key={index}
          name={review.name}
          avatar={review.avatar}
          rating={review.rating}
          shortText={review.shortText}
          review={review.review}
          timeAgo={review.timeAgo}
          lastReview={reviews.length % 2 !== 0 && index === reviews.length - 1}
        />
      ))}
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-20 gap-10">
      <p className="text-4xl font-bold text-center md:text-5xl lg:text-7xl">
        Create Amazing <br /> AI Images
      </p>
      <ReviewsGrid reviews={DUMMY_REVIEWS} />
    </div>
  );
};

export default Reviews;
