document.getElementById("submit-button").addEventListener("click", function () {
    const latitude = document.getElementById("latitude").value;
    const longitude = document.getElementById("longitude").value;

    if (!latitude || !longitude) {
        alert("情報が不足しています");
        return;
    }

    mapboxgl.accessToken = "ここにmapbox-gl-jsのアクセストークンを入れる";
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [longitude, latitude],
        zoom: 15,
    });

    // ピンを作成して地図に追加
    new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);

    const language = new MapboxLanguage();
    map.addControl(language);
});
