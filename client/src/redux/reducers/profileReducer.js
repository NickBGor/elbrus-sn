import { GET_USER, REGISTRATION_USER } from '../actionTypes/types'

const initialState = {
  name: 'Даша Петрова',
  photo: 'http://starlife.com.ua/media/photo/big/FPLA1TNZAS.jpg',
  email: 'dashadetkaKOKOKO@mail.ru',
  password: 'dasha123',
  // status: student, teacher, guest, Gosha
  status: 'student',
  coins: 5,
  // rating: All coins for all time
  rating: 12,
  skills: ['HTML', 'CSS', 'Пирожки с картошкой']
}

export function profileReducer (state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload }
    case REGISTRATION_USER:
      return { ...state, user: action.payload }
    default:
      return state
  }
}
