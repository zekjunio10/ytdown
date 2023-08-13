<?php
$url = $_GET['url'];

	$dados = file_get_contents("https://radiant-rugelach-646559.netlify.app/ytdl/info?video_url=".$url);
	
	header("Content-Type: Application/json");
	
	header("Access-Control-Allow-Origin: *");

	header("Access-Control-Allow-Methods: GET");

	header("Access-Control-Allow-Headers: *");
	

	$url = "https://radiant-rugelach-646559.netlify.app/ytdl/info?video_url=".$url;
	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$response = curl_exec($ch);
	curl_close($ch);

	echo $response;

?>