## Comandos do NodeJs

| Comando | Descrição |
| --------| -----------|
| `node -p "process.versions"` | Exibe a versão do node, versão da vm e outras bibliotecas que o node também. |
| `tsc` | Transforma todos os arquivos typescript no diretório atual em  arquivo javascript. |
| `tsc -W` |"Escuta" mudanças em tempo de desenvolvimento  nos arquivos typescript e  transforma todos os arquivos typescript no diretório atual em  arquivo javascript. |
| `node --inspect {archive}` | Roda script em modo debug, ideal para scripts que esperam conexões com socket que para scripts que escutam alguma porta, porém com scripts muito pequenas, não é o ideal, devemos passar outro comando.
| `node --inspect-brk {archive}` | Roda Script em modo debug, porém, ele trava no primeiro comando e é disponbilizado uma url para usar apontando em alguma ferramenta de debug para dar continuidade nos scripts
| `node install {module@version} -E` | Opção '-E' faz com que o npm instale a versão específica, fazendo com que outras pessoas que irão baixar a dependência, não terão problemas de pegar uma versão mais atualizada.

## pm2

O PM2 é uma ferramenta open source completa para o gerenciamento e deploy de aplicações Node.js em ambientes de produção. Dentro os principais recursos disponíveis podemos citar:


* Monitoramento das aplicações
* Integração com containers
* Hot reload das aplicações
* Fácil integração com serviços de deploy contínuo
* Logs das aplicações
* Facilidade em escalar as aplicações (modo cluster ou fork)

## Comandos do pm2

| Comando | Descrição |
| --------| -----------|
| `pm2 start {archivePath}` | Inicia a aplicação, caso não seja passado nenhum parâmetro para o nome da aplicação, o nome do arquivo que incia a aplicação é levado em consideração para as aplicações que estão no registro do pm2. |
| `pm2 start {archivePath} --name={appName}` | Inicia a aplicação passando um nome definido que irá ficar nos registros do pm2. |
| `pm2 start {archivePath} -i {instanceNumber}` | Inicia a aplicação passando em cluster, ou seja, o número passado no parâmetro, será igual o número o pm2 de instâncias o que pm2 irá cirar. Um ponto interresante desse parâmetro, é que ao passar o número "0", o pm2 dois tem a inteligência de contar quantas cpu's existem na máquina, baseado nesse número, cria-se uma instância para cpu. |
| `pm2 start {appName}` | Inicia a aplicação passando um appName, funcionará se a aplicação estiver nos registro do pm2, para isso, é necessária que ela tenha sido Iniciada usada o comando acima previamente. |
| `pm2 stop {appName}` |  Para a aplicação passada por parâmetro. |
| `pm2 delete {appName}` | Para e Deleta aplicação dos registros do pm2. |
| `pm2 ls` | Lista as aplicações que estão no registro do pm2. |
| `pm2 scale {appName} {wishedInstance}` | Serve para manipular as instância levantadas em cluster, por exemplo, se tivermos 4 instância em cluster de uma aplição rodando e executar o comando passando o parâmetro {wishedInstance} como 1, o pm2 irá demover 3 instâncias e só sobrará uma intância da aplicação. Ou seja, podemos controlar o número de intância, tanto como aumentando ou subindo. |

## loadtest

Executa um teste de carga na URL HTTP ou WebSockets selecionada. Permite que a API tenha integração mais simples que o seus próprios testes.

## Comandos do loadtest

| Comando | Descrição |
| --------| -----------|
| `loadtest -c {numberSimultaneouslyUsers} -t {timeInSeconds} {httpAddress}` | Inicia o comando de teste passando alguns parâmetros, sendo o parâmetro "-c" para indicar o número de usuários simultâneos, o parâmetro-t para indicar o tempo em segundos do teste e o final sendo o endereço http que será testado. |


