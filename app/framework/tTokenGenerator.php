<?php namespace FW\Tools;

    trait tTokenGenerator {
        use tRandom;
        public function GenerateToken():string {
            $_SESSION["token"] = $this->Rstring(32);
            return $_SESSION["token"];
        }

        public function CheckToken($token):bool {
            if(isset($_SESSION["token"]) && $token == $_SESSION["token"]) {
                return true;
            }
            return false;
        }

        public function GenerateRMToken():array {
            $selector = $this->Rstring(20);
            $validator = $this->Rstring(30);
            $cookieValue = $selector . ":" . $validator;
            setcookie("rm_token", $cookieValue, time()+86400*3, "/", "", false, true);

            return [$selector, $validator];
        }
    }

?>