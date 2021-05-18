import Link from 'next/link';
import Nav from "../Nav";
import {HeaderStyles, Logo} from "./Header.styles";

export default function Header() {
    return (
        <HeaderStyles>
        <div className="bar">
            <Logo>
                <Link href="/">
                    4G4M3RS
                </Link>
            </Logo>
        </div>
        <div className="sub-bar">
            <p>Search</p>
        </div>
        <Nav/>
    </HeaderStyles>)
}