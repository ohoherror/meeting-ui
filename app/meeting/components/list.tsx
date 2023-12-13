'use client'
import React from "react";
// import { Table, Input, Button, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import FormCreate from './formCreate'

const rows = [
    {
        key: "1",
        name: "Tony Reichert",
        role: "CEO",
        status: "Active",
    },
    {
        key: "2",
        name: "Zoey Lang",
        role: "Technical Lead",
        status: "Paused",
    },
    {
        key: "3",
        name: "Jane Fisher",
        role: "Senior Developer",
        status: "Active",
    },
    {
        key: "4",
        name: "William Howard",
        role: "Community Manager",
        status: "Vacation",
    },
];

const columns = [
    {
        key: "name",
        label: "会议室名称",
    },
    {
        key: "role",
        label: "容纳人数",
    },
    {
        key: "status",
        label: "位置",
    },
    {
        key: "status",
        label: "设备",
    },
];

export default function MeetingList() {
    return (
        <>
            {/* <div className="flex mb-4 px-6">
                {columns.map(ele => (
                    <Input
                        key={ele.key}
                        type="email"
                        label={ele.label}
                        labelPlacement='outside-left'
                    />
                ))}
                <Button color="primary">
                    搜索会议室
                </Button>
            </div> */}

            <FormCreate></FormCreate>
            {/* <Table aria-label="Example table with dynamic content">
                <TableHeader columns={columns}>
                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody items={rows}>
                    {(item) => (
                        <TableRow key={item.key}>
                            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table> */}
        </>
    );
}
