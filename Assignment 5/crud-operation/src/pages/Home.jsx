import React, { useState } from "react";

const Home = () => {
  const [inputs, setInputs] = useState({
    name: "",
    address: "",
    city: "",
  });
  const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editClick) {
      const tempTableData = tableData;
      Object.assign(tempTableData[editIndex], inputs);
      setTableData([...tempTableData]);
      setEditClick(false);
      setInputs({
        name: "",
        address: "",
         city: "",
      });
    } else {
      setTableData([...tableData, inputs]);
      setInputs({
        name: "",
        address: "",
        city: "",
      });
    }
  };

  const handleDelete = (index) => {
    const filterData = tableData.filter((item, i) => i !== index);
    setTableData(filterData);
  };
  const handleEdit = (index) => {
    const tempData = tableData[index];

    setInputs({ name: tempData.name, address: tempData.address,city: tempData.city });
    setEditClick(true);
    setEditIndex(index);
  };
  return (
    <div className="min-h-screen bg-[#004b43] "id="bg1">
      <h1 className="text-center" id="tx" >Student Record</h1>
      <div className="bg-teal-[#737373] max-w-fit m-auto p-10">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label>Name</label>
            <input name="name" value={inputs.name} onChange={handleChange} required className="ip" />
          </div>
          <div className="flex flex-col">
            <label>Address</label>
            <input name="address" value={inputs.address} onChange={handleChange} required className="ip" />
          </div>
          <div className="flex flex-col">
            <label>City</label>
            <input name="city" value={inputs.city} onChange={handleChange} required className="ip"/>
          </div>
          <button id="butn" type="submit" className="w-full bg-[#014d64] text-white mt-3">
            {editClick ? "update" : "Add"}
          </button>
        </form>
      </div>
      <div>
        <table className="w-full text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-blue">
            {tableData.map((item, i) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.city}</td>
                
                <td>
                  <button
                    onClick={() => handleEdit(i)}
                    className="mr-3 text-yellow-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(i)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
