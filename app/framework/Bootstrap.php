<?php namespace FW\FileLoaders;
use FW\Url\tUrl as tUrl;
use FW\Tools\tTokenGenerator as tTokenGenerator;
use FW\Database\Conn as Conn;
use Content\Pages as Pages;
use PDO;

    class Bootstrap {
        use tUrl;
        use tTokenGenerator;
        private $scriptsByPages;
        private $stylesByPages;
        private $urlArray;
        private $scene;
        private $page;
        private $baseUrl;
        private $siteContent;
        private $pageContent;
        private $fwScripts;
        private $globalScripts;
        private $localScripts;
        private $conn;

        function __construct() {
            $this->conn = Conn::GetConnection();
            $sceneAndPage = $this->GetSceneAndPage();
            $this->scene = $sceneAndPage[0];
            $this->page = $sceneAndPage[1];
            $this->baseUrl = $this->GetBaseUrl();
            $this->globalScripts = $this->GetGlobalScripts(2);
            $this->localScripts = $this->GetLocalScripts();
        }

        private function HighlightMenu($page) {
            if($page == $this->page) 
                return "highlight";
            return "";
        }

        private function GetLocalScripts() {
            $stmt = $this->conn->prepare("SELECT PageID FROM _pages
            WHERE PageURL = ?");
            $stmt->execute([$this->page]);
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            $pageID = $row !== false ? $row["PageID"] : 0;

            $localStmt = $this->conn->prepare("SELECT ScriptName 
            FROM _page_scripts WHERE PageID = ?");
            $localStmt->execute([$pageID]);
            $localScripts = $localStmt->fetchAll(PDO::FETCH_ASSOC);

            return $localScripts;
        }

        private function GetGlobalScripts($scriptType) {
            $stmt = $this->conn->prepare("SELECT ScriptName FROM _page_scripts WHERE ScriptType = ?");
            $stmt->execute([
                $scriptType
            ]);
            $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return $rows;
        }

        public function PreloadScripts() {
            /**
             * Global scripts
             */
            foreach($this->globalScripts as $script) {
                $scriptPath =  "{$this->baseUrl}/assets/scripts/app/{$script["ScriptName"]}";
                echo "<link rel='preload' href='{$scriptPath}' as='script'></link>";
            }
            /**
             * Local scripts
             */
            foreach($this->localScripts as $script) {
                $scriptPath =  "{$this->baseUrl}/assets/scripts/app/{$script["ScriptName"]}";
                echo "<link rel='modulepreload' href='{$scriptPath}'></link>";
            }
        }   

        public function LoadScripts() {
            foreach($this->globalScripts as $script) {
                $scriptPath =  "{$this->baseUrl}/assets/scripts/app/{$script["ScriptName"]}";
                echo "<script src='{$scriptPath}'></script>";
            }

            foreach($this->localScripts as $script) {
                $scriptPath =  "{$this->baseUrl}/assets/scripts/app/{$script["ScriptName"]}";
                echo "<script type='module' src='{$scriptPath}'></script>";
            }
        }

        public function PreloadStyles($styles = []) {
            $stylePath = "{$this->baseUrl}/assets/styles/";
            echo "<link rel='preload' href='{$stylePath}settings/basic-settings.css' as='style'>";
            echo "<link rel='preload' href='{$stylePath}settings/grid.css' as='style'>";

            foreach($styles as $style) {
                echo "<link rel='preload' href='{$stylePath}settings/{$style}' as='style'>";
            }
        }

        public function LoadStyles($styles = []) {
            $stylePath = "{$this->baseUrl}/assets/styles/";
            echo "<link rel='styleseet' href='{$stylePath}settings/basic-settings.css' type='text/css'>";
            echo "<link rel='styleseet' href='{$stylePath}settings/grid.css' type='text/css'>";

            foreach($styles as $style) {
                echo "<link rel='styleseet' href='{$stylePath}settings/{$style}' type='text/css'>";
            }
        }

        public function LoadHead() {
            if(!isset($_SESSION["token"])) {
                $this->GenerateToken();
            }

            require_once "common/head.php";
        }

        public function CheckSceneExists() {
            $stmt = $this->conn->prepare("SELECT SceneID FROM _scenes 
            WHERE SceneUrl = ?");
            $stmt->execute([$this->scene]);
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            return $row === false ? false : true;
        }

        public function CheckPageExists() {
            $stmt = $this->conn->prepare("SELECT PageID FROM _pages 
            WHERE PageUrl = ?");
            $stmt->execute([$this->page]);
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            return $row === false ? false : true;
        }

        public function LoadPage() {
            $path = "pages/{$this->scene}/{$this->page}.php";

            if($this->CheckSceneExists() && $this->CheckPageExists() && file_exists($path)) {
                // $class = 'Content\\Pages\\'.$className;
                // $object = new $class();
                // $object->GetPageContent();
                require_once $path;
            } else {
                echo "<h1>Page not found!</h1>";
            }
        }

        public function LoadFooter() {
            require_once "common/footer.php";
        }
    }

?>