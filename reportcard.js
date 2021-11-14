
// Step 1
var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
// ... give time for script to load, then type (or see below for non wait option)
jQuery.noConflict();


    loadResult();

function loadResult(){
    var sub = {"HINDI":40,
	"ENGLISH":	40,
	"MATHEMATICS":	40,
	"ECONOMICS":	40,
	"POLITICAL SCIENCE":	40,
	"HISTORY":	40,
	"PUNJABI":	40,
	"GEOGRAPHY":	35,
	"PHYSICAL EDUCATION":	35,
	"HIND. MUSIC VOCAL":	15,
	"PHYSICS": 	35,
	"CHEMISTRY":   	35,
	"BIOLOGY": 	35,
    "ACCOUNTS":	40,
    "BUSINESS STUDIES":	40, 
}
	var sub2 = ["HINDI",
	"ENGLISH",	
	"MATHEMATICS",	
	"ECONOMICS",	
	"POLITICAL SCIENCE",	
	"HISTORY",	
	"PUNJABI",	
	"GEOGRAPHY",	
	"PHYSICAL EDUCATION",	
	"HIND. MUSIC VOCAL",	
	"PHYSICS", 	
	"CHEMISTRY",   	
	"BIOLOGY", 	
    "ACCOUNTS",	
    "BUSINESS STUDIES",	 
    ]


$("div table:nth-child(2) tr:nth-child(n+3)").addClass("trtr");
var l = $(".trtr").length;
for (let i = 0; i < l; i++) {
    var subject = $(`.trtr:eq(${i}) td:eq(0)`).html();
if(sub2.includes(subject)){
    var marks = $(`.trtr:eq(${i}) td:eq(1)`).html();
    var marks = $(`.trtr:eq(${i}) td:eq(1)`).text(`${marks} / ${sub[subject]}`);
}
  
    
}
$("div table:nth-child(2) tr:nth-child(2) th:nth-child(2)").text("PRE-BOARD");

}

	