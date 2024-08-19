document.querySelector('#fruits').addEventListener('change', async function () {
    const selectedFruit = this.value;
    console.log(selectedFruit);

        const module = await import(`./${selectedFruit}.mjs`);

        const imgsrs = module.imgsrs;
        const description = module.description;

        document.querySelector('.imge').src = imgsrs;
        document.querySelector('.description').textContent = description;

});
