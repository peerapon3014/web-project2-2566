import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue} from "@nextui-org/react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import {columns, users} from "../data/admin";



export default function App() {
  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "วิชา":
        return (
          <User
            avatarProps={{radius: "lg"}}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "สาขาวิชา":
        return (
          <div className="flex flex-col">
           
            <p className="text-bold text-sm capitalize ">{user.team}</p>
          </div>
        );
      case "ระดับการศึกษา":
        return (
          <Chip className="capitalize" size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative  flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg p-5 item-center text-default-400 cursor-pointer active:opacity-50">
              <PencilSquareIcon className="h-6 w-6 text-gray-500" />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <PencilSquareIcon className="h-6 w-6 text-gray-500" />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
              <PencilSquareIcon className="h-6 w-6 text-gray-500" />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
  <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns} >
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"} className="">
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={users}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
