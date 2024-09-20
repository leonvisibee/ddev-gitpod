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
<div class="calendaricon">
<?php 
  // $day   = substr($output,0,2);
  // $month = substr($output,3,3);
  // $output= $day.'<span>'.$month.'</span>';
	
	$aryMonthCName = array(
						"Jan"=>"一",
						"Feb"=>"二",
						"Mar"=> "三",
						"Apr"=> "四",
						"May"=> "五",
						"Jun"=> "六",
						"Jul"=> "七",
						"Aug"=> "八",
						"Sep"=> "九",
						"Oct"=> "十",
						"Nov"=> "十一",
						"Dec"=> "十二"
						);
						
	$aryDate = explode(" ", $output);
	$day = $aryDate[0];
	$month = $aryDate[1];
	
	if($GLOBALS["language"]->language == "zh-hant") {
		$month = $aryMonthCName[$month] . "月";
	}
	
	$output = $day.'<span>'.$month.'</span>';
	
	print $output;
?>

</div>

