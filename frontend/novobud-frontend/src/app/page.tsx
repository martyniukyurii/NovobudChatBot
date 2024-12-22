import RecommendedSection from "@/components/Home/RecommendedSection";
import HeroSection from "@/components/Home/HeroSection";
import api_link from "@/utils/api_handler";

export default function Home() {
  console.log(api_link);
  return (
    <div>
      <HeroSection />
      <RecommendedSection />
    </div>
  );
}
