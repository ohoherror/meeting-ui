'use client'
import { Input } from "@nextui-org/react";
import { useEffect } from "react";
import { Button, ButtonGroup } from "@nextui-org/react";

export default function Register(props:any) {
    return (
        <div>
            <Input
                isClearable
                type="email"
                label="用户名"
                variant="bordered"
               
                onClear={() => console.log("input cleared")}
                className="max-w-xs mb-4"
            />
            <Input
                isClearable
                type="email"
                label="昵称"
                variant="bordered"
              
                onClear={() => console.log("input cleared")}
                className="max-w-xs mb-4"
            />
            <Input
                isClearable
                type="email"
                label="密码"
                variant="bordered"
                
                onClear={() => console.log("input cleared")}
                className="max-w-xs mb-4"
            />
            <Input
                isClearable
                type="email"
                label="确认密码"
                variant="bordered"
              
                onClear={() => console.log("input cleared")}
                className="max-w-xs mb-4"
            />
            <Input
                isClearable
                type="email"
                label="邮箱"
                variant="bordered"
            
                onClear={() => console.log("input cleared")}
                className="max-w-xs mb-4"
            />
            <div className="flex items-center mb-4 ">
                <Input
                    isClearable
                    type="email"
                    label="验证码"
                    variant="bordered"
                 
                    onClear={() => console.log("input cleared")}
                    className="max-w-xs"
                />
                <Button color="primary" className="ml-3">
                    发送验证码
                </Button>
            </div>
            <div className="float-right" onClick={props.toLogin}>已有账号？去登录</div>
        </div>
    )
}