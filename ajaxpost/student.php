<?php
header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';
echo '<response>';
    $student = $_POST['student'];
    $studentArray = array('aj','surya','sriram','divyaprakash');
    if(in_array($student,$studentArray)){
        echo 'We do have  ' .$student. ' in our class';
    }else if($student == ''){
        echo 'Enter a student name.';
    }else 
    {
        echo "no, we don't have " .$student. "!";
    }
echo '</response>';
?>