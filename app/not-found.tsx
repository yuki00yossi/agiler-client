import React from "react";
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import MotionWrapper from "@/components/motionWrapper/motionWrapper";
import { Link } from "@nextui-org/link";


export default function NotFound() {
    return (
        <MotionWrapper>
            <div className="w-full h-full text-center pt-20">
                <h2 className={title()}>404 Not Found</h2>
                <p className="pt-3">お探しのページが見つかりませんでした。</p>
                <div className="mt-10 w-full text-center">
                    <Link href="/">
                        <Button className="w-[240px]" color="primary">ホーム</Button>
                    </Link>
                </div>
            </div>
        </MotionWrapper>
    );
  }