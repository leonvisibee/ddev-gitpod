<?php
/**
 * @file
 * Responsive Green theme's implementation to display the basic html
 * structure of a single Drupal page.
 */
?>

<!DOCTYPE html>
<head>
<meta name="google" content="nositelinkssearchbox" />
<?php print $head; ?>
<title><?php print $head_title; ?></title>
<?php print $styles; ?>
<?php print $scripts; ?>
<?php if (false): ?>
<!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
<?php endif; ?>
</head>
<body class="<?php print $classes; ?>"<?php print $attributes; ?>>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>
</body>
</html>
