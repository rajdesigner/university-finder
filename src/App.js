import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import UniversityList from "./components/UniversityList";
import SearchUniversity from "./components/SearchUniversity";

const App = () => {
  const [universities, setUniversity] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [countries, setCountries] = useState([]);

  const getUniversity = async (searchValue) => {
    const url = `http://universities.hipolabs.com/search?country=${searchValue}`;

    const response = await fetch(url);
    const responseJSON = await response.json();

    if (responseJSON) {
      setUniversity(responseJSON);
    }
  };

  const listOfCountries = async() => {
    const api_url_for_countries = `https://countriesnow.space/api/v0.1/countries`;
    const  res = await fetch(api_url_for_countries);
    const resJSON = await res.json();
    debugger;
    if(resJSON['error'] === false){
      console.log('list of countries', resJSON['data'][0])
      setCountries(resJSON['data'])
    }
  }

  useEffect(() => {
    listOfCountries();
  }, [])

  useEffect(() => {
    getUniversity(searchValue);
  }, [searchValue]);

  return (
    <div className="container-fluid">
      <div className="py-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
          alt=""
          width="72"
          height="72"
        />
        <h2>University Finder</h2>
       
      </div>
      <div className="row">
        <SearchUniversity
          searchValue={searchValue}
          setSearchValue={setSearchValue} countries = {countries}
        />
      </div>
      <div className="row">
        <UniversityList universities={universities} />
      </div>
    </div>
  );
};

export default App;
