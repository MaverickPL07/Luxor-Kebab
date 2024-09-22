import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeroFooterIcon = ({link, icon, color}) => {
    return (
        <a href={link} target="_blank" className={`transition-all hover:text-${color}`}>
            <FontAwesomeIcon icon={icon} />
        </a>
    )
}

export default HeroFooterIcon