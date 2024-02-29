import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import filtersSlice from "../../slices/filtersSlice";
import { recommendedSelector } from "../../redux-toolkit/selectors";



const recommends = [
    {
        value: 'All',
        name: 'All Products'
    },
    {
        value: "Ashley",
        name: "Ashley"
    },
    {
        value: "Aaron",
        name: "Aaron"
    },
    {
        value:"Mono",
        name: "Mono"
    },
    {
        value: "Row",
        name: "Row"
    },
    {
        value: "Arcahorn",
        name: 'Arcahorn'
    },
    {
        value: "Dietiker",
        name: "Dietiker"
    }
    
]
function Recommended() {
    const [collapse, setCollapse] = useState(false)
    const recommended = useSelector(recommendedSelector)
    const dispatch = useDispatch()
    return (
       
    <div className="accordion-item py-2 d-flex flex-column justify-content-center">
            <h5 className="accordion-header">
                <span role="button" className={`accordion-button ${collapse ? 'collapsed' : ''}`}
                    onClick={() => setCollapse(!collapse)}>
                    Recommended
                </span>

            </h5>
            {
                collapse && (
                    <div className="form-group">
                        {
                            recommends.map((recmme, index) => (
                                <div key={recmme.value} className="form-check py-1">
                                    <input className="form-check-input" type="radio" name="category"
                                        id={`recommended_${index}`}
                                        value={recmme.value}
                                        defaultChecked={recmme.value === 'All Products'}
                                        onChange={() => dispatch(filtersSlice.actions.setSearchRecommended(recmme.value))}
                                    />
                                    <label
                                        htmlFor={`recommended_${index}`}
                                        role="button"
                                        className={`form-check-label ${recmme.value === recommended ? 'text-decoration-underline fw-bolder' : ''}`}
                                    >
                                        {recmme.value}
                                    </label>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Recommended;