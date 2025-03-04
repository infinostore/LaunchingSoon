import { Github } from "../icons/Github";
import { Button } from "./ui/Buttons";
// import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    // const navigate = useNavigate();

    return (
        <div className="bg-custom-5 sticky top-0 gap-5 z-50 backdrop-blur-lg flex flex-col md:flex-row justify-center items-center px-4 py-4 md:px-16 md:py-8">
            {/* Logo Section */}
            <div
                className="cursor-pointer hover:scale-110 transition-all duration-500"
                onClick={() => {
                    // navigate('/')
                }}
            >
                <img
                    src="infinoLogo.png"
                    className="w-28 text-white md:w-36 lg:w-48"
                    alt="InfinoLogo"
                />
            </div>

            {/* Github Button */}
            <div>
                <Button text="OpenSource" onClick={() => {window.open("https://github.com/infinostore")}} variant="primary" startIcon={<Github/>}/>
            </div>
        </div>
    );
};