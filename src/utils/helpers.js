import { allConfig } from '../app/config'

  export const getAPIBaseURL = () => {
    var api_base_url = allConfig.env == "dev" ? allConfig.dev_api_url : allConfig.prod_api_url

    return   api_base_url;
  }

  export const getSiteBaseURL = () => {
    var site_base_url = allConfig.env == "dev" ? allConfig.dev_site_url : allConfig.prod_site_url
  
    return site_base_url
  }

  export const getLandingURL = () => {
    var site_base_url = allConfig.env == "dev" ? allConfig.dev_site_url : allConfig.prod_landing_url
  
    return site_base_url;
  }

  export const addToLocalStorage = (key, value) => {
    localStorage.setItem(key, value)
  }

  export const getFromLocalStorage = (key) => {
    return localStorage.getItem(key)
  }

  export const removeFromLocalStorage = (key) => {
    return localStorage.removeItem(key)
  }

  export const isLogged = () => {
    let isUserLogged = false
    const token = localStorage.getItem('accessToken')
    const user = localStorage.getItem('user')
    if(token && user){
      const decodedJwt = parseJwt(token)
      alert('JWT Decoded: ' + decodedJwt)
      if(decodedJwt){
        if(!(decodedJwt.exp * 1000 < Date.now())){
          isUserLogged = true
        }   
     }
    }
    return isUserLogged;
  }

  const parseJwt = (token) => {
    try{
      return JSON.parse(window.atob(token.split(".")[1]))
    }catch(error){
      return null
    }  
  }