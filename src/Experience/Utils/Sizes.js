import EventEmitter from './EventEmitter.js'
import Experience from '../Experience.js'

export default class Sizes extends EventEmitter
{
    constructor()
    {
        super()
        this.experience = new Experience()
        // Setup
        this.width = this.experience.canvas.parentElement.clientWidth
        this.height = this.experience.canvas.parentElement.clientHeight
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)

        // Resize event
        window.addEventListener('resize', () =>
        {
            this.width = this.experience.canvas.parentElement.clientWidth
            this.height = this.experience.canvas.parentElement.clientHeight
            this.pixelRatio = Math.min(window.devicePixelRatio, 2)

            this.trigger('resize')
        })
    }
}