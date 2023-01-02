
import React, { useState } from 'react'
export const useChangeLocation = () => {
    const [location, setLocation] = useState(window.location.pathname)
  
    const nextURL = 'https://my-website.com/page_b';
    const nextTitle = 'My new page title';
    const nextState = { additionalInformation: 'Updated the URL with JS' };
  
    const changeLocation = (path) => {
        const newlocation = `http://localhost:3000/${path}`
        window.history.pushState(nextState, nextTitle, newlocation)
        setLocation(newlocation)
    
      }
    return changeLocation
  }