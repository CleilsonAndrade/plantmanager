<div align="center">
    <h1 align="center">PlantManager</h1>
    <p>Aplicação de gerenciamento de plantas mobile, desenvolvida durante a NLW#5.</p>
    <img src="./design/design.png" alt="Logo" width="800">
</div>

## Índice

* [Descrição](#descrição)
* [Features](#features) 
* [Techs](#techs)
  * [Libs](#Libs)
* [Design](#design)
  * [Cores](#cores)
  * [Tipo de fonte](#tipo-de-fonte)
  * [Pacote de ícones](#pacote-de-ícones)
* [Instalação](#instalação)
* [Links Contato](#links-contato)
* [Licença](#licença)

# Descrição
Aplicação de gerenciamento de plantas mobile, desenvolvida durante a **NLW#5** realizada pela [**@Rocketseat**](https://github.com/Rocketseat)

## Features:
- [x] UI/UX Design
- [x] Cadastro de usuário
- [x] Validação de usuário
- [x] Cadastro de plantas
- [x] Salvamento local
- [x] Dicas de cuidado por planta
- [x] Agendamento de cuidados por horário
- [x] Listagem de plantas salvas
- [x] Notificações para cuidado das plantas
- [x] Requisições e respotas de API

# Techs: 
- **JavaScript**
- **TypeScript**
- **React Native**
- **Expo**

## Libs:
- **axios**
- **JSON-Server**
- **date-fns**
- **React Navigation**
- **Expo Fonts**
- **Expo Vector Icons**
- **Expo LottieFiles**
- **Expo DateTimePicker**
- **Expo AsyncStorage**
- **Expo Notifications**

# Design:
- O modelo final para mobile está disponível na pasta `./design`<br>
- Imagens disponíveis na pasta `./assets` e `./src/assets`<br>

## Cores:
- Green: #32B768<br>
- Green-Dark: #2B7A4B<br>
- Green-Light: #DAF2E4<br>
- Heading: #52665A<br>
- Body-Dark: #738078<br>
- Body-Light: #AAB2AD<br>
- Background: #FFFFFF<br>
- Shape: #F0F0F0<br>
- White: #FFFFFF<br>
- Gray: #CFCFCF<br>
- Blue: #3D7199<br>
- Blue-Light: #EBF6FF<br>
- Red: #E83F5B<br>

## Tipo de fonte:
- **Jost:** 600Semi-bold, Regular 400

## Pacote de ícones:
- **Feather**

# Instalação:

```bash
  # Abra o terminal e instale o expo-cli:
  $ npm install --global expo-cli

  # Clone este repositório:
  $ git clone https://github.com/CleilsonAndrade/plantmanager.git
  $ cd ./plantmanager

  # Instale as dependências, inicie o servidor da API e inicie o servidor de desenvolvimento:
  $ npm install
  $ json-server ./src/services/server.json --host 192.168.1.8 --port 3333 -d 700
  $ expo start
```

# Links Contato
- **Linkedin**: https://www.linkedin.com/in/cleilson-andrade/<br>
- **GitHub**: https://github.com/CleilsonAndrade<br>

# Licença
<p align="center"><a href="https://github.com/CleilsonAndrade/plantmanager/blob/master/LICENSE"><img src="https://camo.githubusercontent.com/002151a49ee9afae7ce4c2bce93056c9f0e108fbd14e5a7e46e7e79d87bb1071/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e63652d4d49542d626c75652e7376673f7374796c653d666c61742d737175617265" alt="licence mit" data-canonical-src="https://img.shields.io/badge/licence-MIT-blue.svg?style=flat-square" style="max-width:100%;"></a></p>
