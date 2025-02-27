interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps) {
  return (
    <button className="h-[45px] w-[279px] xl:w-[304px] rounded-lg bg-[#333333] font-custom-semibold text-white hover:bg-[#C4F82A] hover:text-[#333333]">
      {text}
    </button>
  );
}

export default Button;

