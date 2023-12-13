'use client'
import React, { useState } from 'react';
import { Button, Modal, Checkbox, Form, Input } from 'antd';


const FormCreate: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    type FieldType = {
        name?: string;
        position?: string;
        people?: string;
        equipment?:string;
        desc?:string
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                新增会议室
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="会议室名称"
                        name="name"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="位置"
                        name="position"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="容纳人数"
                        name="people"
                    >
                       <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="设备"
                        name="equipment"
                    >
                       <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="描述"
                        name="desc"
                    >
                       <Input />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default FormCreate;