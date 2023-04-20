import { galleryItems } from './gallery-items.js';
// Change code below this line 

const ulGallery = document.querySelector(".gallery");
const createMakup = createFotoGalery(galleryItems);

ulGallery.insertAdjacentHTML('beforeend', createMakup);
ulGallery.addEventListener("click", openBigImg);

function createFotoGalery(galleryItems) {
    return galleryItems
        .map(({description, original, preview}) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" href="${preview}">
            <img
            class="gallery__image"
            src="${original}"
            data-source="${preview}"
            alt="${description}"
            />
        </a>
        </li>
        `;
        })
        .join(""); 
};

function openBigImg(event) {
    event.preventDefault()
    if (event.target.nodeName !== "IMG") {
        return;
    };
    const urlBigImg = event.target.dataset.source

    openModalWindows(urlBigImg);
};

function openModalWindows(url) {
    document.addEventListener("keydown", lisenerEscape)
    console.dir(url)
};

function closeModalWindows(params) {
    document.removeEventListener("keydown", lisenerEscape)
    
};

function lisenerEscape(event) {
    if (event.code !== "Escape") {
      return;  
    };
    console.log("Escape")
    // if (condition) {
    //     closeModalWindows();
    // }
    
};
console.log(ulGallery);