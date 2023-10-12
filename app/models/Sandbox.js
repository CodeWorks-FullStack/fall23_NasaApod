import { Account } from "./Account.js"

export class Sandbox {
  constructor(data) {
    this.id = data.id
    this.date = data.date
    this.imgUrl = data.imgUrl
    // NOTE COOL THING NOT NECESSARY
    this.Creator = new Account(data.creator)
    this.creatorId = data.creatorId
    this.description = data.description
    this.author = data.author
  }

  get SandboxImageTemplate() {
    return `
    <i onclick="app.SandboxController.deleteFavorite('${this.id}')" class='mdi mdi-close'></i>
    <img onclick="app.NasaController.getByDate('${this.date}')" title="${this.author}" class="img-fluid my-2" src="${this.imgUrl}" alt="">
    `
  }
}

const sandbox = {
  "date": {
    "type": "String",
    "required": true,
    "validate": "validate"
  },
  "imgUrl": {
    "type": "String",
    "required": true,
    "maxLength": 250
  },
  "creatorId": {
    "type": "ObjectId",
    "required": true,
    "ref": "Account"
  },
  "description": {
    "type": "String",
    "maxLength": 5000
  },
  "author": {
    "type": "Object"
  },
  "originalId": {
    "type": "String"
  }
}