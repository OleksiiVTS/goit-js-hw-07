import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulGallery = document.querySelector(".gallery");
const createMakup = createFotoGalery(galleryItems);

ulGallery.insertAdjacentHTML('beforeend', createMakup);
// ulGallery.addEventListener("click", clickForOpenBigImg);

function createFotoGalery(galleryItems) {
    return galleryItems
        .map(({description, original, preview}) => {
        return `
        <li class="gallery__item">
        <a 
            class="gallery__link" 
            href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
            />
        </a>
        </li>
        `;
        })
        .join(""); 
};

new SimpleLightbox('.gallery a', { 
    /* options */ 
    captionsData:'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});

// function clickForOpenBigImg(event) {
//     event.preventDefault()
//     lightbox.on('show.simplelightbox', function () {
//         // do something…
//     });
//     console.log("Open");
// };




