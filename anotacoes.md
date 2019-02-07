## Anotações do Curso

| Comando | Descrição |
| --------| -----------|
| `node -p "process.versions"` | Exibe a versão do node, versão da vm e outras bibliotecas que o node também. |
| `tsc` | Transforma todos os arquivos typescript no diretório atual em  arquivo javascript. |
| `tsc -W` |"Escuta" mudanças em tempo de desenvolvimento  nos arquivos typescript e  transforma todos os arquivos typescript no diretório atual em  arquivo javascript. |
| `node --inspect {archive}` | Roda script em modo debug, ideal para scripts que esperam conexões com socket que para scripts que escutam alguma porta, porém com scripts muito pequenas, não é o ideal, devemos passar outro comando.
| `node --inspect-brk {archive}` | Roda Script em modo debug, porém, ele trava no primeiro comando e é disponbilizado uma url para usar apontando em alguma ferramenta de debug para dar continuidade nos scripts


