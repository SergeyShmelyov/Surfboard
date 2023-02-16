let myMap;
const init = () => {
  myMap = new ymaps.Map("map", {
    center: [55.75, 37.62],
    zoom: 14,
    controls: [],
  });

  let coords = [
      [55.748643, 37.608018],
    ],
    myCollection = new ymaps.GeoObjectCollection({}, {
      draggable: false,
      iconLayout: 'default#image',
      iconImageHref: '../../src/img/marker.svg',
      iconImageSize: [46, 57],
      iconImageOffset: [-35, -52]
    });

    coords.forEach(coord =>{
        myCollection.add(new ymaps.Placemark(coord));
    })
  
  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable('scrollZoom');
};

ymaps.ready(init);
