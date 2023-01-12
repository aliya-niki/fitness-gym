const DEFAULT_TAB_ID = 0;

const initTabs = () => {
  const controls = document.querySelectorAll('[data-tab]');
  const tabcontents = document.querySelectorAll('[data-tabcontent]');
  const tabWrapper = document.querySelector('[data-tab-wrapper]');

  if (tabWrapper) {
    tabWrapper.classList.remove('no-js');
  }

  controls[DEFAULT_TAB_ID].classList.add('is-active');
  tabcontents[DEFAULT_TAB_ID].classList.add('is-open');

  for (let element of controls) {
    element.classList.remove('no-js');

    element.addEventListener('click', function (evt) {
      const control = evt.target.closest('[data-tab]');
      const currentId = control.dataset.tabIndex;

      if (!control.classList.contains('is-active')) {
        controls.forEach((item) => item.classList.remove('is-active'));
      }
      control.classList.add('is-active');

      const tabcontentId = `[data-tabcontent-index="${currentId}"]`;
      const tabcontent = document.querySelector(tabcontentId);
      tabcontents.forEach((panel) => {
        panel.classList.remove('is-open');
      });
      tabcontent.classList.add('is-open');
    });
  }
};

export {initTabs};
