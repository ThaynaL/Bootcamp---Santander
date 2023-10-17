# Git e Github - Primeiros Passos
Este é um arquivo que contem minhas anotações sobre a aula de como configurar o Git.
<details>
<summary>Comando de configuração</summary>
Ver um listagem de todos os comandos: 'git config'.
Salvar o nome do usuário: 'git config --global user.name "NomedoUsuario" ' e o email: 'git config --global user.email "seuemail@gmail.com" '.
Para confirmar se foi salvo 'git config user.name' ou 'git config user.email'
Retornar a branch padrão: 'git config init.defaultBranch' e para altera-la deve colocar o novo nome após o comando anterior e colocar o local(se é para salvar para todos os usuários ou somente no atual) que deve ser salvo: 'git config --global init.defaultBranch Nomedesejado'.
Listar todos os caminhos para tal origem: 'git config --global --list'.
</details>

<details>
<summary>Para autentificar</summary>
Token: Vá em configurações(Settings), depois em configurações do desenvolvedor(Developer Settings) em seguida gere novo token em Personal access tokens (classic) e configure de acordo com o desejado. Em seguida pode clonar o repositório e vai abrir uma aba do github e ir na opção token ou colocar o nome de usuário(user name) do github depois quando pedir a senha (password) colar o link gerado (token).
Para salvar a credencial: 'git config --global credential.helper store' (para ficar salvo de forma permanente) ou colocando cache no final para ficar salvo temporariamente. 
Confirmar 'git config --global credential.helper'.

Chave SSH(Ainda não fiz desta forma então não posso explicar sobre), mas acredito que ir em configurações, na aba SSH and GPG keys e conferir se há chave SSH ativa e se não acredito que seguindo
o artigo que o github direcina será possível que conseguirá verificar com os comando e se precisar 
adicionar uma nova chave tem mais um artigo que ajudará.
<details>

Criar e clonar repositórios
Clonar repositório do github: 'git clone URL(que se encontra no repósitório desejado em code, na aba local, na área de clone em HTTPS) <novo_nome_do_repositório>'.
Criar um repositório local, para iniciar o repositório Git no diretório escolhido: 'git init <nome-do-repositório>'.
Vincular um repósitório local com o remoto: 'git add origin (A URL do repositório)'.
Mostar status e commits do repositório: 'git status'.
Adicionar o arquivo a área de preparação: git add Nome-do-Arquivo.extenção e para adicionar todos utilize: 'git add'.
Inserir como um commit: 'git commit -m"Descreva a auteração"'.
Visualizar algumas informações como o commit, autor entre outras: 'git log' e histórico detalhado: 'git reflog'
Se houver algum arquivo que se deve ignorar se deve usar como extenção o .gitignore e para reconhecer aquivos vazios deve usar .gitkeep.
Remover vercionamento da pasta tem que deletar o diretório '.git com rm -rf'.
Desfazer alterações: 'git restore'.
Alterar a "descrição" do último commit: 'git commit --amend -m"Descreva alterada"' ou 'git commit --amend' (esse comando abre um editor para melho visualizar o commit).
Desfaz o último commit colocando ele novamente na área que é permitido modifição: 'git reset --soft HEAD'.
Desfaz todas os commits anteriores a hash informada: 'git reset HEAD'.
Desfaz todas as modificações que estão para o versionamento(aqueles que não foram feitos os commits): 'git reset --hard HEAD'.
Enviar do repositório local para o remoto: 'git push -m origin main'.
Atualizar repositório local com novos arquivos que estão no repositório remoto, este comando baixa as alterações e as mescla no repositório local: 'git pull';

Braches são como universos pararelos que ferom criados para  somente os códigos que realmente estão funcionando se tranformarem em princiapais.
Criar branches: 'git checkout -b <nome_branch>'.
Ir para uma branch: 'git checkout main', ex: que volta para a branch principal.
Listar os commits das branches: 'git branch -v'.
Meschar braches: 'git merge <nome_branch>'
Excluir: 'git branch -d <nome_branch>'
Baixar repositório sem mesclar: 'git fetch origin main'
Comparar branches: 'git diff main origin/main'
Clonar apenas uma branch: 'git clone URL --branch nome-da-branch --single-branch'

Arquiva suas alterações: 'git stash'.
A alteração arquivada será executada (mas não removida): 'git stash apply'.
Vai para a próxima alteração (e a remove da stash): 'git stash pop'.
Limpa a stash (pode especificar um índice para remover uma entrada específica): 'git stash drop'.