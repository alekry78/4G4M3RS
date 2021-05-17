import Link from 'next/link';
import Nav from "./Nav";
export default function Header () {
    return <header>
        <div className="bar">
            <Link href="/">4G4M3RS</Link>
        </div>
        <div className="sub-bar">
            <p>Search</p>
        </div>
        <Nav />
    </header>
}