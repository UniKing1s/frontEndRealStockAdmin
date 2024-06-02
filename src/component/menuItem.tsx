'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
const MenuItem = (props:any) => {
    const pathname = usePathname();
    return (
        <li className= {pathname === props.href ? "bg-sky-700 hover:bg-sky-700" : "hover:bg-sky-700 hover:scale-95"}>
            <Link href={props.href}  className= "flex items-center p-2">
                <div className="p-2 mr-3">{props.icon}</div>
                <div className="p-2">{props.title}</div>
            </Link>
        </li>
    );
}

export default MenuItem;
