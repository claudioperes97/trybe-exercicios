#Exercícios - criação de arquivos e diretórios

- Dica: Para criação de arquivos vazios, você pode utilizar o comando touch nome-do-arquivo.extensao.

- Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado unix_tests e navegue até ele.

código: mkdir unix_testes / cd unix_tests 

- Crie um arquivo de texto com o nome trybe.txt.

código: touch trybe.txt

- Crie uma cópia do arquivo trybe.txt com o nome trybe_backup.txt.

código: cp trybe.txt trybe_backuo.txt

- Renomeie o arquivo trybe.txt.

código: mv trybe.txt trybe1.txt

- Dentro de unix_tests, crie um novo diretório chamado backup.

código: mkdir backup

- Mova o arquivo trybe_backup.txt para o diretório backup.

código: mv trybe_backup.txt backup/

- Dentro de unix_tests, crie um novo diretório chamado backup2.

código: mkdir backup2

- Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2.

código: cd backup / mv trybe_backup.txt backup2/

- Apague a pasta backup.

código: cd .. / rm -rf backup

- Renomeie a pasta backup2 para backup.

código: mv backup2 backup

- Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.

código: ls -a

- Apague o diretório backup.

código: rm -rf backup

- Limpe o terminal.

código: clear

- Para os próximos dois exercícios, crie, de forma manual, na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado skills.txt:
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL

- Mostre na tela as 5 primeiras skills do arquivo skills.txt.

código: head -5 skills.txt

- Mostre na tela as 4 últimas skills do arquivo skills.txt.

código: tail -4 skills.txt

- Apague todos os arquivos que terminem em .txt.

código: rm *'.txt'