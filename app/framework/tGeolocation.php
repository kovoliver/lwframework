<?php namespace FW\Users\UserData;
use FW\NetworkData\tIP;

    trait tGeolocation {
        use tIP;
        
        public static function GetGeoData():array {
            $ip = self::GetIP();

            $url = "http://ip-api.com/json/{$ip}";
            //$url = "http://ip-api.com/json/2a01:36d:103:6148:9870:8d3d:bdaa:669a";
            $geoData = [];
            
            $urlHeaders = get_headers($url);

            if($urlHeaders[0] == 'HTTP/1.1 200 OK') {
                $geoData = json_decode(file_get_contents($url), 1);
            }

            return $geoData;
        }
    }

?>