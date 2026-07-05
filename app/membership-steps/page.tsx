import Image from "next/image";
import Gallery from "../components/Gallery";

import clinic1 from "@/public/couple1.jpg";
import clinic2 from "@/public/femaleAdvisor.jpg";
import clinic3 from "@/public/maleAdvisor.jpg";


const galleryImages = [
  {
    src: clinic1,
    alt: "大阪梅田ドクターズ結婚相談所のカウンセリングルーム",
  },
  {
    src: clinic2,
    alt: "Advisor",
  },
  {
    src: clinic3,
    alt: "Advisor",
  }
];

export default function MarriageStoriesPage() {
  return (
    <main className="bg-white">
        <Gallery images={galleryImages} />
    </main>
  );
}