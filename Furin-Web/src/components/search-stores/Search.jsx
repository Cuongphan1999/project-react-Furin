import { FaSearchengin } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import filtersSlice from "../../slices/filtersSlice";
import { searchTextSelector } from "../../redux-toolkit/selectors";


export default function SearchItem(){
    const searchText = useSelector(searchTextSelector)
    const dispatch = useDispatch()
    
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
        <form className="w-50 d-flex align-items-center">
                <input
                 value={searchText}
                    type="search"
                    placeholder="Search some furin"
                    className="form-control form-control-sm"
                    style={{ paddingRight: '25px' }}
                    onInput={(e) => dispatch(filtersSlice.actions.setSearchText(e.target.value))}
                />
                <FaSearchengin size={25} style={{ marginLeft: '-30px', color: "#0D6EFD" }} />
        </form>
    </div>
                
    )
}