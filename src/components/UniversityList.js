/**
 * @author Rajmani Prasad
 * @email rprasad@okkular.io
 * @create date 2021-08-01 14:37:24
 * @modify date 2021-08-01 14:37:24
 * @desc [this component renders a list of universities]
 */

import React from "react";

const UniversityList = (props) => {
  return (
    <>
      <div className="col-md-12">
        <table className="table table-bordered table-dark">
          <thead>
            <tr>
              <th>Country</th>
              <th>Name</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {props.universities.map((university, index) => (
              <tr>
                <td>{university.country}</td>
                <td>{university.name}</td>
                <td>
                  <a href={university["web_pages"][0]} target={"_blank"} rel="noreferrer">
                    {university["web_pages"][0]}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UniversityList;
