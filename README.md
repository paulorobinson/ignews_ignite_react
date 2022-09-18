# ⚛️🆕 Ig.news

Projeto desenvolvido na trilha Ignite da Rocketseat 💻🚀.

![home](https://user-images.githubusercontent.com/61739417/190883983-5b0ae893-ad59-4ae8-9be2-2931a6f88e51.png)

## 📑 Descrição

Projeto se trata de um blog onde o usuário terá acesso parcial das notícias, no entanto, para que o usuário tenha acesso a todo o conteúdo, ele deve ter um plano de assinatura.

O desenvolvimento foi seguindo o padrão JAMStack, onde a aplicação se comporta como Serveless.

## ✅ Característica da aplicação

- Autenticação via Github OAuth;
- Consumo das postagens via Prismic CMS;
- Dados salvos no FaunaDB;
- Realização de assinatura via Stripe;
- Layout responsivo (mobile e desktop).

## 👽 Libs utilizadas:

- Prismic IO Client
- Stripe
- Axios
- FaunaDB
- NextJS
- Next Auth
- Typescript
- Prismic
- React Icons
- SASS
- Testing Library
- Eslint
- Jest

## ⌨ Procedimento de instalação

```
# Clone o projeto e acesse a pasta:
$ git clone https://github.com/paulorobinson/ignews_ignite_react.git && cd ignews

# Acesse a pasta
$ cd ignews

# Instale as dependências:
$ yarn

# Execute stripe listen para ouvir eventos do webhook:
$ stripe listen --forward-to localhost:3000/api/webhooks

# Execute o projeto:
$ yarn dev

# Para rodar os testes automatizados:
$ yarn test

// A aplicação estará disponível em seu navegador em http://localhost:3000

```

## 😍 Layout desenvolvido por @tiagoluchtenberg

## 🖥 Desktop (screenshot):

| Home                                                    |
| ------------------------------------------------------- |
| <img src="https://user-images.githubusercontent.com/61739417/190883984-afd04f80-7419-4588-8c20-85daf890881f.png" width="700" /> |

| Post List                                                     |
| ------------------------------------------------------------- |
| <img src="https://user-images.githubusercontent.com/61739417/190883986-748cb5c5-3c6b-4303-ba37-c04d30a49145.png" width="700"  /> |

| Post Preview                                                     |
| ---------------------------------------------------------------- |
| <img src="https://user-images.githubusercontent.com/61739417/190883988-09ac966d-9fad-426a-9d28-201a88740f8c.png" width="700"  /> |

### 📱 Mobile (screenshot):

| Home                                                      |
| --------------------------------------------------------- |
| <img src="https://user-images.githubusercontent.com/61739417/190883985-573d7d25-3939-479c-b051-54df6c8d5afc.png" width="400" /> |

| Post List                                                        |
| ---------------------------------------------------------------- |
| <img src="https://user-images.githubusercontent.com/61739417/190883987-46ac0fd0-0e17-43f3-8bcb-9280669b664c.png" width="400"   /> |

| Post Preview                                                        |
| ------------------------------------------------------------------- |
| <img src="https://user-images.githubusercontent.com/61739417/190883989-5d2cf8af-8a7a-41db-b637-43be3d1240e7.png" width="400"   /> |

### 👀 Olha como ficou!

https://ignews-paulorobinson.vercel.app/

### 🧔🏻 Autor

Feito por Paulo Robinson Giaciani. Entre em contato!

[![Signature](https://user-images.githubusercontent.com/61739417/190883990-6b1018c5-5c59-4c7b-bda2-340e416187d8.png)](https://www.linkedin.com/in/paulo-robinson-giaciani/)

<br>
