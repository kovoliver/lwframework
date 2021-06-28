<?php namespace FW\Messages;
use FW\Url\tUrl;

    class Email {
        use tUrl;

        public static function SendEmail($from, $to, $subject, $message):bool {
            $subject = '=?utf-8?B?'.base64_encode($subject).'?=';
            $headers = "MIME-Version: 1.0" . "\r\n";
            $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
            $headers .= 'From: '.$from.'' . "\r\n";

            return mail($to, $subject, $message, $headers);
        }
    }

?>