import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

const postsData = [
  {
      id: 1,
      userName: 'Amart',
      avatar: 'img/bmw.jpg',
      stories: 'img/granta.jpg',
      imgPost: 'img/bmwM8Competition.jpg',
      like: false,
      likes: 93534,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, amet!',
      comments: [
          {
              avatar: 'img/amg.jpg',
              userName: 'Muhammad',
              comment: 'Машина кайф'
          },
          {
              avatar: 'img/audi.jpg',
              userName: 'Arsamak',
              comment: 'Моя лучше'
          }
      ]
  },
  {
      id: 2,
      userName: 'Muhammad',
      avatar: 'img/amg.jpg',
      stories: 'img/granta.jpg',
      imgPost: 'img/amgPost.jpg',
      like: false,
      likes: 56243,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, amet!',
      comments: [
          {
              avatar: 'img/bugatti.jpg',
              userName: 'Musa',
              comment: 'Мухаммад твоя ??'
          }
      ]
  },
  {
      id: 3,
      userName: 'Arsamak',
      avatar: 'img/audi.jpg',
      stories: 'img/granta.jpg',
      imgPost: 'img/audiPost.jpg',
      like: false,
      likes: 48279,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, amet!',
      comments: [
          {
              userName: 'Adam',
              avatar: 'img/granta.jpg',
              comment: 'Арсамак 14ю продал ??'
          },
          {
              avatar: 'img/audi.jpg',
              userName: 'Arsamak',
              comment: 'Конечно, надо расти'
          }
      ]
  },
  {
      id: 4,
      userName: 'Musa',
      avatar: 'img/bugatti.jpg',
      stories: 'img/granta.jpg',
      imgPost: 'img/bugattiPost.jpg',
      like: false,
      likes: 87645,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, amet!',
      comments: []  
  }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header postsData={postsData}/>
    <Main postsData={postsData}/>
    <Footer />
  </React.StrictMode>
);


