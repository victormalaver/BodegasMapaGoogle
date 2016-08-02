'use strict';

app.home = kendo.observable({
    onShow: function () {
        // var bodegas = [{"id":2,"nombre":"La Bodega de la Trattoría","domicilio":"Av. Pardo y Aliaga 656,San Isidro ","numero":"15073","distrito":"CHACHAPOYAS","telefonoFijo":"4236542","telefonoMovil":"954645546","latitud":"-12.106188","longitud":"-77.038780","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":576.9903549055874},{"id":36,"nombre":"Bodega R&R Wong","domicilio":"Calle Coronel Inclan N° 932","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.110287","longitud":"-77.031329","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":753.0340937113531},{"id":32,"nombre":"Bodega Nora","domicilio":"Calle Maria Parado de Bellido N° 191","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.110654","longitud":"-77.031234","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":794.7295852931716},{"id":12,"nombre":"Bodega Avalos","domicilio":"Av. Petit Thouars N° 4736","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.109937","longitud":"-77.029448","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":820.3934830289564},{"id":49,"nombre":"Rosicar","domicilio":"Jr. Domingo Orue N° 394","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.109179","longitud":"-77.028558","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":820.6750186251866},{"id":40,"nombre":"Bodega Silva","domicilio":"Calle Arica N° 406","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.112012","longitud":"-77.035748","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":909.5754652666693},{"id":28,"nombre":"Bodega Mikaella","domicilio":"Calle Julio Becerra N° 165","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.113181","longitud":"-77.038539","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1133.7490165795828},{"id":44,"nombre":"Comercial Silva","domicilio":"Calle Arica N° 510-520","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.114667","longitud":"-77.03578","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1200.178953174012},{"id":33,"nombre":"Bodega Ok Karlita","domicilio":"Av. Angamos Este N° 431","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.113534","longitud":"-77.026986","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1301.2496691711415},{"id":48,"nombre":"Bodega Segundo Simeon Marlo Nuñez","domicilio":"Calle Gral. Vidal N° 217","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.11443","longitud":"-77.028417","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1304.725904601079},{"id":46,"nombre":"Bodega Tantalean Nuñez Narnil ","domicilio":"Calle Piura N° 528","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.11582","longitud":"-77.033883","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1311.9397722355275},{"id":58,"nombre":"Bodega Ojeda","domicilio":"Calle Piura N 696","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.115885","longitud":"-77.035673","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1332.2590789663184},{"id":10,"nombre":"Bodega Apaxun","domicilio":"Calle Enrique Palacios N° 400","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.116941","longitud":"-77.032578","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1444.3664637554905},{"id":24,"nombre":"Bodega Kyarita","domicilio":"Calle Enrique Palacios N° 756","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.116843","longitud":"-77.036382","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1449.8205468259862},{"id":59,"nombre":"Bodega Kyarita","domicilio":"Calle Enrique Palacios N° 756","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.116864","longitud":"-77.036376","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1451.9984217275014},{"id":21,"nombre":"Bodega El Peruanito","domicilio":"Calle Coronel Inclan N° 301","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.116834","longitud":"-77.031366","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1452.253266620102},{"id":1,"nombre":"Arakaki Minimarket","domicilio":"Av Belén 265,San Isidro ","numero":"15076","distrito":"CHACHAPOYAS","telefonoFijo":"4216882","telefonoMovil":"954645546","latitud":"-12.105620","longitud":"-77.047332","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1464.8573673295482},{"id":11,"nombre":"Bodega Arakaki","domicilio":"Calle Enrique Palacios N° 1020","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.117115","longitud":"-77.039163","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1562.0206519760904},{"id":56,"nombre":"Bodega Silva Soto Adelmo ","domicilio":"Av. Mariscal la mar N° 432","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.11579","longitud":"-77.043091","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1642.6530466534007},{"id":61,"nombre":"Bodega Yarita","domicilio":"Av. La Mar N° 669","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.114292","longitud":"-77.044871","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1646.7793230925392},{"id":29,"nombre":"Bodega Mil","domicilio":"Calle General Suarez N° 1000","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.117379","longitud":"-77.026886","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1672.4326604698672},{"id":19,"nombre":"Bodega El Gordo","domicilio":"Calle Ignacio Merino N° 458","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.113575","longitud":"-77.045882","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1676.0200950160583},{"id":17,"nombre":"Bodega Clarita","domicilio":"Av. La Mar N° 1043","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.111485","longitud":"-77.047498","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1689.8840734138814},{"id":57,"nombre":"Bodega Gaby","domicilio":"Av. Mariscal la mar N° 1172","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.110501","longitud":"-77.048349","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1722.5064545542577},{"id":9,"nombre":"Bodega Akon","domicilio":"Calle Mendiburu N° 713","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.11379","longitud":"-77.04641","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1735.6631090543024},{"id":25,"nombre":"Bodega La Casa de la Milanesa","domicilio":"Calle Dos de Mayo N° 1324","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.117845","longitud":"-77.041635","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1749.0659109445348},{"id":45,"nombre":"Bodega Berlín","domicilio":"Calle Berlin N° 581","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.120286","longitud":"-77.035626","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1817.5601403266164},{"id":22,"nombre":"Bodega Hugos","domicilio":"Calle Manuel Tovar N° 224","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.116573","longitud":"-77.044727","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1821.6961392038895},{"id":31,"nombre":"Bodega Nakamoto","domicilio":"Calle Ramón Zavala N° 198","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.120398","longitud":"-77.039005","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1901.8210864367736},{"id":23,"nombre":"Bodega Jenny","domicilio":"Calle Berlín N° 999","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.120198","longitud":"-77.040053","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1916.8845520371635},{"id":43,"nombre":"Bodega Alfredo","domicilio":"Calle Roman Zavala N° 288","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.121008","longitud":"-77.039002","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1966.7684615276205},{"id":47,"nombre":"Bodega Ciriaco Flores Flor","domicilio":"Calle Cantuarias N°140 INT. 123","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.12138","longitud":"-77.028697","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2013.0743638279957},{"id":26,"nombre":"Bodega La Casa de la Milanesa","domicilio":"Calle José Galvez N° 222","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.122267","longitud":"-77.032488","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2035.0350324870105},{"id":15,"nombre":"Bodega Broncanos","domicilio":"Calle Cantuarias N° 319","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.121396","longitud":"-77.0266","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2090.9490321013573},{"id":3,"nombre":"Bodega Cam","domicilio":"Jorge Chávez 500,Miraflores","numero":"15074","distrito":"CHACHAPOYAS","telefonoFijo":"4236542","telefonoMovil":"954645546","latitud":"-12.123374","longitud":"-77.037025","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2177.526096922836},{"id":5,"nombre":"La Bodega Ibérica","domicilio":"San Isidro 15076","numero":"974","distrito":"CHACHAPOYAS","telefonoFijo":"4236542","telefonoMovil":"954645546","latitud":"-12.11928 ","longitud":"-77.02117","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2193.4463625231206},{"id":13,"nombre":"Bodega Ayala","domicilio":"Calle Jorge Chavez N° 541","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.123926","longitud":"-77.036883","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2235.9505597759407},{"id":18,"nombre":"Bodega Don Alfredo","domicilio":"Av. Benavides N° 250 int. 102","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.12433","longitud":"-77.03093","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2281.9993619379393},{"id":50,"nombre":"BodegaFotocopiadora AJA","domicilio":"Av. Alfredo Benavides N° 257","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.124341","longitud":"-77.030833","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2284.753662163012},{"id":14,"nombre":"Bodega Betty","domicilio":"Calle Alcanfores N° 531","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.124173","longitud":"-77.027901","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2335.420413778912},{"id":55,"nombre":"Bodega Minimarket","domicilio":"Calle Schell N° 633","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.123525","longitud":"-77.025548","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2353.46344836178},{"id":4,"nombre":"Bodegas y Viñedos Tabernero","domicilio":"Av. Alfredo Benavides","numero":"974","distrito":"CHACHAPOYAS","telefonoFijo":"4236542","telefonoMovil":"954645546","latitud":"-12.124929","longitud":"-77.028291","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2404.9778174167222},{"id":38,"nombre":"Bodega San Martin","domicilio":"Calle San Martín N° 471","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.12582","longitud":"-77.029878","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2464.05259810926},{"id":41,"nombre":"Bodega Virgen de la Asunción","domicilio":"Av. Tomas Marsano N° 1414","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.111771","longitud":"-77.012674","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2469.1160983364084},{"id":54,"nombre":"Bodega Perez Echaccaya Luis Francisco","domicilio":"Av. Monseñor Roca y Boloña N° 113","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.121455","longitud":"-77.019285","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2510.3908088603152},{"id":37,"nombre":"Bodega Rodrigo","domicilio":"Av. Roca y Boloña N° 430","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.120646","longitud":"-77.017876","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2544.3194610482274},{"id":53,"nombre":"Nelly Wong y Wong","domicilio":"Jr. Manco Capac N° 371","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.127012","longitud":"-77.031378","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2571.684611222654},{"id":42,"nombre":"Bodega Osorio","domicilio":"Calle Bartolome Trujillo N°201","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.124088","longitud":"-77.021518","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2609.070298070716},{"id":51,"nombre":"Bodega Bolivar","domicilio":"Calle Bolívar N° 485","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.126183","longitud":"-77.024882","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2654.3545126764834},{"id":30,"nombre":"Bodega Multitienda Carmen","domicilio":"Calle Manco Capac N° 483","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.127667","longitud":"-77.029808","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2667.5980905882443},{"id":34,"nombre":"Bodega Osorio","domicilio":"Av. Ricardo Palma N° 1224","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.123436","longitud":"-77.017608","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2796.3149124440088},{"id":60,"nombre":"Bodega Osorio","domicilio":"Av. Ricardo Palma N° 1306","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.123455","longitud":"-77.017245","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2823.179969224135},{"id":16,"nombre":"Bodega Carmelitas","domicilio":"Calle Jose Chariarse N° 320","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.128042","longitud":"-77.020914","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":3023.955582823224},{"id":52,"nombre":"Ju Sit Koin","domicilio":"Calle Jose Gabriel Chariarse N° 398","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.128052","longitud":"-77.020918","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":3024.733862322111},{"id":35,"nombre":"Bodega Padilla","domicilio":"Calle Aristides Aljovin N°314","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.131605","longitud":"-77.027687","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":3141.886162875391},{"id":6,"nombre":"El Buen Vecino","domicilio":"Av 6 de Agosto 807,Jesús María","numero":"15072","distrito":"CHACHAPOYAS","telefonoFijo":"4236542","telefonoMovil":"954645546","latitud":"-12.074117","longitud":"-77.043592","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":3486.1178097099028},{"id":27,"nombre":"Bodega La Victoria","domicilio":"Calle La Merced N° 111","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.128493","longitud":"-77.009538","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":3801.5116557653505},{"id":20,"nombre":"Bodega El Paisa","domicilio":"Av. Benavides N° 2695","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.127828","longitud":"-77.006398","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":3997.941289923215},{"id":7,"nombre":"Bodega Santa Cruz","domicilio":"Av Gral Sta Cruz 101,Jesús María","numero":"15072","distrito":"CHACHAPOYAS","telefonoFijo":"4236542","telefonoMovil":"954645546","latitud":"-12.070287","longitud":"-77.049336","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":4106.667505594067},{"id":8,"nombre":"Bodegas Nico","domicilio":"1551,Av. Gral. Varela,Breña","numero":"1551","distrito":"CHACHAPOYAS","telefonoFijo":"4236542","telefonoMovil":"954645546","latitud":"-12.060500","longitud":"-77.046900","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":5039.541583256712},{"id":39,"nombre":"Bodega Sanae","domicilio":"Calle Francisco Retes N° 195","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.054953","longitud":"-77.109936","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":9899.987353028886}];
        // console.log(bodegas.length);

        // for (var i = 0; i < bodegas.length; i++) {
        // 	console.log(bodegas[i].id);
        // }


        // var baseJitter = 2.5;
        // var clusterJitterMax = 0.1;
        // var rnd = Math.random;
        // var data = [];
        // var clusterSizes = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9, 12, 18, 24];
        // for (var i = 0; i < clusterSizes.length; i++) {
        //     var baseLon = -1 - baseJitter / 2 + rnd() * baseJitter;
        //     var baseLat = 52 - baseJitter / 2 + rnd() * baseJitter;
        //     var clusterJitter = clusterJitterMax * rnd();
        //     for (var j = 0; j < clusterSizes[i]; j++) data.push({
        //         lon: baseLon - clusterJitter + rnd() * clusterJitter,
        //         lat: baseLat - clusterJitter + rnd() * clusterJitter,
        //         h: new Date(1E12 + rnd() * 1E11).toString(),
        //         d: Math.round(rnd() * 100) + '% happy'
        //     });
        // }
        // window.mapData = data;

        setMarkers();
    },
    afterShow: function () {}
});

