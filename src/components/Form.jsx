import React, { useState } from "react";
import { fetchData } from "../fetch";

const Form = () => {
  const [formData, setFormData] = useState({
    EmployeeName: "",
    // EmployeeId: "",
  });

  const accessToken = localStorage.getItem("accessToken");
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const demoFun = () => {
    fetchData(
      // "http://localhost:5011/Employee",
      // { firstName: "SwathiG" },
      // { accessToken }
      {
        endpoint: "http://localhost:5011/Employee",
        accessToken: accessToken,
        requestData: { firstName: formData.EmployeeName },
      }
    );
  };


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
     
      <button onClick={() => demoFun()}>Sumbit</button>
      {/* <button>Submit</button> */}
    </div>
  );
};

export default Form;
