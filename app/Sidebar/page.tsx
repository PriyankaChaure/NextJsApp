"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sidebarItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Product", href: "/Product" },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="sidebar">
            <ul className="sidebarlist">
                {sidebarItems.map(({ name, href }) =>(
                  
                    <li className="sidebaritem" key={name}>
                        
                        <Link href={href}  className={`sidebarlink ${pathname === href ? 'active' : ''}`}>
                            <div className="sidebarname">{name}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}


