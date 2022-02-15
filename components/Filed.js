export default function Field({label, name, type, className}) {
    const addClassName = className ? `${className}` : ""
    const formControlClassName = `bg-transparent border border-primarygray-300 py-3 px-6 w-full ${addClassName}`

    return (
        <div className="mb-6">
            <label htmlFor={name} className="text-sm font-semibold block mb-1">{label}</label>
            {type == "text" && (
                <input type={type} name={name} className={formControlClassName} id={name}/>
            )}

            {type == "textarea" && (
                <textarea type={type} name={name} className={formControlClassName} id={name}/>
            )}
        </div>
    )
}