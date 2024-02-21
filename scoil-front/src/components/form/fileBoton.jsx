import { useEffect, useRef, useState } from "react";
import Input from "./input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/form/button";

const FileInput = ( {text, accept = '*', index='', getFile = () => {}, reset = 0, background="bg-[#4A61CE]", top="5", width = 'full'} ) => {
    const input = useRef();
    // const [ fileName, setFilename] = useState(text.selecciona);
    const [ fileName, setFilename] = useState();

    useEffect(() => {
        // setFilename(text.selecciona);
    }, [ reset ])
    const showExplorerDialog = () => {
        input.current.click();
    }

    const setFileNameInput = value => {
        if(value.target.value){
            setFilename(value.target.files[0].name)
            getFile(value.target.files[0]);
            let f = value.target.cloneNode(true);
            f.removeAttribute('id')
            // getFile(f);
        } else {
            // setFilename(text.selecciona);
        }
    }

    return (
        <div className="relative cursor-pointer min-h-[56px]">
            <Button type="button" colors={`${background} w-${width} text-white hover:btn-sky-blue mt-${top}`} txt_button={text} />
            <input className="hidden fileadjunto" id={`fileAttachment_${index}`} type="file" name={`files_${index}`} accept={accept} ref={input} onChange={setFileNameInput} />
            <div className="absolute w-full top-5 h-9" onClick={e => {console.log(e);showExplorerDialog()}}></div>
        </div>
    )
}

export default FileInput;