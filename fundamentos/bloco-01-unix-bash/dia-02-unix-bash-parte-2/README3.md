# Exercícios - (bônus) - o despertar do terminal
- Se você utiliza o Linux, abra o terminal e execute o comando sudo apt-get install cmatrix, ou para pessoas usuárias de macOS, utilize no terminal brew install cmatrix. Depois, execute o comando cmatrix. Quando estiver se sentindo como o Neo, aperte ctrl+c para voltar ao terminal.

sudo apt-get install cmatrix
cmatrix

- No sistema Linux, execute o comando sudo apt-get install fortune, ou no macOS brew install fortune e, após a instalação, crie um arquivo de texto chamado fortune.txt que contenha a sua sorte do dia. Utilize apenas uma linha de comando. Dica: use o comando fortune, e o operador >

sudo apt-get install fortune
fortune > fortune.txt

- Conte quantas palavras tem a frase da sua sorte do dia. Dica: use o comando wc

wc -w fortune.txt

- Execute o comando sudo apt-get install sl em um terminal Linux, ou brew install sl em um terminal macOS. Após a instalação, execute o comando sl. Agora tente sl -f;

sudo apt-get install sl
sl
sl -f

- No sistema Linux, execute o comando sudo apt-get install cowsay, ou brew install cowsay no macOS. Após a instalação, execute o comando cowsay e algo que você queira falar. Agora faça a vaquinha dizer a frase que está gravada no arquivo fortune.txt;

sudo apt-get install cowsay
cowsay show
tail fortune.txt | cowsay

- Descubra os fatores primos usando o comando factor e em seguida o número 42;

factor 42

- Veja como fica a sua sorte do dia ao contrário. Dica: utilize o comando rev

tail fortune.txt | rev

- Execute o comando telnet towel.blinkenlights.nl. Lembre-se de que você tem mais exercícios para fazer! 😅

telnet towel.blinkenlights.nl
