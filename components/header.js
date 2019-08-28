import Link from "next/link";

const Header = _ => {
    return(
        <>
            <Link href="/">
                <a>Home</a>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link href="/about">
                <a>About</a>
            </Link>
        </>
    )
}

export default Header;