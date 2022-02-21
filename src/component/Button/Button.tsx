import "./button.css";
    interface ButtonProps{
        value: string
        variant?:"standard" | "outlined"
        className?:string
    }

const Button = ({value,variant, className}:ButtonProps) => {
    return (
        <div>
            <button className={variant === "standard" ? "dark": "light" }>
                {value}
            </button>
        </div>
    );
};

export default Button;