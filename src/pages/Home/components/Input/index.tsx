import { SearchIcon } from "../../../../assets/Icons"
import { Input, InputContainer } from "./style"
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