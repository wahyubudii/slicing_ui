import ProjectItem from "./ProjectItem";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function SectionProjects() {
  return (
    <section className="py-28">
      <div className="container mx-auto">
        <SectionTitle>Projects</SectionTitle>
        <SectionParagraph>Beberapa proyek bikinan saya</SectionParagraph>
        <div className="flex mt-20 -mx-4 flex-wrap">
          <div className="w-6/12 px-4 pb-8">
            <ProjectItem 
              name="Hasten"
              description="Explorasi Landing Page"
              image="/hasten.png"
            />
          </div>
          <div className="w-6/12 px-4 pb-8">
            <ProjectItem 
              name="Resources"
              description="Explorasi Resources Page"
              image="/resources.png"
            />
          </div>
          <div className="w-6/12 px-4 pb-8">
            <ProjectItem 
              name="Resources"
              description="Explorasi Resources Page"
              image="/resources.png"
            />
          </div>
          <div className="w-6/12 px-4 pb-8">
            <ProjectItem 
              name="Hasten"
              description="Explorasi Landing Page"
              image="/hasten.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
