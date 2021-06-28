<?php use Content\Pages;
use Content\Pages\public_home_view;

    $view = new public_home_view();

?>
<div class="content">
    <?=$view->GetPageContent()?>
</div>