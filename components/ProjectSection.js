import ProjectItem from "./ProjectItem";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function SectionProjects() {
  return (
    <section className="py-28" id="projects">
      <div className="container mx-auto px-10 2xl:px-0">
        <SectionTitle>Projects</SectionTitle>
        <SectionParagraph>Beberapa proyek bikinan saya</SectionParagraph>
        <div className="flex mt-20 -mx-4 flex-wrap">
          <div className="md:w-6/12 w-full px-4 pb-8">
            <ProjectItem 
              name="Hasten"
              description="Explorasi Landing Page"
              image="/hasten.png"
            />
          </div>
          <div className="md:w-6/12 w-full px-4 pb-8">
            <ProjectItem 
              name="Resources"
              description="Explorasi Resources Page"
              image="/resources.png"
            />
          </div>
          <div className="md:w-6/12 w-full px-4 pb-8 md:pb-0">
            <ProjectItem 
              name="Resources"
              description="Explorasi Resources Page"
              image="/resources.png"
            />
          </div>
          <div className="md:w-6/12 w-full px-4 pb-8 md:pb-0">
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
