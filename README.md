# 🎴 Pokédex React App

A simple yet fun **Pokédex application** built with React that showcases Pokémon cards, their stats, and a mini-game mechanic. This project was developed to practice **React components, props, defaultProps, and conditional rendering**, while also adding interactivity with a game mode.


---

## 🛠 Features

### Core Components
- **App**
  - Root component, renders the main application object (`Pokegame`).
- **Pokecard**
  - Displays a single Pokémon’s:
    - Name  
    - Image  
    - Type  
    - Base experience  
- **Pokedex**
  - Receives an array of Pokémon objects via props.
  - Renders multiple `Pokecard` components.
  - Uses `defaultProps` to provide a default Pokémon list.

### Default Pokémon List
```js
[
  {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
  {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
  {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
  {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
  {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
  {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
  {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
  {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
]
```


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

![](https://github.com/topgyalgurung/pokedoxx.gif)


