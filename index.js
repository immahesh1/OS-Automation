var robot = require('robotjs')
var fs = require('fs')

setTimeout(openGITBash,2000);


function openGITBash(){
    robot.moveMouseSmooth(53,750)
    robot.mouseClick()
    robot.typeString("GIT Bash")
    robot.keyTap("enter")
    setTimeout(openChrome,2000);
}
function openChrome(){
    robot.moveMouseSmooth(53,750)
    robot.mouseClick()
    robot.typeString("google chrome")
    robot.keyTap("enter")
    // Opening tabs
    setTimeout(openTabs,2000);
}

function openTabs(){
    var rawdata = fs.readFileSync("./chrome.json")
    var tabs = JSON.parse(rawdata)
    for(var i=0; i<tabs.length; i++){
        for(var j=0; j<tabs[i].length; j++){
            robot.typeString(tabs[i][j])
            robot.keyTap("enter")

            if(j < tabs[i].length-1){
                robot.keyToggle("control","down")
                robot.keyTap("T")
                robot.keyToggle("control","up")    
            }else if(i < tabs.length - 1){
                robot.keyToggle("control","down")
                robot.keyTap("n")
                robot.keyToggle("control","up") 
            }
        }
    }
    setTimeout(openVsCode,7000);
}

function openVsCode(){
    robot.moveMouseSmooth(53,750)
    robot.mouseClick()
    robot.typeString("Visual Studio Code")
    robot.keyTap("enter")
    setTimeout(openNotePad,12000);
}

function openNotePad(){
    robot.moveMouseSmooth(53,750)
    robot.mouseClick()
    robot.typeString("Notepad")
    robot.keyTap("enter")
    setTimeout(function(){
        robot.typeStringDelayed("Setup is Ready! ")
        robot.typeStringDelayed("Please start working...")
    },2000)
}

