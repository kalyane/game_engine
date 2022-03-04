import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Barn
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug

        this.name = "Barn"
        this.screenshot = this.resources.items.barnScreenshot

        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('barn')
        }

        // Resource
        this.resource = this.resources.items.barnModel

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