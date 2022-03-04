import * as THREE from 'three'
import Experience from '../Experience.js'

export default class PhoneBooth
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug

        this.name = "Phone Booth"
        this.screenshot = this.resources.items.phoneBoothScreenshot

        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('phone_booth')
        }

        // Resource
        this.resource = this.resources.items.phoneBoothModel

        this.setModel()
    }

    setModel()
    {
        this.model = this.resource.scene.clone()
        this.model.scale.set(0.4, 0.4, 0.4)
        this.scene.add(this.model)

        this.model.traverse((child) =>
        {
            if(child instanceof THREE.Mesh)
            {
                child.castShadow = true
            }
        })
    }
}