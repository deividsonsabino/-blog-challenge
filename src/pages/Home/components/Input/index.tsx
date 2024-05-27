import { SearchInput } from "../../../../Interfaces";
import { SearchIcon } from "../../../../assets/Icons"
import { Input, InputContainer } from "./style"

function InputComponent(props: SearchInput) {

    function filterPosts(value: string) {
        let filtered = props.posts;
        if (value === '') {
            filtered = props.posts.filter(post => post.filtered = true)
            props.setPostsList(filtered)
        } else {
            filtered = props.posts.filter(post => {
                if (post.description.toLowerCase().includes(value) || post.title.toLowerCase().includes(value)) {
                    post.filtered = true
                } else {
                    post.filtered = false
                }
                return props.posts;
            })
            props.setPostsList(filtered)
        }
    }

    return (
        <InputContainer>
            <Input
                onChange={(e) => filterPosts(e.target.value)}
                {...props}
            />
            <SearchIcon />
        </InputContainer>
    )
}

export default InputComponent