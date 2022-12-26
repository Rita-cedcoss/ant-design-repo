import { Col, Row, Select } from "antd";
import React, { useEffect, useState } from "react";
const { Option } = Select;
const AntdesignTask1 = () => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((result) => result.json())
      .then((data) => {
        console.log(data.users);
        setArr([...data.users]);
      });
  }, []);

  const style = {
    paddingLeft: "20px",
    borderRight: "1px solid #c7bfbf",
  };
  return (
    <>
    {/* use select box */}
    <h4>Select Box in Ant-Design</h4>
    <Select
    mode="multiple"
    style={{
      width: '90%',
      marginBottom:"20px",
      textAlign:"left",
    }}
    placeholder="Select Addres"
    defaultValue={[]}
    optionLabelProp="label"
  >
   {arr.map(item=>{
     return(
      <Option value={item.address.address} label={item.address.address}>
      <div className="demo-option-label-item">
      {item.address.address}
      </div>
    </Option>
     )
   })}
  </Select>

    {/* Using Grid */}
    <h4>Grid Using Ant-Design</h4>
      <Row className="outer"
     
      >
        <Col span={6}  >
          <h4 className=" outer__border outer__border--right">Name</h4>
        </Col>
        <Col span={6} >
          <h4 className=" outer__border outer__border--right">Age</h4>
        </Col>
        <Col span={6} >
          <h4 className=" outer__border outer__border--right">Address</h4>
        </Col>
        <Col span={6}>
          <h4>Action</h4>
        </Col>
      </Row>
      {arr.map((item) => {
        return (
          <Row className="outer"  
          >
            <Col span={6} >
              <p className=" outer__border">{item.firstName}</p>
            </Col>
            <Col span={6} >
              <p className=" outer__border">{item.age}</p>
            </Col>
            <Col span={6} >
              <p className=" outer__border">{item.address.address} </p>
            </Col>
            <Col span={6}>
              <a>Delete</a>
            </Col>
          </Row>
        );
      })}
     
      
    </>
  );
};

export default AntdesignTask1;
