import DividerCircle from "./DividerCircle"
import DividerLine from './DividerLine'


const Divider = ({styles}) => {
    return (
        <div className={`divider w-[90vw] m-auto flex items-center justify-center gap-[.75vw] ${styles}`}>
            <DividerCircle />
            <DividerLine />
            <DividerCircle />
            <DividerLine />
            <DividerCircle />
        </div>
    )
}

export default Divider