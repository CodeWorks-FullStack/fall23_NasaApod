import { AppState } from "../AppState.js"
import { Sandbox } from "../models/Sandbox.js"
import { api } from "./AxiosService.js"

class SandboxService {
  async deleteFavorite(favoriteId) {
    const res = await api.delete(`api/apods/${favoriteId}`)
    console.log('Res.data', res.data)

    // NOTE USE THE FILTER FUNCTION TO RETURN BACK AN ARRAY WITH ALL THE FAVORITES WHERE THE FAVORITE ID DOESN'T EQUAL THE FAVORITE ID WE PASSED DOWN
    AppState.myFavorites = AppState.myFavorites.filter((favorite) => favorite.id != favoriteId)
  }
  async getMyFavorites() {
    const res = await api.get('api/apods')
    console.log('[SANDBOX SERVICE] getMyFavorites() => res.data:', res.data)
    AppState.myFavorites = res.data.map((apodPojo) => new Sandbox(apodPojo))
  }
  
  async createFavorite() {
  const favoriteAPOD = AppState.pictureOfTheDay
  console.log('[SANDBOX SERVICE] createFavorite() => favoriteAPOD:', favoriteAPOD)
  const res = await api.post('api/apods', favoriteAPOD)
  console.log('[SANDBOX SERVICE] createFavorite() => res.data:', res.data)

  AppState.myFavorites.push(new Sandbox(res.data))

  AppState.emit('myFavorites')
  }

}

export const sandboxService = new SandboxService()