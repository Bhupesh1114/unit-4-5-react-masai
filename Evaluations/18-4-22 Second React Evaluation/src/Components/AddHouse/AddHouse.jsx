import { useState } from "react";

export const AddHouse = () => {
  const [formData, setFormData] = useState({
    name: "",
    ownerName: "",
    address: "",
    rent: "",
    image: "",
    married: ""
  })
  const handleChange = (e) => {
    let className = e.target.className;
    console.log(e.target.checked)

    if (className === "married") {
      setFormData({ ...formData, [className]: e.target.checked });
    } else {
      setFormData({ ...formData, [className]: e.target.value });
    }
    
  }

  const postData = async(value) => {
    try {
      let response = await fetch("http://localhost:8080/houses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body : JSON.stringify(value)
    })
      let data = await response.json()
      console.log(data);
    } catch (error) {
      console.log("error",error)
  }
}

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(formData);
    setFormData({
      name: "",
      ownerName: "",
      address: "",
      rent: "",
      image: "",
      married: ""
    })
  }
  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input type="text" className="name" value={formData.name} onChange={handleChange} required />
        <br />
        <label>ownerName</label>
        <input value={formData.ownerName} type="text" onChange={handleChange} className="ownerName" required />
        <br />
        <label>address</label>
        <input value={formData.address} type="text" onChange={handleChange} className="address" required />
        <br />
        <label>areaCode</label>
        <input value={formData.areacode} type="text" onChange={handleChange} className="areaCode" required />
        <br />
        <label>rent</label>
        <input value={formData.rent} type="text" onChange={handleChange} className="rent" required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input  type="checkbox"  className="bachelor" />
        <br />
        <label>married</label>
        <input  type="checkbox" onChange={handleChange} className="married" />
        <br />
        <label>image</label>
        <input value={formData.image} type="text" onChange={handleChange} className="image" required />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
