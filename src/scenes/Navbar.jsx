import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery.jsx"

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
      <AnchorLink
        className={`${
          selectedPage === lowerCasePage ? "text-yellow" : ""
        } hover:text-yellow transition duration-500`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
      >
        {page}
      </AnchorLink>
    );
  };

const Navbar = ({selectedPage, setSelectedPage}) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = true; //useMediaQuery("(min:width: 768px)"); 
    //console.log(isAboveSmallScreens);

    return (
        <nav className = {`z-40 w-full fixed top-0 py-6`}> 
            <div className="flex items-center justify-between mx-auto w-5/6">
             <h4 className="font-playfair text-3xl font-bold">KT</h4>

                {/*DESKTOP NAV */}
                {isAboveSmallScreens ? (
                    <div className="flex justify-between gap-16 font-playfair text-sm font-semibold">
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
                            page="Testimonials"
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
                    <button>

                    </button>
                )}
            </div>
        </nav>
    )
}

export default Navbar;