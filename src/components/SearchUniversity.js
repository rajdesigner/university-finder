/**
 * @author Rajmani Prasad
 * @email rprasad@okkular.io
 * @create date 2021-08-01 14:36:22
 * @modify date 2021-08-01 14:36:22
 * @desc [This component search university based on particular country]
 */

import React from 'react';

const SearchUniversity = (props) => {
    return (
            <div className = "col-md-6">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Country</span>
                    </div>

                    <select className='form-control' onChange={(event) => props.setSearchValue(event.target.value)}>
                        {props.countries.map((country, index)=>(
                            <option value={country['country']}>{country['country']}</option>
                        ))}
                    </select>
                </div>
            </div>
    )
}

export default SearchUniversity;