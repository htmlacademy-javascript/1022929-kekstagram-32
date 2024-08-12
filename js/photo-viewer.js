const bigPictureElement = document.querySelector('.big-picture');
const commentListElement = bigPictureElement.querySelector('.social__comments');
const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');
const bodyElement = document.querySelector('body');
const cancelButtonElement = bigPictureElement.querySelector('.big-picture__cancel');
const commentElement = document.querySelector('#comment').content.querySelector('.social__comment');
const commentElementShownCount = bigPictureElement.querySelector('.social__comment-shown-count');
const commentElementTotalCount = bigPictureElement.querySelector('.social__comment-total-count');
const COMMENTS_STEP_COUNT = 5;

const createComment = ({ avatar, name, message }) => {
  const comment = commentElement.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const generateComments = (comments) => {
  commentListElement.innerHTML = '';
  const fragment = document.createDocumentFragment();
  let count = 0;
  const generateMoreComments = () => {
    const otherComments = comments.slice(count, count + COMMENTS_STEP_COUNT);
    otherComments.forEach((item) => {
      const comment = createComment(item);
      fragment.append(comment);
      count++;
    });

    commentListElement.append(fragment);
    commentElementShownCount.textContent = count;

    if (count >= comments.length) {
      commentsLoaderElement.classList.add('hidden');
    } else {
      commentsLoaderElement.classList.remove('hidden');
    }
  };
  generateMoreComments();

  commentsLoaderElement.removeEventListener('click', generateMoreComments);
  commentsLoaderElement.addEventListener('click', generateMoreComments);
  commentElementTotalCount.textContent = comments.length;
};


const hideBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
  }
}

const onCancelButtonClick = () => {
  hideBigPicture();
};


const generatePictureDetails = ({ url, likes, description }) => {
  bigPictureElement.querySelector('.big-picture__img img').src = url;
  bigPictureElement.querySelector('.big-picture__img img').alt = description;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.social__caption').textContent = description;
};

const showBigPicture = (data) => {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

  generatePictureDetails(data);
  generateComments(data.comments);
  if (data.comments.length <= COMMENTS_STEP_COUNT) {
    commentsLoaderElement.classList.add('hidden');
  } else {
    commentsLoaderElement.classList.remove('hidden');
  }
};

cancelButtonElement.addEventListener('click', onCancelButtonClick);

export{showBigPicture};
