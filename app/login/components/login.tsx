'use client'
import { Input } from "@nextui-org/react";
import { useEffect } from "react";

export default function LoginForm(props:any) {
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
                label="密码"
                variant="bordered"
            
                onClear={() => console.log("input cleared")}
                className="max-w-xs mb-4"
            />
            <div className="flex justify-between"> 
                <span onClick={props.toRegister}>创建账号</span>
                <span onClick={props.toUpdatePsw}>忘记密码</span>
            </div>
        </div>
    )
}