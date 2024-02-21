import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = ( { search, evtSearch = () => {}, padding="py-[14px] mb-4" }) => {
    return (
        <div className={`${padding} flex items-center justify-between px-5 border border-libellum-border rounded-full bg-white w-full dark:bg-form-btns dark:border-dark-border`}>
            <input type="text" className="font-open text-sm text-dark-blue placeholder:text-gray_alter placeholder:text-sm focus:outline-none w-[calc(100%-32px)] dark:bg-form-btns dark:text-icons-gray dark:placeholder:text-icons-gray" placeholder={search} onChange={evtSearch} />
            <FontAwesomeIcon icon={faSearch} className="text-base dark:text-icons-gray" />
        </div>
    )
}

export default Search;
