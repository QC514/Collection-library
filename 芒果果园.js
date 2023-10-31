/*
目标:  芒果果园App 抓包https://api-farm.game.mgtv.com/api/login请求body全部内容 多账号换行隔开

变量格式：export mggy="body=xxxxxxxx"
*/

const $ = new Env("芒果果园");
let envSplitor = ['\n']  //多账号隔开方式，默认换行可自定义
///////////////////////////////维护参数//////////////////////////////////
let defaultUA = 'Mozilla/5.0 (Linux; Android 12; V2203A Build/SP1A.210812.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.114 Mobile Safari/537.36; class(mgwebview.BridgeWebView); ImgoTV-aphone/7.2.2.230212'             //默认UA

///////////////////////////////////////////////////////////////////
var version_='jsjiami.com.v7',_0xafdb=(function(){return[...[version_,'KGjYsSnjLiuCqaGrdmhKikpG.JdcOToWmDq.fvw7==','WPBcJIiK','FEw8J+wVJ+EVICoe5PQ+5PA35A+s56YK','WOdcJh1IW54','CCopW7qn','CJGSWPxcUt/dPH0','W6hcJtf2pSkLWPr1WRFcRYRdJx4x','W6bPbsRdLa','eSoru3vYWQ/cNYbiW4/cHCkD','iWFcKHNcUCkfWOa','htBcPddcRW','WOJcO8kHEW','o8k+EdddQSokWPr3WOS','WPawma','eL5TC0m','5lI15yQV5lIJ5yIY5ywT5PE55lIQ5lMY','WQZdQqm','WQniWOyNWQy','WQv8gqu','6lE15y6Ikq','W7RcGvJcJCovACog','WRpdPCkUDcVcNWxcPSozWQJdRW','W69+eCkHW6C/','CCodzGbbA0RcQGdcNcVdPXOEW6ldNSkkW7qppmkGuu1WWO/dVqvegviSeSozWOvIm8oRWRzOha','yCoPWQDE','W6iiW7X+','smo9WRxcRmov','kuunW4P8','ofHtzga','WRa+jmoPb1tdUa','lmk+yZ/dPG','aJxcRYtcOq','p8oEW6hcUXpdUmk6W7/dVYOkW7ycDhSCWQPCWRKNWRjNW4L6ACoqW7pdIbmfWQJcPCkWW6jfB2rOtSodqmktkGGVomk9j28FhczWWP95za','6lwF5y+QaW','r0Cbj8kQ','BCkws8kNcuW','WReKxmkfW4G2Emk4WOu','zsqTWP4','W57cTmo2W6eFjSok','pbJcHam','W4XbhtVdTa','eEMJSEwmOEs7PEwjSSoq5Psy5lUg5yUo5AEA5yI55yYd6Agx5y+Y','nUw8QowUK+EVHtdMMB/ML43LR7tNRAq','rSomW4GSWO4','fCkSf8oL','WP3MLlBMIk/MIjFLJ7vb6i2i5B+K','WQbqjcJdJq','WQ7dPWKH','W4TPWR/dKKVcO2qwWQzGWOLs','WPxdNb4W','W4/cJmodnxq','WPRcGcS4','WPtcGcG','W6RcJtnDnW','WOTRWQuKWOy','WRlcIH8MWRi','W5RcLCoSW5Or','WRNdMriVW4K','W5xcP2dMO57LVRBPLiBORyW','ad/cJItcNG','WOlcKCk9W54','BmkAu8k3duRcVq','WP/cJIyVWRxdVrL8rW','DYO7WPtcUa','5lI16lAi5y2U','WOajWRhdPM1btq','WQ1zWQiOWPW','WQZKUOhLI73LPOdLIOe45lIE5Pwe5BA96Agw5yY+','zSoZWODaW5C','W4WDW4BcRX4','WQTdWQmNWRGBW6iuWQXid2G','a8kQcmoLeGK','WPVdOfNdIgX4WOW','W6/cHulcJmoyAmocW4ny','W7RcOCoceg0','WRC8fG','WQuLW5NdIWS','WPRdSetdI2LPWOhdVG','WQuAW7BdGWJcMWxdVG','WPtcUCk1uJ/cSWWPBmksWP02','AYqUWQBcSZRdNbpdOuJdNwC','fSk2cSo9hHZdNCop','5P6i5Psd6lsH5yYS5BgF5lQNWOtKU73LJ4NLIixLIz3KVyZOGBO','sgOZhmkBtIq','cCkMeSoOdq','ESkyW4FdPNxcMWH1W4nSW5tcUCkwjr0fcZjIW6ZdR8o0W4e2WOu','WPNdPfJdLgu','dmkMWOv3W68','W6lcGse','emoFwve','nmofW7hcRG','dmoBr1TWWR3cTa','W5RcSmoPW7Sw','cmoFwef5','lmkuzJ/dHW','W7a/W6lcPH4','W4dcVSoIW48DnmoHF0tdIghcMa','W6lcItfz','W7ffady','6lsY5y2KW74','h8oWW7ZcJGy','gu19g2BcI0G','WRu8hSo8dK8','iblcMrdcR8kc','qUwkMEAuQEwoSoMeUowMKEI3Hmof6kYQ5Qkz5PYg5y2d6ywA5Qo95B6W','ymoYW5yVWOJcRM5l','6lAI5y6NW5i','WP0voW','wmoivvHPWQ7dRa','W4tcPCoXW74aASkap1hdKw7dJaRdI0CGm8kdgCkGWP7dICkztNJcU3JcRblcSYFcNIrKpSokb3rlW7urW7tcJLpcPCkbWPpcK38','WP8BmCkZ','qeSlomko','WRJdTZ04W7S','WOtdLGK6W6tdGCks','ibJcKdBcTCkoWRy7e8oLW67cLq','W7FcNmoUjNa','C8oXWQVcPq','lmkXimoLba','omkjyZVdJq','WRSWe8oSdK/dRW','DCo2W74rWPm','W7qSoSkzW6ldTmorlvy7fCohr8oQ','WPZcNsyXWQC','W6m1W70','W5RdK09CW4C','AsOKWOi','b8oUW6hcJ30','W47cIhpcPCoG','WOtcVvDfW7m','uCouWP9v','W7asW6TV','5P2I5PwG6lsO5y6d5AsT5lMZh+s5G+wmUUwdH+s6L+wjUUs4QowjPa','W4q1WOddVeXwza','W6yQBSk1mv7dL8kLfG','W6eOimkyW5RdO8oh','W6LUkSkcW4C','qSokW4aPWRm','W7e4DSk9pW','W7fYf8kIW6ONxa','nCkcWPDDW7i5WP9gW6hdIN3cKW','oComh8kBiLNcNrtdJG','ymo8W44HWO8','WR8bW7ZdIHK','AmkqsSkJafVcQapdT8oUWQu4','WO7cJIm0WRe','WQxMTPhMS6yI5Q2W5AAb5yUZFoIoR+w9Ra','deLNgL7cNf4cWPtdQMtcOCk3','W7COWOz1hNS','E8ozW7qoWOq','smkCqmkDaG','p05kyxS','W4zOarddPW','6lwX5y2DW44','WQ5FWOKZWPW','a8k2emo8gG','WPtcUCk1','W6RcJsTFl8k6','WQZcUXGaWQa','i8onW5RcS2ZdNGC','kCkcWOnO','W5W/oCkAW7i','W6jHrSk5wqJdJ1vQWP1AW4O','obBcHbZcT8ko','AEs7N+wlGEwKI+wjKsxOJ6dLV4u','6lEM5y2XpW'],...(function(){return[...['WOPadJ8','gCkoW6/dNN4','W67cU8oXaNpcVY7cImoSWRFdSCoH','WO3dPf7dHG','WRWNg8oVaLm','WQldVY40W74','WPhcUmk2DIK','cEA2J+AYQUwNNUwkUSoW6yA45AAz6AkO5y2U','hCkoWOP3W4q','B8oViw3dPmoTWRf0WQKi','W6C7WPXUba','EmoOWRbpW6i','wSo+WRnGW7i','k1zuCW','aSohW6ZcO38','6lAM5y6qW4m','WPNcPSkIFZJcTcmYCCkuWPvGAmoIW4tcQ13cRhynW6FdPmoaWOpcG8khW49rC8k5bHTs','q8oJueFdUcGadSo0b8oVW7O','uCouW4OEWQe','pM19mx4','ACoXWRxcQ8o5WRdcQG','W78Ina','ugaHda','W6K/C8kRiXpcMCo4bmkDW6H6fHD+W6LKCZWlab3dKSkKW7xdL8k7pGfKW57dSttcPa','w8ouWOzr','e8kUWR9UW7q','pbBcHqtcVG','pmk8W6RdUhJdSfRcU0/dImoLW4DCW5OoWQzZyGOPWOngECkOW4RcTSoIWRNcJwTdW5/dHfP3W7BdMmkvW5ddTmosFuqQW7hdVSky','6lAU5yYtCa','WPZcGxDaW7nmW5ZcHuFcQqys','W69rhJS','Ad4DWRFcNa','WOxdRf/dI2fG','ACocyrG','iuLQv1W','imolW6hcRHlcQ8o7WRC','oCokeSoLvqZdQYxdPSoGWRa/aa','W4THWPhdUga','mSokwKbq','nCk9W6RdP2pcUbZdRK/dJmoLWOvu','DCoKWRlcSmoJW67cUmoWWP0JlSonW7/cVuyvW5/cImkbWPOsW7G7W6WwoGZdHCopW7zJag0ZWPXiWOdcOuZcOSkIWPJcPW','AYqU','WOZcGcqKWRO','WRXNdGJdUIRdIG','W7CgW6XIySkig1m','W53MT7FMSlCP5Q6t5AEB5yQKWQ3OJPpLV7q','c8kLWPDXW7O','cCkSa8oqgr/dU8ouWRqmW7JdSa','6lw95y+oFa','umoXuCkKquVdP8oTWOOGW7/dUa','WOJLIl7ML5RLJRxPHy3LPztOTOKk6kY95Qcu5P255y2O6ys55Qcv5B+Q','cEERS+IpL+s4SUAkMowNOoMzHSkU5O276iYp5OQC5yM1546k5P6Y','W7lcU8oLnW','f8k9W6VdRCk9W7NcUSoYW5f+ASonWRtdSrLy5B+X5AsK5RAN5Rodv8o7E8kMt2epWOVcJCk2yuWWD8kE','W6zvbXddLSkWW4ddNJVcVmkeWR7cGmk9','WOK6sCoGWQT8fmoNW4xcIf3dJmomz0W15RsO6kEB5lMV5yUBxgT0WQ4ScgSQWORcG1dcOmoul8kD','WOeXk8k3Fa','WRfOhGW','qCkfWPBdUItcGvLUWPjZWOxcOmohoqfz5yQx5yUv5lQH5yIXW7/cPCoFz8krWQ7dVKtdQs9NW7hcMJ7cSq','WQukW7BdIW','W5SBxZDAraddHbXeraa','CSoPWRLAW7z7sv4fgCoutq','WR19hH3dSv/cGWxcQ8kKW7xcNCkqsmkxWOSfWOhdHSkda8kCccJdOmoeWR3cLSkeaIjjWRPoWPRcM8oQnColqG8ZWOKedgxcUSkcWO8','WQj8oqFdJW','WQNcNWK2WO4','DSoaW70nWO8','mmkdWPr5W6q','W6FcJmo9dfG','WOZcUCk5DJ8','W6mKy8kI','WOZdH23dT1i','WQZdQqmfW7OFWReCv8kOvCk/','pmkVWRDmW44','cCoGW5BcK2G','r247fSkFsZy9W7e','k3qSW4nP','cmoFwf14','FSoMW4mkWQS','W6OXW6tcPG','WPhcKCkGW4S','W694a8kmW6G1D8kLWPZdJbBcMa','WROaW7/dRG/cMcpdPtX9n1q','WPZcPmk7yYi','o8oDW4JcVW','yUA3SUAZHUwLPUwjSSkx6ywe5Awm6Ao65yYg','gmoXWQhcPG','WO7dPepdIwf5WOJdUd8','ESo4W4WlWOy','6lAq5y6NWQG','cKrI','pSkWDsC','gCozW63cJN8','z8kqqmksaLRcKGNdL8oMWRaQ','FmoNW5e0WPldShXvWPhdS8oLtSoLtSk5a8kZp8o7p09Ldg3dI2dcVmkJsmkgaxChWOWdWOeEWR5IsqvkgIRdRWVcOeJdUX7dOSkUW5yBh8onya','DCoyDtfCnsVdQHxcHstcSW','vSoXumkLq0pdN8okWQ0jW7/dUa','n8kmWP15','W4iXWOddUeXe','FCkEs8kMcq','DCoyDq','W5i8WR7dKuq','W6iGuCk6peddKG','5P+N5PwH6lwm5y+15Awl5lU6yos6UowoUEwbM+s6T+wlMos4QEwkGq','gmkFW4VdVeq','nCo2q2zO','kf1Ppfm','W7uKBmk+pG','d0L6fq','yYO9WOy','W4C8sSk5jW','CmoEWQrsWRu','6lAN5y68xa','WPRMSjJMUldKUAVOTAxLGkpMR47OVQVOOPtVVka','xmoEWQrrWQ/dHmoT','t8oyWQhcRCo2','gCoFxvPiWQRcOIr9W5hcGSkwha','gConugnV','5yMz5yM15lUR5yQG6l2f5Rkj5ysl5yMd5yQO5lUQ6zks6zkz','WPHibNCj','WQa5hSk7Fa','WPNdQLNdKW','W4/cGbr8pq','6lAb5y+XWOm','W6K/C8kRiXpcMCo4e8oCWQ89grH+W605Fdqfdb3dNmkSW6ZcJSo0mqiNWPVdOYVcO8koWP3dJZSrdmkMW6pdQCo3jCo3WQa','6lwd5yY0pW','W47cVSoHW7C','oCo7WPRcOCk7','WRvjWRCjWROjW4K','WQVMLOxPMRZMOkpcSUImGow9Oa','W7eSWOzXg2K6','WQPlWQWdWROp','ooEUVEwjLmkR6yA65Aw256+l5yQl','xgeVp8kg','wCoCWP5eWQBdNW','WOFdPeFdGG','W6r2dCkJW6CMwmk4WOW','uSkiB8k/na','WOxcHCkNW4i','WOjgdumcebZdVsjOqWG','u8oAWPvXWQ3dICohlGJcUxJdMW','jmkPW6ZdU24','6lw/5yYAWQS','W6VcOrDjmq','WRRdKL3dJNG','6lEt5yYhWO8','WQmdW7ZdNsa','WP5ggxy','W54vWRZdSuy','omoCW4NdPwpdNXST','W6iKy8k+','WR9eWQevWOm','W5VMLzJMIi7MIAVLJlRdQoInTUw+Kq','WRVcPdSnWP4','WQpdRtiLW7GsWPS','WRtNQR7OJApKUj3MIPpLPktPM5RcSos6KEAxTEw2PowUJ+AiPG','WPFcTmk4DJlcOW','WRbnWQ0s','W7ldLwb9W5VdU3ddN0epcYldISkWc3y','WRddSXCS','rKetmSkmAti','tmoTwvtdSY0Q','nmolW7VcMqxcO8oX','keDGag/cK1LeWPNdUgVcTmkNWQ0','W6ZcTCo7jG','o8ofW7lcIG7cPSoBWR/dQJmfWQi','W4FcR2NcQmoG'],...(function(){return['WOxdQK3dPM5QWQFdPs95mhO','W7dcQ1JcICo2','WOhcNSkCW7m8','umo0WQxcP8oW','W6dcGsLmpSkG','E8oKFIvR','tColW5i1WRS','yComWPj5W48','WP4zW4/dOdu','CviHmCku','ACo2W5y7WRm','AY4NWOdcQty','l1HuBgq3','Emo8W4ifWO/cRH0vWOtdQSoQgG','hmk+W4NdH18','WRddPXyLW7K','WQRcP8kesIC','FEAwV+AiMEELHowpUWBKVlFLTR3POjpLJP/MIk3LT5hMM5VOGOFLJytMNRG','hSobW7pcKZi','WPihW5ddGam','yCoZW5FcVI3cO8oz','BmoVqhddUa','EmopW7agWPBdL8kaWPFcUq','CCo/WQhcGCo+WRddMCkWWOG6iCkz','p8keWPXOW7KV','WQvMgrK','5lIu5yMb5lQ+5yQz5yst5PES5lUb5lIn','BColW6OhWPVdLSke','W7OxWPldKxa','tga1oCkqwbKGW6eGxvO','W7ldGMjSW7NcP1uJdJeBobO6qSkT5QYO5PsE5lUl5yMPW713vseFWPpdKSkToCoyWRHfW6ewWRq','u8oxW4WGWRq','k8k+EcO','W5rVdmkOW7m','CYqIWOlcSW','W7e+DmkZ','boERLUIoUEs6PUAiJ+wLT+MBOHpMJ4dOJjtMIiVLIBxNJ4FMNiK','FCoPWRnRW7r6C1qLeCobxW','W7v2cmkKW6i','zcqTWOi','iHZcNJJcVa','CSoPWRPEW79WsryLaCoxqW','oCogWRBcQ8kl','W5i0eCk9W6y','W7qLW7RcQW','WR5UWPi1WP0','hNWXW6zzWOjwW4aH','hCk+WPzEW6y','pCkWW4ZIG5tIGOtIG4dIGOpJG5u','W7DrhYVdLG','WQ3dRwldIgi','kmkcWRjRW5C','oComeCoLwG7dPb/dUCoxWQavaG','kvPEx18','j0nJf0S','W43MNiBMIRRLIzBcLttcJoIUJoMBNEIVMUIfS+ACVEISK+ABOG','AqOrmt5Jo8k6W6rWbLf2','W4SBmCkwW5q','pmkXfCo7na','WQDSgqldRHpdIq','W6NdNMD9W4O','W7nvadhdN8kXW7a','WRbnWRadWQqwW4iC','WRBcJSkFvaa','ewPtzKm','6lAL5y+GpW','W6uQC8k6','l8ooCKng','W7tcTCo6nNG','tCo2WPD+WQ4','FCowzHe','CsOLWPlcUa','W4JcUmoH','WQC0aCoJaLNcOq','lCkcWPT5W7i','g8oIW5VcGqS','s2m5k8kw','WRigW7W','imolW7ZcVW','WOtdLHKWW6hdGCksW63cO1lcVaWhWQCNWPm','eSoBwLnOWQm','WRxdTqe2W7aAWOSs','W4mJWPBdOurbDx4','W7b/c8k6W6SIxG','vSk8BoAJR+w9O+MuP+ISSW','eZ1Mtmokbd0+W7GLwLi','WQBLIOhKVjWc','WR00h8oT','oSkmWP5oW7K8WRu','WRrkjKyz','weeooSkuDW','bK9Pdq','WO7cQr8jWP8','6lAG5yYFhG','W5/cIHr8iG','6lAK5yYJW40','Bvm3d8kk','hmorue0','WOBcJ3X0W7G','W4uLWP3dV0LhAwS','t8kkaauUW77cGHTEW6NcQSkm','W6JcGSoaW4G6','W6dcT8o/W60D','WORcIJWUWRJdVb0','cM00W6fm','W4iqWQ9Oeq','WPRKU5FLIAxLPldLIADf6iYB5B+S','W7jzfda','WP/dPeBdKMu','W4hdNKDTW54','W4CdgSkXW7q','c8kIcCo0','WOxdMb8nW7O','W5dcTSoEmMO','W6WiW78','hCkEW4FdU2y','W4RcQSoHB2hcQ3m6la','WRtcNSkqW58M','WRCAW6ZdHW7cJG','q248kSkBxtm','pmojW5lcOW','6lEH5y+BWP8','gCokW7pcPN4','WRLMdsZdRahdOKxcVSk9W7RdIq','W6TJemk9W7vRfSoLWONdLrNdJmkhkXn4sxtdTrCzAdtdPhvtAgtdImoduSoSWOLRWP/dTt7cHCoGW7JdTXK8','WPRcUmk9AtG','n8kqjSoaaq','WR8DpSkhrG','DCoNWQbl','W7uWWPDneW','W6a9p8kEW4i','WP0vo8kxxMBcMSooo8k5WO7dLW','W5a+W6XqwW','W53cOmoWW5Kj','W6dcU8oYoG','BmoGqhpdRG','u0ujm8kbAdyGnG','WOhcN8k/W48K','W67dKw59','bUMIV+wpSEs6LEwkOwNML6pKUzhLIjFLPB7LI4hLJ7JPOORLJ5q','WP1gh3aper3dOJnVBbxdRW','eSkxWOrLW5u','iCkeWOP7W50','W58+WPFdTLG','6lEE5yYHWOK','5lQd5yIV5lIV5yQl5yEs5PsG5lI95lIW','zcaFWOBcStFdTG','FCoZWOr6WPq','W7iPn8k/W5pdUCosaguLeCoBr8kO','p8kWDtS','W5GXWP7dTG','nxakW6LF','WPRdNb0uW6BdK8k5W4RcSLFcQJe','hxWSW6K','WPHVoKON','WO8vW7xdGJm','BSoKWRtdSSo6WQFdUmkX','WPlcGxr4','eSoruW','lXJcKXi','W6NcOSoeW4a7','5PYu5PEy6lEG5yY35AA35lMAWQxKU7xLJjpLGiNKU5xLIyNKUAlLIB0','WRjOaWpdOXldJvJcRG','W6tdKxD5','tSo7W4WaWQ8'];}())];}())];}());const _0x2f8060=_0x56d6;(function(_0x24ba19,_0x3146e0,_0x25e1b7,_0x478292,_0x526008,_0x29e992,_0x2087d1){return _0x24ba19=_0x24ba19>>0x5,_0x29e992='hs',_0x2087d1='hs',function(_0x345439,_0x5d4af6,_0x293f7d,_0x124b04,_0x2edac7){const _0x3dbd8b=_0x56d6;_0x124b04='tfi',_0x29e992=_0x124b04+_0x29e992,_0x2edac7='up',_0x2087d1+=_0x2edac7,_0x29e992=_0x293f7d(_0x29e992),_0x2087d1=_0x293f7d(_0x2087d1),_0x293f7d=0x0;const _0x47e96a=_0x345439;while(!![]&&--_0x478292+_0x5d4af6){try{_0x124b04=parseInt(_0x3dbd8b(0x109,'xU%F'))/0x1+parseInt(_0x3dbd8b(0x180,'QWE9'))/0x2*(parseInt(_0x3dbd8b(0x1a2,'yR#t'))/0x3)+parseInt(_0x3dbd8b(0x1f8,'m)En'))/0x4+parseInt(_0x3dbd8b(0xb4,'tAzO'))/0x5*(parseInt(_0x3dbd8b(0x253,'n&fn'))/0x6)+-parseInt(_0x3dbd8b(0x1d5,'H]4%'))/0x7+-parseInt(_0x3dbd8b(0x84,'QWE9'))/0x8+parseInt(_0x3dbd8b(0x1bd,'QWE9'))/0x9;}catch(_0x25f621){_0x124b04=_0x293f7d;}finally{_0x2edac7=_0x47e96a[_0x29e992]();if(_0x24ba19<=_0x478292)_0x293f7d?_0x526008?_0x124b04=_0x2edac7:_0x526008=_0x2edac7:_0x293f7d=_0x2edac7;else{if(_0x293f7d==_0x526008['replace'](/[puKTkGYJOLSdhnrwDCqfW=]/g,'')){if(_0x124b04===_0x5d4af6){_0x47e96a['un'+_0x29e992](_0x2edac7);break;}_0x47e96a[_0x2087d1](_0x2edac7);}}}}}(_0x25e1b7,_0x3146e0,function(_0x3732cd,_0x379a45,_0xb2006e,_0x4c3694,_0x104e1c,_0x4c9ec9,_0x3bcc88){return _0x379a45='\x73\x70\x6c\x69\x74',_0x3732cd=arguments[0x0],_0x3732cd=_0x3732cd[_0x379a45](''),_0xb2006e=`\x72\x65\x76\x65\x72\x73\x65`,_0x3732cd=_0x3732cd[_0xb2006e]('\x76'),_0x4c3694=`\x6a\x6f\x69\x6e`,(0x12008c,_0x3732cd[_0x4c3694](''));});}(0x1860,0x25a11,_0xafdb,0xc5),_0xafdb)&&(version_=_0xafdb);let httpResult,httpReq,httpResp,userCookie=($['isNode']()?process['env'][_0x2f8060(0xab,'[F%Z')]:$[_0x2f8060(0x131,'QWE9')]('mggy'))||'',userList=[],userIdx=0x0,userCount=0x0;class UserInfo{constructor(_0x66f0cb){const _0x45b179=_0x2f8060,_0x110eb0={'OXTxR':function(_0x52055d,_0x1f2761){return _0x52055d===_0x1f2761;},'Uwiet':'QvVPt','yBVSK':'KJFDk'};this[_0x45b179(0x182,'(0c8')]=++userIdx,this[_0x45b179(0xbf,'m)En')]=this[_0x45b179(0x1db,'f9MQ')],this[_0x45b179(0x265,'laXK')]=![],this['canRead']=![];try{this['param']=$[_0x45b179(0x22d,'*K**')](_0x66f0cb),this[_0x45b179(0x111,']N4n')]=!![];}catch(_0x3fc54c){if(_0x110eb0['OXTxR'](_0x110eb0['Uwiet'],_0x110eb0[_0x45b179(0x7d,'g4Rv')])){if(_0x1323b6)_0x2051f8[_0x45b179(0xff,'^23k')](new _0x2931a3(_0x389ff9));}else this[_0x45b179(0x20a,'FV%K')]=![],$[_0x45b179(0xe8,'dgA$')](_0x45b179(0xad,'Vam2')+this[_0x45b179(0x19f,'^23k')]+_0x45b179(0xa4,'QWE9'));}}async['my'](){const _0x4c1fc9=_0x2f8060,_0x5907a1={'lNKRs':function(_0x23ceff,_0xe0fda8){return _0x23ceff!==_0xe0fda8;},'rcyXW':_0x4c1fc9(0x1a5,'mRR&'),'CugHY':'MhmMP','LHySE':function(_0x459e01,_0x56a748,_0xb0794e,_0x57c5ef){return _0x459e01(_0x56a748,_0xb0794e,_0x57c5ef);},'xuTSp':function(_0x2199c6,_0x3ca9d6,_0x3d767d){return _0x2199c6(_0x3ca9d6,_0x3d767d);},'cPDVO':_0x4c1fc9(0x22b,'H]4%'),'tnHYv':function(_0x4e72b0,_0x3f3dec){return _0x4e72b0==_0x3f3dec;}};try{if(_0x5907a1['lNKRs'](_0x5907a1[_0x4c1fc9(0x85,'bsCk')],_0x5907a1[_0x4c1fc9(0x202,'[F%Z')])){let _0x1960ee=_0x4c1fc9(0x10b,'#GT6'),_0x1a866c=''+this[_0x4c1fc9(0x24e,'4f*w')][_0x4c1fc9(0x216,'$w[R')],_0x3ab16b='',_0x55d874=_0x5907a1[_0x4c1fc9(0x12f,'jfdL')](populateUrlObject,_0x1960ee,_0x3ab16b,_0x1a866c);delete _0x55d874[_0x4c1fc9(0x192,'*K**')][_0x4c1fc9(0x1c0,'tH17')],await _0x5907a1[_0x4c1fc9(0x13e,'xU%F')](httpRequest,_0x5907a1['cPDVO'],_0x55d874);let _0x38271c=httpResult;if(!_0x38271c)return;_0x5907a1[_0x4c1fc9(0x241,'m1RX')](_0x38271c['code'],0xc8)?($[_0x4c1fc9(0xcb,'xaxu')]('账号['+this[_0x4c1fc9(0x21f,'P3JL')]+']等级:Lv'+_0x38271c[_0x4c1fc9(0xf3,'R6i*')][_0x4c1fc9(0xa1,'4f*w')]['level']+'\x20现有水滴:'+_0x38271c['data'][_0x4c1fc9(0xf9,'nNDy')][_0x4c1fc9(0x1eb,'^23k')]),this[_0x4c1fc9(0x1c3,'NdR6')]=_0x38271c['data'][_0x4c1fc9(0x9a,'f9MQ')],this[_0x4c1fc9(0x98,'$w[R')]=_0x38271c['data'][_0x4c1fc9(0xa2,'(*TO')][_0x4c1fc9(0x14c,'Vam2')],this[_0x4c1fc9(0x1e5,'tAzO')]=!![],this['canRead']=!![]):$['logAndNotify'](_0x4c1fc9(0xe0,'^23k')+this[_0x4c1fc9(0x171,'nNDy')]+_0x4c1fc9(0x15c,'#L*4'));}else return _0x12a261['resolve'](0x1);}catch(_0x186477){}finally{return Promise[_0x4c1fc9(0x238,')*LH')](0x1);}}async[_0x2f8060(0xbb,'IC82')](){const _0x3a762b=_0x2f8060,_0x716329={'OrjmD':function(_0x26e7bc,_0xaf2db9){return _0x26e7bc>_0xaf2db9;},'vFPHK':_0x3a762b(0x17d,'VKl0'),'NXMGQ':function(_0x4c9ec4,_0x50df8b,_0x49850f,_0x313d81){return _0x4c9ec4(_0x50df8b,_0x49850f,_0x313d81);},'DczkX':function(_0x349f53,_0x1f3cc6,_0x3908c8){return _0x349f53(_0x1f3cc6,_0x3908c8);},'NBXSz':_0x3a762b(0x10c,'mRR&'),'LtntL':function(_0x327b83,_0xdb0cc8){return _0x327b83==_0xdb0cc8;}};try{if(_0x716329[_0x3a762b(0xea,'H]4%')]!==_0x716329[_0x3a762b(0xac,'NdR6')]){let _0x3c850b=_0x521b15[_0x3a762b(0x190,'Vam2')];_0x716329[_0x3a762b(0x194,'9rtm')](_0x3c850b,0x1)?(_0x510f84['logAndNotify'](_0x3a762b(0x1ff,'H]4%')),_0x7a6c0c[_0x3a762b(0x128,'NdR6')](_0x3a762b(0xe1,'mRR&'))):(_0x48b640[_0x3a762b(0x24c,'(HuQ')]('有效账号小于2个去助力作者'),_0x85b7e6[_0x3a762b(0xc2,'Ihe6')](_0x3a762b(0x20e,'hJI4'))),_0x3ed5fe['push'](_0x17c6ea['receiveHelpDrips']());}else{let _0x538787='https://api-farm.game.mgtv.com/api/sign',_0x4a7605='',_0x251c79=''+this[_0x3a762b(0x163,')*LH')],_0x377a2b=_0x716329[_0x3a762b(0x8f,'^23k')](populateUrlObject,_0x538787,_0x251c79,_0x4a7605);await _0x716329[_0x3a762b(0x1a1,'f9MQ')](httpRequest,_0x716329[_0x3a762b(0x113,'jfdL')],_0x377a2b);let _0x229502=httpResult;if(!_0x229502)return;_0x716329[_0x3a762b(0x1bf,'tAzO')](_0x229502[_0x3a762b(0xef,'jfdL')],0xc8)&&_0x229502['data'][_0x3a762b(0x220,'laXK')]?$[_0x3a762b(0x1e9,'laXK')](_0x3a762b(0x15e,'a)J5')+this[_0x3a762b(0xda,'R6i*')]+']签到获得:获得'+_0x229502[_0x3a762b(0xd0,'mRR&')]['gainaward']['value']+'水滴'):$[_0x3a762b(0x264,'mRR&')](_0x3a762b(0x215,'m)En')+this[_0x3a762b(0xa7,']N4n')]+_0x3a762b(0x21c,'m)En'));}}catch(_0x123577){}finally{return Promise[_0x3a762b(0x108,'bo4A')](0x1);}}async[_0x2f8060(0x16d,'9rtm')](){const _0x6bf0a3=_0x2f8060,_0x3ae612={'nTFTz':function(_0x296866,_0x338ecd){return _0x296866===_0x338ecd;},'VOJTp':'fpvLQ','BHmDa':_0x6bf0a3(0x193,'f9MQ'),'GXrNT':function(_0x3795cb,_0xb73314){return _0x3795cb==_0xb73314;},'rCeNm':_0x6bf0a3(0x1d9,'NdR6')};try{if(_0x3ae612['nTFTz'](_0x3ae612['VOJTp'],'MnvWm'))return _0x57479e[_0x6bf0a3(0x11a,'$w[R')](0x1);else{let _0x4d2082=_0x6bf0a3(0x1f6,'(HuQ'),_0x598176=_0x6bf0a3(0x15d,'(HuQ'),_0x751eaf=''+this['token'],_0x29f19a=populateUrlObject(_0x4d2082,_0x751eaf,_0x598176);await httpRequest(_0x3ae612[_0x6bf0a3(0x1e2,'*K**')],_0x29f19a);let _0x4c1263=httpResult;if(!_0x4c1263)return;_0x3ae612[_0x6bf0a3(0x18b,'IC82')](_0x4c1263[_0x6bf0a3(0x125,'dgA$')],0xc8)&&_0x4c1263[_0x6bf0a3(0x205,'nNDy')][_0x6bf0a3(0x255,'#L*4')]?$[_0x6bf0a3(0x1c8,'m)En')](_0x6bf0a3(0x198,'4f*w')+this[_0x6bf0a3(0x1b7,'IC82')]+_0x6bf0a3(0x1c6,'R6i*')+_0x4c1263['data']['gainaward'][_0x6bf0a3(0x184,'NdR6')]+'水滴'):_0x3ae612['nTFTz'](_0x6bf0a3(0x93,'tAzO'),_0x3ae612[_0x6bf0a3(0x95,'FV%K')])?$['logAndNotify'](_0x6bf0a3(0x1c9,'bsCk')+this['name']+_0x6bf0a3(0x1a0,'tH17')):_0x225bae[_0x6bf0a3(0x224,'FV%K')](_0x6bf0a3(0x208,'VKl0')+this['name']+_0x6bf0a3(0x185,'^23k')+_0x30c204[_0x6bf0a3(0xe9,'OG0u')][_0x6bf0a3(0x13d,'bo4A')][_0x6bf0a3(0x97,'nNDy')]+'水滴');}}catch(_0x25671d){}finally{return Promise[_0x6bf0a3(0x238,')*LH')](0x1);}}async[_0x2f8060(0x1bc,'n&fn')](){const _0x1d4b17=_0x2f8060,_0x3ec226={'LmRag':'\x0a未找到CK\x20请阅读脚本说明','YXwqZ':function(_0x17df3d,_0x3d9446,_0x2b3473,_0x4bce14){return _0x17df3d(_0x3d9446,_0x2b3473,_0x4bce14);},'sJAdj':function(_0x3572c2,_0x21e2f3,_0xa7a8f5){return _0x3572c2(_0x21e2f3,_0xa7a8f5);},'bYlXF':'post','nCCex':function(_0x1a4076,_0x1a217d){return _0x1a4076==_0x1a217d;},'levyz':function(_0x2fbb57,_0x3bd5bc){return _0x2fbb57===_0x3bd5bc;},'wFcHi':_0x1d4b17(0xd7,'CR)H'),'AyBJP':function(_0x777236,_0x47f1cf){return _0x777236>_0x47f1cf;},'CcgNn':_0x1d4b17(0x16a,'yR#t')};try{let _0x1b0af4=_0x1d4b17(0x1c1,'&aJ)'),_0x29e267='',_0x94fd3f=''+this['token'],_0x344c99=_0x3ec226[_0x1d4b17(0x245,'(HuQ')](populateUrlObject,_0x1b0af4,_0x94fd3f,_0x29e267);await _0x3ec226[_0x1d4b17(0x140,'(0c8')](httpRequest,_0x3ec226['bYlXF'],_0x344c99);let _0x10c459=httpResult;if(!_0x10c459)return;_0x3ec226['nCCex'](_0x10c459[_0x1d4b17(0x14e,'n&fn')],0xc8)&&_0x10c459['data'][_0x1d4b17(0x1a3,'vRb&')]?_0x3ec226[_0x1d4b17(0x148,'m)En')](_0x3ec226['wFcHi'],'Clwux')?($[_0x1d4b17(0x223,'H]4%')](_0x1d4b17(0x107,']N4n')+this[_0x1d4b17(0xf8,'#L*4')]+']等级:'+_0x10c459[_0x1d4b17(0x204,'[F%Z')][_0x1d4b17(0x129,'Vam2')]+_0x1d4b17(0xa6,'Vam2')+_0x10c459['data'][_0x1d4b17(0x16e,'NdR6')]+'水滴'),_0x3ec226[_0x1d4b17(0x7b,'9rtm')](_0x10c459[_0x1d4b17(0x1d2,'xaxu')]['drips'],0xa)&&(await $['wait'](0x1388),await this[_0x1d4b17(0x8e,'g4Rv')]())):_0x5df320[_0x1d4b17(0x1fc,'#GT6')](_0x244e2b):$[_0x1d4b17(0x1e0,'4f*w')](_0x1d4b17(0x115,'OG0u')+this['name']+']水滴不足停止运行！');}catch(_0x3518f9){}finally{if(_0x1d4b17(0x1e4,'OG0u')!==_0x3ec226[_0x1d4b17(0x189,'QWE9')])return Promise[_0x1d4b17(0x14f,'tAzO')](0x1);else{_0x9f8e5b[_0x1d4b17(0x15f,'cPq#')](_0x3ec226[_0x1d4b17(0xe7,'OG0u')]);return;}}}async[_0x2f8060(0x1cf,'IC82')](){const _0x49a3ef=_0x2f8060,_0x2ee27e={'JSlII':function(_0x2a5b75,_0x22532c,_0x26a15c,_0x53b718){return _0x2a5b75(_0x22532c,_0x26a15c,_0x53b718);},'NgbQv':function(_0x4d39c0,_0xf0f5cd,_0x47176d){return _0x4d39c0(_0xf0f5cd,_0x47176d);},'HvWOT':function(_0x466d1e,_0x792369){return _0x466d1e===_0x792369;},'LGaBP':_0x49a3ef(0x17b,'laXK'),'dwmfs':'xfLIa'};try{let _0x2abae6=_0x49a3ef(0x1d7,'xaxu'),_0x348b1b='',_0x2cbed2=''+this[_0x49a3ef(0x1dd,'^23k')],_0x2a55a5=_0x2ee27e['JSlII'](populateUrlObject,_0x2abae6,_0x2cbed2,_0x348b1b);await _0x2ee27e[_0x49a3ef(0xcf,'cPq#')](httpRequest,'post',_0x2a55a5);let _0x2fcda0=httpResult;if(!_0x2fcda0)return;_0x2fcda0[_0x49a3ef(0x14e,'n&fn')]==0xc8&&_0x2fcda0[_0x49a3ef(0xf3,'R6i*')][_0x49a3ef(0x1e3,'[y^B')]?$[_0x49a3ef(0x166,'jfdL')]('账号['+this['name']+_0x49a3ef(0x230,'Vam2')+_0x2fcda0[_0x49a3ef(0x92,'VKl0')][_0x49a3ef(0xd8,')*LH')][_0x49a3ef(0x151,'tAzO')]+'水滴'):_0x2ee27e[_0x49a3ef(0x247,'(0c8')](_0x2ee27e[_0x49a3ef(0x12a,'g4Rv')],_0x2ee27e[_0x49a3ef(0x25b,'(*TO')])?$[_0x49a3ef(0x1c8,'m)En')]('账号['+this[_0x49a3ef(0xf5,'NdR6')]+']新手礼包:你已领取或已是老司机'):_0x50f86a[_0x49a3ef(0x144,'nNDy')]('账号['+this[_0x49a3ef(0xda,'R6i*')]+_0x49a3ef(0xf6,'[y^B'));}catch(_0xcda317){}finally{if(_0x2ee27e[_0x49a3ef(0x24d,'tH17')](_0x2ee27e[_0x49a3ef(0x18a,'bsCk')],_0x2ee27e[_0x49a3ef(0x188,'#L*4')]))return Promise[_0x49a3ef(0x21a,'vRb&')](0x1);else _0x1bc5a5[_0x49a3ef(0x23d,'n&fn')]('账号['+this[_0x49a3ef(0x1ee,'ln&e')]+_0x49a3ef(0x121,'4f*w')+_0xe91ccc[_0x49a3ef(0x205,'nNDy')][_0x49a3ef(0xf2,'xaxu')][_0x49a3ef(0xb2,'hJI4')]+'水滴');}}async['openbox'](){const _0x13b9b2=_0x2f8060,_0x16c7b3={'sckTY':function(_0x3ad5b5,_0x56704d,_0x1535bc,_0x2f53f9){return _0x3ad5b5(_0x56704d,_0x1535bc,_0x2f53f9);},'xhesU':function(_0x2767ad,_0x1a6284,_0x512173){return _0x2767ad(_0x1a6284,_0x512173);},'LyUHC':_0x13b9b2(0x211,'P3JL'),'jXgyd':function(_0x3444a9,_0x5c1122){return _0x3444a9==_0x5c1122;},'LFZXt':'qoBwK'};try{let _0x375876=_0x13b9b2(0xcc,'laXK'),_0x20235b='',_0x1fbdd=''+this['token'],_0x4de3d9=_0x16c7b3['sckTY'](populateUrlObject,_0x375876,_0x1fbdd,_0x20235b);await _0x16c7b3[_0x13b9b2(0x22f,'g4Rv')](httpRequest,_0x16c7b3[_0x13b9b2(0x25e,'#L*4')],_0x4de3d9);let _0x358ac3=httpResult;if(!_0x358ac3)return;_0x16c7b3[_0x13b9b2(0x16c,'#L*4')](_0x358ac3[_0x13b9b2(0x266,'nNDy')],0xc8)&&_0x358ac3['data'][_0x13b9b2(0x179,'VKl0')]?$['logAndNotify']('账号['+this['name']+']开宝箱:获得'+_0x358ac3[_0x13b9b2(0x1e8,'m1RX')][_0x13b9b2(0x7e,'OG0u')][_0x13b9b2(0x94,'xU%F')]+'水滴'):$[_0x13b9b2(0x23f,'P3JL')]('账号['+this[_0x13b9b2(0x1f9,'f9MQ')]+_0x13b9b2(0x11e,'[F%Z'));}catch(_0x42a2a3){}finally{return _0x16c7b3[_0x13b9b2(0x172,'*K**')]!==_0x13b9b2(0x83,'f9MQ')?_0x48a859[_0x13b9b2(0x8b,'xaxu')](0x1):Promise[_0x13b9b2(0x8d,'IC82')](0x1);}}async['collectBucket'](){const _0x2fef48=_0x2f8060,_0x3900d3={'UKuks':function(_0x24df41,_0x162a55){return _0x24df41===_0x162a55;},'mIRqj':_0x2fef48(0x1cd,'xU%F'),'IVYsm':function(_0x22416d,_0x2ad620){return _0x22416d==_0x2ad620;},'KztyI':function(_0x1f19ec,_0x37604d){return _0x1f19ec===_0x37604d;},'ekSnM':_0x2fef48(0x10e,'&aJ)')};try{if(_0x3900d3[_0x2fef48(0x14b,'f9MQ')](_0x2fef48(0x252,'(0c8'),_0x2fef48(0x82,'P3JL'))){let _0x29638e=_0x2fef48(0x161,'$w[R'),_0x4bb74e='',_0x49e0b3=''+this[_0x2fef48(0x153,'a)J5')],_0x3b6dcf=populateUrlObject(_0x29638e,_0x49e0b3,_0x4bb74e);await httpRequest(_0x3900d3[_0x2fef48(0x227,'Vam2')],_0x3b6dcf);let _0x4046ce=httpResult;if(!_0x4046ce)return;_0x3900d3[_0x2fef48(0xc3,'tH17')](_0x4046ce[_0x2fef48(0x22e,'VKl0')],0xc8)&&_0x4046ce['data'][_0x2fef48(0x132,'NdR6')]?$['logAndNotify'](_0x2fef48(0x226,'f9MQ')+this[_0x2fef48(0x21f,'P3JL')]+_0x2fef48(0x219,'dgA$')+_0x4046ce[_0x2fef48(0x19c,'P3JL')]['gainaward'][_0x2fef48(0xbc,'P3JL')]+'水滴'):_0x3900d3[_0x2fef48(0xdd,'f9MQ')](_0x3900d3['ekSnM'],_0x2fef48(0x1dc,'xU%F'))?_0x22a9c6=_0x38ac59[_0x2fef48(0x225,'tH17')](_0xe049fe['body']):$['logAndNotify'](_0x2fef48(0x213,'nB79')+this['name']+']收集桶:不可领取');}else _0x3b7a7d[_0x2fef48(0x1f5,'QWE9')](_0x2fef48(0x1f1,'(*TO')+this[_0x2fef48(0x23c,'xU%F')]+_0x2fef48(0x263,'f9MQ')+_0x10eb13[_0x2fef48(0x1b1,'FV%K')][_0x2fef48(0xb3,'(*TO')]+'阳光');}catch(_0x2b443d){}finally{return Promise[_0x2fef48(0x13c,'P3JL')](0x1);}}async[_0x2f8060(0x10a,'laXK')](){const _0x4b94ba=_0x2f8060,_0x53051e={'xizgA':function(_0x17381a,_0x131288,_0x43f7fa,_0x2fea2a){return _0x17381a(_0x131288,_0x43f7fa,_0x2fea2a);},'vDiTb':function(_0x224129,_0x4ecc75,_0x1d2a8f){return _0x224129(_0x4ecc75,_0x1d2a8f);},'JStaK':_0x4b94ba(0x11b,'jfdL'),'IrDts':function(_0x262744,_0x5158ae){return _0x262744!==_0x5158ae;},'EsANH':_0x4b94ba(0x19e,'dgA$')};try{let _0x30dfc6=_0x4b94ba(0x1b4,'tH17'),_0x33b051=_0x4b94ba(0x199,'H]4%')+this[_0x4b94ba(0x13f,']N4n')],_0x3d9e9f=''+this[_0x4b94ba(0x203,'VKl0')],_0x4a44ad=_0x53051e[_0x4b94ba(0xde,'f9MQ')](populateUrlObject,_0x30dfc6,_0x3d9e9f,_0x33b051);await _0x53051e[_0x4b94ba(0x12c,'$w[R')](httpRequest,_0x53051e[_0x4b94ba(0x90,'bsCk')],_0x4a44ad);let _0x33af00=httpResult;if(!_0x33af00)return;let _0x4ae810=_0x33af00?.['data']||[];for(let _0x48da40 of _0x4ae810){this[_0x4b94ba(0x24b,'bsCk')]=_0x48da40[_0x4b94ba(0x187,'vRb&')],this[_0x4b94ba(0x1fb,'QWE9')]=_0x48da40[_0x4b94ba(0x81,'IC82')],await $['wait'](0x1388),await this[_0x4b94ba(0x183,'QWE9')]();}}catch(_0x3f4f82){_0x53051e[_0x4b94ba(0x169,'m)En')](_0x4b94ba(0x10f,'OG0u'),_0x53051e[_0x4b94ba(0xf0,'$w[R')])?console['log'](_0x3f4f82):_0x269112[_0x4b94ba(0x176,'Ihe6')](_0x1338b7[_0x4b94ba(0x1b9,'P3JL')]());}finally{return Promise[_0x4b94ba(0x21a,'vRb&')](0x1);}}async[_0x2f8060(0x1d6,'mRR&')](){const _0x1a459a=_0x2f8060,_0x310257={'HZiEf':function(_0x949196,_0x4337ef,_0x29e818,_0x1559f4){return _0x949196(_0x4337ef,_0x29e818,_0x1559f4);},'pJFSU':function(_0x5f0510,_0x3cc2d7,_0x2c8463){return _0x5f0510(_0x3cc2d7,_0x2c8463);},'DSfBz':'post'};try{let _0x21c195=_0x1a459a(0x214,'VKl0'),_0x342408=_0x1a459a(0x1ad,'&aJ)')+this[_0x1a459a(0x1fa,'(*TO')]+_0x1a459a(0x160,'tAzO')+this['value'],_0x51d43a=''+this[_0x1a459a(0x181,'(HuQ')],_0x131921=_0x310257[_0x1a459a(0x158,'n&fn')](populateUrlObject,_0x21c195,_0x51d43a,_0x342408);await _0x310257[_0x1a459a(0x246,'mRR&')](httpRequest,_0x310257[_0x1a459a(0x7f,'f9MQ')],_0x131921);let _0x3018ae=httpResult;if(!_0x3018ae)return;await $['wait'](0x1388),await this[_0x1a459a(0x186,'[F%Z')]();}catch(_0xcc2210){}finally{return Promise[_0x1a459a(0x17a,'9rtm')](0x1);}}async[_0x2f8060(0x20c,'tAzO')](){const _0x3a7c1b=_0x2f8060,_0x40f111={'AnDul':function(_0x37243e,_0x319c11){return _0x37243e===_0x319c11;},'QltsX':'khMEN','pILxK':_0x3a7c1b(0x1b8,'nNDy'),'Wxheu':function(_0x46bd91,_0x1b6cd7,_0x1f3e57,_0x31d59f){return _0x46bd91(_0x1b6cd7,_0x1f3e57,_0x31d59f);},'OKBJY':_0x3a7c1b(0x258,'xaxu'),'hEObf':_0x3a7c1b(0x249,'#L*4'),'RqVYv':_0x3a7c1b(0x12d,'dgA$')};try{if(_0x40f111[_0x3a7c1b(0xbd,'R6i*')](_0x40f111['QltsX'],_0x40f111['pILxK']))_0x3b2714[_0x3a7c1b(0x1e0,'4f*w')](_0x3a7c1b(0xc9,'g4Rv')+this['name']+_0x3a7c1b(0x1ed,'FV%K'));else{let _0x3620c8=_0x3a7c1b(0x114,'n&fn')+this[_0x3a7c1b(0x196,'jfdL')],_0x4fa974=_0x3a7c1b(0x99,']N4n')+this['taskld'],_0x40552f=''+this[_0x3a7c1b(0x163,')*LH')],_0xa77479=_0x40f111[_0x3a7c1b(0x260,'laXK')](populateUrlObject,_0x3620c8,_0x40552f,_0x4fa974);await httpRequest(_0x40f111[_0x3a7c1b(0x23e,'bo4A')],_0xa77479);let _0x4594d7=httpResult;if(!_0x4594d7)return;_0x4594d7[_0x3a7c1b(0xef,'jfdL')]==0xc8&&_0x4594d7[_0x3a7c1b(0x96,'#GT6')][_0x3a7c1b(0x132,'NdR6')]?$['logAndNotify'](_0x3a7c1b(0xaf,'xU%F')+this[_0x3a7c1b(0x175,'FV%K')]+_0x3a7c1b(0xba,'g4Rv')+_0x4594d7[_0x3a7c1b(0x1d2,'xaxu')]['gainaward'][_0x3a7c1b(0x20f,'H]4%')]+'水滴'):_0x40f111[_0x3a7c1b(0xc5,'m1RX')](_0x40f111[_0x3a7c1b(0x22c,'(*TO')],_0x40f111[_0x3a7c1b(0x21d,')*LH')])?$[_0x3a7c1b(0x25c,'[y^B')](_0x3a7c1b(0x15e,'a)J5')+this[_0x3a7c1b(0x1f9,'f9MQ')]+_0x3a7c1b(0x137,'cPq#')):_0x59a943['logAndNotify']('账号['+this[_0x3a7c1b(0xf5,'NdR6')]+']开宝箱:获得'+_0x3c7496[_0x3a7c1b(0x205,'nNDy')]['gainaward'][_0x3a7c1b(0x20f,'H]4%')]+'水滴');}}catch(_0x501d89){}finally{if(_0x40f111[_0x3a7c1b(0x1f4,'*K**')]!==_0x40f111[_0x3a7c1b(0x24f,'^23k')])_0x27315c['logAndNotify']('账号['+this[_0x3a7c1b(0x14d,'tAzO')]+_0x3a7c1b(0x209,'g4Rv'));else return Promise[_0x3a7c1b(0x159,'[F%Z')](0x1);}}async[_0x2f8060(0xe4,'9rtm')](){const _0x2c4f8c=_0x2f8060,_0x415279={'MFqVu':function(_0x1f7cc3,_0x40899e){return _0x1f7cc3!==_0x40899e;},'OkVbv':_0x2c4f8c(0xd5,'$w[R'),'lMkgy':function(_0x505275,_0xf25c5a,_0x23766e,_0x3d5163){return _0x505275(_0xf25c5a,_0x23766e,_0x3d5163);},'HMOln':function(_0x35a8e1,_0x929dc4,_0x24486c){return _0x35a8e1(_0x929dc4,_0x24486c);}};try{if(_0x415279[_0x2c4f8c(0x19a,'tH17')](_0x415279[_0x2c4f8c(0x217,'ln&e')],_0x415279[_0x2c4f8c(0x207,'FV%K')]))return _0x18a9fe[_0x2c4f8c(0x17e,'laXK')](0x1);else{let _0x6c86a9='https://api-farm.game.mgtv.com/api/addHelpFriends',_0x4e9295=_0x2c4f8c(0xdc,'H]4%')+this[_0x2c4f8c(0x21b,'g4Rv')]+_0x2c4f8c(0x242,'ln&e')+this[_0x2c4f8c(0x9d,'(0c8')],_0x32ceaf=''+this[_0x2c4f8c(0x261,'nNDy')],_0x21c055=_0x415279['lMkgy'](populateUrlObject,_0x6c86a9,_0x32ceaf,_0x4e9295);await _0x415279[_0x2c4f8c(0x139,'a)J5')](httpRequest,_0x2c4f8c(0x1a6,'bsCk'),_0x21c055);let _0x445b27=httpResult;if(!_0x445b27)return;console[_0x2c4f8c(0x1c2,'nNDy')](_0x445b27);}}catch(_0x2809ed){}finally{return Promise[_0x2c4f8c(0x165,'dgA$')](0x1);}}async[_0x2f8060(0x9f,'dgA$')](){const _0x3bf3a8=_0x2f8060,_0x1e37d0={'VYemR':function(_0x46ff57,_0x1d34dc,_0x3e65ea,_0x426a91){return _0x46ff57(_0x1d34dc,_0x3e65ea,_0x426a91);},'uldrA':function(_0x120a7a,_0x46e348,_0x3a1767){return _0x120a7a(_0x46e348,_0x3a1767);},'kVnLx':_0x3bf3a8(0x120,'m)En'),'YcTrY':function(_0x2072ec,_0x34c7f5){return _0x2072ec==_0x34c7f5;},'FLaJo':_0x3bf3a8(0x1a7,'*K**'),'pbmcC':function(_0x2b591e,_0x1fefb){return _0x2b591e!==_0x1fefb;},'UDBbO':_0x3bf3a8(0x240,'bo4A')};try{let _0x336f75='https://api-farm.game.mgtv.com/api/receiveHelpDrips',_0x29d7b7='',_0x2a33f2=''+this['token'],_0x40af2f=_0x1e37d0[_0x3bf3a8(0x17c,'(HuQ')](populateUrlObject,_0x336f75,_0x2a33f2,_0x29d7b7);await _0x1e37d0[_0x3bf3a8(0x22a,'(0c8')](httpRequest,_0x1e37d0['kVnLx'],_0x40af2f);let _0x1ea02b=httpResult;if(!_0x1ea02b)return;if(_0x1e37d0['YcTrY'](_0x1ea02b[_0x3bf3a8(0xe5,'yR#t')],0xc8)&&_0x1ea02b[_0x3bf3a8(0x155,'Vam2')]['helpDripsCount']){if(_0x1e37d0['FLaJo']!==_0x1e37d0['FLaJo'])return _0x681314[_0x3bf3a8(0x25a,'#L*4')](0x1);else $[_0x3bf3a8(0x154,'$w[R')](_0x3bf3a8(0x229,'m1RX')+this[_0x3bf3a8(0x21f,'P3JL')]+']领取互助:获得'+_0x1ea02b['data'][_0x3bf3a8(0x1ef,'P3JL')]['value']+'水滴');}else{if(_0x1e37d0[_0x3bf3a8(0xf7,'hJI4')](_0x1e37d0['UDBbO'],_0x3bf3a8(0x1b2,'f9MQ')))$['logAndNotify']('账号['+this[_0x3bf3a8(0x162,'cPq#')]+_0x3bf3a8(0xdb,'bsCk'));else return _0x983d0d[_0x3bf3a8(0x178,'(*TO')](0x1);}}catch(_0x55240d){}finally{return Promise['resolve'](0x1);}}async[_0x2f8060(0x141,'P3JL')](){const _0x21caf6=_0x2f8060,_0x2f3d82={'PYtWK':function(_0x351a78,_0x124b1a,_0x1d6a7b){return _0x351a78(_0x124b1a,_0x1d6a7b);},'JePgf':function(_0x89a84f,_0x21efce){return _0x89a84f==_0x21efce;},'YrqjC':function(_0x29e22c,_0x31ae34){return _0x29e22c!==_0x31ae34;},'ZcLDu':'gAwqI','OVzhF':function(_0x4e72e6,_0x125a7b){return _0x4e72e6===_0x125a7b;},'SWwix':_0x21caf6(0x126,'xU%F'),'LodTQ':_0x21caf6(0x86,'[F%Z')};try{let _0x4bee67='https://api-farm.game.mgtv.com/api/uploadSunlightRain?sunlight=20',_0x53ac0f='sunlight=20',_0x1214a0=''+this[_0x21caf6(0xd9,'m1RX')],_0x32bcd1=populateUrlObject(_0x4bee67,_0x1214a0,_0x53ac0f);await _0x2f3d82[_0x21caf6(0xd4,'Ihe6')](httpRequest,_0x21caf6(0x1af,'[y^B'),_0x32bcd1);let _0x2e6b7f=httpResult;if(!_0x2e6b7f)return;_0x2f3d82[_0x21caf6(0x12b,'NdR6')](_0x2e6b7f[_0x21caf6(0x125,'dgA$')],0xc8)&&_0x2e6b7f[_0x21caf6(0x92,'VKl0')]['sunlight']?_0x2f3d82[_0x21caf6(0x8a,'m)En')](_0x2f3d82[_0x21caf6(0x170,'R6i*')],_0x2f3d82[_0x21caf6(0xa9,'H]4%')])?(this[_0x21caf6(0x1fe,'VKl0')]=![],_0x1cd505[_0x21caf6(0x1aa,'CR)H')](_0x21caf6(0x1a8,'Ihe6')+this[_0x21caf6(0x1a4,'mRR&')]+_0x21caf6(0x12e,'bo4A'))):$[_0x21caf6(0x124,'nB79')](_0x21caf6(0x157,'(HuQ')+this[_0x21caf6(0xa7,']N4n')]+_0x21caf6(0x1cc,'tH17')+_0x2e6b7f['data'][_0x21caf6(0x145,'m)En')]+'阳光'):$[_0x21caf6(0xd3,'cPq#')](_0x21caf6(0x91,'laXK')+this['name']+_0x21caf6(0x233,'P3JL'));}catch(_0x2c5043){}finally{if(_0x2f3d82[_0x21caf6(0x7a,'ln&e')](_0x2f3d82[_0x21caf6(0x228,'P3JL')],_0x2f3d82['LodTQ']))_0x1113c8[_0x21caf6(0x1b6,'hJI4')]('账号['+this['name']+_0x21caf6(0x197,')*LH')+_0x54e418['data'][_0x21caf6(0x100,'yR#t')][_0x21caf6(0x150,'$w[R')]+'水滴');else return Promise['resolve'](0x1);}}}function _0x56d6(_0xa73ff9,_0x1b213f){const _0xafdbfe=_0xafdb;return _0x56d6=function(_0x56d6e1,_0x40a9fa){_0x56d6e1=_0x56d6e1-0x78;let _0x3c909c=_0xafdbfe[_0x56d6e1];if(_0x56d6['BUAieM']===undefined){var _0x575f40=function(_0x4ffd59){const _0x53c152='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x33e649='',_0x542e0c='';for(let _0x4ec602=0x0,_0x15701c,_0x58a1d0,_0x38d906=0x0;_0x58a1d0=_0x4ffd59['charAt'](_0x38d906++);~_0x58a1d0&&(_0x15701c=_0x4ec602%0x4?_0x15701c*0x40+_0x58a1d0:_0x58a1d0,_0x4ec602++%0x4)?_0x33e649+=String['fromCharCode'](0xff&_0x15701c>>(-0x2*_0x4ec602&0x6)):0x0){_0x58a1d0=_0x53c152['indexOf'](_0x58a1d0);}for(let _0x4cedd4=0x0,_0x48b3a9=_0x33e649['length'];_0x4cedd4<_0x48b3a9;_0x4cedd4++){_0x542e0c+='%'+('00'+_0x33e649['charCodeAt'](_0x4cedd4)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x542e0c);};const _0x266a7e=function(_0x31d075,_0x3784ba){let _0x4a7d8a=[],_0x115c1e=0x0,_0x19eada,_0x430d19='';_0x31d075=_0x575f40(_0x31d075);let _0x4f8638;for(_0x4f8638=0x0;_0x4f8638<0x100;_0x4f8638++){_0x4a7d8a[_0x4f8638]=_0x4f8638;}for(_0x4f8638=0x0;_0x4f8638<0x100;_0x4f8638++){_0x115c1e=(_0x115c1e+_0x4a7d8a[_0x4f8638]+_0x3784ba['charCodeAt'](_0x4f8638%_0x3784ba['length']))%0x100,_0x19eada=_0x4a7d8a[_0x4f8638],_0x4a7d8a[_0x4f8638]=_0x4a7d8a[_0x115c1e],_0x4a7d8a[_0x115c1e]=_0x19eada;}_0x4f8638=0x0,_0x115c1e=0x0;for(let _0x1cd505=0x0;_0x1cd505<_0x31d075['length'];_0x1cd505++){_0x4f8638=(_0x4f8638+0x1)%0x100,_0x115c1e=(_0x115c1e+_0x4a7d8a[_0x4f8638])%0x100,_0x19eada=_0x4a7d8a[_0x4f8638],_0x4a7d8a[_0x4f8638]=_0x4a7d8a[_0x115c1e],_0x4a7d8a[_0x115c1e]=_0x19eada,_0x430d19+=String['fromCharCode'](_0x31d075['charCodeAt'](_0x1cd505)^_0x4a7d8a[(_0x4a7d8a[_0x4f8638]+_0x4a7d8a[_0x115c1e])%0x100]);}return _0x430d19;};_0x56d6['eLEBjv']=_0x266a7e,_0xa73ff9=arguments,_0x56d6['BUAieM']=!![];}const _0x97cdb9=_0xafdbfe[0x0],_0x428710=_0x56d6e1+_0x97cdb9,_0x569a16=_0xa73ff9[_0x428710];return!_0x569a16?(_0x56d6['tSpHxA']===undefined&&(_0x56d6['tSpHxA']=!![]),_0x3c909c=_0x56d6['eLEBjv'](_0x3c909c,_0x40a9fa),_0xa73ff9[_0x428710]=_0x3c909c):_0x3c909c=_0x569a16,_0x3c909c;},_0x56d6(_0xa73ff9,_0x1b213f);}!(async()=>{const _0x4c7bd4=_0x2f8060,_0x174278={'futmm':'undefined','scazJ':function(_0x4261b6){return _0x4261b6();},'skeXr':'\x0a--------------\x20账号检测\x20--------------','MeFLW':_0x4c7bd4(0xe3,'FV%K'),'uHxem':function(_0x33e03f,_0x3efdf5){return _0x33e03f>_0x3efdf5;},'pKwaL':function(_0x191cba,_0x224b5f){return _0x191cba===_0x224b5f;},'VNHhA':_0x4c7bd4(0x1fd,'(*TO'),'qPmzu':_0x4c7bd4(0x1d3,'*K**'),'ndfEt':function(_0x18ef98,_0x412b03){return _0x18ef98>_0x412b03;},'uYNEO':function(_0xc42631,_0x5e2265){return _0xc42631!==_0x5e2265;},'bnozi':_0x4c7bd4(0xce,'m)En'),'MqneG':_0x4c7bd4(0x177,'[F%Z'),'jufNJ':_0x4c7bd4(0x18d,'g4Rv'),'aYvtg':_0x4c7bd4(0x146,'VKl0'),'vybSd':'助力任务还没写助力个铲铲','TNIFB':_0x4c7bd4(0x11f,'#L*4'),'CjxJM':_0x4c7bd4(0x1ce,'&aJ)'),'ddBAp':_0x4c7bd4(0x78,'jfdL')};if(typeof $request!==_0x174278[_0x4c7bd4(0x18e,'m)En')]){}else{if(!await _0x174278[_0x4c7bd4(0x116,')*LH')](checkEnv))return;await sc();let _0x2586ce=[],_0x599142=userList[_0x4c7bd4(0x257,'f9MQ')](_0x1fce86=>_0x1fce86[_0x4c7bd4(0xe2,'nNDy')]);if(_0x599142[_0x4c7bd4(0xaa,')*LH')]>0x0){$[_0x4c7bd4(0x17f,'f9MQ')](_0x174278[_0x4c7bd4(0xc0,'dgA$')]),_0x2586ce=[];for(let _0x13d6ed of _0x599142){'BFvJW'===_0x174278['MeFLW']?(_0x2586ce['push'](_0x13d6ed['my']()),await $[_0x4c7bd4(0x25f,'yR#t')](0xbb8)):_0x4a0d8b[_0x4c7bd4(0x154,'$w[R')]('账号['+this[_0x4c7bd4(0x123,'4f*w')]+_0x4c7bd4(0x1cb,'xaxu'));}await Promise['all'](_0x2586ce),_0x599142=_0x599142[_0x4c7bd4(0x13b,'m)En')](_0x484500=>_0x484500['valid']);if(_0x174278[_0x4c7bd4(0x167,'xU%F')](_0x599142[_0x4c7bd4(0x24a,'nNDy')],0x0)){if(_0x174278[_0x4c7bd4(0x152,'yR#t')](_0x174278['VNHhA'],'dlMBd')){$[_0x4c7bd4(0xfc,'tAzO')](_0x174278['qPmzu']),_0x2586ce=[];for(let _0x282ba6 of _0x599142[_0x4c7bd4(0x21e,'FV%K')](_0x54b321=>_0x54b321['canRead'])){let _0x27e9f9=_0x599142['length'];_0x174278['ndfEt'](_0x27e9f9,0x1)?_0x174278['uYNEO']('vQwzk',_0x174278[_0x4c7bd4(0xcd,'^23k')])?($['logAndNotify'](_0x174278[_0x4c7bd4(0x11c,'IC82')]),console['log'](_0x4c7bd4(0x103,'nB79'))):_0x168ba1=_0x14df7e['parse'](_0x52282b['body']):_0x174278[_0x4c7bd4(0x136,'g4Rv')]===_0x174278[_0x4c7bd4(0x1e6,'(HuQ')]?($[_0x4c7bd4(0x19b,'xU%F')](_0x174278[_0x4c7bd4(0xfb,'IC82')]),console['log'](_0x174278[_0x4c7bd4(0xd1,'vRb&')])):_0xc15e70[_0x4c7bd4(0x18f,'^23k')](_0x362ffd),_0x2586ce[_0x4c7bd4(0x1ba,'#GT6')](_0x282ba6[_0x4c7bd4(0x236,'R6i*')]());}await Promise[_0x4c7bd4(0x1f2,'[F%Z')](_0x2586ce),$[_0x4c7bd4(0x13a,'g4Rv')](_0x4c7bd4(0x25d,'NdR6')),_0x2586ce=[];for(let _0x1e4d07 of _0x599142[_0x4c7bd4(0x117,'QWE9')](_0x4f3fb6=>_0x4f3fb6[_0x4c7bd4(0xa8,'f9MQ')])){if(_0x174278[_0x4c7bd4(0x1d1,'cPq#')](_0x174278[_0x4c7bd4(0xbe,'9rtm')],_0x4c7bd4(0xae,'Vam2'))){const _0xd93493=_0x4c7bd4(0x149,'*K**')[_0x4c7bd4(0xb8,'OG0u')]('|');let _0x59b3e4=0x0;while(!![]){switch(_0xd93493[_0x59b3e4++]){case'0':await $[_0x4c7bd4(0x130,'m1RX')](0x1388);continue;case'1':await $[_0x4c7bd4(0x9e,'n&fn')](0xbb8);continue;case'2':_0x2586ce[_0x4c7bd4(0x262,'VKl0')](_0x1e4d07['gainTaskAward1']());continue;case'3':_0x2586ce[_0x4c7bd4(0x156,'IC82')](_0x1e4d07['collectBucket']());continue;case'4':await $[_0x4c7bd4(0x235,'g4Rv')](0x1388);continue;case'5':await $[_0x4c7bd4(0x9e,'n&fn')](0x1388);continue;case'6':await $[_0x4c7bd4(0xc8,'*K**')](0xbb8);continue;case'7':_0x2586ce[_0x4c7bd4(0x106,'xaxu')](_0x1e4d07[_0x4c7bd4(0xfa,'Vam2')]());continue;case'8':_0x2586ce[_0x4c7bd4(0x7c,'a)J5')](_0x1e4d07[_0x4c7bd4(0xfd,'jfdL')]());continue;case'9':await $['wait'](0x1388);continue;case'10':_0x2586ce[_0x4c7bd4(0x237,'4f*w')](_0x1e4d07[_0x4c7bd4(0x142,'(0c8')]());continue;case'11':_0x2586ce['push'](_0x1e4d07['sign']());continue;}break;}}else return _0x23240c[_0x4c7bd4(0x218,'g4Rv')](0x1);}await Promise['all'](_0x2586ce),$[_0x4c7bd4(0x24c,'(HuQ')](_0x4c7bd4(0x1d0,'laXK')),_0x2586ce=[];for(let _0x393c50 of _0x599142[_0x4c7bd4(0x15a,']N4n')](_0x3adfc7=>_0x3adfc7[_0x4c7bd4(0x239,'CR)H')])){_0x2586ce[_0x4c7bd4(0x1ec,'*K**')](_0x393c50['liulan']());}await Promise['all'](_0x2586ce);}else try{_0x5e7dab=_0x3061b5[_0x4c7bd4(0x1b3,'jfdL')](_0x5a924e[_0x4c7bd4(0x1de,'VKl0')]);}catch(_0x1633c0){_0xf0fb7d=_0x9ae70a[_0x4c7bd4(0xd6,'xU%F')];}}if(_0x174278['ndfEt'](_0x599142[_0x4c7bd4(0xaa,')*LH')],0x0)){$[_0x4c7bd4(0x256,'&aJ)')](_0x174278['CjxJM']),_0x2586ce=[];for(let _0xea0a77 of _0x599142[_0x4c7bd4(0x243,'Vam2')](_0x422e15=>_0x422e15[_0x4c7bd4(0xc7,'[y^B')])){_0x174278[_0x4c7bd4(0x122,'xaxu')](_0x4c7bd4(0x1f0,'(HuQ'),_0x174278[_0x4c7bd4(0x105,'g4Rv')])?_0x1a178a=_0x143f1e[_0x4c7bd4(0xb1,'tAzO')]:_0x2586ce[_0x4c7bd4(0x222,'m1RX')](_0xea0a77[_0x4c7bd4(0x1c5,'Ihe6')]());}await Promise[_0x4c7bd4(0x101,'cPq#')](_0x2586ce);}}await $[_0x4c7bd4(0xa3,'laXK')]();}})()[_0x2f8060(0x110,'bsCk')](_0x2c12fa=>console[_0x2f8060(0x1fc,'#GT6')](_0x2c12fa))['finally'](()=>$['done']());async function sc(){const _0x18f188=_0x2f8060,_0x41ac1d={'QASGt':function(_0x1914e2){return _0x1914e2();},'UEsEt':function(_0x3224a8,_0x2317f5){return _0x3224a8===_0x2317f5;},'eBGPR':_0x18f188(0x89,'9rtm'),'RHgmf':function(_0x26d269,_0x1be641,_0x231ee3){return _0x26d269(_0x1be641,_0x231ee3);},'DSEFI':_0x18f188(0x16f,'a)J5')};try{if(_0x41ac1d[_0x18f188(0x1ac,'[F%Z')](_0x41ac1d[_0x18f188(0x1df,'P3JL')],_0x41ac1d[_0x18f188(0x1e1,'f9MQ')])){let _0xceeda4=_0x18f188(0x1b0,'VKl0'),_0x3bf7ac='',_0x1a1f4a=_0x41ac1d[_0x18f188(0x1c7,'f9MQ')](populateUrlObject,_0xceeda4,_0x3bf7ac);await _0x41ac1d[_0x18f188(0x20b,'&aJ)')](httpRequest,_0x41ac1d[_0x18f188(0xb5,'$w[R')],_0x1a1f4a);let _0x3c2c60=httpResult;if(!_0x3c2c60)return;$[_0x18f188(0x1f7,'#GT6')]('\x0a'+_0x3c2c60['content']+_0x18f188(0x80,'&aJ)')+_0x3c2c60[_0x18f188(0x19d,']N4n')]+'》'+_0x3c2c60[_0x18f188(0xc6,'(0c8')]);var _0x535976=_0x3c2c60['content'];}else _0x41ac1d[_0x18f188(0xfe,'jfdL')](_0x271884);}catch(_0x2181f9){}finally{return Promise[_0x18f188(0xb7,'NdR6')](0x1);}}async function checkEnv(){const _0x3135aa=_0x2f8060,_0xfa9482={'BZTiA':_0x3135aa(0xc4,'^23k'),'IhQDf':function(_0x5b1d75,_0x387490){return _0x5b1d75>_0x387490;},'gsdWs':function(_0x3d4a3b,_0x232078){return _0x3d4a3b===_0x232078;},'tSGDn':_0x3135aa(0x1d8,'xaxu')};if(userCookie){let _0x54347f=envSplitor[0x0];for(let _0x501215 of envSplitor){if(_0xfa9482[_0x3135aa(0x212,'Vam2')](userCookie[_0x3135aa(0x1c4,'xaxu')](_0x501215),-0x1)){_0x54347f=_0x501215;break;}}for(let _0x2723f4 of userCookie['split'](_0x54347f)){if(_0x2723f4)userList['push'](new UserInfo(_0x2723f4));}userCount=userList[_0x3135aa(0xa0,'tAzO')];}else{if(_0xfa9482[_0x3135aa(0x20d,'tAzO')](_0xfa9482[_0x3135aa(0x174,'hJI4')],_0x3135aa(0x138,'mRR&'))){console[_0x3135aa(0x104,'4f*w')](_0x3135aa(0x87,'g4Rv'));return;}else{const _0x3c0ef5=_0xfa9482['BZTiA'][_0x3135aa(0xd2,'9rtm')]('|');let _0x3ab01c=0x0;while(!![]){switch(_0x3c0ef5[_0x3ab01c++]){case'0':this['valid']=![];continue;case'1':this[_0x3135aa(0x23a,'n&fn')]=![];continue;case'2':this[_0x3135aa(0x8c,'R6i*')]=++_0x542e0c;continue;case'3':this[_0x3135aa(0xe6,'(*TO')]=this[_0x3135aa(0xdf,'(*TO')];continue;case'4':try{this[_0x3135aa(0x112,'yR#t')]=_0x38d906[_0x3135aa(0xec,'&aJ)')](_0x4cedd4),this[_0x3135aa(0x232,'4f*w')]=!![];}catch(_0x4d5fa6){this['ckValid']=![],_0x31d075['logAndNotify'](_0x3135aa(0x1b5,'bo4A')+this[_0x3135aa(0x1da,'#L*4')]+']CK格式错误');}continue;}break;}}}return console['log']('共找到'+userCount+_0x3135aa(0x134,'#L*4')),!![];}function populateUrlObject(_0x2b4721,_0x3121bb,_0x28c0ee=''){const _0x54e36d=_0x2f8060,_0x67b5c7={'LWUtO':_0x54e36d(0x79,'mRR&')};let _0x51118d=_0x2b4721['replace']('//','/')[_0x54e36d(0xb8,'OG0u')]('/')[0x1],_0x386a9c={'url':_0x2b4721,'headers':{'Host':_0x51118d,'autohrization':_0x3121bb,'User-Agent':defaultUA},'timeout':0x1388};return _0x28c0ee&&(_0x386a9c['body']=_0x28c0ee,_0x386a9c[_0x54e36d(0x16b,']N4n')][_0x67b5c7[_0x54e36d(0x200,'tH17')]]=_0x54e36d(0x1a9,'^23k'),_0x386a9c[_0x54e36d(0x147,'[y^B')][_0x54e36d(0x23b,'[F%Z')]=_0x386a9c[_0x54e36d(0xed,'hJI4')]?_0x386a9c[_0x54e36d(0x10d,'Ihe6')][_0x54e36d(0x15b,'jfdL')]:0x0),_0x386a9c;}async function httpRequest(_0x397aac,_0x43e7b9){const _0x263785=_0x2f8060,_0x389817={'RbHqw':function(_0x2bda2f,_0x395638){return _0x2bda2f===_0x395638;},'IkfXR':_0x263785(0x191,'NdR6'),'IgJtK':_0x263785(0x1be,'nB79'),'NDGms':_0x263785(0x244,'#GT6'),'clloq':'dQXJe','AYZvf':_0x263785(0x234,'^23k'),'YwWRj':_0x263785(0x254,'CR)H'),'NzSvV':_0x263785(0x9c,'[y^B')};return httpResult=null,httpReq=null,httpResp=null,new Promise(_0xed052e=>{const _0x14db5e=_0x263785,_0x30c6ef={'LHNJk':function(_0x2cbf6f,_0x57b5e0){const _0x24070b=_0x56d6;return _0x389817[_0x24070b(0xca,'*K**')](_0x2cbf6f,_0x57b5e0);},'ZhiDN':_0x389817[_0x14db5e(0x251,'n&fn')],'CKtLJ':_0x389817[_0x14db5e(0x102,'bsCk')],'FwMbw':_0x389817[_0x14db5e(0x164,'dgA$')],'YwHlX':_0x389817['clloq'],'zpMPT':function(_0x3324ee,_0x1474fb){return _0x3324ee==_0x1474fb;},'Grxus':_0x389817[_0x14db5e(0xb9,'vRb&')],'Lfzcn':function(_0x20f43b,_0x1e7538){const _0x3b83c4=_0x14db5e;return _0x389817[_0x3b83c4(0xc1,'xU%F')](_0x20f43b,_0x1e7538);},'FlXGY':_0x389817[_0x14db5e(0xb0,')*LH')],'VmCXs':_0x389817[_0x14db5e(0x1ab,'#L*4')],'iVtAc':_0x14db5e(0x210,'cPq#'),'EvAlt':function(_0x2c9f9d){return _0x2c9f9d();}};$[_0x14db5e(0x1d4,'(0c8')](_0x397aac,_0x43e7b9,async(_0x48a072,_0x3cd1ae,_0x409cde)=>{const _0x1d6c09=_0x14db5e,_0x234e56={'SSChW':_0x1d6c09(0xf1,'&aJ)'),'KHwRt':_0x1d6c09(0x259,'Vam2')};try{httpReq=_0x3cd1ae,httpResp=_0x409cde;if(_0x48a072)_0x30c6ef['LHNJk'](_0x30c6ef[_0x1d6c09(0xf4,'(HuQ')],_0x30c6ef[_0x1d6c09(0x231,'NdR6')])?_0x42745f[_0x1d6c09(0x143,'^23k')](_0x1d6c09(0x18c,'n&fn')+this[_0x1d6c09(0x168,'&aJ)')]+_0x1d6c09(0x250,'[y^B')):httpResult=JSON[_0x1d6c09(0x133,'nNDy')](_0x3cd1ae[_0x1d6c09(0x1f3,'yR#t')]);else{if(_0x30c6ef[_0x1d6c09(0x9b,'n&fn')](_0x30c6ef[_0x1d6c09(0x206,'VKl0')],_0x30c6ef[_0x1d6c09(0x221,'QWE9')]))return _0x32fd6f['resolve'](0x1);else{if(_0x409cde[_0x1d6c09(0x127,'NdR6')]){if(_0x30c6ef[_0x1d6c09(0x1bb,'bsCk')](typeof _0x409cde['body'],_0x30c6ef['Grxus']))httpResult=_0x409cde[_0x1d6c09(0x119,'nNDy')];else{if(_0x30c6ef[_0x1d6c09(0xb6,'$w[R')](_0x30c6ef[_0x1d6c09(0x173,'bo4A')],_0x30c6ef['VmCXs']))_0x5402b4[_0x1d6c09(0x25c,'[y^B')](_0x234e56['SSChW']),_0x2810d5[_0x1d6c09(0xee,'tAzO')](_0x234e56[_0x1d6c09(0x201,'tAzO')]);else try{httpResult=JSON[_0x1d6c09(0x14a,'P3JL')](_0x409cde['body']);}catch(_0x3bd080){httpResult=_0x409cde['body'];}}}}}}catch(_0x59de08){_0x30c6ef['LHNJk'](_0x1d6c09(0xeb,'(0c8'),_0x30c6ef['iVtAc'])?_0x308119[_0x1d6c09(0x1ea,'(0c8')]('账号['+this[_0x1d6c09(0x1e7,'a)J5')]+_0x1d6c09(0x11d,'jfdL')):console[_0x1d6c09(0x1ae,'9rtm')](_0x59de08);}finally{_0x30c6ef[_0x1d6c09(0x248,')*LH')](_0xed052e);}});});}var version_ = 'jsjiami.com.v7';

////////////////////////////////////////////////////////////////////
function Env(name,env) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
    return new class {
        constructor(name,env) {
            this.name = name
            this.notifyStr = ''
            this.startTime = (new Date).getTime()
            Object.assign(this,env)
            console.log(`${this.name} 开始运行：`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const[, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const[, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                o = this.getval(i),
                h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                    s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                    s = this.setval(JSON.stringify(o), i)
                }
            }
            else {
                s = this.setval(t, e);
            }
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        send(m, t, e = (() => {})) {
            if(m != 'get' && m != 'post' && m != 'put' && m != 'delete') {
                console.log(`无效的http方法：${m}`);
                return;
            }
            if(m == 'get' && t.headers) {
                delete t.headers["content-type"];
                delete t.headers["Content-Length"];
            } else if(t.body && t.headers) {
                if(!t.headers["content-type"]) t.headers["content-type"] = "application/json";
            }
            if(this.isSurge() || this.isLoon()) {
                if(this.isSurge() && this.isNeedRewrite) {
                    t.headers = t.headers || {};
                    Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1});
                }
                let conf = {
                    method: m,
                    url: t.url,
                    headers: t.headers,
                    timeout: t.timeout,
                    data: t.body
                };
                if(m == 'get') delete conf.data
                $axios(conf).then(t => {
                    const {
                        status: i,
                        request: q,
                        headers: r,
                        data: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    });
                }).catch(err => console.log(err))
            } else if (this.isQuanX()) {
                t.method = m.toUpperCase(), this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        hints: !1
                    })),
                $task.fetch(t).then(t => {
                    const {
                        statusCode: i,
                        request: q,
                        headers: r,
                        body: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    })
                }, t => e(t))
            } else if (this.isNode()) {
                this.got = this.got ? this.got : require("got");
                const {
                    url: s,
                    ...i
                } = t;
                this.instance = this.got.extend({
                    followRedirect: false
                });
                this.instance[m](s, i).then(t => {
                    const {
                        statusCode: i,
                        request: q,
                        headers: r,
                        body: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    })
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "h+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        async showmsg() {
            if(!this.notifyStr) return;
            let notifyBody = this.name + " 运行通知\n\n" + this.notifyStr
            if($.isNode()){
                var notify = require('./sendNotify');
                console.log('\n============== 推送 ==============')
                await notify.sendNotify(this.name, notifyBody);
            } else {
                this.msg(notifyBody);
            }
        }
        logAndNotify(str) {
            console.log(str)
            this.notifyStr += str
            this.notifyStr += '\n'
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                 : this.isSurge() ? {
                    url: t
                }
                 : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                        s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                        s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "============== 系统通知 =============="];
            h.push(e),
            s && h.push(s),
            i && h.push(i),
            console.log(h.join("\n"))
        }
        getMin(a,b){
            return ((a<b) ? a : b)
        }
        getMax(a,b){
            return ((a<b) ? b : a)
        }
        padStr(num,length,padding='0') {
            let numStr = String(num)
            let numPad = (length>numStr.length) ? (length-numStr.length) : 0
            let retStr = ''
            for(let i=0; i<numPad; i++) {
                retStr += padding
            }
            retStr += numStr
            return retStr;
        }
        json2str(obj,c,encodeUrl=false) {
            let ret = []
            for(let keys of Object.keys(obj).sort()) {
                let v = obj[keys]
                if(v && encodeUrl) v = encodeURIComponent(v)
                ret.push(keys+'='+v)
            }
            return ret.join(c);
        }
        str2json(str,decodeUrl=false) {
            let ret = {}
            for(let item of str.split('#')) {
                if(!item) continue;
                let idx = item.indexOf('=')
                if(idx == -1) continue;
                let k = item.substr(0,idx)
                let v = item.substr(idx+1)
                if(decodeUrl) v = decodeURIComponent(v)
                ret[k] = v
            }
            return ret;
        }
        randomString(len,charset='abcdef0123456789') {
            let str = '';
            for (let i = 0; i < len; i++) {
                str += charset.charAt(Math.floor(Math.random()*charset.length));
            }
            return str;
        }
        randomList(a) {
            let idx = Math.floor(Math.random()*a.length)
            return a[idx]
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
            s = (e - this.startTime) / 1e3;
            console.log(`\n${this.name} 运行结束，共运行了 ${s} 秒！`)
            if(this.isSurge() || this.isQuanX() || this.isLoon()) $done(t)
        }
    }(name,env)
}