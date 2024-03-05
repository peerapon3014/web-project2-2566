import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, RadioGroup, Radio} from "@nextui-org/react";

const colors = [ "danger"];

export default function App() {
  const [selectedColor, setSelectedColor] = React.useState("default");

  return (
    <div className="flex flex-col gap-3">
      <Table 
        color={colors}
        selectionMode="multiple" 
        defaultSelectedKeys={["0", "0"]} 
      
      >
        <TableHeader >
          <TableColumn className="text-sm text-black">รายวิชา</TableColumn>
          <TableColumn className="text-sm text-black">ระดับการศึกษา</TableColumn>
          <TableColumn className="text-sm text-black">สาขาวิชา</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>322371 Web Desigh Technologies</TableCell>
            <TableCell>ปริญญาตรี</TableCell>
            <TableCell>เทคโนโลยีสารสนเทศ</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>322371 Web Desigh Technologies</TableCell>
            <TableCell>ปริญญาตรี</TableCell>
            <TableCell>เทคโนโลยีสารสนเทศ</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>322371 Web Desigh Technologies</TableCell>
            <TableCell>ปริญญาตรี</TableCell>
            <TableCell>เทคโนโลยีสารสนเทศ</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>322371 Web Desigh Technologies</TableCell>
            <TableCell>ปริญญาตรี</TableCell>
            <TableCell>เทคโนโลยีสารสนเทศ</TableCell>
          </TableRow>
          <TableRow key="5">
            <TableCell>322371 Web Desigh Technologies</TableCell>
            <TableCell>ปริญญาตรี</TableCell>
            <TableCell>เทคโนโลยีสารสนเทศ</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      
    </div>
  );
}
