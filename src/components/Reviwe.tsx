/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";
import { Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ReviewCarousel() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      navigation={true}
      freeMode={true}
      modules={[FreeMode, Navigation]}
      breakpoints={{
        200: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="mySwiper"
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <ReviewCard {...review} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const ReviewCard = ( {name, time, profilePic, stars, text }:any) => {
    const [showFullText, setShowFullText] = useState(false);
  return (
    <div className="p-4 bg-blue-50 rounded-2xl shadow-md border w-full">
      {/* Header Section */}
      <div className="flex items-center gap-3">
        <Image
          src={profilePic}
          alt={name}
          width={40}
          height={40}
          className="rounded-full border"
        />
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm text-gray-500">{time} Rahul</p>
        </div>
        <Image
          src="/download.png"
          alt="SDFG"
          width={20}
          height={20}
          className="ml-auto"
        />
      </div>

      {/* Star Ratings */}
      <div className="flex gap-1 mt-2">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} fill="#f4a462" color="#f4a462" size={20} />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 mt-3 text-sm leading-relaxed">
        {showFullText ? text : `${text.slice(0, 120)}... `}
        <span
          className="text-blue-600 cursor-pointer font-semibold"
          onClick={() => setShowFullText(!showFullText)}
        >
          {showFullText ? "See less" : "See more"}
        </span>
      </p>
    </div>
  );
};

const reviews = [
    {
      name: "Rahul Sharma",
      time: "2 days",
      profilePic: "/avatar-placeholder.webp",
      stars: 5,
      text: "I was suffering from severe migraines for years. I tried different treatments, but nothing worked. After visiting Dr. Rajeev Clinic in Delhi, I started homeopathy treatment. Within 3 months, my migraines reduced significantly. Highly recommended!",
    },
    {
      name: "Sneha Roy",
      time: "1 week",
      profilePic: "/avatar-placeholder.webp",
      stars: 5,
      text: "I had severe skin allergies for a long time. Dr. Rajeev Clinic (Kolkata branch) provided a customized homeopathy treatment. Now, my skin is clear, and I don't have any allergies. Amazing treatment!",
    },
    {
      name: "Amit Kumar",
      time: "1 month",
      profilePic: "/avatar-placeholder.webp",
      stars: 4,
      text: "My hair was getting white at a very young age, only 25. I tried many remedies but nothing worked. Then I visited Dr. Rajeev Clinic. The doctor told me homeopathy takes time but can fix internal problems. Now, after 5 months, I see new black hair growing.",
    },
    {
      name: "Priya Singh",
      time: "3 weeks",
      profilePic: "/avatar-placeholder.webp",
      stars: 5,
      text: "PCOS was making my life difficult. Irregular periods and weight gain were major issues. After 6 months of treatment at Dr. Rajeev Clinic (Ranchi), my periods are regular now, and I feel much healthier!",
    },
    {
      name: "Vikram Patel",
      time: "4 days",
      profilePic: "/avatar-placeholder.webp",
      stars: 5,
      text: "I had acidity and digestion problems for years. Medicines gave temporary relief, but nothing long-term. Homeopathy at Dr. Rajeev Clinic (Patna) cured my digestion permanently!",
    },
    {
      name: "Rohit Mehra",
      time: "2 months",
      profilePic: "/avatar-placeholder.webp",
      stars: 4,
      text: "I was facing major hair loss issues. I took treatment at Dr. Rajeev Clinic, and within 4 months, my hair started regrowing. Very happy with the results!",
    },
    {
      name: "Neha Kapoor",
      time: "5 days",
      profilePic: "/avatar-placeholder.webp",
      stars: 5,
      text: "Dr. Rajeev Clinic in Delhi treated my severe acne problem with homeopathy. My skin is glowing now. Thank you for the excellent treatment!",
    },
    {
      name: "Ankit Tiwari",
      time: "3 weeks",
      profilePic: "/avatar-placeholder.webp",
      stars: 5,
      text: "Sinus infection was making my life miserable. Every season change, I used to fall sick. Homeopathy at Dr. Rajeev Clinic (Kolkata) has improved my immunity. No more sinus issues!",
    },
    {
      name: "Ritu Verma",
      time: "1 week",
      profilePic: "/avatar-placeholder.webp",
      stars: 4,
      text: "I had severe joint pain due to arthritis. Homeopathy treatment at Dr. Rajeev Clinic (Patna) reduced my pain drastically. Now I can walk freely.",
    },
    {
      name: "Suresh Yadav",
      time: "2 days",
      profilePic: "/avatar-placeholder.webp",
      stars: 5,
      text: "I was facing stress and anxiety issues. The homeopathy medicines prescribed by Dr. Rajeev Clinic helped me feel relaxed and stress-free. Great treatment!",
    },
    {
      name: "Kiran Joshi",
      time: "3 days",
      profilePic: "/avatar-placeholder.webp",
      stars: 5,
      text: "Homeopathy works wonders! Dr. Rajeev Clinic in Ranchi helped me recover from chronic cough and cold issues that I had for years.",
    },
    {
      name: "Harish Gupta",
      time: "2 months",
      profilePic: "/avatar-placeholder.webp",
      stars: 4,
      text: "My child had weak immunity and used to fall sick often. Homeopathy treatment from Dr. Rajeev Clinic has made a huge difference. His health is much better now.",
    },
    {
      name: "Pooja Desai",
      time: "1 week",
      profilePic: "/avatar-placeholder.webp",
      stars: 5,
      text: "I had a severe migraine issue for years. Dr. Rajeev Clinic’s homeopathy treatment worked like magic. I no longer have headaches!",
    },
    {
      name: "Abhishek Sinha",
      time: "6 days",
      profilePic: "/avatar-placeholder.webp",
      stars: 4,
      text: "After suffering from chronic back pain, I finally found relief through homeopathy at Dr. Rajeev Clinic. Highly recommended!",
    },
    {
      name: "Manoj Pandey",
      time: "3 months",
      profilePic: "/avatar-placeholder.webp",
      stars: 5,
      text: "I had eczema for many years. After taking treatment at Dr. Rajeev Clinic, my skin has healed completely. No more itching or irritation!",
    },
    {
      name: "Roshni Mehta",
      time: "5 days",
      profilePic: "/avatar-placeholder.webp",
      stars: 5,
      text: "I was struggling with obesity. The homeopathy treatment at Dr. Rajeev Clinic helped me lose weight naturally without any side effects.",
    },
    {
      name: "Rajeev Choudhary",
      time: "2 weeks",
      profilePic: "/avatar-placeholder.webp",
      stars: 5,
      text: "I had severe insomnia and couldn't sleep well at night. Homeopathy treatment from Dr. Rajeev Clinic (Ranchi) improved my sleep cycle completely.",
    },
    {
      name: "Simran Kaur",
      time: "1 month",
      profilePic: "/avatar-placeholder.webp",
      stars: 5,
      text: "My child had ADHD, and we were looking for natural treatment. Dr. Rajeev Clinic provided homeopathy medicines, and within 6 months, we saw huge improvement!",
    },
    {
      name: "Mohit Bansal",
      time: "3 weeks",
      profilePic: "/avatar-placeholder.webp",
      stars: 4,
      text: "My immunity was very weak, and I used to fall sick frequently. After taking homeopathy treatment at Dr. Rajeev Clinic, I feel much stronger and healthier.",
    },
    {
      name: "Deepika Sharma",
      time: "10 days",
      profilePic: "/avatar-placeholder.webp",
      stars: 5,
      text: "I had frequent UTI problems. I was tired of taking antibiotics. Homeopathy treatment from Dr. Rajeev Clinic worked wonders, and I feel much better now!",
    },
  ];
  