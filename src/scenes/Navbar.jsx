import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery.jsx"

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
      <AnchorLink
        className={`${
          selectedPage === lowerCasePage ? "text-neutral" : ""
        } hover:text-accent transition duration-500`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
      >
        {page}
      </AnchorLink>
    );
  };

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)"); 
    //console.log(isAboveSmallScreens);
    const navbarBackground = isTopOfPage ? "" : "bg-gradient-rainblue";

    return (
        <nav className = {`${navbarBackground} z-40 w-full fixed top-0 py-6`}> 
            <div className="flex items-center justify-between mx-auto w-5/6">
             <h4 className="font-playfair text-3xl font-bold">KT</h4>

                {/*DESKTOP NAV */}
                {isAboveSmallScreens ? (
                    <div className="flex justify-between gap-16 font-playfair text-md font-semibold">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                ) : (
                    <button className = "rounded-full bg-secondary p-2"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <img alt="menu-icon" src="../assets/menu-icon.svg"></img>
                    </button>
                )}

                {/* MOBILE MENU POPUP*/}
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full bg-accent w-[300px]">
                        {/* CLONE ICON */}
                        <div className = "flex justify-end p-12"> 
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <img alt="close-icon" src = "../assets/close-icon.svg"/>
                            </button>
                        </div>
                        {/* MENU ITEMS */}
                        <div className ="flex flex-col gap-10 ml-[33%] text-2xl text-base-100 font-playfair">
                            <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Skills"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Projects"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>

                    </div>
                )}
            </div>
        </nav>
    )
}



export default Navbar;