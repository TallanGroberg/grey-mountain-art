import React, { useState, } from 'react';
import eagleHead from '../images/eagle-head.jpg'
import vikingShip from '../images/viking-ship.jpg'
import totumPole from '../images/totum-pole.jpg'
import tiger from '../images/tiger.jpg'
import samari from '../images/samari.jpg'


const ThemeContext = React.createContext()


const ThemeProvider = (props) => {
  const initState = [
    {
    title: 'Eagle Head',
    img: eagleHead,
    description: 'its art ',
    price: 10000,
    type: 'Fine Art',
    _id: '1',
    },
    {
      title: 'Viking Ship',
      img: vikingShip,
      description: 'this is a comission art piece i did for tailorsville high school.',
      price: 'not for sale',
      type: 'Fine art',
      _id: '2',
      },
      {
        title: 'totum pole',
        img: totumPole,
        description: 'this is a totum pole made with plasma cut CNC machine toolings ',
        price: 9999,
        type: 'Fine art',
        _id: '3',
        },
        {
          title: 'tiger',
          img: tiger,
          description: 'this is an anodized copper piece',
          price: '5,000',
          type: 'Fine art',
          _id: '4'
          },
          {
          title: 'the Samari',
          img: samari,
          description: 'a Samari in a classic fighting pose',
          price: '10,000',
          type: 'Fine art',
          _id: '5',
          },
      ]
  // {
  //   title: '',
  //   img: '',
  //   description: '',
  //   price: '',
  //   type: '',
   //  _id: '',
  //   },
  const [artInfo, setArtInfo] = useState(initState)
  const [theme, setTheme] = useState("light")
  const [homePageArt, setHomePageArt] = useState([initState[0]])
  const [fade, setFade] = useState(false)

  console.log('homePageArt inprovider', homePageArt)

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