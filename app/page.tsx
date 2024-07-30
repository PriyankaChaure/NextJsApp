
// import Link from 'next/link';

// const sidebarItems = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/About" },
//     { name: "Product", href: "/Product" },
// ];

// export default function page() {
//     return (
//         <aside className="sidebar">
//             <ul className="sidebarlist">
//                 {sidebarItems.map(({ name, href }) => (
//                     <li className="sidebaritem" key={name}>
//                         <Link href={href} className="sidebarlink">
//                             <div className="sidebarname">{name}</div>
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//         </aside>
//     );
// }

import Sidebar from "./Sidebar/page";

export default function Home() {
    return (
        <main>
           
           <h2>Welcome to home Page</h2>
        </main>
    );
}