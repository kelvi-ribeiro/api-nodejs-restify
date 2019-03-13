## Comandos do NodeJs

| Comando | Descrição |
| --------| -----------|
| `node -p "process.versions"` | Exibe a versão do node, versão da vm e outras bibliotecas que o node também. |
| `tsc` | Transforma todos os arquivos typescript no diretório atual em  arquivo javascript. |
| `tsc -W` |"Escuta" mudanças em tempo de desenvolvimento  nos arquivos typescript e  transforma todos os arquivos typescript no diretório atual em  arquivo javascript. |
| `node --inspect {archive}` | Roda script em modo debug, ideal para scripts que esperam conexões com socket que para scripts que escutam alguma porta, porém com scripts muito pequenas, não é o ideal, devemos passar outro comando.
| `node --inspect-brk {archive}` | Roda Script em modo debug, porém, ele trava no primeiro comando e é disponbilizado uma url para usar apontando em alguma ferramenta de debug para dar continuidade nos scripts
| `node install {module@version} -E` | Opção '-E' faz com que o npm instale a versão específica, fazendo com que outras pessoas que irão baixar a dependência, não terão problemas de pegar uma versão mais atualizada.

## Comandos do pm2

| Comando | Descrição |
| --------| -----------|
| `pm2 start {archivePath}` | Inicia a aplicação, caso não seja passado nenhum parâmetro para o nome da aplicação, o nome do arquivo que incia a aplicação é levado em consideração para as aplicações que estão no registro do pm2. |
| `pm2 start {archivePath} --name={appName}` | Inicia a aplicação passando um nome definido que irá ficar nos registros do pm2. |
| `pm2 start {AppName}` | Inicia a aplicação passando um appName, funcionará se a aplicação estiver nos registro do pm2, para isso, é necessária que ela tenha sido Iniciada usada o comando acima previamente. |
| `pm2 stop {AppName}` |  Para a aplicação passada por parâmetro. |
| `pm2 delete {AppName}` | Para e Deleta aplicação dos registros do pm2. |
| `pm2 ls` | Lista as aplicações que estão no registro do pm2. |

