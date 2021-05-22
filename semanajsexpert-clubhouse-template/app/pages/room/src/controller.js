import { constants } from '../../_shared/constants.js'
import Attendee from './entities/attendee.js'

export default class RoomController {
  constructor({ socketBuilder, roomInfo, view }) {
    this.socketBuilder = socketBuilder
    this.roomInfo = roomInfo
    this.view = view
    this.socket = {}
  }

  static async initiallize(deps) {
    return new RoomController(deps)._initiallize()
  }

  async _initiallize() {
    this._setupViewEvents()
    this.socket = this._setupSocket()

    this.socket.emit(constants.events.JOIN_ROOM, this.roomInfo)
  }

  _setupViewEvents() {
    this.view.updateUserImage(this.roomInfo.user)
    this.view.updateRoomTopic(this.roomInfo.room)
  }

  _setupSocket() {
    return this.socketBuilder
      .setOnUserConnected(this.onUserConnected())
      .setOnUserDisconnected(this.onDisconnected())
      .setOnRoomUpdated(this.onRoomUpdated())
      .setOnUserProfileUpgrade(this.onUserProfileUpgrade())
      .build()
  }

  onUserProfileUpgrade() {
    return (data) => { 
      const attendee = new Attendee(data)
      console.log('onUserProfileUpgrade', attendee)

      if (attendee.isSpeaker) {
        this.view.addAttendeeOnGrid(attendee, true)
      }
    }
  }

  onRoomUpdated() {
    return (room) => {
      this.view.updateAttendeesOnGrid(room)
      console.log('room list!', room)
    }
  }

  onDisconnected() {
    return (data) => {
      const attendee = new Attendee(data)

      console.log(`${attendee.username} disconnected!`)

      this.view.removeItemFromGrid(attendee.id)
    }
  }

  onUserConnected() {
    return (data) => {
      const attendee = new Attendee(data)
      
      console.log('user connected!', attendee)

      this.view.addAttendeeOnGrid(attendee)
    }
  }
}