import React, { useState } from "react";



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
