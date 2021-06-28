<?php namespace FW\Files;
use Exceptions\DataFormatException;
use Exceptions\FileException;
use FW\Database\Conn as Conn;
use FW\Tools\tRandom as tRandom;
use FW\Url\tUrl;
use PDO;

    class FileHandler {
        use tRandom;
        use tUrl;

        private $filesArray;
        public $localhostPath;
        protected $userPath;
        function __construct() {
            $this->localhostPath = $this->GetBaseDir();
        }

        private function ReArrange(array $filesArray):array {
            $this->filesArray = $filesArray;
            $files = [];
            $keys = array_keys($this->filesArray);
            $fileCount = count($this->filesArray['name']);

            for($i = 0; $i < $fileCount; $i++) {
                foreach($keys  as $key) {
                    $files[$i][$key] = $this->filesArray[$key][$i];
                }
            }
            return $files;
        }

        public function UploadFiles(array $filesArray, string $path,
        array $minSize = [], array $acceptedExtensions = ["bmp", "png", "jpg", "jpeg", "pdf"], 
        $size = 2097152) {
            $files = $this->ReArrange($filesArray);
            $fileData = [];
            $counter = 0;
            $errors = [];
            //foreach ciklus a $files tömbhöz
            foreach($files as $file) {
                $fileExtension = strtolower(
                    pathinfo($file['name'], PATHINFO_EXTENSION)
                );

                $rFileName = $this->Rstring(15);
                $pathAndFileName = $this->localhostPath . $path . $rFileName . "." . $fileExtension;

                $fileSize = $file['size'];
                $fileData[$counter]['file_name'] = $rFileName;
                $fileData[$counter]["file_extension"] = $fileExtension;
                $fileData[$counter]["original_file_name"] = $file['name'];

                if($fileSize > $size) {
                    $errors["errors"][] = "A következő fájl mérete nem megfelelő: {$file['name']}!";
                }

                if(!in_array($fileExtension, $acceptedExtensions)) {
                    $extensions = implode(", ", $acceptedExtensions);
                    $errors["errors"][] = "Csak a következő kiterjesztések megengedettek: {$extensions}!";
                }

                if(file_exists($pathAndFileName)) {
                    $errors["errors"][] = "Már létezik fájl ilyen elnevezéssel: {$file['name']}!";
                }
                
                if(empty($errors)) {
                    if(!move_uploaded_file($file['tmp_name'], $pathAndFileName)) {
                        $errors["errors"][] = "Hibás fájl: {$file['name']}!";
                    }
                }

                $counter++;
            }
            
            if(!empty($errors)) {
                http_response_code(400);
                throw new DataFormatException($errors);
            }

            return $fileData;
        }

        public function DeleteFile($fileName, $path) {
            $filePath = $this->localhostPath . $path . $fileName;

            if(file_exists($filePath)) {
                unlink($filePath);
                return;
            }
            
            http_response_code(404);
            throw new FileException(["errors"=>["A törölni kívánt fájl nem található!"]]);
        }
    }

?>