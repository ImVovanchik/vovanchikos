const { session } = require('electron');

function removeCookies() {
  session.defaultSession.clearStorageData({ // На этой линии может быть проблема, если так и есть - создайте проблему в https://github.com/ImVovanchik/vovanchikos/issues/new (если хотите помочь мне с этим, можете сделать форк репозитория и потом сделать пулл реквест.)
    storages: ['cookies'] // TODO: Изменить на локальное хранилище
  }).then(() => {
    console.log('Cookies удалены.');
  }).catch((error) => {
    console.error('Ошибка при удалении cookies:', error);
  });
}

removeCookies();