<?php namespace FW\Tools;
use ErrorException;

    trait tErrorHandler {
        public function ErrorCallback($errNum, $errMsg, $errFile, $errLine) {
            throw new ErrorException($errMsg, $errNum, 0, $errFile, $errLine);
        }
    }

?>