import { Flex, Avatar, Table,Button } from "antd";
import { Stack, Group } from "@mantine/core";

const DashboardTable = ({data, columns, heading}) => {

      
  return (
    <>
        
      <h1 className="text-center text-2xl py-2">{heading}</h1>
      <Table
          bordered
          columns={columns}
          dataSource={data}
      />

    </>
  )
}

export default DashboardTable;