// START_CUSTOM_CODE_home
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_home

function setMarkers() {
    // var gm = google.maps;
    //  var map = new gm.Map(document.getElementById('map_canvas'), {
    //    mapTypeId: gm.MapTypeId.SATELLITE,
    //    center: new gm.LatLng(50, 0), zoom: 6,  // whatevs: fitBounds will override
    //    scrollwheel: false
    //  });

    var gm = google.maps;
    var map = new gm.Map(document.getElementById('map_canvas'), {
        center: {
            lat: -12.106388,
            lng: -77.035458
        },
        zoom: 18,
        disableDefaultUI: true
    });

    var iw = new gm.InfoWindow();

    var bodegas = [{"id":2,"nombre":"La Bodega de la Trattoría","domicilio":"Av. Pardo y Aliaga 656,San Isidro ","numero":"15073","distrito":"CHACHAPOYAS","telefonoFijo":"4236542","telefonoMovil":"954645546","latitud":"-12.106188","longitud":"-77.038780","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":576.9903549055874},{"id":36,"nombre":"Bodega R&R Wong","domicilio":"Calle Coronel Inclan N° 932","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.110287","longitud":"-77.031329","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":753.0340937113531},{"id":32,"nombre":"Bodega Nora","domicilio":"Calle Maria Parado de Bellido N° 191","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.110654","longitud":"-77.031234","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":794.7295852931716},{"id":12,"nombre":"Bodega Avalos","domicilio":"Av. Petit Thouars N° 4736","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.109937","longitud":"-77.029448","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":820.3934830289564},{"id":49,"nombre":"Rosicar","domicilio":"Jr. Domingo Orue N° 394","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.109179","longitud":"-77.028558","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":820.6750186251866},{"id":40,"nombre":"Bodega Silva","domicilio":"Calle Arica N° 406","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.112012","longitud":"-77.035748","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":909.5754652666693},{"id":28,"nombre":"Bodega Mikaella","domicilio":"Calle Julio Becerra N° 165","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.113181","longitud":"-77.038539","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1133.7490165795828},{"id":44,"nombre":"Comercial Silva","domicilio":"Calle Arica N° 510-520","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.114667","longitud":"-77.03578","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1200.178953174012},{"id":33,"nombre":"Bodega Ok Karlita","domicilio":"Av. Angamos Este N° 431","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.113534","longitud":"-77.026986","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1301.2496691711415},{"id":48,"nombre":"Bodega Segundo Simeon Marlo Nuñez","domicilio":"Calle Gral. Vidal N° 217","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.11443","longitud":"-77.028417","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1304.725904601079},{"id":46,"nombre":"Bodega Tantalean Nuñez Narnil ","domicilio":"Calle Piura N° 528","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.11582","longitud":"-77.033883","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1311.9397722355275},{"id":58,"nombre":"Bodega Ojeda","domicilio":"Calle Piura N 696","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.115885","longitud":"-77.035673","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1332.2590789663184},{"id":10,"nombre":"Bodega Apaxun","domicilio":"Calle Enrique Palacios N° 400","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.116941","longitud":"-77.032578","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1444.3664637554905},{"id":24,"nombre":"Bodega Kyarita","domicilio":"Calle Enrique Palacios N° 756","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.116843","longitud":"-77.036382","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1449.8205468259862},{"id":59,"nombre":"Bodega Kyarita","domicilio":"Calle Enrique Palacios N° 756","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.116864","longitud":"-77.036376","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1451.9984217275014},{"id":21,"nombre":"Bodega El Peruanito","domicilio":"Calle Coronel Inclan N° 301","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.116834","longitud":"-77.031366","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1452.253266620102},{"id":1,"nombre":"Arakaki Minimarket","domicilio":"Av Belén 265,San Isidro ","numero":"15076","distrito":"CHACHAPOYAS","telefonoFijo":"4216882","telefonoMovil":"954645546","latitud":"-12.105620","longitud":"-77.047332","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1464.8573673295482},{"id":11,"nombre":"Bodega Arakaki","domicilio":"Calle Enrique Palacios N° 1020","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.117115","longitud":"-77.039163","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1562.0206519760904},{"id":56,"nombre":"Bodega Silva Soto Adelmo ","domicilio":"Av. Mariscal la mar N° 432","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.11579","longitud":"-77.043091","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1642.6530466534007},{"id":61,"nombre":"Bodega Yarita","domicilio":"Av. La Mar N° 669","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.114292","longitud":"-77.044871","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1646.7793230925392},{"id":29,"nombre":"Bodega Mil","domicilio":"Calle General Suarez N° 1000","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.117379","longitud":"-77.026886","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1672.4326604698672},{"id":19,"nombre":"Bodega El Gordo","domicilio":"Calle Ignacio Merino N° 458","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.113575","longitud":"-77.045882","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1676.0200950160583},{"id":17,"nombre":"Bodega Clarita","domicilio":"Av. La Mar N° 1043","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.111485","longitud":"-77.047498","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1689.8840734138814},{"id":57,"nombre":"Bodega Gaby","domicilio":"Av. Mariscal la mar N° 1172","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.110501","longitud":"-77.048349","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1722.5064545542577},{"id":9,"nombre":"Bodega Akon","domicilio":"Calle Mendiburu N° 713","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.11379","longitud":"-77.04641","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1735.6631090543024},{"id":25,"nombre":"Bodega La Casa de la Milanesa","domicilio":"Calle Dos de Mayo N° 1324","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.117845","longitud":"-77.041635","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1749.0659109445348},{"id":45,"nombre":"Bodega Berlín","domicilio":"Calle Berlin N° 581","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.120286","longitud":"-77.035626","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1817.5601403266164},{"id":22,"nombre":"Bodega Hugos","domicilio":"Calle Manuel Tovar N° 224","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.116573","longitud":"-77.044727","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1821.6961392038895},{"id":31,"nombre":"Bodega Nakamoto","domicilio":"Calle Ramón Zavala N° 198","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.120398","longitud":"-77.039005","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1901.8210864367736},{"id":23,"nombre":"Bodega Jenny","domicilio":"Calle Berlín N° 999","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.120198","longitud":"-77.040053","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1916.8845520371635},{"id":43,"nombre":"Bodega Alfredo","domicilio":"Calle Roman Zavala N° 288","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.121008","longitud":"-77.039002","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":1966.7684615276205},{"id":47,"nombre":"Bodega Ciriaco Flores Flor","domicilio":"Calle Cantuarias N°140 INT. 123","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.12138","longitud":"-77.028697","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2013.0743638279957},{"id":26,"nombre":"Bodega La Casa de la Milanesa","domicilio":"Calle José Galvez N° 222","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.122267","longitud":"-77.032488","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2035.0350324870105},{"id":15,"nombre":"Bodega Broncanos","domicilio":"Calle Cantuarias N° 319","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.121396","longitud":"-77.0266","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2090.9490321013573},{"id":3,"nombre":"Bodega Cam","domicilio":"Jorge Chávez 500,Miraflores","numero":"15074","distrito":"CHACHAPOYAS","telefonoFijo":"4236542","telefonoMovil":"954645546","latitud":"-12.123374","longitud":"-77.037025","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2177.526096922836},{"id":5,"nombre":"La Bodega Ibérica","domicilio":"San Isidro 15076","numero":"974","distrito":"CHACHAPOYAS","telefonoFijo":"4236542","telefonoMovil":"954645546","latitud":"-12.11928 ","longitud":"-77.02117","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2193.4463625231206},{"id":13,"nombre":"Bodega Ayala","domicilio":"Calle Jorge Chavez N° 541","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.123926","longitud":"-77.036883","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2235.9505597759407},{"id":18,"nombre":"Bodega Don Alfredo","domicilio":"Av. Benavides N° 250 int. 102","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.12433","longitud":"-77.03093","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2281.9993619379393},{"id":50,"nombre":"BodegaFotocopiadora AJA","domicilio":"Av. Alfredo Benavides N° 257","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.124341","longitud":"-77.030833","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2284.753662163012},{"id":14,"nombre":"Bodega Betty","domicilio":"Calle Alcanfores N° 531","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.124173","longitud":"-77.027901","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2335.420413778912},{"id":55,"nombre":"Bodega Minimarket","domicilio":"Calle Schell N° 633","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.123525","longitud":"-77.025548","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2353.46344836178},{"id":4,"nombre":"Bodegas y Viñedos Tabernero","domicilio":"Av. Alfredo Benavides","numero":"974","distrito":"CHACHAPOYAS","telefonoFijo":"4236542","telefonoMovil":"954645546","latitud":"-12.124929","longitud":"-77.028291","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2404.9778174167222},{"id":38,"nombre":"Bodega San Martin","domicilio":"Calle San Martín N° 471","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.12582","longitud":"-77.029878","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2464.05259810926},{"id":41,"nombre":"Bodega Virgen de la Asunción","domicilio":"Av. Tomas Marsano N° 1414","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.111771","longitud":"-77.012674","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2469.1160983364084},{"id":54,"nombre":"Bodega Perez Echaccaya Luis Francisco","domicilio":"Av. Monseñor Roca y Boloña N° 113","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.121455","longitud":"-77.019285","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2510.3908088603152},{"id":37,"nombre":"Bodega Rodrigo","domicilio":"Av. Roca y Boloña N° 430","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.120646","longitud":"-77.017876","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2544.3194610482274},{"id":53,"nombre":"Nelly Wong y Wong","domicilio":"Jr. Manco Capac N° 371","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.127012","longitud":"-77.031378","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2571.684611222654},{"id":42,"nombre":"Bodega Osorio","domicilio":"Calle Bartolome Trujillo N°201","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.124088","longitud":"-77.021518","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2609.070298070716},{"id":51,"nombre":"Bodega Bolivar","domicilio":"Calle Bolívar N° 485","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.126183","longitud":"-77.024882","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2654.3545126764834},{"id":30,"nombre":"Bodega Multitienda Carmen","domicilio":"Calle Manco Capac N° 483","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.127667","longitud":"-77.029808","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2667.5980905882443},{"id":34,"nombre":"Bodega Osorio","domicilio":"Av. Ricardo Palma N° 1224","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.123436","longitud":"-77.017608","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2796.3149124440088},{"id":60,"nombre":"Bodega Osorio","domicilio":"Av. Ricardo Palma N° 1306","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.123455","longitud":"-77.017245","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":2823.179969224135},{"id":16,"nombre":"Bodega Carmelitas","domicilio":"Calle Jose Chariarse N° 320","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.128042","longitud":"-77.020914","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":3023.955582823224},{"id":52,"nombre":"Ju Sit Koin","domicilio":"Calle Jose Gabriel Chariarse N° 398","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.128052","longitud":"-77.020918","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":3024.733862322111},{"id":35,"nombre":"Bodega Padilla","domicilio":"Calle Aristides Aljovin N°314","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.131605","longitud":"-77.027687","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":3141.886162875391},{"id":6,"nombre":"El Buen Vecino","domicilio":"Av 6 de Agosto 807,Jesús María","numero":"15072","distrito":"CHACHAPOYAS","telefonoFijo":"4236542","telefonoMovil":"954645546","latitud":"-12.074117","longitud":"-77.043592","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":3486.1178097099028},{"id":27,"nombre":"Bodega La Victoria","domicilio":"Calle La Merced N° 111","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.128493","longitud":"-77.009538","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":3801.5116557653505},{"id":20,"nombre":"Bodega El Paisa","domicilio":"Av. Benavides N° 2695","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.127828","longitud":"-77.006398","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":3997.941289923215},{"id":7,"nombre":"Bodega Santa Cruz","domicilio":"Av Gral Sta Cruz 101,Jesús María","numero":"15072","distrito":"CHACHAPOYAS","telefonoFijo":"4236542","telefonoMovil":"954645546","latitud":"-12.070287","longitud":"-77.049336","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":4106.667505594067},{"id":8,"nombre":"Bodegas Nico","domicilio":"1551,Av. Gral. Varela,Breña","numero":"1551","distrito":"CHACHAPOYAS","telefonoFijo":"4236542","telefonoMovil":"954645546","latitud":"-12.060500","longitud":"-77.046900","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":5039.541583256712},{"id":39,"nombre":"Bodega Sanae","domicilio":"Calle Francisco Retes N° 195","numero":"","distrito":"MIRAFLORES","telefonoFijo":"-","telefonoMovil":"-","latitud":"-12.054953","longitud":"-77.109936","estado":1,"imagen":null,"horarioAtencion":"8:00 AM - 9:00 PM","distancia":9899.987353028886}];
    // Adds markers to the map.

    // Marker sizes are expressed as a Size of X,Y where the origin of the image
    // (0,0) is located in the top left of the image.

    // Origins, anchor positions and coordinates of the marker increase in the X
    // direction to the right and in the Y direction down.

    // var image = {
    //   url: 'images/beachflag.png',
    //   // This marker is 20 pixels wide by 32 pixels high.
    //   size: new google.maps.Size(20, 32),
    //   // The origin for this image is (0, 0).
    //   origin: new google.maps.Point(0, 0),
    //   // The anchor for this image is the base of the flagpole at (0, 32).
    //   anchor: new google.maps.Point(0, 32)
    // };

    // Shapes define the clickable region of the icon. The type defines an HTML
    // <area> element 'poly' which traces out a polygon as a series of X,Y points.
    // The final coordinate closes the poly by connecting to the first coordinate.


    //     var infowindow = new google.maps.InfoWindow();
    //     for (var i = 0; i < bodegas.length; i++) {
    //         var marker = new google.maps.Marker({
    //             position: {
    //                 lat: parseFloat(bodegas[i].latitud),
    //                 lng: parseFloat(bodegas[i].longitud)
    //             },
    //             map: map,
    //             // icon: image,
    //             // shape: shape,
    //             title: bodegas[i].nombre,
    //             zIndex: i
    //         });

    // 		var contentString = '<div id="content">' +
    //             '<div id="siteNotice">' +
    //             '</div>' +
    //             '<h1 id="firstHeading" class="firstHeading">'+bodegas[i].nombre+'</h1>' +
    //             '<div id="bodyContent">' +
    //             '<p><b>Dirección: </b>'+bodegas[i].domicilio+'</p>' +
    //             '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    //             'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
    //             '(last visited June 22, 2009).</p>' +
    //             '</div>' +
    //             '</div>';

    // 		makeInfoWindowEvent(map, infowindow, contentString, marker);
    //     }

    var oms = new OverlappingMarkerSpiderfier(map, {
        markersWontMove: true,
        markersWontHide: true
    });
    var usualColor = 'eebb22';
    var spiderfiedColor = 'ffee22';

    var image = {
        url: 'Mapa/images/iconbodega.png',
        shadowUrl: 'Mapa/images/marker-shadow.png',
        // This marker is 20 pixels wide by 32 pixels high.
        // size: new google.maps.Size(40, 60),
        // // The origin for this image is (0, 0).
        // origin: new google.maps.Point(0, 0),
        // // The anchor for this image is the base of the flagpole at (0, 32).
        // anchor: new google.maps.Point(0, 32)
    };
    var iconWithColor = function (color) {
        return 'Mapa/images/iconbodega.png';
    }
    var shadow = new gm.MarkerImage(
        'https://www.google.com/intl/en_ALL/mapfiles/shadow50.png',
        new gm.Size(37, 34), // size   - for sprite clipping
        new gm.Point(0, 0), // origin - ditto
        new gm.Point(10, 34) // anchor - where to meet map location
    );

    oms.addListener('click', function (marker) {
        // map.setCenter(marker.getPosition());
        // map.setZoom(18);
        iw.setContent(marker.desc);
        iw.open(map, marker);
    });
    oms.addListener('spiderfy', function (markers) {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setIcon(image);
            markers[i].setShadow(null);
        }
        // iw.close();
    });
    oms.addListener('unspiderfy', function (markers) {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setIcon(image);
            markers[i].setShadow(shadow);
        }
    });

    var bounds = new gm.LatLngBounds();
    // for (var i = 0; i < window.mapData.length; i++) {
    //     var datum = window.mapData[i];
    //     var loc = new gm.LatLng(datum.lat, datum.lon);
    //     bounds.extend(loc);
    //     var marker = new gm.Marker({
    //         position: loc,
    //         title: datum.h,
    //         map: map,
    //         icon: iconWithColor(usualColor),
    //         shadow: shadow
    //     });
    //     marker.desc = datum.d;
    //     oms.addMarker(marker);
    // }

    for (var i = 0; i < bodegas.length; i++) {
        var loc = new gm.LatLng(parseFloat(bodegas[i].latitud), parseFloat(bodegas[i].longitud));
        bounds.extend(loc);
        var marker = new google.maps.Marker({
            position: loc,
            map: map,
            icon: image,
            shadowUrl: 'Mapa/images/marker-shadow.png',
            // shape: shape,
            title: bodegas[i].nombre,
            zIndex: i
        });

        var contentString = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading">' + bodegas[i].nombre + '</h1>' +
            '<div id="bodyContent">' +
            '<p><b>Dirección: </b>' + bodegas[i].domicilio + '</p>' +
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
            '(last visited June 22, 2009).</p>' +
            '</div>' +
            '</div>';
        marker.desc = contentString;
        oms.addMarker(marker);

    }
    map.fitBounds(bounds);
    // for debugging/exploratory use in console
    window.map = map;
    window.oms = oms;
    // var geoloccontrol = new klokantech.GeolocationControl(map, 18);
}
// function makeInfoWindowEvent(map, infowindow, contentString, marker) {
//     google.maps.event.addListener(marker, 'click', function() {
//     infowindow.setContent(contentString);
//     infowindow.open(map, marker);
//   });
// }

function getStateGPS() {
    // cordova.plugins.diagnostic.isLocationAvailable(function(available){
    //     console.log("Location is " + (available ? "available" : "not available"));
    // }, function(error){
    //     console.error("The following error occurred: "+error);
    // });




    // onSuccess Callback
    //   This method accepts a `Position` object, which contains
    //   the current GPS coordinates
    //
    var x = 1;

    function onSuccess(position) {
        alert(position.coords.latitude + " - " + position.coords.longitude);
        if (x == 1) {
            navigator.geolocation.clearWatch(watchID);
            x = 0;
        }
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        
        $("#contentAlertHome").html("Encienda su GPS");
        openModal('modalview-alert-home');
        
        // switch (error.code) {
        //     case 3:
        //         break;
        //     default:
        //         alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
        //         break;
        // }
    }

    // Options: throw an error if no update is received every 30 seconds.
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, {
        timeout: 3000
    });

}


function goToConfiguration(){
     if(typeof cordova.plugins.settings.openSetting != undefined){
        cordova.plugins.settings.open(function(){
                console.log("opened settings")
            },
            function(){
                console.log("failed to open settings")
            });
    }
}