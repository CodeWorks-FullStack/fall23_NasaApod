export class NasaApod {
  constructor(data) {
    this.author = data.title
    this.date = data.date
    this.description = data.explanation
    this.imgUrl = data.hdurl
  }

  get NasaDescriptionTemplate() {
    return `
    <div class="nasa-title">
      <div class="col-2">
        ${this.author}
      </div>
      <div class="col-2">
        ${this.date}
      </div>
    </div>
      <div class="col-7 nasa-description">
        <p>${this.description}</p>
      </div>
    `
  }

}

const nasa = {
    "copyright": "David Cruz",
    "date": "2023-10-12",
    "explanation": "Mu Cephei is a very large star. An M-class supergiant some 1500 times the size of the Sun, it is one of the largest stars visible to the unaided eye, and even one of the largest in the entire Galaxy. If it replaced the Sun in our fair Solar System, Mu Cephei would easily engulf Mars and Jupiter. Historically known as Herschel's Garnet Star, Mu Cephei is extremely red. Approximately 2800 light-years distant, the supergiant is seen near the edge of reddish emission nebula IC 1396 toward the royal northern constellation Cepheus in this telescopic view. Much cooler and hence redder than the Sun, this supergiant's light is further reddened by absorption and scattering due to intervening dust within the Milky Way. A well-studied variable star understood to be in a late phase of stellar evolution, Mu Cephei is a massive star too, destined to ultimately explode as a core-collapse supernova.   APOD editor to speak: in Houghton, Michigan tonight, Thursday, October 12, at 6 pm",
    "hdurl": "https://apod.nasa.gov/apod/image/2310/MuCephei_apod.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "Mu Cephei",
    "url": "https://apod.nasa.gov/apod/image/2310/MuCephei_apod1024.jpg"
}