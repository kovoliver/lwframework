<?php session_start();

    require_once "Autoloader.php";

    function pre($ary) {
        echo "<pre>";
        print_r($ary);
        echo "</pre>";
    }

    function makeLevelHyphens($level) {
        $hyphens = "";

        for($i = 0; $i < $level-1; $i++) {
            $hyphens .= "- ";
        }

        return $hyphens;
    }

    define("LOCALHOSTPATH", "/lwframework");
    define("ROOT_DIR", $_SERVER["DOCUMENT_ROOT"] . LOCALHOSTPATH);
    FileLoaders\Autoloader::LoadFiles();

?>