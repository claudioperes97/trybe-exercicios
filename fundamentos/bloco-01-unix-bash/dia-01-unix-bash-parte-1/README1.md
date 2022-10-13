#Exercícios - manipulação & busca

- Crie um novo diretório chamado unix_tests_search e entre nele. 
- Na pasta unix_tests_search, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl

código: mkdir unix_tests_search
cd unix_tests_search
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

- Mostre todo o conteúdo do arquivo countries.txt na tela.

código:  less countries.txt

- Mostre o conteúdo de countries.txt, página por página, até encontrar a Zambia.

código: espaço

- Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia.

código: less countries.txt + / 'Zambia'

- Busque por Brazil no countries.txt.

código: grep 'Brazil' countries.txt

- Busque novamente por brazil, mas agora utilizando o lower case.

código grep -i 'brazil' countries.txt 

- Crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.

código: touch phrases.txt

- Busque pelas frases que não contenham a palavra fox.

código: grep -iv 'fox' phrases.txt

- Conte o número de palavras do arquivo phrases.txt.

código: wc -c phrases.txt 

- Conte o número de linhas do arquivo phrases.txt.

código: wc -l phrases.txt

- Crie os arquivos empty.tbt e empty.pdf.

código: touch empty.tbt / touch empty.pdf

- Liste todos os arquivos do diretório unix_tests_search.

código: ls -a 

- Liste todos os arquivos que terminem com txt.

código: ls *txt

- Liste todos os arquivos que terminem com tbt ou txt.
Acesse o manual do comando ls.

código: ls man.