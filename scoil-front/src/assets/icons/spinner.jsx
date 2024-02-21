import { ClockLoader } from "react-spinners";

const Spinner = ({color = '#0082c9', size = 30}) => {
    return (
        <div className="w-full h-full top-0 left-0 z-10 flex items-center justify-center">
            <ClockLoader color={color} size={size} />
        </div>
    )
}

export default Spinner;