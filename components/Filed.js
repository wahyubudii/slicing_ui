export default function Field({label, name}) {
    return (
        <div>
            <label htmlFor={name} className="text-sm font-bold">{label}</label>
            <input type="text" name={name} id={name}/>
        </div>
    )
}