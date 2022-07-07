import React, { useState } from "react";
import axios from "axios";
import { SearchBar } from "./SearchBar";
import { DisplayUserComponent } from "./DisplayUserComponent";

const configObj = {
  client_id: " Iv1.7b0be11b780f2650",
  client_secret: "347a1798f1865436d46ae9cfcb981a8a7f081f9b",
  repos_count: 5,
  repos_sort: "created: asc",
  token: "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"
}
export const UserContainer = () => {
  //api calls
  const [userData, setUserData] = useState({});
  const fetchUserDetails = async (searchKey) => {
    // console.log(searchKey);
    const {
      data
    } = await axios.get(
      `https://api.github.com/users/${searchKey}?client_id=${configObj.client_id}&client_secret=${configObj.client_secret}`,
      { headers: { Authorization: configObj.token } }
    );
    setUserData(data);

    // call the api fetch, axios npm i axios
  };

  return (
    <div>
      <SearchBar fetchUserDetails={fetchUserDetails} />
      <DisplayUserComponent userData={userData} />
    </div>
  );
};
