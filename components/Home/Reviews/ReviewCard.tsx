import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

type Props = {
  review: {
    name: string;
    review: string;
    rating: number;
    profession: string;
    image: string;
  };
};

const ReviewCard = ({ review }: Props) => {
  const { image, name, profession, rating, review: clientReview } = review;
  return (
    <div className="rounded-md overflow-hidden bg-[#140c1c] m-4">
      <div className="p-6">
        <Image src="/images/q.png" alt="quotes" width={50} height={50} />
        <p className="text-white text-opacity-70">{clientReview}</p>
        <Image src="/images/q.png" alt="quotes" width={50} height={50} className="ml-auto"/>
      </div>
      <div className="px-6 py-3 mb-3 w-fit mx-auto rounded-full flex items-center space-x-3 bg-indigo-900 text-white font-bold">
        <span>{rating}/5</span>
        <FaStar className="text-yellow-400"/>
      </div>
    </div>
  );
};

export default ReviewCard;
