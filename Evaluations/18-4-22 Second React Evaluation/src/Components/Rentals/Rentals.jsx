import { useEffect, useState } from "react";
import "./Rentals.css";

export const Rentals = () => {
  const [inputValue,setInputValue] = useState("")
  const [data, setData] = useState([]);
  
  const getData = async () => {
    try { 
      let response = await fetch("http://localhost:8080/houses");
      let resData = await response.json();
      setData(resData)
    } catch (error) {
      console.log("error:",error)
    }
  }

  const rentLowToHigh = () => {
    let newData = data.sort((a, b) => {
      return +a.rent - (+b.rent);
    })
    setData([...newData])
}
  const rentHighToLow = () => {
    let newData = data.sort((a, b) => {
      return +b.rent - (+a.rent);
    })
    setData([...newData])
  }
  
  const searchAddress = (value) => {
    let newData = data.filter(elem => {
      return elem.address.includes(value);
    })  
    setData(newData);
  }
  const handleChange = (e) => {
    setInputValue(e.target.value);
    searchAddress(inputValue);
  }

  const sortById = () => {
    let newData = data.sort((a, b) => {
      return a.id - b.id;
    })
    setData([...newData]);
  }

  const areaLowToHigh = () => {
    let newData = data.sort((a, b) => {
      return +a.areaCode - (+b.areaCode);
    })
    setData([...newData]);
  }
  const areaHighToLow = () => {
    let newData = data.sort((a, b) => {
      return +b.areaCode - (+a.areaCode);
    })
    setData([...newData]);
  }


  useEffect(() => {
    getData();
  },[])
  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button onClick={sortById} className="sortById">Sort by ID</button>
        <button onClick={rentLowToHigh} className="sortByRentAsc">Rent Low to high</button>
        <button onClick={rentHighToLow} className="sortByRentDesc">Rent High to low</button>
        <button onClick={areaLowToHigh} className="sortByAreaAsc">Area Low to high</button>
        <button onClick={areaHighToLow} className="sortByAreaDesc">Area High to Low</button>
      </div>
      <input
        vaue={inputValue}
        onChange={handleChange}
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {house.married ? "Married" : "Unmarried"}
                  {/* Show text Both or Bachelors or Married based on values */}
                </td>
                <td className="houseImage">
                  <img src={house.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
