import { Navbar } from "./components/Navbar"
import { Github } from "./icons/Github"


export default function App() {
    return (
        <div className="h-screen text-white bg-black">
            <Navbar/>
            

            <div className="md:text-4xl font-extrabold text-purple-400 text-2xl cursor-pointer hover:underline animate-bounce mt-20 transition-all duration-500 flex justify-center items-center">
                Launching Soon!!
            </div>
            

            <div className="flex flex-col items-center justify-center mt-20">
                <div className="text-xl underline md:text-4xl cursor-pointer font-bold">
                    Contact the Founders & Developer:
                </div>

                <div className="mt-5 flex flex-wrap justify-center gap-10 text-center">
                    <div onClick={() => {alert("Getting Contact details soon for Yogendra")}} className="hover:text-blue-400 hover:underline cursor-pointer text-xl font-bold">
                        Yogendra
                    </div>
                    <div onClick={() => {window.open("https://shubhhere.vercel.app")}} className="hover:text-blue-400 hover:underline cursor-pointer text-xl font-bold">
                        Shubh
                    </div>
                    <div onClick={() => {alert("Getting Contact details soon for Abhinav")}} className="hover:text-blue-400 hover:underline cursor-pointer text-xl font-bold">
                        Abhinav
                    </div>
                    <div onClick={() => {alert("Getting Contact details soon for Ayush")}} className="hover:text-blue-400 hover:underline cursor-pointer text-xl font-bold">
                        Ayush
                    </div>
                </div>

            </div>

        
            
        </div>
    )
}