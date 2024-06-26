import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FaLaptop } from "react-icons/fa6";
import { FaBoxesStacked } from "react-icons/fa6";
import { FaMoneyBills } from "react-icons/fa6";
import { FaClipboardUser } from "react-icons/fa6";
import { FaScroll } from "react-icons/fa6";
import { FaAdversal } from "react-icons/fa6";
import { FaRankingStar } from "react-icons/fa6";
import { FaCommentDots } from "react-icons/fa6";
import MenuItem from "@/components/menuItem";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RealStock Admin Dashboard",
  description: "Trang quản lý dành cho admin RealStock", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menu = [
    {href: "/products", icon: <FaLaptop/>, title:"Quản Lý Sản Phẩm"},
    {href: "/categories", icon:<FaBoxesStacked/>, title:"Quản Lý Danh Mục"},
    {href: "/orders", icon:<FaMoneyBills/>, title:"Quản Lý Hóa Đơn"},
    {href: "/users", icon:<FaClipboardUser/>, title:"Quản Lý Người Dùng"},
    {href: "/promotions", icon:<FaScroll/>, title:"Quản Lý Khuyến Mãi"},
    {href: "/banners", icon:<FaAdversal/>, title:"Quản Lý Banner"},
    {href: "/ranks", icon:<FaRankingStar/>, title:"Quản Lý Đánh Giá"},
    {href: "/comments", icon:<FaCommentDots/>, title:"Hợ Trợ Khách Hàng"},
  ]

  return (
    <html lang="en">
      <body className={inter.className}>
      <main className="flex min-h-screen flex-col">
      <div className="grid grid-cols-6">
        <div className="col h-screen bg-slate-600 text-white">
          <Link className="flex items-center justify-center p-0 border-b p-0" href={"/"}>
            <img className="h-20 w-20 hidden md:block items-start justify-start p-0" src="./RealStockIco.png" alt=""/>
            <div className="hidden md:block p-10 items-end justify-end font-bold p-0">
            REALSTOCK DASHBOARD</div>
          </Link>
          <img className="h-20 w-20 md:hidden" src="./RealStockIco.png" alt=""/>
          <ul className="font-oswald font-bold p-2">
            {menu.map((item) => {
                      return(
                      <MenuItem key = {item.href} href={item.href} icon = {item.icon} title = {item.title}/>
                        ); 
              })}
          </ul>
        </div>
        <div className="col-span-5 h-screen">{children}</div>
      </div>
    </main> 
      </body>
    </html>
  );
}
