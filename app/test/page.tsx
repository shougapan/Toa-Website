import Gallery from "@/components/Gallery";

import img1 from "@/public/main1.jpg";
import img2 from "@/public/couple1.jpg";
import img3 from "@/public/femaleAdvisor.jpg";

export default function Home() {
  return (
    <Gallery
      interval={5000}
      slides={[
        {
          src: img1,
          alt: "Counselling",
          title: "💙 成婚まで完全サポート",
          description:
            "20年以上の経験を活かし、あなたの婚活を最後までサポートします。",
        },
        {
          src: img2,
          alt: "Happy Couple",
          title: "🩷 理想のお相手との出会い",
          description:
            "一人ひとりに合わせた戦略で、運命のお相手探しをお手伝いします。",
        },
        {
          src: img3,
          alt: "Office",
          title: "🌸 完全予約制",
          description:
            "落ち着いた空間で安心してご相談いただけます。",
        },
      ]}
    />
  );
}