import { ClockLoader } from "react-spinners";

const Loading = ({loading, children, color = '#0082c9', size = 150, align = 'center', p = 'p-8'}) => {
    return (
        <>
            { loading && (
                <div className={`w-full h-full flex items-center justify-${align}`} style={{minHeight: `${(size+20)}px`}}>
                    <div className={`bg-white ${p} rounded-full flex items-center justify-center overflow-hidden`}><ClockLoader color={color} size={size} /></div>
                </div>
            )}
            { !loading && (
                <>
                    {children}
                </>
            )}
        </>
    )
}

export default Loading;