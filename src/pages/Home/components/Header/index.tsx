import InputComponent from "../Input";
import { Header, Logo, CodeText } from "./style";

function HeaderComponent() {
    return (
        <Header>
            <Logo><CodeText color="white">Code</CodeText>lândia</Logo>
            <InputComponent
                placeholder="Pesquise no blog"
            />
        </Header>
    )
}

export default HeaderComponent;