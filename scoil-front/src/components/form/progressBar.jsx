import { useRef, useState } from "react";

const ProgressBar = ({ changeBar }) => {
    const [ actualPosition, setActualPosition ] = useState('0%');
    const [ percent, setPercent ] = useState(0);
    const [ parentWidth, setParentWidth ] = useState(0)
    const [ active, setActive ] = useState(false);
    const [ min, setMin ] = useState(0);
    const [ position, setPosotion ] = useState(0);
    const bar = useRef();
    const parentBar = useRef();

    const setBar = (e) => {
        setParentWidth(parentBar.current.offsetWidth);
        setActive(true);
        setMin(e.pageX - bar.current.offsetLeft);
    }

    const updatePosition = (e) => {
        setPosotion(e.pageX - min);
        if(position > 0 && position <= parentWidth){
            let tmp = (parentWidth > 0) ? ((position*100)/parentWidth) : 0.0;
            setActualPosition(tmp + '%');
            setPercent(tmp.toFixed(0));
            changeBar(tmp)
        }
    }

    const moveBar = (e) => {
        if(active){
            updatePosition(e);
        }
    }

    const dropBar = (e) => {
        setActive(false);
        updatePosition(e);
    }

    return (
        <>
            <div className="relative w-full pt-[2px]" ref={parentBar}>
                <div className="w-full bg-libellum-form h-[15px] rounded-xl overflow-hidden">
                    <div className="bg-libellum-light-blue h-[15px]" style={{width: actualPosition}}></div>
                </div>
                <span className="absolute top-[-25px] dark:text-white" style={{left: actualPosition}}>{percent}%</span>
                <div className="bg-libellum-light-blue h-[20px] w-4 absolute top-0 barddrag drag:cursor-grabbing" style={{left: actualPosition}} draggable="true" onDragStart={setBar} onDrag={moveBar} onDragEnd={dropBar} ref={bar}></div>
            </div>
        </>
    )
}

export default ProgressBar;