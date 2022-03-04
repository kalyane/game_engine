import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Guitar
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug

        this.name = "Guitar"
        this.screenshot = this.resources.items.guitarScreenshot

        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('guitar')
        }

        // Resource
        this.resource = this.resources.items.guitarModel

        this.setModel()
    }

    setModel()
    {
        this.model = this.resource.scene.clone()
        this.model.scale.set(0.5, 0.5, 0.5)
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