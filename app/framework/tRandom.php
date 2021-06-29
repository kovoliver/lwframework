<?php namespace FW\Tools;

trait tRandom {
    public function Rstring(int $to = 30):string {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $characters = str_shuffle($characters);

        $str = "";
        for($i = 0; $i < $to; $i++) {
            $str .= $characters[random_int(0, strlen($characters)-1)];
        }

        return $str;
    }

    public function UniqueString(int $to = 30, array $assocArray):string {
        $str = $this->Rstring($to);

        while(isset($assocArray[$str])) {
            $str = $this->Rstring($to);
        }

        return $str;
    }
}