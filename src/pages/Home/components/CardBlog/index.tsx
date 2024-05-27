import { Post } from "../../../../Interfaces";
import HeartIconButton from "../HeartIconButton";
import { Card, CardContent, CardHeader, Date, CardTitle, CardSDescription } from "./style";

function CardBlog(props: Post) {
    return (
        <Card>
            <CardContent>
                <CardHeader>
                    <Date>{props.date}</Date>
                    <HeartIconButton isLiked={props.isLiked} />
                </CardHeader>
                <CardTitle>
                    {props.title}
                </CardTitle>
                <CardSDescription>
                    {props.description}
                </CardSDescription>
            </CardContent>
        </Card>
    )
}

export default CardBlog;