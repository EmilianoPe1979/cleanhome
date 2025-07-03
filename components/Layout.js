import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTractor,
    faCirclePlus,
    faSatelliteDish,
    faBuildingWheat,
    faBars,
    faPuzzlePiece,
    faMoneyBillWheat,
} from "@fortawesome/free-solid-svg-icons";

export default function Layout({ children }) {
    const currentYear = new Date().getFullYear();
    const [open, setOpen] = useState(false);
    return (
        <div className="min-h-screen flex flex-col bg-green-50">
            <nav className="bg-green-700 text-white p-4">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold tracking-wide">
                        <FontAwesomeIcon icon={faBuildingWheat} className="me-2" />
                        Agrotracking
                    </Link>
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-white focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <div
                        className={`space-x-4 md-flex ${open ? "block mt-4" : "hidden"
                            } md:mt-0`}
                    >
                        <Link href="/visits" className="hover:underline">
                            <FontAwesomeIcon icon={faTractor} className="me-1" />
                            Visits
                        </Link>
                        <Link href="/visits/new" className="hover:underline">
                            <FontAwesomeIcon icon={faCirclePlus} className="me-1" />
                            New
                        </Link>
                        <Link href="/visits/live" className="hover:underline">
                            <FontAwesomeIcon icon={faSatelliteDish} className="me-1" />
                            Live
                        </Link>
                        <Link href="/visits/api" className="hover:underline">
                            <FontAwesomeIcon icon={faPuzzlePiece} className="me-1" />
                            API (Local)
                        </Link>
                        <Link href="/agro-prod" className="hover:underline">
                            <FontAwesomeIcon icon={faMoneyBillWheat} className="me-1" />
                            Agro-Prod (API ext)
                        </Link>
                    </div>
                </div>
            </nav>
            <main className="flex-1 max-w-6xl mx-auto p-6">{children}</main>
            <footer className="bg-green-700 text-white p-2 text-center">
                <small>&copy; {currentYear} AgroTraking. All rights reserved.</small>
            </footer>
        </div>
    );
}