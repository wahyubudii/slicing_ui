import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function SectionProjects() {
  return (
    <section className="py-28">
      <div className="container mx-auto">
        <SectionTitle>Projects</SectionTitle>
        <SectionParagraph>Beberapa proyek bikinan saya</SectionParagraph>
        <div className="flex mt-4 flex-wrap">
            <article className="mt-14 px-4 w-6/12 text-center">
                <img src="/resources.png" className="rounded-lg"/>
                <h3 className="mt-6 text-xl font-semibold">Hasten</h3>
                <p className="text-lg mt-4 text-gray-500">Explorasi landing page</p>
            </article>
            <article className="mt-14 px-4 w-6/12 text-center">
                <img src="/resources.png" className="rounded-lg"/>
                <h3 className="mt-6 text-xl font-semibold">Hasten</h3>
                <p className="text-lg mt-4 text-gray-500">Explorasi landing page</p>
            </article>
            <article className="mt-14 px-4 w-6/12 text-center">
                <img src="/resources.png" className="rounded-lg"/>
                <h3 className="mt-6 text-xl font-semibold">Hasten</h3>
                <p className="text-lg mt-4 text-gray-500">Explorasi landing page</p>
            </article>
            <article className="mt-14 px-4 w-6/12 text-center">
                <img src="/resources.png" className="rounded-lg"/>
                <h3 className="mt-6 text-xl font-semibold">Hasten</h3>
                <p className="text-lg mt-4 text-gray-500">Explorasi landing page</p>
            </article>
        </div>
      </div>
    </section>
  );
}
