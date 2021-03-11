const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const PhotoSize = {
  WIDTH: 40,
  HEIGHT: 44,
};
const IMG_DEFAULT = {
  DESCRIPTION: 'Фотография жилья',
  SRC: 'img/muffin-grey.svg',
}

const avatarFileChooser = document.querySelector('.ad-form-header__input');
const avatarPreview = document.querySelector('.ad-form-header__preview img');

const houseFileChooser = document.querySelector('.ad-form__input');
const housePreview = document.querySelector('.ad-form__photo');

const setPreviewPhoto = (fileChoose, previewElement) => {
  fileChoose.addEventListener('change', () => {
    const file = fileChoose.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => {
      return fileName.endsWith(it);
    });

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        previewElement.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
};

setPreviewPhoto(avatarFileChooser, avatarPreview);

const createImgElement =  document.createElement('img');
createImgElement.width = PhotoSize.WIDTH;
createImgElement.height = PhotoSize.HEIGHT;
createImgElement.alt = IMG_DEFAULT.DESCRIPTION;
createImgElement.src = IMG_DEFAULT.SRC;
housePreview.style.display = 'flex';
housePreview.style.justifyContent = 'center';
housePreview.style.alignItems = 'center';
housePreview.appendChild(createImgElement);

setPreviewPhoto(houseFileChooser, createImgElement);

const resetPictures = () => {
  avatarPreview.src = IMG_DEFAULT.SRC;
  createImgElement.src = IMG_DEFAULT.SRC;
};

export {resetPictures};
