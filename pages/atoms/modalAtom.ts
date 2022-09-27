// import { DocumentData } from 'firebase/firestore'
import { atom } from 'recoil'
import { Movie } from '/Users/User/Desktop/netflix-clone/typings'

export const modalState = atom({
  key: 'modalState',
  default: false,
})

export const movieState = atom<Movie | null>({
  key: 'movieState',
  default: null,
})