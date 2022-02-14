export default function SectionParagraph({left, children}) {
  return (
    <p className={`text-lg text-gray-500 mt-2 ${!left ? "text-center" : ""}`}>{children}</p>
  );
}
