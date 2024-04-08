import React, { useState } from "react";

// export const fetchData = (method = "POST", endpoint, accessToken) => {
//   const bearer = `Bearer ${accessToken}`;

//   const options = {
//     method: method,
//     headers: {
//       Authorization: bearer,
//     },
//   };

//   return fetch(endpoint, options)
//     .then((resp) => console.log(resp.json()))
//     .catch((err) => console.log(err));
// };

const Form = () => {
  const [formData, setFormData] = useState({
    EmployeeName: "",
    EmployeeId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

//   console.log(sessionStorage.getItem());
  return (
    <div>
      <h2>Fill in the employee form</h2>
      <div>
        <label htmlFor="">Employee Name</label>
        <input
          type="text"
          name="EmployeeName"
          value={formData.EmployeeName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Employee Id</label>
        <input
          type="text"
          name="EmployeeId"
          value={formData.EmployeeId}
          onChange={handleChange}
        />
      </div>
          {/* <button onClick={fetchData()}>Sumbit</button> */}
          <button>Submit</button>
    </div>
  );
};

export default Form;
