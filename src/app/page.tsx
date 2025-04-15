import HeroSection from "@/components/home/hero-section";
import CollectionsSection from "@/components/home/collections-section";
import FeaturedSection from "@/components/home/featured-section";
import TrendingSection from "@/components/home/trending-section";
import IconsSection from "@/components/home/icons-section";
import SportSection from "@/components/home/sport-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CollectionsSection />
      <FeaturedSection />
      <TrendingSection />
      <IconsSection />
      <SportSection />
    </>
  );
}
