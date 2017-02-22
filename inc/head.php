<?php
if ($_SERVER['SERVER_NAME'] == 'localhost') {
  $URL = "http://localhost/siteseed/";
} else {
  $URL = "http://dev5.apaone.com/siteseed/";
}
?>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>siteseed</title>

  <meta name="description" content="">
  <meta name="author" content="">
  <meta name="language" content="">

  <meta property="og:title" content="" >
  <meta property="og:type" content="website">
  <meta property="og:url" content="">
  <meta property="og:image" content="">

  <meta name="dc.coverage" content="">
  <meta name="dc.description" content="">
  <meta name="dc.format" content="text/html">
  <meta name="dc.publisher" content="">
  <meta name="dc.title" content="">
  <meta name="dc.type" content="">
  <link rel="icon" type="image/png" href="<?php echo $URL?>favicon.png" />

  <link href="<?php echo $URL?>css/vendor.css" rel="stylesheet">
  <link href="<?php echo $URL?>css/style.css" rel="stylesheet">
</head>