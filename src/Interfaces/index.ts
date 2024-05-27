export interface Post {
    date: string;
    title: string;
    description: string;
    isLiked: boolean;
    filtered: boolean
}

export interface SearchInput extends React.InputHTMLAttributes<HTMLInputElement>{
    posts: Array<Post>;
    setPostsList: (post:Array<Post>) => void;
}