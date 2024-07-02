interface ButtonProps {
    text: string;
}


function Button({ text }: ButtonProps) {
    return (
        <button className="bg-[#333333] w-[279px] h-[45px] rounded-lg text-white">{text}</button>
    );
}

export default Button;