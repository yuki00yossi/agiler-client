"use client"


import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { title } from "@/components/primitives";
import { emailValidator } from "@/utils/validators";

import {EyeFilledIcon} from "@/components/icons/EyeFilledIcon";
import {EyeSlashFilledIcon} from "@/components/icons/EyeSlashFilledIcon";

export default function LoginPage() {

    const [isValidMail, setIsValidMail] = useState(false);
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);

    const handleMailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsValidMail(emailValidator(e.currentTarget.value));
    }

    const togglePaswordVisivility = () => {setIsVisiblePassword(!isVisiblePassword)};

	return (
        <>
            <div>
                <h2 className={title()}>ログイン</h2>
            </div>

            <div className="w-full mt-5 boder">
                <div>
                    <Input
                        type="email"
                        label="Email"
                        variant="bordered"
                        isInvalid={!isValidMail}
                        onChange={handleMailChange}
                        errorMessage={isValidMail ? null : "Please enter a valid email"}
                        className="max-w-s"
                    />
                </div>
                <div className="mt-1">
                    <Input
                        type={isVisiblePassword ? "text" : "password"}
                        label="Password"
                        variant="bordered"
                        endContent={
                            <button className="focus:outline-none" type="button" onClick={togglePaswordVisivility}>
                                {isVisiblePassword ? (
                                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                ) : (
                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                )
                            }
                            </button>
                        }
                        className="max-w-s"
                    />
                </div>
                <div className="mt-10 w-full">
                    <Button color="primary" variant="shadow" className="w-full">
                        ログイン
                    </Button>
                </div>
            </div>
        </>
	);
}
