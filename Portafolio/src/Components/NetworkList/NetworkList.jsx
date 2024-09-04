import { IconGitHub, IconInstagram, IconLinkedin } from "../../assets/Icons";
import "./NetworkList.css"
const network = [
    {
        ref: "https://github.com/AngelCstd",
        icon: <IconGitHub tamano={24} />
    },
    {
        ref: "https://www.linkedin.com/in/angelcstd/",
        icon: <IconLinkedin tamano={24} />
    },
    {
        ref: "https://instagram.com/angelcstd",
        icon: <IconInstagram tamano={24} />
    }
]

export function NetworkList() {
    return (
        <ul className="hero__network">
            {network.map((obj) => {
                return (
                    <li key={obj.ref + Math.random() * 1000} className="hero__network_item">
                        <button className="push">
                            <a href={obj.ref}>
                                {obj.icon}
                            </a>
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}