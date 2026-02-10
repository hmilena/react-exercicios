import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className='z-30 fixed top-0 peer is-not-custom peer is-not-center peer is-not-wide peer is-not-frame bg-zinc-100' style={{ width: "calc(100% - var(--assistant-sheet-width, 0px))" }}>
            <div className="relative">
                <div className="flex items-center lg:px-7 h-14 min-w-0 mx-4 lg:mx-0">
                    <div className="h-full relative flex-1 flex items-center gap-x-4 min-w-0 lg:border-none">
                        <div className="flex-1 flex items-center gap-x-4">
                            <NavLink className="w-50 text-center text-lg font-semibold" to="/">Exercícios React</NavLink>
                        </div>

                        <div className="flex items-center gap-4"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;