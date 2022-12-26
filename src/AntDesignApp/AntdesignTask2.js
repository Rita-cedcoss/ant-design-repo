import {Table } from "antd";
import React, { useEffect, useState } from "react";

const Antdesign = () => {
    const [arr,setArr]=useState([]);
    useEffect(()=>{
      fetch("https://dummyjson.com/users")
      .then((result)=>result.json())
      .then((data)=>{
        let keydata=data.users.map((item)=>{
            return {...item,key:item.id}
        })
        setArr([...keydata]);
      })
    },[])
  const columns = [
    Table.EXPAND_COLUMN,
    {
      title: "Name",
      dataIndex: "firstName",
      key:"id"
    },
    {
      title: "Age",
      dataIndex: "age",
      key:"id"
    },
    {
      title: "Address",
      dataIndex: 'address',
      render: (add) => <a>{add.address}</a>,
      key:"id"
    },
    {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a>Delete</a>,
    }
    
  ];
  return (
    <>
      <Table dataSource={arr} 
       expandable={{
        expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.birthDate}</p>,
        rowExpandable: (record) => record.name !== 'Not Expandable',
      }} 
      columns={columns} />
     
    </>
  );
};

export default Antdesign;
