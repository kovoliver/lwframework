<?php namespace FW\Url;

    class Curl {
        public static function SendCurlMessage(string $url, array $post = []):string {
            $curl = curl_init($url);

            //set the url, number of POST vars, POST data
            curl_setopt($curl, CURLOPT_URL, $url);

            if(!empty($post)) {
                $fieldsString = http_build_query($post);
                curl_setopt($curl, CURLOPT_POST, true);
                curl_setopt($curl, CURLOPT_POSTFIELDS, $fieldsString);
            }

            curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
            $result = curl_exec($curl);

            curl_close($curl);
            return $result;
        }
    }

?>