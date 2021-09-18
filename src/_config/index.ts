
export const STORAGE = 'ws_iot_ui'

export const APP_VERSION = process.env.REACT_APP_VERSION

export const URLS = {
  HOME: '/',
  USER: {
    LOGIN: '/login',
    HOME: '/home'
  },
}

export const API = {}

export const ACTIONS = {
  LOADER: {
    SET_FP_STATUS: 'ACTIONS/LOADER/SET_FP_STATUS',
  },
  USER: {
    LOGIN: 'ACTIONS/USER/LOGIN',
    ME: 'ACTIONS/USER/ME',
    LOGOUT: 'ACTIONS/USER/LOGOUT',
  }
}

export const CARS_MOCK_DATA = [
  {
    "id": 1,
    "model": "A3",
    "make": "Audi",
    "year": 2009,
    "image": "car2.jpg",
    "vin": "1D7RV1CT6BS790048",
    "interior_color": "Turquoise",
    "exterior_color": "Red",
    "price": "$49002.53"
  },
  {
    "id": 2,
    "model": "Topaz",
    "make": "Mercury",
    "year": 1993,
    "image": "car3.jpg",
    "vin": "WAUDF98E55A480376",
    "interior_color": "Maroon",
    "exterior_color": "Blue",
    "price": "$64867.89"
  },
  {
    "id": 3,
    "model": "MX-3",
    "make": "Mazda",
    "year": 1992,
    "image": "car4.jpg",
    "vin": "SCFBF04B27G392890",
    "interior_color": "Green",
    "exterior_color": "Khaki",
    "price": "$77421.16"
  },
  {
    "id": 4,
    "model": "Legend",
    "make": "Acura",
    "year": 1987,
    "image": "car5.jpg",
    "vin": "SALAK2V65FA259912",
    "interior_color": "Aquamarine",
    "exterior_color": "Blue",
    "price": "$99928.31"
  },
  {
    "id": 5,
    "model": "Altima",
    "make": "Nissan",
    "year": 1998,
    "image": "car6.jpg",
    "vin": "JN8AE2KP7B9566123",
    "interior_color": "Maroon",
    "exterior_color": "Khaki",
    "price": "$42602.50"
  },
  {
    "id": 6,
    "model": "X5 M",
    "make": "BMW",
    "year": 2011,
    "image": "car7.jpg",
    "vin": "SALSF2D45CA909424",
    "interior_color": "Crimson",
    "exterior_color": "Puce",
    "price": "$93619.41"
  },
  {
    "id": 7,
    "model": "Lanos",
    "make": "Daewoo",
    "year": 2001,
    "image": "car8.jpg",
    "vin": "WAUMR94EX9N172728",
    "interior_color": "Puce",
    "exterior_color": "Maroon",
    "price": "$59481.61"
  },
  {
    "id": 8,
    "model": "Savana 1500",
    "make": "GMC",
    "year": 2012,
    "image": "car9.jpg",
    "vin": "SAJWA1EK4EM656551",
    "interior_color": "Turquoise",
    "exterior_color": "Pink",
    "price": "$51360.94"
  },
  {
    "id": 9,
    "model": "Prius",
    "make": "Toyota",
    "year": 2012,
    "image": "car10.jpg",
    "vin": "3D73M3CL0BG312767",
    "interior_color": "Puce",
    "exterior_color": "Indigo",
    "price": "$80775.12"
  },
  {
    "id": 10,
    "model": "R8",
    "make": "Audi",
    "year": 2009,
    "image": "car11.jpg",
    "vin": "2G61R5S37D9071144",
    "interior_color": "Blue",
    "exterior_color": "Maroon",
    "price": "$34326.55"
  }
]