import React, { useEffect, useState } from "react";
import { fetchData } from "../fetch";

const Form = ({ axiosApi }) => {
  const [formData, setFormData] = useState({
    EmployeeName: "",
  });

  const [employee, setEmployee] = useState(null);

  // const accessToken = localStorage.getItem("accessToken");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const demoFun = () => {
  //   fetchData(
  //     // "http://localhost:5011/Employee",
  //     // { firstName: "SwathiG" },
  //     // { accessToken }
  //     {
  //       endpoint: "http://localhost:5011/Employee",
  //       accessToken: accessToken,
  //       requestData: { firstName: formData.EmployeeName },
  //     }
  //   );
  // };

  // useEffect(() => {
  //   fetchData(
  //     // "http://localhost:5011/Employee",
  //     // { firstName: "SwathiG" },
  //     // { accessToken }
  //     {
  //       endpoint: "http://localhost:5011/Employee",
  //       accessToken: accessToken,
  //       requestData: { firstName: formData.EmployeeName },
  //     }
  //   );
  // });

  const postEmployees = async () => {
    console.log("Button clicked");
    try {
      const response = await axiosApi.post("/Employee", {
        firstName: formData.EmployeeName,
      });

      if (response.status === 200) {
        console.log("data", response.data);
        setEmployee(response?.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
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

        <button
          onClick={() =>
            formData.EmployeeName.trim() !== "" && postEmployees()
          }>
          Sumbit
        </button>
        {/* <button>Submit</button> */}
      </div>

      <div>
        <h2>Employees data</h2>
        {employee?.map((employee) => {
          return <div>{employee?.firstName} </div>;
        })}
      </div>
    </div>
  );
};

export default Form;
