export default function NavItem({ href, children, scheme }) {
    const schemes ={
        light: "text-white text-opacity-60 hover:text-opacity-100",
        dark: "text-black"
    }

    const pickedScheme = schemes[scheme]

    return (
        <li>
            <a 
                href={href} 
                className={`${pickedScheme} text-lg font-semibold  transition`}
            >
                {children}
            </a>
        </li>
    )
}