'use client'
import { Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/react";
import Register from './components/register'
import LoginForm from './components/login'
import UpdatePassword from './components/updatePassword'

export default function Login() {
    const [isLogin,setIsLogin] = useState(true)
    const [isRegister,setIsRegister] = useState(false)
    const [isUpdatePwd,setIsUpdatePwd] = useState(false)
    const [btnName,setBtnName] = useState('登录')

    useEffect(() => {

    })

    const canLogin = () =>{
        return !!isLogin&&!isUpdatePwd
    }

    const canRegister = () =>{
        return !!isRegister&&!isUpdatePwd
    }

    const toRegister = () =>{
        setIsRegister(true)
        setIsLogin(false)
        setBtnName('注册')
    }

    const toLogin = ()=>{
        setIsRegister(false)
        setIsLogin(true)
        setBtnName('登录')
    }

    const toUpdatePsw = ()=>{
        setIsUpdatePwd(true)
        setBtnName('修改')
    }

    return (
        <div className="bg-white min-h-screen flex justify-center items-center">
            <div className="">
                <div className="pb-4 text-center">会议室预定系统</div>
                {canRegister()&&<Register toLogin={toLogin}></Register>}
                {canLogin()&&<LoginForm toRegister={toRegister} toUpdatePsw={toUpdatePsw}></LoginForm>}
                {isUpdatePwd&&<UpdatePassword></UpdatePassword>}
                <div className="text-center">
                    <Button color="primary" className="mt-5 ">
                        {btnName}
                    </Button>
                </div>

            </div>

        </div>
    )
}