<?php
$file = 'data/reponse1.txt';
// Open the file to get existing content
$current = file_get_contents($file);
// Append a new person to the file
$current = print_r($_POST['docu']."\n",true);
// Write the contents back to the file
file_put_contents($file, $current,FILE_APPEND);
 header("Location: vers2_fadein.html");
?>
