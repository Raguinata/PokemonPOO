#PokemonWebApp

Esta é uma documentação para o PokemonWebApp, que consiste em um frontend React e um backend Django, formando uma aplicação completa para navegar e colecionar Pokémon. O frontend permite aos usuários visualizar, pesquisar e adicionar Pokémon à sua coleção, enquanto o backend lida com o gerenciamento de contas de usuário e armazenamento de dados.

##Instalação e Execução

Para instalar e executar o Aplicativo de Coleção de Pokémon, siga estas etapas:
Frontend

    Clone o repositório do frontend:

    bash

git clone <url-do-repositório-frontend>

Navegue até o diretório do frontend:

bash

cd pokemon-collection-app

Instale as dependências do frontend:

bash

npm install

Inicie o frontend:

bash

    npm start

Backend

    Clone o repositório do backend:

    bash

git clone <url-do-repositório-backend>

Navegue até o diretório do backend:

bash

cd pokemon-collection-backend

Crie um ambiente virtual e ative-o (opcional, mas recomendado):

bash

python3 -m venv venv
source venv/bin/activate

Instale as dependências do backend:

bash

pip install -r requirements.txt

Execute as migrações do banco de dados:

bash

python manage.py migrate

Inicie o backend:

bash

    python manage.py runserver

    Acesse o aplicativo em seu navegador em http://localhost:3000.

Uso

Ao acessar o Aplicativo de Coleção de Pokémon, os usuários verão uma página inicial exibindo uma lista de cartas de Pokémon. Eles podem navegar pela coleção de Pokémon, filtrar os Pokémon por nome usando a barra de pesquisa na navegação e clicar em uma carta de Pokémon para ver seu perfil detalhado.

Os usuários podem realizar as seguintes ações:

    Criar uma conta: Os usuários podem se cadastrar fornecendo um nome de usuário, senha e endereço de e-mail.
    Fazer login: Os usuários podem entrar em suas contas existentes usando o nome de usuário e senha.
    Visualizar perfil: Os usuários podem ver suas informações de perfil, incluindo nome de usuário e endereço de e-mail.
    Adicionar cartas de Pokémon à coleção: Os usuários podem adicionar cartas de Pokémon à sua coleção clicando em uma carta e selecionando a opção "Adicionar à Coleção".
    Remover cartas de Pokémon da coleção: Os usuários podem remover cartas de Pokémon de sua coleção clicando em uma carta na página "Minha Coleção" e selecionando a opção "Remover da Coleção".
    Atualizar senha: Os usuários podem alterar sua senha atualizando-a na página "Alterar Senha".
    Fazer logout: Os usuários podem sair de suas contas selecionando a opção "Logout" no menu de navegação.

Componentes, Rotas e Armazenamento

O Aplicativo de Coleção de Pokémon utiliza os componentes e rotas descritos na documentação do frontend. Os dados são gerenciados pelo backend usando o Django, com o modelo Account representando uma conta de usuário e as visualizações correspondentes processando as solicitações da API.

O frontend se comunica com o backend por meio de solicitações HTTP para realizar ações como cadastro, login, adição/remoção de cartas e atualização de senha. As informações da conta do usuário e a coleção de cartas de Pokémon são armazenadas no backend.

A store Redux é usada no frontend para gerenciar o estado da aplicação, incluindo informações sobre as cartas de Pokémon e a coleção do usuário. As ações do Redux são despachadas para interagir com o backend, enviando solicitações HTTP e atualizando o estado da store de acordo com as respostas recebidas.

Essa junção do frontend e backend do Aplicativo de Coleção de Pokémon permite aos usuários desfrutar de recursos completos para explorar e colecionar Pokémon, com autenticação de usuário, armazenamento de dados e interações dinâmicas.
