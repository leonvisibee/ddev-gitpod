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
$thisNode = node_load($this_nid);
$aryEventID = array();


$result = db_query("SELECT nid, title, created FROM {node} WHERE type LIKE 'events' AND language = '" . $GLOBALS["language"]->language . "' AND `status` = 1 ORDER BY created");


foreach ($result as $key => $record) {
	array_push($aryEventID, $record->nid);
}

foreach($aryEventID as $key => $value) {
	// echo "<p>***$key => $value :: " . $aryEventID[$key - 1] . " || " . $aryEventID[$key + 1] . "</p>";
	if($this_nid == $value) {
		if($key > 0) {
			$prevNode = node_load($aryEventID[$key - 1]);
		}
		
		if(($key+1) < sizeof($aryEventID)) {
			$nextNode = node_load($aryEventID[$key + 1]);
		}
		
		break;
	}
}

$strPrev = "";
$strNext = "";

if($GLOBALS["language"]->language == "zh-hant") {
	$strPrev .= "< 上一則活動";
	$strNext .= "下一則活動 >";
	$strAltList = "取錄名單";
	$strAltAlbum = "活動花絮";
} else if($GLOBALS["language"]->language == "en") {
	$strPrev .= "< Prev Event";
	$strNext .= "Next Event >";
	$strAltList = "Acceptance list";
	$strAltAlbum = "Album";
}
// print_r($prevNode->path["alias"]);
if(!empty($prevNode) && ISSET($prevNode)) { 
	$strPrevPath = url($prevNode->path["source"], array('absolute' => TRUE));
}
if(!empty($nextNode) && ISSET($nextNode)) { 
	$strNextPath = url($nextNode->path["source"], array('absolute' => TRUE));
}

?>

<div class="event_links">
	<div class="event_icons">
	<?php if(!empty($thisNode->field_name_list)) { 
		$file = file_load($thisNode->field_name_list["und"][0]["fid"]);
	?>
		<a class="btnDownload" href="/sites/hkggacms/files/<?php echo file_uri_target($file->uri); ?>" target="_blank"><img src="/sites/hkggacms/files/hkgga_desktop-56.png" style="width: 56px; height: 56px;" alt="<?php echo $strAltList; ?>" title="<?php echo $strAltList; ?>" /></a>
	<?php } ?>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	<?php if(!empty($thisNode->field_album)) { 
		$albumNodeID = $thisNode->field_album["und"][0]["entity"]->nid;
		$albumPath = drupal_get_path_alias("node/".$albumNodeID);
	?>
		<a class="btnAlbum" href="<?php /*echo "/" .$albumPath;*/ ?>"><img src="/sites/hkggacms/files/hkgga_desktop-57.png" style="width: 56px; height: 56px;" alt="<?php echo $strAltAlbum; ?>" title="<?php echo $strAltAlbum; ?>" /></a>
	<?php } ?>
	</div>
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


<script type="text/javascript">
(function($) {
	Drupal.behaviors.eventDetails = {
		attach: function(context, settings){
			var filePath = $(".field-name-field-name-list .file > a").attr("href");
			var albumPath = $(".field-name-field-album .field-item > a").attr("href");
			$(".btnDownload").attr("href", filePath);
			$(".btnAlbum").attr("href", albumPath);
			
			$(".field-name-field-name-list").hide();
			$(".field-name-field-album").hide();
			
			//re-order the layout
			// $(".field-name-field-event-endtime").after($(".event_icons"));
		}
	};
})(jQuery);
</script>