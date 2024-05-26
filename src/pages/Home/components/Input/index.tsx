import { Input, InputContainer } from "./style"
import { SearchIcon } from "../../../../assets/Icons"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

function InputComponent(props: InputProps) {
    return (
        <InputContainer>
            <Input
                placeholder={props.placeholder}
            />
            <SearchIcon />
        </InputContainer>
    )
}

export default InputComponent