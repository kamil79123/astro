function oblicz() {
   let apertura = $('#apertura').val();
   let ogniskowa_teleskopu = $('#ogniskowa_teleskopu').val();
   let ogniskowa_okularu = $('#ogniskowa_okularu').val();
   let pole_widzenia_okularu = $('#pole_widzenia_okularu').val();
   let powiekszenie = ogniskowa_teleskopu / ogniskowa_okularu;
   $('#powiekszenie').html(powiekszenie.toFixed(2));
   let zrenica_wyjsciowa = apertura / powiekszenie;
   $('#zrenica_wyjsciowa').html(zrenica_wyjsciowa.toFixed(2)+' mm');
   let powiekszenie_minimalne = apertura / 6;
   $('#powiekszenie_minimalne').html(powiekszenie_minimalne.toFixed(2));
   let powiekszenie_maksymalne = apertura * 2;
   $('#powiekszenie_maksymalne').html(powiekszenie_maksymalne.toFixed(2));
   let pole_widzenia = pole_widzenia_okularu / powiekszenie;
   $('#pole_widzenia').html(pole_widzenia);
}