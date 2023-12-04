'use client'
import { Input } from "@nextui-org/react";
import { useEffect } from "react";
import { Button, ButtonGroup } from "@nextui-org/react";

export default function Login() {
    useEffect(() => {

    })

    return (
        <div className="bg-white min-h-screen flex justify-center items-center">
            <div className="">
                <div className="pb-4 text-center">会议室预定系统</div>
                <Input
                    isClearable
                    type="email"
                    label="用户名"
                    variant="bordered"
                    placeholder="输入用户名"
                    onClear={() => console.log("input cleared")}
                    className="max-w-xs mb-4"
                />
                <Input
                    isClearable
                    type="email"
                    label="昵称"
                    variant="bordered"
                    placeholder="Enter your email"
                    onClear={() => console.log("input cleared")}
                    className="max-w-xs mb-4"
                />
                <Input
                    isClearable
                    type="email"
                    label="密码"
                    variant="bordered"
                    placeholder="输入用户名"
                    onClear={() => console.log("input cleared")}
                    className="max-w-xs mb-4"
                />
                <Input
                    isClearable
                    type="email"
                    label="确认密码"
                    variant="bordered"
                    placeholder="Enter your email"
                    onClear={() => console.log("input cleared")}
                    className="max-w-xs mb-4"
                />
                <Input
                    isClearable
                    type="email"
                    label="邮箱"
                    variant="bordered"
                    placeholder="输入用户名"
                    onClear={() => console.log("input cleared")}
                    className="max-w-xs mb-4"
                />
                <div className="flex items-center mb-4 ">
                    <Input
                        isClearable
                        type="email"
                        label="验证码"
                        variant="bordered"
                        placeholder="Enter your email"
                        onClear={() => console.log("input cleared")}
                        className="max-w-xs"
                    />
                    <Button color="primary" className="ml-3">
                        发送验证码
                    </Button>
                </div>
                <div className="float-right">已有账号？去登录</div>
                <div className="text-center">
                    <Button color="primary" className="mt-5 ">
                        注册
                    </Button>
                </div>

            </div>

        </div>
    )
}