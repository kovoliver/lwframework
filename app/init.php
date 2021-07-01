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

    $settings = json_decode(file_get_contents("settings.json"), true);
    define("SETTINGS", $settings);
    define("IS_LOCALHOST", $_SERVER["HTTP_HOST"] == "localhost");
    define("LOCALHOSTPATH", IS_LOCALHOST ? "/{$settings["relativePath"]}" : "");
    define("ROOT_DIR", $_SERVER["DOCUMENT_ROOT"] . LOCALHOSTPATH);
    FileLoaders\Autoloader::LoadFiles();

?>
