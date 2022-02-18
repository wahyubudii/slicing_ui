export default function SectionParagraph({left, children}) {
  return (
    <p className={`text-base text-gray-500 mt-2 ${!left ? "text-center" : ""}`}>{children}</p>
  );
}
