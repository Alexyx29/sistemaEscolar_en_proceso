import { useEffect, useRef, useState } from "react";

/**
 * Componente Check
 * Es el switch, 
 * @param {string} label
 * @param {boolean} status
 * @param {string} id
 * @param {string} name
 * @param {function} changeStatus
 * @returns 
 */
const Check = ({ label, status, id, name, changeStatus = () => {}, value = 1, key = 0, showPadding = true, height='h-9', showLeft = false, color = null, wFull = true}) => {
    let check = useRef(null);
    const [checked, setChecked ] = useState(status);
    const [ customColor, setCustomColor ] = useState(color);

    const changeColor = () => {
        if(color){
            if(checked){
                setCustomColor(color);
            } else {
                setCustomColor('#D0D0D0');
            }
        }
    }

    useEffect(changeColor, [ checked, color ])

    useEffect(() => {
        setChecked(status);
        changeColor();
    }, [status, value])

    const updateActive = (e) => {
        setChecked(e.target.checked);
        changeStatus(e);
    }

    return (
        <>
            {/* <div className={showPadding ? 'pt-[26px] pe-[20px] flex items-center' : `pe-[20px] flex items-center ${height}`}> */}
            <div className={((wFull) ? ((showPadding) ? 'pt-[26px] w-full flex items-center' : `w-full flex items-center ${height}`) : ((showPadding) ? 'pt-[26px] pe-[20px] flex items-center' : `pe-[20px] flex items-center ${height}`))} >
                { showLeft && (<span className="mr-[6px] opensans text-sm text-gray_alter whitespace-nowrap text-ellipsis overflow-hidden dark:text-white" title="label">{label}</span>) }
                <label htmlFor={id} className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value={value} id={id} name={name} checked={checked} className="sr-only peer" onChange={updateActive} data-key={key} ref={check}/>
                    <div className={`w-11 h-6 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-menu-text after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-btn-image bg-switch-inactive`} style={{backgroundColor: customColor}}></div>
                    { !showLeft && (
                        <span className="ml-[6px] opensans text-sm text-gray_alter dark:text-white whitespace-nowrap text-ellipsis overflow-hidden" title="label">{label}</span>
                    )}
                </label>
            </div>
        </>
    )
}
export default Check;