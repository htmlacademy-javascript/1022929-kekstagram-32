import {getRandomInteger, getRandomArrayElement, createIdGenerator} from './util.js';

const PICTURE_ID_COUNT = 25;
const DESCRIPTIONS = [
  'Выходные на даче #отдыхаемхорошо #bestday',
  'Зацените мейк #красота_спасёт_мир',
  'Лучше гор могут быть только горы! #пейзажфотограф #landscape_lover',
  'Свадебная прогулка. #свадьба #destinationwedding #weddingphotography',
  'Спорт наше все! #отрываемся #летовстиле_адидас',
  'Funny Animal Memes. #Animals #Cute ',
  'Яркие вафли Красный бархат.#оригинальныевафли #рецептвафлей #рецепт ',];
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_MIN_COUNT = 0;
const COMMENT_MAX_COUNT = 30;
const AVATAR_MIN_COUNT = 1;
const AVATAR_MAX_COUNT = 6;
const MESSAGE_MIN_COUNT = 1;
const MESSAGE_MAX_COUNT = 2;
const COMMENTS_MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!'];
const NAMES = ['Вика','Анфиса','Кларисса','Антон','Иван','Марк'];

const generateRandomId = createIdGenerator();

/*Выбираем комментарии  */
const createMessage = () => Array.from(
  {length: getRandomInteger(MESSAGE_MIN_COUNT, MESSAGE_MAX_COUNT)},
  () => getRandomArrayElement(COMMENTS_MESSAGE),
).join(' ');

/*Создаем комментарий */
const createComment = () => ({
  id: generateRandomId(),
  avatar: `img/avatar-${ getRandomInteger(AVATAR_MIN_COUNT, AVATAR_MAX_COUNT) }.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

/*Создаем объект фотографию */
const createPicture = (index) => ({
  id: index,
  url: `photos/${ index }.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from({length: getRandomInteger(COMMENT_MIN_COUNT, COMMENT_MAX_COUNT)},
    createComment
  )
});

/*Создаем массив фотографий */
const getPicture = () => Array.from(
  {length: PICTURE_ID_COUNT},
  (_, index) => createPicture(index + 1)
);

export {getPicture};
