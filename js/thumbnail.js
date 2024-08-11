const thumbNailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createThumbnail = ({url, description, likes, comments}, imageClick) => {
  const thumbnail = thumbNailTemplate.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__img').addEventListener('click', (evt) => {
    evt.preventDefault();
    imageClick({url, description, likes, comments});
  });
  return thumbnail;
};
const container = document.querySelector('.pictures');

const generateThumbnails = (pictures, imageClick) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture, imageClick);
    fragment.append(thumbnail);
  });
  container.append(fragment);
};

export {generateThumbnails};
