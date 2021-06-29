<?php namespace Content\Pages;
use FW\Database\Conn;

    class public_home_controller {
        public $htmlContent = "<h1>Hello World!</h1>";
        public $data;
        private $conn;

        public function __construct() {
            $this->conn = Conn::GetConnection();
        }
    }

?>