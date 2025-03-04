import { Navbar } from "./components/Navbar"


export default function App() {
    return (
        <div className="h-screen text-white bg-black">
            <Navbar/>
            

            <div className="md:text-4xl text-xl cursor-progress hover:underline animate-bounce mt-28 transition-all duration-500 flex justify-center items-center">
                Launching Soon!!
            </div>
            <div className="flex justify-center gap-5 mt-10">
            </div>
            
        </div>
    )
}