import { useState } from "react"

export function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative">

            <button 
            onClick={() => setIsOpen((prev) => !prev)}
            className="h-10 w-auto text-white flex items-center">
                {props.nome}

                {!isOpen ?(
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                    </svg>
                ): (
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"></path>
                    </svg>
                )
            }
               
            </button>

            {isOpen && (
                <div className=" flex flex-col text-white bg-zinc-800 w-56 h-auto rounded-md absolute transition-all">
                {props.link}
                </div>
            )}
            

        </div>
    )
}