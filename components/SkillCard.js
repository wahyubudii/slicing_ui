export default function SkillCard({ name, level, image }) {
  return (
    <div className="bg-white shadow-skill rounded-lg p-6 flex items-center md:p-4">
      <img src={image} className="mr-6 h-16 md:mr-3" />
      <div className="block ml-3">
        <h4 className="text-lg font-semibold md:md:text-base">{name}</h4>
        <p className="text-sm text-gray-400 font-semibold mt-1 md:text-sm">{level}</p>
      </div>
    </div>
  );
}
