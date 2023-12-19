'use client'
// import { Input } from "@nextui-org/react";
// import { useEffect } from "react";
// import { Button, ButtonGroup } from "@nextui-org/react";
import { Button, Checkbox, Form, Input } from 'antd';


export default function UpdatePassword() {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    type FieldType = {
        username?: string;
        password?: string;
        remember?: string;
    };
    return (

        <div>
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
                    label="邮箱"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="验证码"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <div className='flex'>
                        <Input />
                        <Button className='ml-2'>发送验证码</Button>
                    </div>

                </Form.Item>
                <Form.Item<FieldType>
                    label="新密码"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item<FieldType>
                    label="确认密码"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>

            </Form>

        </div>
    )
}