import { color } from "./apple.mjs";

document.querySelector('#fruits').addEventListener('change', async function () {
    const selectedFruit = this.value;
    console.log(selectedFruit);

        const module = await import(`./${selectedFruit}.mjs`);

        const imgsrs = module.imgsrs;
        const description = module.description;
        const color = module.color;

        document.querySelector('.imge').src = imgsrs;
        document.querySelector('.description').textContent = description;
        document.querySelector('body').style.backgroundColor = color;

});
