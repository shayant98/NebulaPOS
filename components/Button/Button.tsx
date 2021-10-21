const Button = ({children, type}:CButtonProps) => {
    return (
        <button type={type} className="flex p-3 mb-3 bg-green-500 ml-auto rounded-lg text-sm  uppercase font-medium tracking-wider">{children}</button>
    );
}

interface CButtonProps {
    children: JSX.Element[] | JSX.Element
    type: "button" | "submit"
}

export default Button;