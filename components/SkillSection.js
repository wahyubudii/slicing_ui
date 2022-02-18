import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

export default function SkillSection() {
  return (
    <section className="py-28 bg-primarygray" id="skills">
      <div className="container mx-auto px-10 2xl:px-0">
        <SectionTitle>Skills</SectionTitle>
        <SectionParagraph>Beberapa kemampuan saya.</SectionParagraph>
        <div className="flex -mx-4 mt-20 flex-wrap">
          {/* baris ke-1 */}
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="JavaScript"
              level="Lanjutan"
              image="/javascript.svg"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="ReactJs"
              level="Menengah"
              image="/react.svg"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="NodeJs"
              level="Lanjutan"
              image="/nodejs.svg"
            />
          </div>

          {/* baris ke-2 */}
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="JavaScript"
              level="Lanjutan"
              image="/javascript.svg"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="ReactJs"
              level="Menengah"
              image="/react.svg"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="NodeJs"
              level="Lanjutan"
              image="/nodejs.svg"
            />
          </div>

          {/* baris ke-3 */}
          <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
            <SkillCard
              name="JavaScript"
              level="Lanjutan"
              image="/javascript.svg"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
            <SkillCard
              name="ReactJs"
              level="Menengah"
              image="/react.svg"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
            <SkillCard
              name="NodeJs"
              level="Lanjutan"
              image="/nodejs.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
