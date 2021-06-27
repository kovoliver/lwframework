<?php use FW\FileLoaders\Bootstrap;

    ini_set('display_errors', '1');
    ini_set('display_startup_errors', '1');
    error_reporting(E_ALL);
    require_once "app/init.php";
    $bootstrap = new Bootstrap();
    
?>

<!DOCTYPE html>
<html lang="hu">
<?php
    $bootstrap->LoadHead();
?>
<body>

    <div class="img-container" id="img-container">
        <div id="img-holder" class="img-holder">
            <div class="close" id="close-gallery"></div>
            <div class="img-counter" id="img-counter"></div>
            <div id="gallery-img"></div>

            <div class="arrow next" id="next-image"></div>
            <div class="arrow prev" id="prev-image"></div>
        </div>
    </div>
    
    <div id="progressbar-holder" class="progressbar">
        <progress id="progressBar" max="100"></progress>
    </div>

    <div class="message-box shadow" id="message-box">
        <div class="close-holder" id="message-box-header">
            <i class="fas fa-window-close close-x cancel"></i>
        </div>
        <div id="message-holder"></div>
        <div id="button-holder"></div> 
    </div>
    
    <?php
        $bootstrap->LoadPage();
        $bootstrap->LoadFooter();
        $bootstrap->LoadScripts();
        $bootstrap->LoadStyles();
    ?>
    
</body>
</html>