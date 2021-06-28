<?php namespace FW\Logs;
use FW\Url\tUrl;

    class ErrorLog {
        use tUrl;
        public static function Log($class, $method, $errorMsg, $fileName):void {
            $date = date("Y-m-d h:i:s");
            $message = "class: {$class} \n";
            $message .= "method: {$method} \n";
            $message .= "message: {$errorMsg} \n";
            $message .= "date: {$date} \n";
            $message .= "------------------------------------------------------------------\n";
            $filePath = self::GetBaseDir() . "app/logs/" . $fileName;
            file_put_contents($filePath, $message, FILE_APPEND);
        }
    }

?>