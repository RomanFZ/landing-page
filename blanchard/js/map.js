ymaps.ready(init);
        function init(){
            var myMap = new ymaps.Map("map", {
                center: [55.762025, 37.634727],
                zoom: 14.2,
                controls: []
            });

            myMap.controls.add('zoomControl', {
                size: 'smal',
                float: 'none',
                position: {
                    bottom: '370px',
                    right: '1.3%'
                }
            });

            myMap.controls.add('geolocationControl', {
                float: 'none',
                position: {
                    bottom: '315px',
                    right: '1.3%'
                }
            });

            var myPlacemark1 = new ymaps.Placemark([55.758463, 37.601079], {}, {
                iconLayout: 'default#image',
                iconImageClipRect: [[0,0], [20, 20]],
                iconImageHref: '/img/Метка-карта.svg',
                iconImageSize: [22, 22],
                iconImageOffset: [0, 0]
            });

            myMap.geoObjects.add(myPlacemark1);

        };