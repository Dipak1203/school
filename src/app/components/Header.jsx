import Image from "next/image";

export default function TopHeader() {
    return (
        <div className="bg-[#04578F] p-4">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <Image src="/logo.png" alt="logo" width={50} height={50} className="w-20 h-20" />
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-bold text-white">Adarsha Model Secondary School</h1>
                        <p className="text-sm text-white">Rapti-2, Dang, Nepal</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-bold text-white">Educating The Professionals
                        <br />of Tomorrow TODAY!</h1>
                    <p className="text-sm text-white">64 years of dedicated service</p>
                </div>
            </div>
        </div>
    )
}