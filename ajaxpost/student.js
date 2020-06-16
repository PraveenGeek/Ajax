var xmlHttp = createXmlHttpRequestObject();
function createXmlHttpRequestObject(){
    var xmlHttp;
    if(window.ActiveXObject){
        try{
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");

        }catch(e){
            xmlHttp = false;
        }
    }else{
        try{
            xmlHttp = new XMLHttpRequest();
        }catch(e){
            xmlHttp = false;
        }
    }
    if(!xmlHttp){
        alert("can't create that object");
    }
    else{
        return xmlHttp;
    }
}
function process(){
    if(xmlHttp.readyState==0 || xmlHttp.readyState==4){
        student = encodeURIComponent(document.getElementById("userInput").value);
        var data="student="+student;
        xmlHttp.open("POST", "student.php", true);
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        console.log(data);
        xmlHttp.onreadystatechange = handleServerResponse;
        xmlHttp.send(data);
    }else{
        setTimeout('process()', 1000);
    }
}
function handleServerResponse(){
    if(xmlHttp.readyState==4){
        if(xmlHttp.status==200){
            xmlResponse = xmlHttp.responseXML;
            xmlDocumentElement = xmlResponse.documentElement;
            message = xmlDocumentElement.firstChild.data;
            document.getElementById("underInput").innerHTML = "<span style='color:green'>" + message + "</span>";
                    setTimeout('process()', 1000);
        }else{
            alert('something went wrong');
        }
    }
}