import { AppState } from "../AppState.js"
import { sandboxService } from "../services/SandboxService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawMyFavorites() {
  let contents = ''
  AppState.myFavorites.forEach((favorite) => contents += favorite.SandboxImageTemplate)

  setHTML('offcanvas-body', contents)
}

export class SandboxController {
  constructor() {
    AppState.on('account', this.getMyFavorites)
    AppState.on('myFavorites', _drawMyFavorites)
  }

  async createFavorite() {
    try {
      await sandboxService.createFavorite()
    } catch (error) {
      console.error('[ERROR]',error)
      Pop.error(('[ERROR]'), error.message)
    }
  }

  async getMyFavorites() {
    try {
      await sandboxService.getMyFavorites()
    } catch (error) {
      console.error('[ERROR]',error)
      Pop.error(('[ERROR]'), error.message)
    }
  }
  
  async deleteFavorite(favoriteId) {
    try {
      const yes = await Pop.confirm('Are you sure you want to delete that Favorite?')
      if(!yes) {
        return
      }
      await sandboxService.deleteFavorite(favoriteId)
    } catch (error) {
      console.error('[ERROR]',error)
      Pop.error(('[ERROR]'), error.message)
    }
  
   
  }


}