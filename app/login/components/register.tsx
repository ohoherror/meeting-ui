'use client'

import { useEffect } from "react";
import { Button, Input } from 'antd';

export default function Register(props:any) {
    return (
        <div>
         用户名   <Input
                
               
                className="max-w-xs mb-4"
            />
        昵称    <Input
                
                
                className="max-w-xs mb-4"
            />
          密码  <Input
                
                type="email"
                
            
                className="max-w-xs mb-4"
            />
        确认密码    <Input
               
              
                className="max-w-xs mb-4"
            />
        邮箱    <Input
              
                className="max-w-xs mb-4"
            />
            <div className="flex items-center mb-4 ">
            验证码    <Input
                   
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