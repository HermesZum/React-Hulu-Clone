import Image from "next/image";

function Header() {
    return (
        <header className="">
            <h1>Hulu Clone</h1>
            <Image
                className="object-contain"
                src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
                alt="Picture of the author"
                width={200}
                height={100}
            />
        </header>
    )
}

export default Header