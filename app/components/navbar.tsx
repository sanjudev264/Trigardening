"Use Client";

import Image from "next/image"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { Phone, Search, ShoppingCart, User } from "lucide-react";
import { Input } from "@/components/ui/input";

const Navbar = () => {
    return (
        <header style={{ backgroundColor: "var(--primary-color) " }} className="text-white flex items-center justify-between pl-[58px] pr-[110px] py-[29px] w-full ">
            {/* logo */}
            <a href="">
                <Image src="/logo.png" width={100} height={100} alt="Trigardening" />
            </a>

            {/* menu */}
            <NavigationMenu>
                <NavigationMenuList className="flex gap-20">
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/">Home</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/products">Products</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/blog">Blog</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/plantclinic">Plant Clinic</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            {/* button */}
            <Button style={{ backgroundColor: "var(--secondary-color)" }}>
                <Phone />
                <span>Call Now</span>
            </Button>

            <div className=" relative  text-white  ">
                <Search className="absolute right-4 top-1/2 w-5 h-5 -translate-y-1/2  " />
                <Input className="px-[25px] rounded-[25px] placeholder-white" type="text" placeholder="Search plants, tools" />
            </div>

            {/* cart icon */}
            <div className="flex gap-5" >
                <div className="relative">
                    <span style={{ backgroundColor: "var(--secondary-color)" }} className=" text-[12px] flex items-center justify-center rounded-full absolute right-[-12px] top-[-10px] w-[18px] h-[18px] ">3</span>
                    <ShoppingCart />
                </div>
                <User />
            </div>
        </header>
    )
}

export default Navbar