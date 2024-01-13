"use client"


import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { title } from "@/components/primitives";
import { emailValidator } from "@/utils/validators";

import {EyeFilledIcon} from "@/components/icons/EyeFilledIcon";
import {EyeSlashFilledIcon} from "@/components/icons/EyeSlashFilledIcon";

export default function SignUpPage() {

    const [isValidMail, setIsValidMail] = useState(true);
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);

    const inputElmIds = [
        "email", "password", "passwordConfirm", "lastName", "firstName"
    ];

    const handleMailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsValidMail(emailValidator(e.currentTarget.value));
    }

    const togglePaswordVisivility = () => {setIsVisiblePassword(!isVisiblePassword)};

	return (
        <>
            <div>
                <h2 className={title()}>会員登録</h2>
            </div>

            <div className="w-full mt-5 boder">
                <div>
                    <Input
                        isRequired={true}
                        id="emailInput"
                        type="email"
                        label="メールアドレス"
                        variant="underlined"
                        isInvalid={!isValidMail}
                        onChange={handleMailChange}
                        errorMessage={isValidMail ? undefined : "有効なメールアドレスを入力してください。"}
                        className="max-w-s text-left"
                    />
                </div>
                <div className="mt-2">
                    <Input
                        isRequired={true}
                        id="password"
                        type={isVisiblePassword ? "text" : "password"}
                        label="パスワード"
                        variant="underlined"
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
                <div className="mt-2">
                    <Input
                        isRequired={true}
                        id="passwordConfirm"
                        type={isVisiblePassword ? "text" : "password"}
                        label="パスワード（確認用）"
                        variant="underlined"
                        className="max-w-s"
                    />
                </div>
                <div className="mt-2">
                    <Input
                        isRequired={true}
                        id="lastName"
                        type={isVisiblePassword ? "text" : "password"}
                        label="姓"
                        variant="underlined"
                        className="max-w-s"
                    />
                </div>
                <div className="mt-2">
                    <Input
                        isRequired={true}
                        id="firstName"
                        type={isVisiblePassword ? "text" : "password"}
                        label="名"
                        variant="underlined"
                        className="max-w-s"
                    />
                </div>
                <div className="mt-10 w-full">
                    <Button color="primary" variant="shadow" className="w-full">
                        会員登録
                    </Button>
                </div>
            </div>
        </>
	);
}
