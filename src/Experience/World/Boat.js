import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Boat
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug

        this.name = "Boat"
        this.screenshot = this.resources.items.boatScreenshot

        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('boat')
        }

        // Resource
        this.resource = this.resources.items.boatModel

        this.setModel()
    }

    setModel()
    {
        this.model = this.resource.scene.clone()
        this.model.scale.set(0.02, 0.02, 0.02)
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