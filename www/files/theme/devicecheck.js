var AndroidYes = 1;

function check_device()
{
	if( navigator.userAgent.match(/Android/i))
		AndroidYes = 1;
	else if(navigator.userAgent.match(/iPhone/i))
		AndroidYes = 0;
	else
		AndroidYes = 0;
	
	if(AndroidYes==0)
	{
	/*	setCookie('vibration','0','2');
		alert("只有Android裝置能用震動功能!");
		document.getElementById("vibration").checked = false;
	*/
	}
		
}

function getDeviceType()
{
	return AndroidYes;
}

function detectmob() 
{ 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    //setCookie('interactivecaptcha','0','2');
	//setCookie('rc2audio','0','2');
	alert("目前「我不是機器人驗證」手機版正在測試~");
	//document.getElementById("interactivecaptcha").checked = false;
	//document.getElementById("rc2audio").checked = false;
	
  }
 else {
    
  }
}