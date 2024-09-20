<?php

/**
 * @file
 * This template is used to print a single field in a view.
 *
 * It is not actually used in default Views, as this is registered as a theme
 * function which has better performance. For single overrides, the template is
 * perfectly okay.
 *
 * Variables available:
 * - $view: The view object
 * - $field: The field handler object that can process the input
 * - $row: The raw SQL result that can be used
 * - $output: The processed output that will normally be used.
 *
 * When fetching output from the $row, this construct should be used:
 * $data = $row->{$field->field_alias}
 *
 * The above will guarantee that you'll always get the correct data,
 * regardless of any changes in the aliasing that might happen if
 * the view is modified.
 */
?>
<div class="res-icon">
<?php 
	$aryType = explode("||", $output);
	$imgID = 36;
	$tid = "";
	if(sizeOf($aryType) > 1) {
		//user "other" img
	} else {
		$tid = explode(":", $output)[0];
	}
	switch((int)$tid) {
		case 39: 
			$imgID = 36;
		break;
		case 40:
			$imgID = 33;
		break;
		case 41:
			$imgID = 34;
		break;
		case 46:
			$imgID = 35;
		break;
	}
	/* print $tid . " ++ " . $output; */
?>
	<img src="/sites/hkggacms/files/hkgga_desktop-<?php echo $imgID; ?>.png" />
</div>

