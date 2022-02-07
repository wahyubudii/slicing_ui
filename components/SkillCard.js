export default function SkillCard({ name, level, image }) {
  return (
    <div className="bg-white shadow-skill rounded-lg p-7 flex items-center">
      <img src={image} className="mr-6 h-16" />
      <div className="block ml-3">
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="text-sm text-gray-400 font-semibold mt-1">{level}</p>
      </div>
    </div>
  );
}
