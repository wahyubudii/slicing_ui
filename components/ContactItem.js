export default function ContactItem({label, value, icon, className}) {
    const addClassName = className ? `${className}` : ""

    return (
        <div className={`flex items-start ${addClassName}`}>
            <img src={icon} className="w-7"/>
            <div className="ml-6">
                <div className="text-sm font-semibold mb-1">{label}</div>
                <div className="text-lg font-semibold">{value}</div>
            </div>
        </div>
    )
}