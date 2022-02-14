import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

export default function SkillSection() {
  return (
    <section className="py-28 bg-primarygray">
      <div className="container mx-auto">
        <SectionTitle>Skills</SectionTitle>
        <SectionParagraph>Beberapa kemampuan saya.</SectionParagraph>
        <div className="flex -mx-4 mt-20 flex-wrap">
          {/* baris ke-1 */}
          <div className="w-4/12 px-4 pb-8">
            <SkillCard
              name="JavaScript"
              level="Lanjutan"
              image="/javascript.svg"
            />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillCard
              name="ReactJs"
              level="Menengah"
              image="/react.svg"
            />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillCard
              name="NodeJs"
              level="Lanjutan"
              image="/nodejs.svg"
            />
          </div>

          {/* baris ke-2 */}
          <div className="w-4/12 px-4 pb-8">
            <SkillCard
              name="JavaScript"
              level="Lanjutan"
              image="/javascript.svg"
            />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillCard
              name="ReactJs"
              level="Menengah"
              image="/react.svg"
            />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillCard
              name="NodeJs"
              level="Lanjutan"
              image="/nodejs.svg"
            />
          </div>

          {/* baris ke-3 */}
          <div className="w-4/12 px-4 pb-8">
            <SkillCard
              name="JavaScript"
              level="Lanjutan"
              image="/javascript.svg"
            />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillCard
              name="ReactJs"
              level="Menengah"
              image="/react.svg"
            />
          </div>
          <div className="w-4/12 px-4 pb-8">
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
