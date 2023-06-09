import { galleryItems } from './gallery-items.js';
// Change code below this line 

const ulGallery = document.querySelector(".gallery");
const createMakup = createFotoGalery(galleryItems);
const instance = basicLightbox.create(`
        <img class="findUrl" src=" " width="800" height="600">
    `, {
        onShow: (instance) =>
        document.addEventListener("keydown", lisenerEscape),
        onClose: (instance) =>
        document.removeEventListener("keydown", lisenerEscape),
    });
ulGallery.insertAdjacentHTML('beforeend', createMakup);
ulGallery.addEventListener("click", clickForOpenBigImg);

function createFotoGalery(galleryItems) {
    return galleryItems
        .map(({description, original, preview}) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </li>
        `;
        })
        .join(""); 
};

function clickForOpenBigImg(event) {
    event.preventDefault()
    if (event.target.nodeName !== "IMG") {
        return;
    };
    const urlBigImg = event.target.dataset.source
    openModalWindows(urlBigImg);
};

function openModalWindows(url) {
    const findImgUrl = instance.element().querySelector('.findUrl');
    findImgUrl.src = url;
    instance.show();
};

function lisenerEscape(event) {
    if (event.code !== "Escape" || !basicLightbox.visible()) {
      return;  
    };
    console.log("Escape")
    instance.close()
};
