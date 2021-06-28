<?php namespace Content\Pages;

    class public_home_view {
        public $htmlContent = "<h1>Hello World!</h1>";
        public $data;

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