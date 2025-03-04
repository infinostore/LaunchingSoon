import { ReactElement } from "react";

const variantStyle = {
    primary : "bg-blue-600 text-white font-bold hover:bg-blue-900",
    secondary: "bg-custom-7 border-2 border-white text-white font-bold",
    other: "bg-red-700 border border-black text-white font-bold"
}


const defaultStyles = "flex cursor-pointer items-center px-2 py-2 rounded-md transition-all duration-500 hover:-translate-y-2";

export const Button = ({variant , text , startIcon , endIcon , onClick}: {
    variant: "primary" | "secondary" | "other";
    text?: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
}) => {
    return (
        <>
            <button
                onClick={onClick}
                className={`${variantStyle[variant]} ${defaultStyles}`}
            >
                {startIcon && <div className="mr-2">
                    {startIcon}
                </div> }
                {text} 
                
                {endIcon && <div className="ml-2">
                    {endIcon}
                </div>}
            </button>
        </>
    )
}