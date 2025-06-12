<?php



$targetFile = '../../.htaccess';

// Prepare response array
$response = [
    'file' => $targetFile,
    'exists' => false,
    'writable' => false,
    'message' => ''
];

// Check file existence
if (file_exists($targetFile)) {
    $response['exists'] = true;
    $response['writable'] = is_writable($targetFile);
    $response['message'] = $response['writable'] 
        ? "File exists and is writable" 
        : "File exists but is NOT writable";
} else {
    // Check directory writability if file doesn't exist
    $targetDir = dirname($targetFile);
    $response['writable'] = is_writable($targetDir);
    $response['message'] = $response['writable']
        ? "File doesn't exist but directory is writable"
        : "File doesn't exist and directory is NOT writable";
}

// Convert response to JSON and output as console.log
header('Content-Type: application/json');
echo json_encode($response);
?>
