import { AppState } from "../AppState.js"
import { NasaApod } from "../models/NasaApod.js"
import { nasa } from "./AxiosService.js"

class NasaService {
async getByDate(date) {
  // NOTE USE THE QUERY SELECTOR TO GO GRAB THE SPECIFIC IMAGE BY IT'S SPECIFIC DATE
  const res = await nasa.get(`apod?date=${date}`)
  console.log('[NASA SERVICE], getByDate(date) => res.data:', res.data)
  AppState.pictureOfTheDay = new NasaApod(res.data)
}

async getPictureOfTheDay() {
  const res = await nasa.get('apod')
  console.log('[NASA SERVICE], getPictureOfTheDay() => res.data:', res.data)
  AppState.pictureOfTheDay = new NasaApod(res.data)
  console.log(AppState.pictureOfTheDay)
}

}

export const nasaService = new NasaService()