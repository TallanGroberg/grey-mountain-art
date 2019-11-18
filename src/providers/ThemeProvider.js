import React, { useState, } from 'react';

import eagleHead from '../images/eagle-head.jpg'
import vikingShip from '../images/viking-ship.jpg'
import totumPole from '../images/totum-pole.jpg'
import tiger from '../images/tiger.jpg'
import samari from '../images/samari.jpg'
import coatRack from '../images/rams-coat-rack.jpg'
import Indian from '../images/indian.jpg'
import firePit from '../images/fire-pit.jpg'
import feather from '../images/feather.jpg'
import familyCrest from '../images/family-crest.jpg'

const ThemeContext = React.createContext()


const ThemeProvider = (props) => {
  const initState = [
    {
    title: 'Eagle Head',
    img: eagleHead,
    description: 'A beautiful head shot of an eagle',
    price: 10000,
    type: 'Fine Art',
    _id: '1',
    },
    {
      title: 'Viking Ship',
      img: vikingShip,
      description: 'this is a comission art piece I did for tailorsville high school. It is currently hanging in the school on desplay for all to see',
      price: 'not for sale',
      type: 'Fine art',
      _id: '2',
      },
      {
        title: 'Totum pole',
        img: totumPole,
        description: 'this is a totum pole made with plasma cut CNC machine toolings the metal is especially thick requiring a high level of precision.',
        price: 9999,
        type: 'Fine art',
        _id: '3',
        },
        {
          title: 'Tiger',
          img: tiger,
          description: 'this is an anodized copper backing one of the first',
          price: 5000,
          type: 'Fine art',
          _id: '4'
          },
          {
          title: 'The Samari',
          img: samari,
          description: 'a Samari in a classic was the first CNC art piece to incorporate an anodized copper backing giving the art its sky blue background',
          price: 10000,
          type: 'Fine art',
          _id: '5',
          },
          {
            title: 'Decorative coat rack',
            img: coatRack,
            description: 'An amazing art piece that doubles as a decorative coat rack',
            price: 2000,
            type: 'functional art',
            _id: '6',
            },
            {
              title: 'Indian',
              img: Indian,
              description: 'A rustic style an indian mixing the modern of fine art with the classic of achaic life',
              price: 3000,
              type: 'Fine Art',
              _id: '7',
              },
              {
                title: 'Decorative Fire Pit',
                img: firePit,
                description: 'a fire pit that gently displays the outline of a beautiful scene to the dancing of a flame, entertaining your quest with a display',
                price: 500,
                type: 'functional art',
                _id: '8',
                },
                {
                  title: 'Feather Stand',
                  img: feather,
                  description: 'a beautiful feather piece',
                  price: 2000,
                  type: 'functional',
                  _id: '8',
                  },
                  {
                    title: 'Family Crest',
                    img: familyCrest,
                    description: 'this is my family crest, each animal symbolically representing a family member.',
                    price: 'not for sale',
                    type: 'Fine Art',
                    _id: '9',
                    },
      ]
  // {
  //   title: '',
  //   img: '',
  //   description: '',
  //   price: '',
  //   type: '',
  //   _id: '',
  //   },
  const [artInfo, setArtInfo] = useState(initState)
  const [theme, setTheme] = useState("light")
  const [homePageArt, setHomePageArt] = useState([initState[0]])
  const [fade, setFade] = useState(false)


  const addToHomePage = async (theArtPiece) => {
    await setHomePageArt( prev => ([theArtPiece]))
    setFade(prev => (!prev))
  }

  const removeFromHomePage = (theArtPiece) => {
    const takeAway = homePageArt.filter(art => art !== theArtPiece)
    setHomePageArt(takeAway)
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      artInfo,
      homePageArt,
      fade,
      addToHomePage: addToHomePage,
      removeFromHomePage: removeFromHomePage,
    }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const withTheme = C => props => (
  <ThemeContext.Consumer>
    {value => <C {...value} {...props} />}
  </ThemeContext.Consumer>
)

export default ThemeProvider;