angular.module("ionic-timepicker",["ionic","ionic-timepicker.templates","pascalprecht.translate"]).directive("ionicTimepicker",["$ionicPopup","$translate",function(e,t){return{restrict:"AE",replace:!0,scope:{etime:"=etime",format:"=format",step:"=step"},link:function(i,m){m.on("click",function(){var m={epochTime:i.etime,step:i.step,format:i.format};i.time={hours:0,minutes:0,meridian:""};var s=60*(new Date).getTimezoneOffset()*1e3,u=new Date(1e3*m.epochTime-s);i.increaseHours=function(){i.time.hours=Number(i.time.hours),12==m.format&&(12!=i.time.hours?i.time.hours+=1:i.time.hours=1),24==m.format&&(23!=i.time.hours?i.time.hours+=1:i.time.hours=0),i.time.hours=i.time.hours<10?"0"+i.time.hours:i.time.hours},i.decreaseHours=function(){i.time.hours=Number(i.time.hours),12==m.format&&(i.time.hours>1?i.time.hours-=1:i.time.hours=12),24==m.format&&(i.time.hours>0?i.time.hours-=1:i.time.hours=23),i.time.hours=i.time.hours<10?"0"+i.time.hours:i.time.hours},i.increaseMinutes=function(){i.time.minutes=Number(i.time.minutes),i.time.minutes<=60-m.step?i.time.minutes+=m.step:i.time.minutes=0,i.time.minutes=i.time.minutes<10?"0"+i.time.minutes:i.time.minutes},i.decreaseMinutes=function(){i.time.minutes=Number(i.time.minutes),i.time.minutes>=m.step?i.time.minutes-=m.step:i.time.minutes=60-m.step,i.time.minutes=i.time.minutes<10?"0"+i.time.minutes:i.time.minutes},12==m.format&&(i.time.meridian=u.getUTCHours()>=12?"PM":"AM",i.time.hours=u.getUTCHours()>12?u.getUTCHours()-12:u.getUTCHours(),i.time.minutes=u.getUTCMinutes(),i.time.hours=i.time.hours<10?"0"+i.time.hours:i.time.hours,i.time.minutes=i.time.minutes<10?"0"+i.time.minutes:i.time.minutes,0==i.time.hours&&"AM"==i.time.meridian&&(i.time.hours=12),i.changeMeridian=function(){i.time.meridian="AM"===i.time.meridian?"PM":"AM"},t("TITLE_SELECT_TIME").then(function(t){e.show({templateUrl:"time-picker-12-hour.html",title:"<strong>"+t+"</strong>",subTitle:"",scope:i,buttons:[{text:"Close"},{text:"Set",type:"button-positive",onTap:function(){i.loadingContent=!0;var e=0;e=12!=i.time.hours?60*i.time.hours*60+60*i.time.minutes:60*i.time.minutes,"AM"===i.time.meridian?e+=0:"PM"===i.time.meridian&&(e+=43200),i.etime=e+s/1e3}}]})})),24==m.format&&(i.time.hours=u.getUTCHours(),i.time.minutes=u.getUTCMinutes(),i.time.hours=i.time.hours<10?"0"+i.time.hours:i.time.hours,i.time.minutes=i.time.minutes<10?"0"+i.time.minutes:i.time.minutes,t("TITLE_SELECT_TIME").then(function(t){e.show({templateUrl:"time-picker-24-hour.html",title:"<strong>"+t+"</strong>",subTitle:"",scope:i,buttons:[{text:"Close"},{text:"Set",type:"button-positive",onTap:function(){i.loadingContent=!0;var e=0;e=24!=i.time.hours?60*i.time.hours*60+60*i.time.minutes:60*i.time.minutes,i.etime=e+s/1e3}}]})}))})}}}]);