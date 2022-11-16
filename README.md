# Início com Angular
### Uma pequena introdução para quem deseja criar um universo em Angular.

## Índice

> + [1 - Configurando o nosso ambiente](#1---Configurando-o-nosso-ambiente)
> [Baixando as dependências](#baixando-as-dependências)
> [Configurações iniciais](#configurações-iniciais)

> + [2 - Conhecendo a estrutura de uma aplicação Angular](##2---Conhecendo-a-estrutura-de-uma-aplicação-Angular)
>  + [3 - Criando novos componentes](#3---Criando-novos-componentes)

# 1 - Configurando o nosso ambiente

### Baixando as dependências
Para que possamos trabalhar Angular é bom já ter instalado em nosso computador as seguintes ferramentas:
* Gitbash: https://git-scm.com/
* Node Js.:https://nodejs.org/
* Visual Studio code: https://code.visualstudio.com/

### Configurações iniciais
Após o download das ferramentas, podemos criar uma pasta de trabalho onde iremos criar o nosso primeiro projetinho e iniciar nela o Git Bash.

![Decrição da imagem](https://raw.githubusercontent.com/MarquesCleiton/agular-primeiros-passos/main/Pictures/1-gitbash.png "Git Bash Here")
 
**Em seguida executar os seguintes comandos**:
Validação dação da instalação do Node JS:
```git
node --version
```
![2-node.png](https://github.com/MarquesCleiton/agular-primeiros-passos/blob/main/Pictures/2-node.png?raw=true)

---

### Instalando o Angular:
```git
npm install -g @angular/cli
```
É **IMPORTANTE** que aguarde a instalação e **NÃO** feche o Git Bash!!!

**Validação dação da instalação do Angular:**
```git
ng version
```
![3-angular.png](https://github.com/MarquesCleiton/agular-primeiros-passos/blob/main/Pictures/3-angular.png?raw=true)

---

### Criando o nosso projeto:
```git
ng new "Nome_do_projeto"
```
![4-angular.png](https://github.com/MarquesCleiton/agular-primeiros-passos/blob/main/Pictures/4-angular.png?raw=true)

**Obs.**: Caso você baixe um projeto já existente através do github, por exemplo, muito provavelmente ele não terá os módulos do Angular. Nessa caso é só abrir na pasta do projeto baixado o Git Bash e executar o seguinte comando:
```git
npm install --save angular-module
```

---

### Executando o projeto:
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
Aqui estarão algumas informações como:
*	Seletor
*	Rota direta
*	CSS específico do componente

![12-VSCode.png](https://github.com/MarquesCleiton/agular-primeiros-passos/blob/main/Pictures/12-VSCode.png?raw=true)

---
---

## 3 - Criando novos componentes
Imaginando que cada elemento da nossa página como um componente distinto, podemos criar algo mais ou menos assim:

![23-componentes.png](https://github.com/MarquesCleiton/agular-primeiros-passos/blob/main/Pictures/23-componentes.png?raw=true)

---

### Criando o título, home e rodapé

Para criar os componentes, basta digitar os seguintes comandos no terminal:

```git 
ng generate component titulo
```
```git 
ng generate component home 
```
```git 
ng generate component rodape
```
![18-VSCode.png](https://github.com/MarquesCleiton/agular-primeiros-passos/blob/main/Pictures/18-VSCode.png?raw=true)

### Entendendo o componente

Cada componente será gerado com os seus próprios arquivos:

**component.html**
![19-VSCode.png](https://github.com/MarquesCleiton/agular-primeiros-passos/blob/main/Pictures/19-VSCode.png?raw=true)

**component.ts**
Aqui é importante notar o seletor:
``selector: 'app-titulo'``
vamos utilizar depois para criar nossas rotas.

![20-VSCode.png](https://github.com/MarquesCleiton/agular-primeiros-passos/blob/main/Pictures/20-VSCode.png?raw=true)

### Colocando nossos componentes em ação
Antes... Apague TODO que esta dentro de **app.component.html**, pois é nele que iremos colocar nossos novos componentes!

O Angular cria como padrão para cada componente o seletor **app-nome_componente'**. Assim para chamar, basta colocar a Tag com mesmo padrão no **app.component.html**.
![21-VSCode.png](https://github.com/MarquesCleiton/agular-primeiros-passos/blob/main/Pictures/21-VSCode.png?raw=true)

### Resultado
![22-chrome.png](https://github.com/MarquesCleiton/agular-primeiros-passos/blob/main/Pictures/22-chrome.png?raw=true)

---
---
## 4 - Criando rotas

### Explication
Supondo que um usuário queira navegar por nossa página, é comum que o cabeçalho e o rodapé  se mantenha o mesmo padrão, enquanto o corpo mude. Algo parecido com isso:
![1-componentes.png](https://github.com/MarquesCleiton/agular-primeiros-passos/blob/main/Pictures/4%20-%20Criando%20rotas/1-componentes.png?raw=true)

O router-outlet pode ser a **home** da página, **Sobre nós**, **Perguntas Frequentes**, **Carrinho**, ou seja, qualquer coisa...

---

### Criação de componentes rotativos

**Crie mais 2 componentes**:
* Sobre nós
* Dúvidas
**Obs.:** sem espaços e/ou acentos na hora da criação...

**Crie um app-routing para definirmos as rotas de nossos componentes**:
```git
ng generate module app-routing --flat --module=app
```
![2-app-routing.png](https://github.com/MarquesCleiton/agular-primeiros-passos/blob/main/Pictures/4%20-%20Criando%20rotas/2-app-routing.png?raw=true)

Substitua tudo em **app-routing.module.ts** por:
```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

### Configurando as importações e rotas

```typescript
//Importações dos componentes
import { HomeComponent } from  './home/home.component';
import { SobreNosComponent } from  './sobre-nos/sobre-nos.component';
import { DuvidasComponent } from  './duvidas/duvidas.component';
```

```typescript
//Inclusão de rotas de nossos componentes
const  routes: Routes = [
	{ path:  '', redirectTo:  'home', pathMatch:  'full'},
	{ path:  'home', component:  HomeComponent},
	{ path:  'sobre-nos', component:  SobreNosComponent},
	{ path:  'duvidas', component:  DuvidasComponent}
];
```
![3-app-routing.png](https://github.com/MarquesCleiton/agular-primeiros-passos/blob/main/Pictures/4%20-%20Criando%20rotas/3-app-routing.png?raw=true)

**Note**: em 'const  routes: Routes...' é um vetor onde definimos as nossas rotas, sendo que a primeira linha nos diz que quando alguém entrar na pagina principal, ``meusite.com/``, redirecione para o componente 'home'.

---

### Definindo links e alterando para elementos rotativos

Remover o ``<app-home>`` de **app.component.html** e substituir por ``<router-outlet></router-outlet>``

![4-app-routing.png](https://github.com/MarquesCleiton/agular-primeiros-passos/blob/main/Pictures/4%20-%20Criando%20rotas/4-app-routing.png?raw=true)

No componente **titulo.component.html** adicionaremos os links:

```html
<h1>Título</h1>
<a  [routerLink]="'/home'"> Home </a>
<a  [routerLink]="'/sobre-nos'"> Sobre nós </a>
<a  [routerLink]="'/duvidas'"> Dúvidas </a>
```

![5-app-routing.png](https://github.com/MarquesCleiton/agular-primeiros-passos/blob/main/Pictures/4%20-%20Criando%20rotas/5-app-routing.png?raw=true)

### Resultado
![6-app-routing.png](https://github.com/MarquesCleiton/agular-primeiros-passos/blob/main/Pictures/4%20-%20Criando%20rotas/6-app-routing.png?raw=true)

![7-app-routing.png](https://github.com/MarquesCleiton/agular-primeiros-passos/blob/main/Pictures/4%20-%20Criando%20rotas/7-app-routing.png?raw=true)

![8-app-routing.png](https://github.com/MarquesCleiton/agular-primeiros-passos/blob/main/Pictures/4%20-%20Criando%20rotas/8-app-routing.png?raw=true)

Para mais informações:
https://angular.io/tutorial/toh-pt5

---
---

## 5 - Consumindo APIs