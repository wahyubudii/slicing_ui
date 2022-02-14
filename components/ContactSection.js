import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import ContactItem from "./ContactItem";
import Field from "./Filed";

export default function ContactSection() {
  return (
    <section className="container mx-auto">
      <div className="bg-primarygray flex rounded-lg">
        <div className="w-6/12 border-r border-primarygray-200">
            <div className="py-16 px-20">
                <SectionTitle left>Contact</SectionTitle>
                <SectionParagraph left>Beberapa cara menghubungi saya.</SectionParagraph>
                <ContactItem
                    label="Mail"
                    value="hi@nauv.al"
                    icon="/mail.svg"
                    className="mt-10"
                />
                <ContactItem
                    label="Phone"
                    value="081234567890"
                    icon="/phone.svg"
                    className="mt-6"
                />
                <ContactItem
                    label="Twitter"
                    value="@mhdnauvalazhar"
                    icon="/twitter.svg"
                    className="mt-6"
                />
            </div>
        </div>
        <div className="w-6/12">
            <form >
                <Field label="Name" name="nama"/>
            </form>
        </div>
      </div>
    </section>
  );
}
