<?php namespace FW\Messages;
use Exception;

    class SystemMessages {
        private $messages;

        public function __construct() {
            $this->messages = [];
        }

        public function AddMessage($id, $value) {
            $this->messages[] = [
                "id"=>$id,
                "value"=>$value
            ];
        }

        public function GetMessages() {
            return $this->messages;
        }

        public function GetMessagesJson() {
            return json_encode($this->messages);
        }
    }

?>