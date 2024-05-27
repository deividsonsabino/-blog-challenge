import { useState } from "react";
import { CardBlog, HeaderComponent } from "./components";
import { PageContainer, Container } from "./style";
import { Post } from "../../Interfaces";

const posts = [
    {
        "date": "17 de ago, 2024",
        "title": "O que é linguagem de programação? Conheça as principais",
        "description": "Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.",
        "isLiked": false,
        "filtered": true
    },
    {
        "date": "12 de jul, 2024",
        "title": "GitHub agora permite fazer login sem precisar de senha",
        "description": "O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores.",
        "isLiked": false,
        "filtered": true

    },
    {
        "date": "21 de jun, 2024",
        "title": "Por que os hiperlinks são azuis em sua maioria?",
        "description": "Quem navega na internet, certamente já percebeu que ela conta com diversos recursos para tornar a nossa vida mais fácil. Entre essas opções podemos mencionar os hiperlinks – uma palavra ou termo clicável que direciona o leitor.",
        "isLiked": false,
        "filtered": true
    },
]

function HomePage() {
    const [postsList, setPostsList] = useState<Post[]>(posts);

    return (
        <PageContainer>
            <HeaderComponent
                posts={postsList}
                setPostsList={setPostsList}
            />

            <Container>
                {postsList.map(post =>
                    post.filtered &&
                        <CardBlog key={post.title} {...post} />
                )}

            </Container>
        </PageContainer>
    )
}

export default HomePage;