"use client"


import React, { useState } from "react";

import { Avatar } from "@nextui-org/avatar";
import { Link } from "@nextui-org/link";
import { Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/table";
import { title, titleBox } from "@/components/primitives";

export default function ProjectsPage() {

	return (
        <>
        <div className={titleBox()}>
                <h2 className={title()}>プロジェクト一覧</h2>
            </div>

            <div className="w-full mt-5 boder">
                <Table removeWrapper isStriped={true} hideHeader={true}>
                    <TableHeader>
                        <TableColumn key="name">
                        Name
                        </TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow key="yuuki">
                            <TableCell className="flex items-center">
                                <Link className="cursor-pointer">
                                    <div>
                                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="mr-3" />
                                    </div>
                                    サンプルプロジェクトのプロジェクトの名前です。アイコンもつけれるよ
                                </Link>
                            </TableCell>
                        </TableRow>
                        <TableRow key="yuuki">
                            <TableCell className="flex items-center">
                                <Link className="cursor-pointer">
                                    <div>
                                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="mr-3" />
                                    </div>
                                    サンプルプロジェクトのプロジェクトの名前です。長い文章の場合はどうなるの？やってみよう！！テキストを長く書いていくよ～どうですか？綺麗に折り返されてる？テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                                </Link>
                            </TableCell>
                        </TableRow>
                        <TableRow key="yuuki">
                            <TableCell className="flex items-center">
                                <Link className="cursor-pointer">
                                    <div>
                                        <Avatar src="" name="サ" className="mr-3" />
                                    </div>
                                    サンプルプロジェクトのプロジェクトの名前です。アイコンがないときは頭文字がアイコンになるよ
                                </Link>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </>
	);
}
