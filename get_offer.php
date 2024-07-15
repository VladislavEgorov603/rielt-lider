<?php
$apartments = [];
$rooms = [];
$cottages = [];
$houses = [];
$lotAreas = [];
$residentialRent = [];
$commercialRent = [];
$commercial = [];

$apartments = file_get_contents("cache_apartments");
$rooms = file_get_contents("cache_rooms");
$cottages = file_get_contents("cache_cottages");
$houses = file_get_contents("cache_houses");
$lotAreas = file_get_contents("cache_lotAreas");
$residentialRent = file_get_contents("cache_residentialRent");
$commercialRent = file_get_contents("cache_commercialRent");
$commercial = file_get_contents("cache_commercial");

switch ($_GET["category"]) {
  case 'apartments':
    echo($apartments);
    break;
  case 'rooms':
    echo($rooms);
    break;
  case 'cottages':
    echo($cottages);
    break;
  case 'houses':
    echo($houses);
    break;
  case 'lotAreas':
    echo($lotAreas);
    break;
  case 'residentialRent':
    echo($residentialRent);
    break;
  case 'commercialRent':
    echo($commercialRent);
    break;
  case 'commercial':
    echo($commercial);
    break;
}

?>