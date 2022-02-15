import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import ContactItem from "./ContactItem";
import Field from "./Filed";
import Button from "./Button";

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
            <form className="py-16 px-20">
              <div className="flex -mx-4">
                <div className="w-6/12 px-4">
                  <Field label="Name" name="name" type="text"/>
                </div>
                <div className="w-6/12 px-4">
                  <Field label="Email" name="email" type="text"/>
                </div>
              </div>
              <Field label="Subject" name="subject" type="text"/>
              <Field label="Message" name="message" type="textarea" className="h-40"/>
              <div className="text-right">
                <Button variant="black" pill>Send</Button>
              </div>
            </form>
        </div>
      </div>
    </section>
  );
}
