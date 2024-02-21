import { useState } from "react";
import ProgressBar from "../items/progressBar";
// import ProgressBar from "../form/progressBar";
import Cropper from "cropperjs";
import 'cropperjs/dist/cropper.css';
import Modal from "@/layout/modal";
import Save from "./btns/save";
import Delete from "./btns/delete";
import RotateLeft from "./btns/rotateleft";
import RotateRight from "./btns/rotateright";
/**
 * Modal para subir una imagen
 * @param {string} id
 * @param {string} label
 * @param {string} label_a
 * @param {string} title
 * @param {string} btn_save
 * @param {function} imageParent A esta función recibe como parámetro un objeto blob
 * @returns 
 */
const UploadImage = ({ id, label, label_a, title, btn_save, imageParent, width = 450, height = 450, circulo = 'circulo' }) => {
    const [ hasImage, setHasImage ] = useState(false);
    const [ load, setLoad ] = useState(false);
    const [ highClass, setHighClass ] = useState(false);
    const [ cropperImage, setCropperImage ] = useState(null);
    const [ isUpload, setIsUpload ] = useState(false);
    /* const width = 450;
    const height = 450; */
    /**
     * Añadir clase para indicar el área donde se puede soltar la imagen
     * @param {event} e 
     */
    const highlight = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setHighClass(true);
    }
    /**
     * Retira la clase que indica el área donde se puede soltar la imagen
     * @param {event} e 
     */
    const unHighlight = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setHighClass(false);
    }
    /**
     * Obtiene el archivo cuando se arrastra la imagen al área indicada
     * @param {event} e 
     */
    const loadFile = e => {
        e.preventDefault();
        e.stopPropagation();
        let data = e.dataTransfer;
        let file = data.files
        uploadFile(file, true);
    }
    /**
     * Obtiene el archivo al seleccionarlo del explorador de archivos
     * @param {event} e 
     */
    const loadImage = e => {
        uploadFile(e);
    }
    /**
     * Muestra el explorador de archivos
     * @param {event} e 
     */
    const selectImg = e => {
        let btn = document.getElementById('idInput')
        if(btn){
            btn.click();
        }
    }
    /**
     * Obtiene la imagen para guardarla temporalmente en la computadora del cliente
     * @param {event} evt 
     * @param {boolean} isFile Indica si fue arrastrado al área indicada
     */
    const uploadFile = (evt, isFile = false) => {
        let img = document.querySelector('.image-preview');
    	if(img){
    		img.remove();
    	}
        setHasImage(true);
        let reader = new FileReader();
        setLoad(true);
        reader.onload = e => {
            let imageTag = document.createElement('IMG');
            imageTag.setAttribute('src', e.target.result);
            imageTag.classList.add('image-preview');
            let parent = document.getElementById('idImg');
            parent.appendChild(imageTag);
            setTimeout(() => {
                let cropperImg = new Cropper(imageTag, {
                    aspectRatio: 2,
                    viewMode: 1,
                    dragMode: 'move',
                    autoCropArea: 1,
                    restore: false,
                    guides: false,
                    center: true,
                    highlight: false,
                    cropBoxMovable: false,
                    cropBoxResizable: false,
                    toggleDragModeOnDblclick: true,
                    background: false,
                });
	            setCropperImage(cropperImg);
                setLoad(false);
            }, 400);
        }

        if(isFile){
            reader.readAsDataURL(evt[0]);
        } else {
            reader.readAsDataURL(evt.target.files[0])
        }
        let idImg = document.getElementById('idImg');
        if(idImg){
            idImg.value = null;
        }
    }
    /**
     * Hace zoom a la imagen
     * @param {float} percent 
     */
    const setZoom = (percent) => {
        cropperImage.reset()
        cropperImage.zoom(percent/100);
    }
    /**
     * Elimina la imagen
     */
    const resetImage = () => {
        setHasImage(false);
        setCropperImage(null);
    }
    /**
     * Corta y obtiene el objeto de la imagen
     * @param {*} e 
     */
    const upload = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsUpload(true);
        let canvas = cropperImage.getCroppedCanvas({maxWidth: width, maxHeight: height, minWidth: width, minHeight: height, submit});
        canvas.toBlob(blob => {
            // Proceso de subida
            imageParent(blob);
            resetImage();
            let modal = document.getElementById(id);
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            setIsUpload(false);
        });
    }
    /**
     * Rota la imagen a la izquierda
     */
    const rotateLeft = () => {
        cropperImage.rotate(-90);
    }
    /**
     * Rota la imagen a la derecha
     */
    const rotateRight = () => {
        cropperImage.rotate(90);
    }

    const submitForm = () => {
        let f = document.getElementById('formImg')
        f.submit();
    }

    const cancelImg = () => {
        setHasImage(false);
    }
    const options = <>
        { hasImage && (
            <>
                <Save action={upload} send={isUpload} />
                <Delete action={cancelImg} send={false} />
                <RotateLeft action={rotateLeft} send={false} />
                <RotateRight action={rotateRight} send={false} />
            </>)
        }
    </>

    return (
        <>
            <Modal id={id} title={title} size="625px" options={options} padding="pl-[44px] pr-[52px] py-5" >
                { hasImage && 
                    <div className="w-full max-h-[calc(100vh-125px)] overflow-auto text-center pr-[44px]">
                        <div className="py-1 sm:w-full w-[250px] max-h-[calc(100vh-125px)]">
                            <div id="idImg" className={`cropper-container w-full sm:h-[450px] h-[250px] max-h-[calc(100%-125px)] overflow-hidden ${circulo}`}>
                                { load && 
                                    <div className="w-full h-full flex items-center justify-center bg-gray-300">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    </div>
                                }
                            </div>
                            <form onSubmit={(e)=> {e.preventDefault();e.stopPropagation()}} id="formImg">
                                <div className="w-full mt-[44px] mb-[22px]">
                                    <ProgressBar changeBar={setZoom} />
                                </div>
                            </form>
                        </div>
                    </div>
                }
                { !hasImage && 
                    <div className="py-5 max-h-[calc(100vh-125px)] overflow-auto pr-[44px]">
                        <div className={(highClass ? 'bg-gray-200' : 'bg-gray-400') + " text-white rounded-md py-2 text-sm sm:h-[450px] w-full h-[250px] dropArea m-auto flex sm:flex-nowrap flex-wrap items-center justify-center sm:flex-row flex-col"} onDragEnter={highlight} onDragOver={highlight} onDragLeave={unHighlight} onDrop={loadFile}>
                            <input className="hidden" id="idInput" name="image" type="file" accept="image/*" onChange={loadImage} />
                            <span className="h-5">{label}</span> <span className="text-slate-300 ml-1 cursor-pointer h-5" onClick={selectImg}>{label_a}</span>
                        </div>
                    </div>
                }
            </Modal>
        </>
    )
}

export default UploadImage;