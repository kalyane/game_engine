import './style.css'

import Experience from './Experience/Experience.js'

const experience = new Experience(document.querySelector('canvas.webgl'))

const assets = document.querySelectorAll('.asset');

assets.forEach(asset => {
  asset.addEventListener('click', function handleClick(event) {
    const modelName = asset.getAttributeNode("model").value;
    experience.world.addModel(modelName);
    updateAddedAssets()
  });
});

document.body.addEventListener( 'click', function ( event ) {
  if (event.target.classList.contains("added_asset")){
    updateProperties(event.target.getAttribute("pos"))
  }else if (event.target.parentElement.classList.contains("added_asset")){
    updateProperties(event.target.parentElement.getAttribute("pos"))
  }
} );

let properties = document.querySelector('.properties');
let name = document.querySelector('#name');
let locx = document.querySelector('#loc-x');
let locy = document.querySelector('#loc-y');
let locz = document.querySelector('#loc-z');
let scale = document.querySelector('#scale');
let model = null

function updateProperties(pos){
  properties.setAttribute("pos", pos)
  model = experience.world.models[pos]
  name.value = model.name
  locx.value = model.model.position.x
  locy.value = model.model.position.y
  locz.value = model.model.position.z
  scale.value = model.model.scale.x
}

name.addEventListener('change', function(){
  model.name = name.value
  updateAddedAssets()
});

locx.addEventListener('change', function(){
  model.model.position.x = locx.value
  updateAddedAssets()
});

locx.addEventListener('change', function(){
  model.model.position.x = locx.value
});

locy.addEventListener('change', function(){
  model.model.position.y = locy.value
});

locz.addEventListener('change', function(){
  model.model.position.z = locz.value
});

scale.addEventListener('change', function(){
  model.model.scale.x = scale.value
  model.model.scale.y = scale.value
  model.model.scale.z = scale.value
});

const addedAssetsCont = document.querySelector('.added_assets');

function updateAddedAssets(){
  const models = window.experience.world.models

  addedAssetsCont.innerHTML = ""

  for (let i = 0; i < models.length; i++) {
    let model = models[i];
    let div = document.createElement('div');
    div.classList.add('added_asset');
    div.setAttribute("pos", i)
    let img = document.createElement('img');
    img.src = model.screenshot
    div.appendChild(img)
    let text = document.createTextNode(model.name);
    div.appendChild(text);
    addedAssetsCont.appendChild(div)
  }
}
