const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const IMG_DEFAULT = {
  DESCRIPTION: 'Фотография жилья',
  SRC: 'img/muffin-grey.svg',
}

const avatarFileChooser = document.querySelector('.ad-form-header__input');
const avatarPreview = document.querySelector('.ad-form-header__preview img');

const houseFileChooser = document.querySelector('.ad-form__input');
const housePreview = document.querySelector('.ad-form__photo-preview img');

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
setPreviewPhoto(houseFileChooser, housePreview);

const resetPictures = () => {
  avatarPreview.src = IMG_DEFAULT.SRC;
  housePreview.src = IMG_DEFAULT.SRC;
};

export {resetPictures};
