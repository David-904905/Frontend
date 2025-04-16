import { FC } from "react";

interface ButtonInterface
{
    label: string;
    customClick: () => void;
    disabled: boolean
}
const Button: FC<ButtonInterface> = ({label, customClick, disabled}) => {
    return (
        <>
            <button onClick={customClick} disabled={disabled}>{label}</button>
        </>
    )
}

export default Button;