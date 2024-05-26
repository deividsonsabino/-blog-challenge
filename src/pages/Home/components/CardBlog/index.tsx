import { HeartIcon } from "../../../../assets/Icons";
import { Card, CardContent, CardHeader, Date, CardTitle, CardSDescription } from "./style";

export interface CardBlogProps {
    date: string;
    title: string;
    description: string;
    isLiked: boolean
}

function CardBlog(props: CardBlogProps) {
    return (
        <Card>
            <CardContent>
                <CardHeader>
                    <Date>{props.date}</Date>
                    <HeartIcon />
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