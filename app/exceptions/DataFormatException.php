<?php namespace Exceptions;
use Exception;

    class DataFormatException extends Exception {
        private $errors;

        function __construct($errors) {
            $this->errors = json_encode($errors);
        }

        public function GetJSON():string {
            return $this->errors;
        }
    }

?>