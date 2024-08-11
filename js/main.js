import {getPicture} from './data.js';
import { generateThumbnails } from './thumbnail.js';
import {showBigPicture} from './photo-viewer.js';
const pictureClick = (pictureDate) => showBigPicture(pictureDate);
generateThumbnails(getPicture(), pictureClick);


