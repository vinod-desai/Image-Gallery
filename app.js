const container = document.getElementsByClassName('container')[0];
const closeButton = document.getElementById('closeButton');
const imageModal = document.getElementById('imageModal');
const selectedImage = document.getElementById('image-selected');

function showImageModal(event){
    // console.log(event);
    if(event.target.tagName === 'IMG'){
        selectedImage.src = event.target.src;
        console.log(selectedImage.src);
        imageModal.style.display = 'block';
    }
}

closeButton.addEventListener('click', ()=>{
    imageModal.style.display = 'none';
});
imageModal.addEventListener('click', (e) => {
    console.log(e.target.id);
    if(e.target.id === "imageModal"){
        imageModal.style.display = 'none';
    }
});
container.addEventListener('click', showImageModal);