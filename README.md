
# Início com Angular
### Uma pequena introdução para quem deseja começar um universo com Angular.

## Indice

> + [1 - Configurando o nosso ambiente](##1---Configurando-o-nosso-ambiente)
> + [2 - Conhecendo a estrutura de uma aplicação Angular](##2---Conhecendo-a-estrutura-de-uma-aplicação-Angular)

## 1 - Configurando o nosso ambiente

### Baixando as dependências...
Para que possamos trabalhar Angular é bom já ter instalado em nosso computador as seguintes ferramentas:
* Gitbash: https://git-scm.com/
* Node Js.:https://nodejs.org/
* Visual Studio code: https://code.visualstudio.com/

### Configurações iniciais...
Após o download das ferramentas, podemos criar uma pasta de trabalho onde iremos criar o nosso primeiro projetinho e iniciar nela o Git Bash.

![Decrição da imagem](https://raw.githubusercontent.com/MarquesCleiton/agular-primeiros-passos/main/Pictures/1-gitbash.png "Git Bash Here")
 
**Em seguida executar os seguintes comandos**:
Validação dação da instalação do Node JS:
```git
node --version
```
![2-node.png](https://github.com/MarquesCleiton/agular-primeiros-passos/blob/main/Pictures/2-node.png?raw=true)
---
**Instalação do Angular**:
```git
npm install -g @angular/cli
```
É **IMPORTANTE** que aguarde a instalação e **NÃO** feche o Git Bash!!!

**Validação dação da instalação do Angular:**
```git
ng version
```
![3-angular.png](https://github.com/MarquesCleiton/agular-primeiros-passos/blob/main/Pictures/3-angular.png?raw=true)

**Criação do nosso projeto**:
```git
ng new "Nome_do_projeto"
```
![4-angular.png](https://github.com/MarquesCleiton/agular-primeiros-passos/blob/main/Pictures/4-angular.png?raw=true)

**Obs.**: Caso você baixe um projeto já existente através do github, por exemplo, muito provavelmente ele não terá os módulos do Angular. Nessa caso é só abrir na pasta do projeto baixado o Git Bash e executar o seguinte comando:
```git
npm install --save angular-module
```

**Executando o projeto**:
Dentro da pasta com todos os arquivos e módulo do projeto, execute o comando para iniciar nossa aplicação:
```
ng serve
```
![5-angular.png](https://github.com/MarquesCleiton/agular-primeiros-passos/blob/main/Pictures/5-angular.png?raw=true)

![6-angular.png](https://github.com/MarquesCleiton/agular-primeiros-passos/blob/main/Pictures/6-angular.png?raw=true)

**IMPORTANTE:** não feche o Git Bash em que executamos o comando 'ng serve', pois através dele que estamos rodando o nosso servidor com o site.

---
---
## 2 - Conhecendo a estrutura de uma aplicação Angular

### Abrindo o projeto
Para abrir o VS Code na pasta do projeto através do Git Bash, digite:
```git
code .
```
Aqui temos nossa ferramenta de trabalho com todos os arquivos necessários para 'trabaiá'
![7-VSCode.png](https://github.com/MarquesCleiton/agular-primeiros-passos/blob/main/Pictures/7-VSCode.png?raw=true)

---

### Pasta src:
Do lado esquerdo encontramos todos os recursos que precisamos, mas o foco principalmente está na pasta **src**:
![8-VSCode.png](https://github.com/MarquesCleiton/agular-primeiros-passos/blob/main/Pictures/8-VSCode.png?raw=true)

---

### Pasta App: 
Dentro dela estão alguns arquivos importantes:
![9-VSCode.png](https://github.com/MarquesCleiton/agular-primeiros-passos/blob/main/Pictures/9-VSCode.png?raw=true)

* **app.componente.html**
	* seu template / componente raiz
* **app.componente.css**
	* estilo (css) aplicado ao seu componente
* **app.component.ts**
	*	arquivo com os métodos que podem ser utilizados em seu componente
* **app.component.specs.ts**
	*	como o componente e seus módulos são criados/exibidos
* **app-routing.modules.ts**
definção de rotas do seu projeto (veremos depois)
**app.modules.ts**
	*	registros de novos módulos a serem usados no seu componente (veremos depois)
		
---

### Outras pastas:
![10-VSCode.png](https://github.com/MarquesCleiton/agular-primeiros-passos/blob/main/Pictures/10-VSCode.png?raw=true)

*	**Pasta assets**
	*	pasta onde são colocados recursos estáticos (ex: imagens, folhas de estilo, mídia, outras bibliotecas, etc)
*	**favicon.ico**
	*	ícone do seu site (aparece no título do browser)
*	**index.html**
	*	página raiz que irá invocar seu componente principal 
``(<app-root></app-root>)``

---

### index.xml
Pelo **INDEX.HTML** ser nossa página principal e origem de tudo, é possível incluir frameworks responsivos, tais como o **BOOTSTRAP**.
![11-VSCode.png](https://github.com/MarquesCleiton/agular-primeiros-passos/blob/main/Pictures/11-VSCode.png?raw=true)

---

### app.component.ts
Aqui estarão algumas informações como o:
*	Seletor
*	Rota direta
*	CSS específico do componente
![12-VSCode.png](https://github.com/MarquesCleiton/agular-primeiros-passos/blob/main/Pictures/12-VSCode.png?raw=true)

---
---

## 3 - Criando novos componentes



---
---
## 4 - Criando rotas

---
---
## 5 - Consumindo de APIs