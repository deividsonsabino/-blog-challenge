import { useState } from "react";
import { Button, StyledHeartIcon } from "./style";

interface HeartIconButtonProps {
    isLiked: boolean;
}

function HeartIconButton(props: HeartIconButtonProps) {
    const [isLiked, setIsLiked] = useState<boolean>(props.isLiked);

    return (
        <Button onClick={() => setIsLiked(!isLiked)}>
            <StyledHeartIcon isLiked={isLiked} />
        </Button>
    )
}

export default HeartIconButton;