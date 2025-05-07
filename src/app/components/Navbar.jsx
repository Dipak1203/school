import Link from "next/link";

export default function Navbar() {
    const NAVBAR_DATA = [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/about-us" },
        { name: "Facilities", link: "/facilities" },
        { name: "Our Activity", link: "/our-activity" },
        { name: "Contact Us", link: "/contact-us" },
    ];

    return (
        <div className="bg-[#024063] p-2 text-white">
            <div className="px-6 text-lg flex items-center justify-center gap-8">
                {NAVBAR_DATA.map((item, index) => (
                    <Link
                        href={item.link}
                        key={index}
                        className="relative pb-1 hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-white transition-all duration-200"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
