import { getListApi } from "@/components/useForm";
import { useEffect, useRef, useState } from "react";
import InputAgenda from "../inputAgenda";

const Genre = ({ tag, placeholder, value, prefix, system }) => {
    const select = useRef(null);
    const [ editable, setEditable ] = useState(false);
    const [ genres, setGenres ] = useState([]);
    const [ genre, setGenre ] = useState('');
    const [ genreVisible, setGenreVisible ] = useState(placeholder);

    const changeEditable = () => {
        setEditable(true);
    }

    useEffect(() => {
        if(genres.length === 0){
            getListApi(`${prefix}/tags/genre/`, setGenres, system);
        }
        setEditable(false);
        
        if(!Number.isInteger(value) && value && value[0] !== 0){
            if(genres[value]){
                setGenreVisible(`${genres[value]}`)
            }
            setTimeout(() => {
            }, 200);
            setGenre(value);
        } else if(Number.isInteger(value) && value){
            if(genres[value]){
                setGenreVisible(`${genres[value]}`)
            }
            setTimeout(() => {
            }, 200);
            setGenre(value);
        } else {
            setGenre('');
            setGenreVisible(`${placeholder}`);
        }
    }, [value, prefix, placeholder, genres, system]);

    return (
        <InputAgenda tag={tag} hasTags={false}>
            { editable && (
                <div className="w-full sm:py-0 py-4">
                    <select className="font-open text-sm text-dark-blue placeholder:text-gray_alter placeholder:text-sm focus:outline-none dark:bg-icon-dark dark:text-white dark:placeholder:text-white" name="genre" ref={select} id={`input-genre`} value={genre} onChange={e=>{setGenre(e.target.value)}}>
                        { genres.map( (g, index) => {
                            return <option value={index} key={index}>{g}</option>
                        })}
                    </select>
                </div>
            )}
            { !editable && (
                <span className="font-open text-sm text-gray_alter cursor-pointer sm:py-0 py-2" onClick={changeEditable}>{genreVisible}</span>
            )}
        </InputAgenda>
    )
}

export default Genre;