<?php namespace FW\Url;
use FW\Database\Conn;

trait tUrl {
        public function GetUrlVar():string {
            return isset($_GET["url"]) && !empty($_GET["url"]) ?
            rtrim($_GET["url"], "/") : "bejelentkezes";
        }

        public function GetUrlArray():array {
            $urlArray = isset($_GET["url"]) && !empty($_GET["url"]) ?
            explode("/", rtrim($_GET["url"], "/")) : [];
            return $urlArray;
        }

        public function GetBaseUrl():string {
            $host = $_SERVER["HTTP_HOST"];
            $protocol = isset($_SERVER["HTTPS"]) ? "https://" : "http://";
            $baseUrl = $protocol . $host .  LOCALHOSTPATH;
            return $baseUrl;
        }

        public static function GetBaseUrlStatic():string {
            $host = $_SERVER["HTTP_HOST"];
            $protocol = isset($_SERVER["HTTPS"]) ? "https://" : "http://";
            $baseUrl = $protocol . $host .  LOCALHOSTPATH;
            return $baseUrl;
        }

        public static function GetBaseDir():string {
            return "{$_SERVER['DOCUMENT_ROOT']}" . LOCALHOSTPATH;
        }

        private function GetSceneAndPage():array {
            $urlArray = $this->GetUrlArray();

            $scene = isset($urlArray[0]) ? $urlArray[0] : "public";
            $page = "bejelentkezes";

            if($scene == "public") 
                $page = !empty($urlArray) ? $urlArray[0] : "home";
            else if($scene == "felhasznalo" || $scene == "admin")
                $page = isset($urlArray[1]) ? $urlArray[1] : "profil";

            return [$scene, $page];
        }
    }

?>