import { SearchInput } from "../../../../Interfaces";
import InputComponent from "../Input";
import { Header, Logo, CodeText } from "./style";


function HeaderComponent(props: SearchInput) {

    return (
        <Header>
            <Logo><CodeText color="white">Code</CodeText>lândia</Logo>
            <InputComponent
                placeholder="Pesquise no blog"
                {...props} 
            />
        </Header>
    )
}

export default HeaderComponent;