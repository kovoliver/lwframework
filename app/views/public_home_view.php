<?php namespace Content\Pages;

<<<<<<< HEAD
    class public_home_view extends public_home_controller {
=======
    class public_home_view {
        public $htmlContent = "<h1>Hello World!</h1>";
        public $data;

>>>>>>> 5bce0c0d98a918e17543fad387a92fe7e4c23234
        public function GetPageContent() {
            echo $this->htmlContent;
        }

        public function SetPageContent($data) {
            $this->data = $data;
        }

        public function SetPageHTML($htmlContent) {
            $this->htmlContent = $htmlContent;
        }
    }

?>