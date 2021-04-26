import { useEffect } from 'react'
//Existe 3 maneiras de importar um API -- REACT


// SPA - TRADICIONAL
// OS DADOS ESTAO SENDO CARREGADOS SOMENTE QUANDO A PESSOA ACESSA A PAGINA, MAS AS INFORMAÇÕES NAO ESTARÃO DISPONIVEIS PARA O GOOGLE 

export default function Home (){
    useEffect(() => {
        fetch('http://localhost:3333/episodes') //API CRIADO LOCALMENTE COM O JSON-SERVER
        .then(response => response.json())
        .then(data =>  console.log(data))
    }, [])
    
    return(
        <div>

        </div>
    )
}

// SSR - SERVER SIDE RENDERING
// AO EXPORTA UMA FUNÇÃO COM O NOME getServerSideProps O REACT JA VAI ENTENDER QUE TEM QUE EXECUTAR ESTA FUNÇÃO ANTES DE EXIBIR O CONTEUDO, OU SEJA, AS INFORMAÇÕES ESTARÃO DISPONIVEL PARA O GOOGLE

// A API SERÁ CARREGADA TODA VEZ QUE O USUÁRIO ABRIR A HOME PAGE MESMO SEM SOFRE ALTERAÇÕES

export default function Home (props){
    console.log(props.episodios)
    return(
        <div>

        </div>
    )
}

export async function getServerSideProps() {
    const response = await fetch('http://localhost:3333/episodes') //API CRIADO LOCALMENTE COM O JSON-SERVER
    const data = await response.json()

    return {
        props: { // SEMPRE PRECISA SER O NOME PROPS 
            episodios: data, // OQUE VOCE QUER TIRAR DA API
        }
    }
}


// SSG - SERVER SIDE GENERATION 

// O NOME DA FUÇÃO TEM QUE SER getStaticProps
// TEM TODAS AS FUNÇÕES DO SSR E VOCÊ PODE PROGRAMAR DE QUANTO EM QUANTO TEMPO ESTA PAGINA SERA ATUALIZADA, ASSIM VOCE PODE CRAIR UMA PAGINA ESTÁTICA E NÃO PRECISA PUXAR TODOS OS DADOS DA API TODA A VEZ QUE A PÁGINA HOME FOR ACESSADA 

export default function Home (props){
    console.log(props.episodios)
    return(
        <div>

        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch('http://localhost:3333/episodes') //API CRIADO LOCALMENTE COM O JSON-SERVER
    const data = await response.json()

    return {
        props: { // SEMPRE PRECISA SER O NOME PROPS 
            episodios: data, // OQUE VOCE QUER TIRAR DA API
        },
        revalidate: 60 * 60 * 8,
        //REVALIDATE IRÁ GERAR UMA NOVA PAGINA A CADA (TEMPO PROGRAMADO ) NO CASO A CADA 60 * 60 * 8 = 28,800s (8 horas)
    }
}