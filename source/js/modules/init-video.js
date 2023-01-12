const VIDEO_URL = 'https://www.youtube.com/embed/9TZXsZItgdw';

const createIframe = () => {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', VIDEO_URL);
  iframe.classList.add('video__media');

  return iframe;
};

const initVideo = () => {
  const video = document.querySelector('[data-video]');
  let link = video.querySelector('[data-video-link]');
  let button = video.querySelector('[data-video-button]');

  video.addEventListener('click', () => {
    let iframe = createIframe();

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('video--enabled');
};

export {initVideo};
