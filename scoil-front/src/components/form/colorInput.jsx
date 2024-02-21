import React, {useEffect, useRef} from 'react';

const HexColorInput = ({idItem, value = '#00A3FF', label, hiddenMargin, error_item, focus, change = () => {}}) => {
  const input = useRef();
  const inputColor = useRef();

    useEffect(() => {
      if(value !== null && value !== undefined && value !== ''){
          input.current.value = value
          inputColor.current.value = value
      } else {
          input.current.value = '';
      }
    }, [value]);

  const handleColorChange = (event) => {
    let value2 = event.target.value;
    if(value2.length > 9){
      input.current.value = value2.substring(0, 9);
      inputColor.current.value = value2.substring(0, 9);
      event.target.value = value2;
    } else {
      input.current.value = value2;
      inputColor.current.value = value2;
    }
    var element = document.getElementById("prev");
    element.style.backgroundColor=value2;
    change(value2)
  };

  return (
    <div className={'w-full'}>
        { label !== '' && 
          <label className="block opensans text-sm text-gray_alter whitespace-nowrap text-ellipsis overflow-hidden ml-1">{label}</label>
        }
        <div className={(hiddenMargin ? '' : 'md:mb-7 mb-2') + ' relative'}>
            <input id = {idItem} name={idItem} type="text" onFocus={focus} onChange={handleColorChange} autoComplete="off" className="w-full border rounded border-libellum-border focus:outline-none text-gray_alter placeholder:text-sm placeholder:opensans placeholder:text-gray_alter text-sm px-[10px] py-3 font-open h-9" ref={input} size={8}/>
            <div id="prev" className='absolute w-7 h-7 rounded-full right-0'
              style={{
                top: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: value,
              }}
            />
            <input type='color' id={`${idItem}_color`} name={`${idItem}_color`} value={value} className='absolute top-1 right-[14px] w-7 h-7 overflow-hidden rounded-full opacity-0 cursor-pointer' onChange={handleColorChange} ref={inputColor}/>
            { error_item &&(
              <div className="text-error-warning text-xs whitespace-nowrap font-open">{error_item}</div>
            )}
        </div>
    </div>
  );
};

export default HexColorInput;
