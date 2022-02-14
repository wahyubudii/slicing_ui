import ContactSection from "../components/ContactSection";
import Hero from "../components/Hero";
import ProfileSection from "../components/ProfileSection";
import ProjectSection from "../components/ProjectSection";
import SkillSection from "../components/SkillSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProfileSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}
