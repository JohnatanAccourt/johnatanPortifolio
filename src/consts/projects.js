const projects = [
    {
        projectName: 'React Pokédex',
        projectTecnologies: [
            "html",
            "css",
            "javascript",
            'React.js',
            'Expo',
            'React Native',
            'React Navigation',
            'React Native svg/transformer',
            'Axios',
            'Ionicons',
            'Material Design(Icons)'
        ],
        about: 'Nesse projeto acabei usando display grid pela segunda vez foi uma experiência boa pela facilidade que é uma vez que se entende como utiliza-lo, o foco desse projeto mesmo foi consumir uma API feita por pessoas que entende melhor sobre API design e back-end pois eu já havia consumido API antes mas foi feita por mim, portanto gostaria de ter essa experiência. Esse Projeto conta com algumas animações usando o keyframes e própriamente o hover. Na Parte mobile é uma versão resumida da web principalmente na parte de informações do Pokemon mas trabalhei em proporcionar uma experiência diferente com o parallax',

        description: 'Tem o objetivo de mostrar todos os pokemons para o usuário além de informações específicas de cada um mostrando seu poder de ataque, ataque especial, defesa, defesa especial, velocidade e etc, além disso ele é capaz de mostrar todos os movimentos e habilidades além de tudo o seu tipo. Ele conta com uma paginação para facilitar a vida do usuário para avançar para os pokemons mais recentes.',
        demo: false,
        repo: 'https://github.com/JohnatanAccourt/ReactPokedex',
        image: 'https://raw.githubusercontent.com/JohnatanAccourt/johnatanPortifolio/master/src/assets/logos/pokemon.png'
    },

    {
        projectName: 'FIFACMO',
        projectTecnologies: [
            "html",
            "css",
            "javascript",
            'Expo',
            'React Native',
            'React Navigation',
            'Axios',
            'Ionicons',
            'Material Design(Icons)',
            "react-circular-progressbar",
            "react-native-circular-progress",
            "react-native-draggable",
            "react-native-intl",
            "react-native-modal",
            "react-native-shimmer-placeholder",
            "react-native-svg",
            "react-native-tiny-toast",
            "react-number-format",
            "Node",
            "cors",
            "express",
            "mariadb",
            "sequelize"
        ],
        about: 'Foi minha primeira experiência criando um backend completo após a semana Oministack, fazendo desde a modelagem de dados até a resposta em Json, para fazer a queries do banco utilizei o sequelize, poderia ter utilizado ele com o Knex mas achei melhor usar o Sequelize de forma pura para ter uma imersão maior com a tecnologia, já a parte do react native foi tão turbulenta quando fazer o back-end pois fiquei um pouco perdido com o template que eles geram automaticamente muito por conta do react navigation mas depois que entrei na documentação deles tudo ficou bem mais claro, tive dificuldades em coisas bem simples como mudar cor de alguns elementos do navigation como o botomNavigator (logo bem depois aprendi como fazer um do zero mas ok), como funcionava a parte de styles usando o javascript, e como citei antes a parte de navegação mas acabei me adapdanto e minha dificuldade ficou mesmo só no backend. Esse projeto me custou mais ou menos 6 meses para ser feito, acredito que se eu tivesse fazendo ele hoje provavelmente levaria pelo menos a metade desse tempo... com certeza foi o projeto mais complexo que já fiz até o momento.',

        description: 'Esse projeto nasceu com a necessidade de suprir algo que seria legal se tivesse nas franquias do FIFA ultimamente que é um Modo Carreira Online, pra você que não sabe existe apenas offline e basicamente é um modo que você é o treinador de um time e pode fazer negociações por jogadores de outros times e claro jogar, então resolvi ao menos tentar desenvolver um app que fizesse isso no começo não havia nenhuma perpectiva para fazer isso mas eu resolvi apenas começar e foi dando certo conforme o caminhar. Mas falando sobre as funcionalidades do projeto ele possui um login e também um cadastre-se a parte do cadastro você pode colocar uma imagem sua de perfil, nome e senha. Logo após isso existe a possibilidade de colocar a imagem do seu time e claro o nome do seu time que é o principal com o cadastro realizado você pode finalmente acessar a aplicação e desfrutar com seus iniciais 100 milhões para fazer a contratação de jogadores então com isso você tem a opção de mercado e por lá existe jogadores aproximadamente 17 mil opções de jogadores para ser contratados você pode adicionar determinado jogador aos favoritos ou então ao carrinho, quando ele é adionado no carrinho acima é possível ver o valor total do carrinho mas existe regras nessa parte do carrinho como por exemplo na primeira compra é necessário que tenha pelo menos 25 jogadores para criar o elenco após a primeira compra que é possível comprar jogadores em varejo, após a compra você pode ver na home o valor do seu time que antes era 0 agora já possui algum valor na home também pode ser visto a quantidade de copas e de ligas que você conquistou(esse recurso deve possuir um administrador para realizar), agora que possui vários jogadores você pode visitar a opção elenco que vai te mostrar os jogadores que você contratou além dos atributos dele, ao tocar na imagem do jogador(funciona no mercado também) você é direcionado para uma nova tela que mostra absolutamente tudo sobre esse jogador desde informações pessoais como nome, idade, altura, peso, nacionalidade também mostra o nível dos atributos como passe, chute, defesa, dividida, chute com efeito, resistência, fôlego e muitíssimo mais, por último nessa tela mostra o overall desse jogador em todas as partes do campo por exemplo se você tem o messi a posição de origem é ponta direita o overal dele é 94, qual seria o overall do messi jogando de meio campo? ele vai te mostrar não só no meio campo como em todas as outras posições. Voltanto com a parte do elenco você tem a tela de prancheta que vai te possibilitar mover todos os jogadores do seu elenco de forma livre dentro da prancheta afim de organizar alguma formação ou tática. Agora a parte de negociação com outros clubes funciona da seguinte forma, você vai no perfil do time e vai escolher o jogador que você quer fazer proposta com isso vai abrir um formulário com o campo de valor da proposta e mensagem e esse formulário também mostra o valor de mercado desse jogador, quando você envia a proposta o valor que foi colocado no campo será alocado para fazer a contratação, ou seja, ele é removido de sua verba temporariamente até que a resposta do outro clube seja dada se vai aceitar ou não, o time que recebeu a proposta tem até 12 horas para responder se não respoder a proposta é desfeita e o valor da proposta é realocado a verba (vale lembrar que há uma tela que é possivel ver todas as mensagens dos outros clubes formalizando as propostas ou então recebendo mensagem que o clube recusou a proposta). Infelizmente esse sistema não está no ar por dois motivos, primeiro que o banco é extremamente pesado sem ao mesmo ter um usuário, muito por conta dos 17 mil jogadores com a quantidade de informações e a outra é que o projeto seria um banco de dados para cada turma então fica realmente inviável no momento mas pra mim é um projeto que tenho bastante carinho muito por gostar de futebol mas também por expandir as possibilidades de crescimento pessoal nessa área de desenvolvimento.',
        demo: false,
        repo: 'https://github.com/JohnatanAccourt/FIFACMO',
        image: 'https://raw.githubusercontent.com/JohnatanAccourt/johnatanPortifolio/master/src/assets/logos/icon.png'
    },

    {
        projectName: 'Covid-19 Tracker',
        projectTecnologies: [
            "html",
            "css",
            "javascript",
            "@material-ui/core",
            "chart.js",
            "leaflet",
            "numeral",
            "react"
        ],
        about: 'Esse projeto foi feito pelo canal Clever Programmer em live, então só foi uma cópia... particularmente eu não sou muito fan dessa prática de copiar outros projetos seguindo um passo a passo, mas devo reconhecer que ao início da minha carreira isso pode ser importante para ficar cada vez mais ligado no que há de novo no mercado e também para adquirir boas práticas e descobrir cada vez mais novos métodos e formas diferentes de fazer algo determinado.',

        description: 'Tem a importância de mostrar os ocorridos de casos, mortes e recuperados da nova Covid-19 mostrando os principais países afetados, gráfico atualizado com o aclive/declive dos casos no mundo, filtro para escolher determinado país para ver mais expecificamente.',
        demo: 'https://covid-19-tracker-c5c76.web.app/',
        repo: 'https://github.com/JohnatanAccourt/Covid19Tracker',
        image: 'https://raw.githubusercontent.com/JohnatanAccourt/johnatanPortifolio/master/src/assets/logos/covid.png'
    },

    {
        projectName: 'Be The Hero',
        projectTecnologies: [
            "Html",
            "css",
            "javascript",
            "Node",
            "Nodemon",
            "cors",
            "express",
            "knex",
            "sqlite3",
            "axios",
            "react",
            "react Native",
            "axios",
            "expo",
            "expo-constants",
            "expo-mail-composer",
            "intl",
        ],
        about: 'Be The Hero me deu uma grande visão da stack que está sendo usada pelas maioria das empresas, após concluir a semana eu fiquei bem mais empolgado e ganhei confiança para poder realizar o FIFACMO eu usei o conhecimento que adquiri nessa semana e depois realizei um projeto totalmente novo, o Be The Hero é um projeto feito pelo pessoal da Rocket Seat que possui canal no youtube com diversos conteúdos contemporêneos sobre desenvovimento web a também mobile',

        description: 'É um sistema web simples que permite com que as ONGs insira casos e um valor para ajudar, enquanto o usuário através do app pode entrar em contato com a ONG para realizar a doação ou através do Whatsapp ou então por e-mail.',
        demo: false,
        repo: 'https://github.com/JohnatanAccourt/Be-The-Hero_SemanaOmnistack-11.0',
        image: 'https://raw.githubusercontent.com/JohnatanAccourt/johnatanPortifolio/89ba3e54a8e24ac7398d78f5851191bfe9a36b8a/src/assets/logos/bth.svg'
    },

    {
        projectName: 'E-Recycle',
        projectTecnologies: [
            "Html",
            "css",
            "jQuery",
            "PHP",
            "bootstrap",
            "MariaBD"
        ],
        about: 'E-Recycle é um projeto que foi desenvolvido no projeto integrador no Senac que é basicamente um TCC desenvolvendo um sistema Web, sistema C# e mobile de acordo com que você foi aprendido no curso em grupo. Esse projeto foi o primeiro projeto que eu desenvolvi e também o único em grupo com mais de 2 pessoas é um projeto incompleto pois a parte mobile não conecta com o banco então o aplicativo se tornou um guia para o usuário conhecer como fazer o descarte do lixo de forma correta, o sistema web foi a parte principal do projeto pois por lá você pode conhecer no que consiste a E-Recycle que basicamente o principal objetivo é alcançar o máximo de pessoas possíveis para que elas possam ter conciência do descarte de lixo eletrônico. Como disse anteriormente é o primeiro projeto feito então sempre quando olho para esse projeto vejo uma grande posibilidade de refaze-lo pois é bastante promissor muito por se tratar do nosso maior bem que é o meio ambiênte.',

        description: 'Como dito acima esse projeto visa mostrar para os usuários como fazer o descarte do lixo eletrônico e para isso o sistema web possibilita com que haja um cadastro dos usuários e dos coletores e com o cadastro dos coletores ele é visto pelos usuários que por sua vez pode entrar em contato com algum deles e fazer o descarte através deles. O website também conta com artigos de como reaproveitar o lixo eletrônico e também artigos para ficar sempre por dentro do que está ocorrendo no mundo em relação a reciclagem.',
        demo: false,
        repo: 'https://github.com/JohnatanAccourt/E-Recycle',
        image: 'https://raw.githubusercontent.com/JohnatanAccourt/johnatanPortifolio/master/src/assets/logos/erecycle.png'
    }

    
]

export default projects