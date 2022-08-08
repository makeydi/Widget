function renderMap(x,y){
    const mapBox = document.getElementById('map');
    mapBox.innerHTML = '';
    ymaps.ready(init);
        function init(){
            let myMap = new ymaps.Map("map", {
            center: [x, y],
            zoom: 11,
            });
        }
}

export default renderMap;
