import { AppState } from "../AppState.js";
import { nasaService } from "../services/NasaService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawPictureOfTheDay() {
  const nasaPicture = AppState.pictureOfTheDay
  if(nasaPicture == null) {
    return
  }
  console.log('[NASA CONTROLLER] _drawPictureOfTheDay() => nasaPicture:', nasaPicture)
  document.body.style.backgroundImage = `url(${nasaPicture?.imgUrl})`

  setHTML('nasa-description', nasaPicture?.NasaDescriptionTemplate)
}

function _setDate(date) {
  if(!date) {
    // NOTE USE .toISOString to return back a date you can manipulate
    let isoDate = new Date().toISOString()
    console.log(isoDate, 'ISO DATE')
    // NOTE TARGET THAT ISODATE AND USE THE SUBSTRING METHOD TO PARSE IT TO A FORMAT THE NASA API NEEDS
    date = isoDate.substring(0, 10)
    console.log(date, 'DATE')
  }
  let datePicker = document.getElementById('date-picker')
  // NOTE NOW SET THE VALUE/MAX OF THAT INPUT TO THAT SPECIFIC DATE
  datePicker.value = date
  datePicker.max = date
}

export class NasaController {
  constructor() {
    this.getPictureOfTheDay()
    _setDate()

    
    AppState.on("pictureOfTheDay", _drawPictureOfTheDay)

  }

  async getPictureOfTheDay() {
    try {
      
      await nasaService.getPictureOfTheDay()
    } catch (error) {
      console.error('[ERROR]', error)
      Pop.error(('[ERROR]'), error.message)
    }
  }
  

  async getByDate(date) {
    try {
      // NOTE IF THERE IS NO DATE PROVIDED, MAKE SURE TO GRAB THAT DATE FROM THE INPUT
      if (!date) {
        // NOTE USE THE GETELEMENTBYID.VALUE TO TARGET THE VALUE THAT THE USER CLICKED ON
        date = document.getElementById('date-picker').value 
        console.log('[NASA CONTROLLER] date-picker', date)
        await nasaService.getByDate(date)
      } else {
        await nasaService.getByDate(date)
      }
    } catch (error) {
      console.error('[ERROR]',error)
      Pop.error(('[ERROR]'), error.message)
    }
  }

}