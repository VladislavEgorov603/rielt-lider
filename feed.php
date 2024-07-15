<?php

$apartments = [];
$rooms = [];
$cottages = [];
$houses = [];
$lotAreas = [];
$residentialRent = [];
$commercialRent = [];
$commercial = [];

// $url = "https://feed-p.topnlab.ru/export/main/database/?data=objects&format=yandex&v=yandex&key=W1iDGbzKlKtwjcCc&alex";
$url = "http://topnlab.ru/export/database/bGw2QUZyck1aSzlxdW8zRjRLST0,/feed.xml";

$xml = simplexml_load_file($url);

foreach ($xml->children() as $offer) {
  $category = $offer->category[0];
  $type = $offer->type[0];

  if ($type == 'аренда') {
    switch ($category) {
      case 'квартира': {
          array_push($residentialRent, $offer);
          break;
        }
      case 'комната': {
          array_push($residentialRent, $offer);
          break;
        }
      case 'коттедж': {
          array_push($residentialRent, $offer);
          break;
        }
      case 'дача': {
          array_push($residentialRent, $offer);
          break;
        }
      case 'дом с участком': {
          array_push($residentialRent, $offer);
          break;
        }
      case 'участок': {
          array_push($residentialRent, $offer);
          break;
        }
      case 'часть дома': {
          array_push($residentialRent, $offer);
          break;
        }
      case 'таунхаус': {
          array_push($residentialRent, $offer);
          break;
        }
      case 'дуплекс': {
          array_push($residentialRent, $offer);
          break;
        }
      case 'гараж': {
          array_push($residentialRent, $offer);
          break;
        }
      case 'коммерческая': {
          array_push($commercialRent, $offer);
          break;
        }
    }
    continue;
  }

  switch ($category) {
    case 'квартира': {
        array_push($apartments, $offer);
        break;
      }
    case 'дача': {
        array_push($cottages, $offer);
        break;
      }
    case 'дом': {
        array_push($houses, $offer);
        break;
      }
    case 'дом с участком': {
        array_push($houses, $offer);
        break;
      }
    case 'участок': {
        array_push($lotAreas, $offer);
        break;
      }
    case 'часть дома': {
        array_push($houses, $offer);
        break;
      }
    case 'комната': {
        array_push($rooms, $offer);
        break;
      }
    case 'таунхаус': {
        array_push($cottages, $offer);
        break;
      }
    case 'гараж': {
        array_push($lotAreas, $offer);
        break;
      }
    case 'дуплекс': {
        array_push($houses, $offer);
        break;
      }
    case 'коммерческая': {
        array_push($commercial, $offer);
        break;
      }
  }
}

file_put_contents(__DIR__ . DIRECTORY_SEPARATOR . "cache_apartments", json_encode($apartments));
file_put_contents(__DIR__ . DIRECTORY_SEPARATOR . "cache_rooms", json_encode($rooms));
file_put_contents(__DIR__ . DIRECTORY_SEPARATOR . "cache_cottages", json_encode($cottages));
file_put_contents(__DIR__ . DIRECTORY_SEPARATOR . "cache_houses", json_encode($houses));
file_put_contents(__DIR__ . DIRECTORY_SEPARATOR . "cache_lotAreas", json_encode($lotAreas));
file_put_contents(__DIR__ . DIRECTORY_SEPARATOR . "cache_residentialRent", json_encode($residentialRent));
file_put_contents(__DIR__ . DIRECTORY_SEPARATOR . "cache_commercialRent", json_encode($commercialRent));
file_put_contents(__DIR__ . DIRECTORY_SEPARATOR . "cache_commercial", json_encode($commercial));

?>