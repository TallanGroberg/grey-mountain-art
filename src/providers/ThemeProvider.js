import React, { useState, } from 'react';
import eagleHead from '../images/eagle-head.jpg'
import vikingShip from '../images/viking-ship.jpg'
import totumPole from '../images/totum-pole.jpg'


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
      type: 'fine art',
      _id: '2',
      },
      {
        title: 'totum pole',
        img: totumPole,
        description: 'this is a totum pole made with plasma cut CNC machine toolings ',
        price: 9999,
        type: 'fine art',
        _id: '3',
        }
  ]
  // {
  //   title: '',
  //   img: '',
  //   description: '',
  //   price: '',
  //   type: '',
  //   }
  const [artInfo, setArtInfo] = useState(initState)
  const [theme, setTheme] = useState("light")
  const [homePageArt, setHomePageArt] = useState([])
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