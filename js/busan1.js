let container1 = document.getElementById('map1');
let options1 = {
    center: new kakao.maps.LatLng(35.1021681, 129.0259761),
    level: 3
};

let map1 = new kakao.maps.Map(container1, options1);

let markerPosition1 = new kakao.maps.LatLng(35.1021681, 129.0259761);
let marker1 = new kakao.maps.Marker({
    position: markerPosition1
});
marker1.setMap(map1);


let container2 = document.getElementById('map2');
let options2 = {
    center: new kakao.maps.LatLng(35.1415623, 129.0618072), //
    level: 3
};

let map2 = new kakao.maps.Map(container2, options2);

let markerPosition2 = new kakao.maps.LatLng(35.1415623, 129.0618072);
let marker2 = new kakao.maps.Marker({
    position: markerPosition2
});
marker2.setMap(map2);


let container3 = document.getElementById('map3');
let options3 = {
    center: new kakao.maps.LatLng(35.1622421, 128.9801324), //
    level: 3
};

let map3 = new kakao.maps.Map(container3, options3);

let markerPosition3 = new kakao.maps.LatLng(35.1622421, 128.9801324);
let marker3 = new kakao.maps.Marker({
    position: markerPosition3
});
marker3.setMap(map3);



