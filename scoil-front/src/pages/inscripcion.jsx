
import ScoilLayout from "@/layout/scoil";
import bgScoil from '../assets/background/bg_1.jpg';
import NormalSize from "@/components/items/form/normal";
import Date from "@/components/form/date";
import Select from "@/components/form/select";
import Input from "@/components/form/input";
import LadaModal from "@/components/modal/contacts/lada";
import { ladas } from "@/components/data/ladas";
import InputPhone from "@/components/form/phone";
import { useState, useEffect, useRef } from "react";
import { getTextApiSinSystem , searchPostal, quitarAcentos, validateForm, hideModal, showModal, getTextApi, setItemApi, getItemApi } from "@/components/useForm";
import FileBoton from "@/components/form/fileBoton";
import Button from "@/components/form/button";
import { getActualSystem } from "@/components/useLanguage";
import moment from "moment";
import Head from "next/head";
import Message from "@/components/modal/message";

const Inscripcion = () => {
    const prefix = 'pre-inscripcion';
    const [ sendForm, setSendForm ] = useState(false);
    const [ text, setText ] = useState({
        title: 'Solicitud de inscripción', 
        btn_save: 'Guardar',   
        btn_send: 'Enviar Solicitud',  
        btn_success: "Solicitud Enviada", 
        labels: {
            personal_information: 'Información Personal',
            registration_date: "Fecha de Inscipción", 
            born_date: 'Fecha de Nacimiento',
            age: 'Edad',
            scholarship: 'scholarship',
            genere: "Genero",
            email: "Correo Eléctronico",
            ext: 'Ext',
            curp: 'CURP',
            rfc: 'RFC',
            cp: 'Código Postal',
            attachment_doc: 'Adjuntar Documentos',
            academic_information: 'Información Académica',
            genre: 'Género'
        },
        files: {
            birth_certificate: "ACTA DE NACIMIENTO",
            proof_studies: "COMPROBANTE DE ESTUDIOS",
            proof_address: "COMPROBANTE DE DOMICILIO",
            curp: "CURP",
            official_identification: "IDENTIFICACIÓN OFICIAL"
        },
        address: {title: 'Dirección', name: 'Nombre', street: 'Calle', type_street: 'Eje Vial', num_ext: '# Exterior', num_int: '# Interior', floor: 'Piso', tower: 'Edificio / Torre', postalcode: 'Código Postal', googleMaps: 'Google Maps', state: 'Estado', city: 'Ciudad', town_hall: 'Alcaldía / Municipio', suburb: 'Colonia', betweenStreet: 'Entre las calles', references: 'Referencias'}
        
    });

    const erroNull = {name_address: '', street: '', type_street: '', postalcode: '', state: '', city: '', town_hall: '', suburb: ''};
    const errObj ={born_date: '',escolaridad: '',usr_name: '',lastname: '',genere: '',email: '',phone: '',curp: '',rfc: '',cp: '',street: '',num_ext: '',city: '',town_hall: '',suburb: '',select_level: '',select_academicOffer: '',select_turno: '',select_campus: ''};
    const [ errors, setErrors ] = useState(errObj);
    const [ escolaridad, setEscolaridad] = useState([]);
    const [ genres, setGenres ] = useState([]);
    const [ fLadas, setFLadas ] = useState(ladas);
    const [ errCurp, setErrCurp ] = useState();
    const [ errEmail, setErrEmail ] = useState();
    const [ actualPhone, setActualPhone ] = useState(null);
    const [ actualLada, setActualLada ] = useState('+52');
    const [ lengthLada, setLengthLada ] = useState(10);
    const [ results, setResults ] = useState([]);
    const [ listStates, setListStates ] = useState([]);
    const [ listCities, setListCities ] = useState([]);
    const [ listTownHalls, setListTownHalls ] = useState([]);
    const [ listSuburbs, setListSuburbs ] = useState([]);
    const [ selectPostal, setSelectPostal ] = useState(0);
    const [ background, setBackground] = useState('bg-[#4A61CE]');
    const [top, setTop] = useState('5');
    const [width, setWidth] = useState('full');
    const [actaBorn, setActaBorn] = useState(null);
    const [compDomicilio, setCompDomicilio] = useState(null);
    const [proofStudies, setProofStudies] = useState(null);
    const [curp, setCurp] = useState(null);
    const [ine, setIne] = useState(null);
    const [listaPlantel, setListaPlantel] = useState([]);
    const [listaNivel, setListNivel] = useState([]);
    const [listaTurno, setListaTurno] = useState([]);
    const [listaOferta, setListaOferta] = useState([]);
    const [ errorMessage, setErrorMessages ] = useState({});
    const [ resetFile, setResetFile ] = useState(0);
    const [ actualId, setActualId ] = useState(0);
    const [ maxDate, setMaxDate] = useState(null);
    // const system_selected = getActualSystem();
    const suburb_name = useRef();
    const form = useRef(null);
    const today = moment();
    const [ redraw, setRedraw ] = useState(0);
    const [ messageM, setMessageM] = useState('');


    useEffect(() => {
        // if(system_selected){
            getTextApiSinSystem(`${prefix}/text`, r => {
                setText(r.text);
                setListaPlantel(r.listPlantel);
                setErrors(r.errors);
                setErrorMessages(r.errors);
                setEscolaridad(r.escolaridades)
                let g = r.genres.filter((i,k) => k > 0);
                setGenres(g);
                const antes = today.subtract(13, 'years');
                setMaxDate(antes.format('YYYY-MM-DD'))
                // setListTypes(response.types);
                // setLoading(false)
            });
            // }, system_selected.ss);
        // } else {
            // window.location.href = '/'
        // }
    }, []);

    // valida correo parcialmente desactivado
    const validateEmail = (value) => {
        if(value){
            getItemApi(`${prefix}/validate/email/${actualId}/`, value, r => {
                setErrEmail(r);
            // }, system_selected.token, err => {});
        }, 0, err => {});
        }
    }
    const validateCurp = (value) => {
        if(value){
            if(value.length > 18){
                let em = document.getElementById('curp');
                if(em){
                    em.value = value.substring(0, 18);
                    value = value.substring(0, 18);
                }
            }
            if(value.length != 18){
                setErrCurp('El CURP debe se de 18 caracteres');
            } else {    
                getItemApi(`${prefix}/validate/curp/${actualId}/`, value, r => {
                    setErrCurp(r);
                }, 0, err => {});
                // }, system_selected.token, err => {});
            }
        }
    }

    const resetEmail = e => {
        if(errEmail){
            setErrEmail('');
        }
    }

    const filterLadas = e => {
        let value = e.target.value;
        if(value){
            let results = ladas.filter(s => s.nombre.toLowerCase().includes(value) || s.codigo_telefono == value);
            setFLadas(results);
        } else {
            setFLadas(ladas);
        }
    }

    const showLadas = (input) => {
        showModal('ladaModal');
        setActualPhone(input);
    }

    const selectLada = (iso) => {
        hideModal('ladaModal');
        setActualLada('+' + iso);
        setTimeout(() => {
            actualPhone.value = '+' + iso;
            let p = document.getElementById('input-phone');
            if(p){
                p.focus();
                let l = ladas.find(i => i.iso == iso);
                if(l){
                    setLengthLada(l.numeros);
                }
            }
        })
    }

    /**
     * Buscar en la API el código postal
     */
    const searchPostalLocal = (e) => {
        searchPostal(e, setResults)
        removeError('cp', e.target.value)
    }

    useEffect(() => {
        if(results.length){
            let estado = [];
            let ciudad = [];
            let alcaldia = [];
            let colonia = [];
            results.map(r => {
                let existEdo = estado.some(item => item.id == r.estado);
                if(!existEdo){
                    estado.push({id: r.estado, name: r.estado});
                }
                let existCiudad = ciudad.some(item => item.id == r.ciudad);
                if(!existCiudad){
                    ciudad.push({id: r.ciudad, name: r.ciudad});
                }
                let existAlc = alcaldia.some(item => item.id == r.municipio);
                if(!existAlc){
                    alcaldia.push({id: r.municipio, name: r.municipio});
                }
                let existCol = colonia.some(item => item.id === r.id);
                if(!existCol){
                    colonia.push({id: r.id, name: r.suburb});
                }
            });
            
            setListStates(estado);
            setListCities(ciudad);
            setListTownHalls(alcaldia);
            setListSuburbs(colonia);
            suburb_name.current.value = colonia[0].name;
            setSelectPostal(selectPostal+1)
        } else {
            setListStates([]);
            setListCities([]);
            setListTownHalls([]);
            setListSuburbs([]);
        }
    }, [results]);

    const assignName = () => {
        let element = document.getElementById('suburb');
        const val = listSuburbs.find(ls => ls.id == element.value);
        if(val){
            suburb_name.current.value = val.name;
        }
        removeError('suburb', element.value)
    }

    const searchItemList = (e) => {
        let typeItem = e.target.id;
        let actualId = e.target.value;
        console.log(typeItem);
        var combobox = document.getElementById("campus");
        var idCampus = (typeItem == 'level') ? combobox.value : 0;
        getItemApi(`${prefix}/list-item/${typeItem}/${idCampus}/`, actualId, r => {
            switch(typeItem){
                case 'campus':
                    setListNivel(r.listItem);
                    setListaTurno(r.listTurno);    
                break;
                case 'level':
                    setListaOferta(r.listItem);
                    break;
            }
        }, 0 ,err => {});
        // }, system_selected.token, err => {});
    }

    /**
     * Enviar el formulario para guardar
     * @param {event} e 
     */
    const actionSave = (e) => {
        if(!sendForm){
            const formIns = document.getElementById("formInscripcion");
            // const bornDocument = document.getElementById("fileAttachment_born");
            // console.log(bornDocument);
            e.preventDefault();
            e.stopPropagation();
            // let f = new FormData();
            let f = new FormData(form.current);
            // f.append('systemUid', system);
            f.append('acta', actaBorn);
            f.append('estudios', proofStudies);
            f.append('domicilio_doc', compDomicilio);
            f.append('curp_doc', curp);
            f.append('ine', ine);
            f.append('id', null);
            // console.log(f);
            setSendForm(true);
            // setItemApi(`${prefix}/update`, f, success, fail);
            // if(validateForm(errorMessage, setErrors)){
                setItemApi(`${prefix}/update`, f, r => {
                    setSendForm(false);
                    showModal('alert')
                    setMessageM(r);
                    form.current.reset();
                    formIns.reset();
                    // filter(r);

                }, err => {
                    setSendForm(false);
                    setErrors(errObj);
                });
            // }else{
            //     setSendForm(false);
            // }
        }
    }
    
    const success = () => {}
    const fail = () => {}

    const updateAge = e => {
        const ageInput = document.getElementById('age');
        if(e.target.value){
            const age = today.diff(e.target.value, 'years');
            ageInput.value = age;
        } else {
            ageInput.value = '';
        }
        removeError('born_date', e.target.value);
    }

    const removeError = (name, value) => {
        errors[name] = (value != '') ? errObj[name] : errorMessage[name];
        //setErrors(errors);
        setRedraw(redraw+1)
        /* console.log(name, errorMessage, (value != '')) */
    }

    return(
        <>
        <Head>
            <title>{text.title}</title>
        </Head>
        <div className="text-center w-full bg-[#dbdbdb44] pt-8">
            <div className="bg-white w-full max-w-[1500px] relative text-center m-auto rounded-2xl py-2">
                <div className="m-auto opensans uppercase text-2xl font-bold">{text.title}</div>
            </div>
            <div className={`md:pt-3 pt-6 w-full max-w-[1091px] mx-auto z-10 h-full overflow-hidden mt-11`}>
                <form className="w-full" ref={form} id="formInscripcion">
                    <div className={`no-scrollbar overflow-auto h-full max-h-[calc(100vh-136px)] w-full relative lg:pb-12 md:pb-6 sm:pb-3 pb-1`}>
                        {/* SECCION 1 */}
                        <div className={"mb-5 max-w-full relative w-full"}>
                            <div className="w-full lg:px-[42px] sm:px-[18px] px-4">
                                <div className="w-full rounded-2xl xl:flex xl:items-stretch m-auto shadow-lg relative h-[46px] bg-form-bg dark:bg-libellum-dark-v">
                                    <div className="w-full">
                                        <div className="flex items-center justify-center text-[24px] mt-[5px] opensans font-bold text-black whitespace-nowrap mb-[15px] dark:text-white uppercase">
                                            <h1>
                                                {text.labels.personal_information}
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full mt-10 flex-nowrap text-left gap-x-8">
                                    <NormalSize>
                                        <div>
                                            {/* <Date label={text.labels.registration_date} hiddenMargin={true} id='registration_date' name="registration_date" type='date' value={today.format('YYYY-MM-DD')} readonly={true} /> */}
                                            <Input size="full" label={text.labels.registration_date} hiddenMargin={true} id="registration_date" name="registration_date" placeholder="" value={today.format('YYYY-MM-DD')} readonly={true}/>
                                        </div>
                                    </NormalSize>
                                    <NormalSize>
                                        <div>
                                            <Date label={text.labels.born_date} hiddenMargin={true} id='born_date' name="born_date" type='date' error={errors.born_date} value={''} change={updateAge} maxDate={maxDate} />
                                        </div>
                                    </NormalSize>
                                    <NormalSize>
                                        <div>
                                            <Input size="full" label={text.labels.age} hiddenMargin={true} id="age" name="age" placeholder="" change={ () => {}}/>
                                        </div>
                                    </NormalSize>
                                    <NormalSize>
                                        <div>
                                            <Select label={text.labels.scholarship} hiddenMargin={true} id="escolaridad" name="escolaridad" disabled={false} error={errors.escolaridad} emptyItem={'Selecciona un elemento'} isObjectList={true} options={escolaridad} add={false} change={e => {removeError('escolaridad', e.target.value);}}/>
                                        </div>
                                    </NormalSize>
                                </div>
                                <div className="flex w-full mt-10 flex-nowrap gap-x-8"> 
                                    <NormalSize>
                                        <div>
                                            <Input size="full" label={text.labels.name} hiddenMargin={true} id="name" name="name" placeholder="" error={errors.usr_name} change={e => {removeError('usr_name', e.target.value);}}/>
                                        </div>
                                    </NormalSize>  
                                    <NormalSize>
                                        <div>
                                            <Input size="full" label={text.labels.lastname} hiddenMargin={true} id="lastname" name="lastname" placeholder="" error={errors.lastname} change={e => {removeError('lastname', e.target.value);}}/>
                                        </div>
                                    </NormalSize>
                                    <NormalSize>
                                        <div>
                                            <Select label={text.labels.genre} hiddenMargin={true} id="genre" name="genre" error={errors.genere} emptyItem="" isObjectList={false} options={genres} add={false} change={e => {removeError('genere', e.target.value);}} />
                                        </div>
                                    </NormalSize>
                                    <NormalSize>
                                        <div>
                                            <Input size="full" label={text.labels.email} hiddenMargin={true} id="email" name="email" placeholder="" error={((errors.email) ? errors.email : (errEmail) ? errEmail : '')} type="email" change={(e) => {validateEmail(e.target.value);removeError('email', e.target.value)}} blur={resetEmail} />
                                        </div>
                                    </NormalSize>
                                </div>
                                <div className="flex w-full mt-10 flex-nowrap gap-x-8">
                                    <NormalSize>
                                        <InputPhone label={text.labels.phone} hiddenMargin={true} id='phone' name='phone' placeholder={'1234567890'} error={errors.phone} modalLadas={showLadas} lengthPhone={lengthLada} ladaPhone={actualLada} gap = {'2'} change={e=>{removeError('phone', e.target.value)}} />
                                    </NormalSize>
                                    <NormalSize>
                                        <div>
                                            <Input label={text.labels.curp} hiddenMargin={true} id="curp" name="curp" placeholder="" error={((errors.curp) ? errors.curp : (errCurp) ? errCurp : '')} change={(e) => {if(e.target.value){let c = e.target.value.toUpperCase();e.target.value = c;validateCurp(c)} removeError('curp', e.target.value)}}/>
                                        </div>
                                    </NormalSize>
                                    <NormalSize>
                                        <div>
                                            <Input size="full" label={text.labels.rfc} hiddenMargin={true} id="rfc" name="rfc" placeholder="" error={''}/>
                                        </div>
                                    </NormalSize>
                                    <NormalSize>
                                        <div>
                                            <Input size="full" label={text.labels.cp} hiddenMargin={true} id="postal_code" name="postal_code" placeholder="" error={errors.cp} change={searchPostalLocal}/>
                                        </div>
                                    </NormalSize>
                                </div>
                                <div className="flex w-full mt-10 flex-nowrap gap-x-8">
                                    <NormalSize>
                                        <div>
                                            <Input size="full" label={text.address.street} hiddenMargin={true} id="street" name="street" placeholder="" error={errors.street} change={ (e) => {removeError('street', e.target.value)}}/>
                                        </div>
                                    </NormalSize>
                                    <NormalSize>
                                        <div>
                                            <div className="flex items-center justify-center w-full">
                                                <div className="w-1/2 pr-1 md:pr-2">
                                                    <Input size="full" label={text.address.num_ext} hiddenMargin={true} id="num_ext" name="num_ext" placeholder="" error={errors.num_ext} change={ (e) => {removeError('num_ext', e.target.value)}}/>
                                                </div>
                                                <div className="w-1/2 pl-1 md:pl-2">
                                                    <Input size="full" label={text.address.num_int} hiddenMargin={true} id="num_int" name="num_int" placeholder="" error={''} />
                                                </div>
                                            </div>
                                        </div>
                                    </NormalSize>
                                    <NormalSize>
                                        <div>
                                            <div className="flex items-center justify-center w-full">
                                                <div className="w-1/2 pr-1 md:pr-2">
                                                    <Input size="full" label={text.address.floor} hiddenMargin={true} id="floor" name="floor" placeholder="" error={''} />
                                                </div>
                                                <div className="w-1/2 pl-1 md:pl-2">
                                                    <Input size="full" label={text.address.tower} hiddenMargin={true} id="tower" name="tower" placeholder="" error={''} />
                                                </div>
                                            </div>
                                        </div>
                                    </NormalSize>
                                    <NormalSize>
                                        <div>
                                            <Select size="full" label={text.address.suburb} hiddenMargin={true} id="suburb" name="suburb" disabled={false} error={errors.suburb} emptyItem="" isObjectList={true} options={listSuburbs} add={false} text_add="" change={assignName} />
                                            <input type="hidden" name="suburb_name" id="suburb_name" ref={suburb_name} />
                                        </div>
                                    </NormalSize>
                                </div>
                                <div className="flex w-full mt-10 flex-nowrap gap-x-8">
                                    <NormalSize>
                                        <div>
                                            <Select size="full" label={text.address.town_hall} hiddenMargin={true} id="town_hall" name="town_hall" disabled={false} error={errors.town_hall} emptyItem="" isObjectList={true} options={listTownHalls} add={false} text_add="" change={ (e) => {removeError('town_hall', e.target.value)}} />
                                        </div>
                                    </NormalSize>
                                    <NormalSize>
                                        <div>
                                            <Select size="full" label={text.address.city} hiddenMargin={true} id="city" name="city" disabled={false} error={errors.city} emptyItem="" isObjectList={true} options={listCities} add={false} text_add="" change={ (e) => {removeError('city', e.target.value)}} />
                                        </div>
                                    </NormalSize>
                                    <NormalSize></NormalSize>
                                    <NormalSize></NormalSize>
                                </div>
                            </div>
                        </div>
                        {/* Sección 2 */}
                        <div className={"mb-5 max-w-full relative w-full"}>
                            <div className="w-full lg:px-[42px] sm:px-[18px] px-4">
                                <div className="w-full rounded-2xl xl:flex xl:items-stretch m-auto shadow-lg relative h-[46px] bg-form-bg dark:bg-libellum-dark-v">
                                    <div className="w-full">
                                        <div className="flex items-center justify-center text-[24px] mt-[5px] opensans font-bold text-dark-blue whitespace-nowrap  mb-[15px] dark:text-white">
                                            <h1>
                                                {text.labels.attachment_doc}
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full mt-10 flex-wrap gap-x-8 justify-center">
                                    <NormalSize>
                                        <div>
                                            <FileBoton  text={text.files.birth_certificate} index="born" reset={resetFile} getFile = {setActaBorn} accept={'image/*, .pdf'}/>
                                        </div>
                                    </NormalSize>
                                    <NormalSize>
                                        <div>
                                            <FileBoton  text={text.files.proof_studies} index="study" reset={resetFile} getFile = {setProofStudies} accept={'image/*, .pdf'} />
                                        </div>
                                    </NormalSize>
                                    <NormalSize>
                                        <div>
                                            <FileBoton  text={text.files.proof_address} index="address" reset={resetFile} getFile = {setCompDomicilio} accept={'image/*, .pdf'}/>
                                        </div>
                                    </NormalSize>
                                    <NormalSize>
                                        <div>
                                            <FileBoton  text={text.files.curp} index="curp" reset={resetFile} getFile = {setCurp} accept={'image/*, .pdf'}/>
                                        </div>
                                    </NormalSize> 
                                    <NormalSize>
                                        <div>
                                            <FileBoton  text={text.files.official_identification} index="ine" reset={resetFile} accept={'image/*, .pdf'} getFile={setIne} />
                                        </div>
                                    </NormalSize>
                                </div>
                            </div>
                        </div>
                        {/* Sección 3 */}
                        <div className={"mb-5 max-w-full relative w-full"}>
                            <div className="w-full lg:px-[42px] sm:px-[18px] px-4">
                                <div className="w-full rounded-2xl xl:flex xl:items-stretch m-auto shadow-lg relative h-[46px] bg-form-bg dark:bg-libellum-dark-v">
                                    <div className="w-full">
                                        <div className="flex items-center justify-center text-[24px] mt-[5px] opensans font-bold text-dark-blue whitespace-nowrap  mb-[15px] dark:text-white">
                                            <h1>
                                                {text.labels.academic_information}
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full mt-10 flex-nowrap gap-x-8">
                                    <NormalSize>
                                        <div>
                                            <Select size="full" label={text.labels.select_campus} hiddenMargin={true} id="campus" name="campus" disabled={false} error={errors.select_campus} emptyItem="" isObjectList={true} options={listaPlantel} add={false} text_add=""  change = {(e) => {removeError('select_campus', e.target.value);searchItemList(e)}}/>
                                        </div>
                                    </NormalSize>
                                    <NormalSize>
                                        <div>
                                            <Select size="full" label={text.labels.select_level} hiddenMargin={true} id="level" name="level" disabled={false} error={errors.select_level} emptyItem="" isObjectList={true} options={listaNivel} add={false} text_add="" change = {(e) => {removeError('select_level', e.target.value);searchItemList(e)}}/>
                                        </div>
                                    </NormalSize>
                                    <NormalSize>
                                        <div>
                                            <Select size="full" label={text.labels.select_academicOffer} hiddenMargin={true} id="academic_offert" name="academic_offert" disabled={false} error={errors.select_academicOffer} emptyItem="" isObjectList={true} options={listaOferta} add={false} text_add="" change = {(e) => {removeError('select_academicOffer', e.target.value);searchItemList(e)}}/>
                                        </div>
                                    </NormalSize>
                                    <NormalSize>
                                        <div>
                                            <Select size="full" label={text.labels.select_turno} hiddenMargin={true} id="turno" name="turno" disabled={false} error={errors.select_turno} emptyItem="" isObjectList={true} options={listaTurno} add={false} text_add="" change = {(e) => {removeError('select_turno', e.target.value);searchItemList(e)}}/>
                                        </div>
                                    </NormalSize>
                                </div>
                            </div>
                        </div>
                        <div className={"flex items-center justify-center text-[24px] mt-[5px] opensans text-dark-blue whitespace-nowrap mb-[15px] dark:text-white"}>
                            <NormalSize>
                                <div className="items-center justify-center">
                                    <Button type="button" colors={`${background} w-${width} text-white hover:btn-sky-blue mt-${top}`} txt_button={text.btn_save} click = {actionSave} send={sendForm} />
                                </div>
                            </NormalSize>
                        </div>
                    </div>
                </form>
            </div> 
            <LadaModal title={'Lada'} filterLadas={filterLadas} >
                { fLadas.map(l => {
                    return (
                        <div className='flex items-center justify-start w-full py-2 mb-2 cursor-pointer' key={l.id} onClick={()=>{selectLada(l.codigo_telefono)}}>
                            <div className="flex items-center justify-center overflow-hidden border rounded-full w-9 h-9 border-libellum-border">
                            </div>
                            <span className='ml-2 text-sm font-open text-libellum-text-gray'>(+{l.codigo_telefono}) {l.nombre}</span>
                        </div>
                    )
                })}
            </LadaModal>          
        </div>
        <Message success_icon={true} id="alert">{messageM}</Message>
        </>
    )
}

export default Inscripcion;