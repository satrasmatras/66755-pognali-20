let myMap;
ymaps.ready(init);

function init() {
  myMap = new ymaps.Map('map', {
    center: [59.938635, 30.323118], // Большая Конюшенная улица, 19/8
    zoom: 16.5
  }, {
    searchControlProvider: 'yandex#search'
  }),

    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Поехали',
      balloonContent: 'г. Санкт Петербург, Большая Конюшенная улица, 19/8'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-marker-icon.svg',
      iconImageSize: [56, 56],
      iconImageOffset: [-28, -28]
    });

  myMap.geoObjects
    .add(myPlacemark);
};


