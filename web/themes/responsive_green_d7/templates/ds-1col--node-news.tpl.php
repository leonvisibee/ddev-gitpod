<?php

/**
 * @file
 * Display Suite 1 column template.
 */
?>
<<?php print $ds_content_wrapper; print $layout_attributes; ?> class="ds-1col <?php print $classes;?> clearfix">

  <?php if (isset($title_suffix['contextual_links'])): ?>
  <?php print render($title_suffix['contextual_links']); ?>
  <?php endif; ?>

  <?php print $ds_content; ?>
  
</<?php print $ds_content_wrapper ?>>

<?php
$this_nid = arg(1);
$aryNewsID = array();
$str = "[";


$result = db_query("SELECT nid, title, created FROM {node} WHERE type LIKE 'news' AND language = '" . $GLOBALS["language"]->language . "' AND `status` = 1 ORDER BY created");


foreach ($result as $key => $record) {
	array_push($aryNewsID, $record->nid);
	
	$str .= "[" . $record->nid . ", " . $record->created . "], ";
}
$str .= "]";

foreach($aryNewsID as $key => $value) {
	// echo "<p>***$key => $value :: " . $aryNewsID[$key - 1] . " || " . $aryNewsID[$key + 1] . "</p>";
	if($this_nid == $value) {
		if($key > 0) {
			$prevNode = node_load($aryNewsID[$key - 1]);
		}
		
		if(($key+1) < sizeof($aryNewsID)) {
			$nextNode = node_load($aryNewsID[$key + 1]);
		}
		
		break;
	}
}

$strPrev = "";
$strNext = "";

if($GLOBALS["language"]->language == "zh-hant") {
	$strPrev .= "< 上一則消息";
	$strNext .= "下一則消息 >";
} else if($GLOBALS["language"]->language == "en") {
	$strPrev .= "< Prev News";
	$strNext .= "Next News >";
}
// print_r($prevNode->path["alias"]);
if(!empty($prevNode) && ISSET($prevNode)) { 
	$strPrevPath = url($prevNode->path["source"], array('absolute' => TRUE));
}
if(!empty($nextNode) && ISSET($nextNode)) { 
	$strNextPath = url($nextNode->path["source"], array('absolute' => TRUE));
}

?>

<div >
<?php if(!empty($prevNode)) { ?>
	<a href="<?php echo $strPrevPath; ?>" class="btnPrev button"><?php echo $strPrev; ?></a>
<?php } ?>
<?php if(!empty($nextNode)) { ?>
	<a href="<?php echo $strNextPath; ?>" class="btnNext button"><?php echo $strNext; ?></a>
<?php } ?>
</div>

<?php if (!empty($drupal_render_children)): ?>
  <?php print $drupal_render_children ?>
<?php endif; ?>
