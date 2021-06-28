<?php namespace Exceptions;
use Exception;

    class FileException extends Exception {
        private $errors;

        function __construct($errors) {
            $this->errors = json_encode($errors);
        }

        public function GetJSON() {
            return $this->errors;
        }
    }

?>