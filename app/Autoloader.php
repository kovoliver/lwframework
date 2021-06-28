<?php namespace FileLoaders;


    class Autoloader {
        public static $filePathsArray;
        public static $loaderPath = ROOT_DIR . "/file_loader.json";

        private static function GetFileDir($className) {
            $fileDir = "";

            if(in_array($className, self::$filePathsArray["classes"]["controllers"]))
                $fileDir = "controllers";
            else if(in_array($className, self::$filePathsArray["classes"]["models"]))
                $fileDir = "models";
            else if(in_array($className, self::$filePathsArray["classes"]["exceptions"]))
                    $fileDir = "exceptions";
            else if(in_array($className, self::$filePathsArray["classes"]["framework"]))
                $fileDir = "framework";
            else if(in_array($className, self::$filePathsArray["classes"]["views"]))
                $fileDir = "views";
            return $fileDir;
        }

        public static function LoadFiles() {
            if(file_exists(self::$loaderPath) && is_readable(self::$loaderPath))
                self::$filePathsArray = json_decode(file_get_contents(ROOT_DIR . "/file_loader.json"), true);
            else 
                throw new \Exception("Cannot open file file_loader.json!");

            spl_autoload_register(function($className) {
                $className = str_replace("\\", "/", $className);
                $classArray = explode("/", $className);
                $className = $classArray[count($classArray)-1];
                $fileDir = self::GetFileDir($className);
                $fileName = $_SERVER['DOCUMENT_ROOT'] . LOCALHOSTPATH . '/app/'.lcfirst($fileDir).'/' . $className . '.php';
                require_once $fileName;
            });
        }
    }

?>