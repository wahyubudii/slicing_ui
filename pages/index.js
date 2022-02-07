import Hero from "../components/Hero";
import ProfileSection from "../components/ProfileSection";
import SectionProjects from "../components/SectionProjects";
import SkillSection from "../components/SkillSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProfileSection />
      <SkillSection />
      <SectionProjects />
    </div>
  );
}
