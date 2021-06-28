<?php namespace FW\Tools;

    /**
     * kiegészítő eszközök
     */

    trait tAccentedHandler {
        public function RemoveAccented(string $variable, bool $lowercase = true):string {
            $unwanted_array = array(
                'Š'=>'S', 'š'=>'s', 'Ž'=>'Z', 'ž'=>'z', 'À'=>'A', 'Á'=>'A', 'Â'=>'A', 'Ã'=>'A', 'Ä'=>'A', 'Å'=>'A', 'Æ'=>'A', 'Ç'=>'C', 'È'=>'E', 'É'=>'E',
                'Ê'=>'E', 'Ë'=>'E', 'Ì'=>'I', 'Í'=>'I', 'Î'=>'I', 'Ï'=>'I', 'Ñ'=>'N', 'Ò'=>'O', 'Ó'=>'O', 'Ô'=>'O', 'Õ'=>'O', 'Ö'=>'O', 'Ő'=>'O', 'Ø'=>'O', 'Ù'=>'U',
                'Ú'=>'U', 'Û'=>'U', 'Ü'=>'U', 'Ý'=>'Y', 'Þ'=>'B', 'ß'=>'Ss', 'à'=>'a', 'á'=>'a', 'â'=>'a', 'ã'=>'a', 'ä'=>'a', 'å'=>'a', 'æ'=>'a', 'ç'=>'c',
                'è'=>'e', 'é'=>'e', 'ê'=>'e', 'ë'=>'e', 'ì'=>'i', 'í'=>'i', 'î'=>'i', 'ï'=>'i', 'ð'=>'o', 'ñ'=>'n', 'ò'=>'o', 'ó'=>'o', 'ô'=>'o', 'õ'=>'o',
                'ö'=>'o', 'ø'=>'o', 'ù'=>'u', 'ú'=>'u', 'û'=>'u', 'ý'=>'y', 'þ'=>'b', 'ÿ'=>'y', "ü"=>"u", "ő"=>"o", "ű"=>"u", "<"=>"&lt", ">"=>"&gt", "."=>""
            );
            $attribute_real_name = strtr($variable, $unwanted_array);
            $attribute_real_name = str_replace(" ", "_", $attribute_real_name);
            $attribute_real_name = str_replace(",", "", $attribute_real_name);
            $attribute_real_name = str_replace(")", "", $attribute_real_name);
            $attribute_real_name = str_replace("(", "", $attribute_real_name);
            $attribute_real_name = str_replace("-", "_", $attribute_real_name);
            
            if($lowercase)
                $attribute_real_name = mb_strtolower($attribute_real_name);
            return $attribute_real_name;
        }
    }

?>