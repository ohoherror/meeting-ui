'use client'
import React from "react";
// import { Table, Input, Button, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import FormCreate from './formCreate'
import { Input, Button, Table,  } from 'antd';

const { Column } = Table;

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
            <div className="flex mb-4 px-6">
                {columns.map(ele => (
                    <div>
                        {ele.label}
                        <Input
                            key={ele.key}
                            type="email"

                        />
                    </div>

                ))}
                <Button color="primary">
                    搜索会议室
                </Button>
            </div>

            <FormCreate></FormCreate>
            <Table className="mt-3" dataSource={rows}>
                    {columns.map(ele=>(
                         <Column title={ele.label} dataIndex={ele.key} key={ele.key} />
                    ))}

            </Table>
        </>
    );
}
