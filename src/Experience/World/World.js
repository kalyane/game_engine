import Experience from '../Experience.js'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Fox from './Fox.js'
import Barn from './Barn.js'
import Guitar from './Guitar.js'
import Boat from './Boat.js'
import CoconutTree from './CoconutTree.js'
import PhoneBooth from './PhoneBooth.js'
import Trophy from './Trophy.js'

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Wait for resources
        this.resources.on('ready', () =>
        {
            // Setup
            //this.floor = new Floor()
            //this.fox = new Fox()
            this.environment = new Environment()
            this.dictModels = {
                "barn": Barn,
                "guitar": Guitar,
                "boat": Boat,
                "coconut_tree": CoconutTree,
                "phone_booth": PhoneBooth,
                "trophy": Trophy
            }
            this.models = []
        })
    }

    update()
    {
        //if(this.fox)
        //    this.fox.update()
    }

    addModel(modelName)
    {
        const model = this.dictModels[modelName]
        this.models.push(new model())
    }
}