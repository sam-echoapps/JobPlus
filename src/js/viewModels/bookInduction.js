define(['ojs/ojcore',"knockout","jquery","appController", "ojs/ojconverterutils-i18n","ojs/ojarraydataprovider", 
    "ojs/ojknockout", "ojs/ojswitch", "ojs/ojdatetimepicker", "ojs/ojselectsingle"], 
function (oj,ko,$, app, ojconverterutils_i18n_1, ArrayDataProvider) {

    class Induction {
        constructor(context) {
            var self = this;
            
            self.day = ko.observable(ojconverterutils_i18n_1.IntlConverterUtils.dateToLocalIsoDateString(new Date()));
            self.timeSlot = ko.observable();
            self.dates = ko.observable();

            var BaseURL = sessionStorage.getItem("BaseURL")
            
            self.time = [
                { value: "time1", label: "Time1" },
                { value: "time2", label: "Time2" },
                { value: "time3", label: "Time3" },
                { value: "time4", label: "Time4" },
                { value: "time5", label: "Time5" },
            ];

            self.timeSlots = new ArrayDataProvider(self.time, {
                keyAttributes: "value",
            });

            self.showDate = ()=>{
                document.getElementById("timeSlots").style.display = "block";
                console.log(self.day());
                $.ajax({
                    url: BaseURL + "/getInductionTime",
                    method: 'POST',
                    data: JSON.stringify({
                        inductionDate : self.day(),
                    }),
                    success: function(data) {
                        console.log(data);
                    },
                    error: function(xhr, status, error) {
                        console.log(xhr.responseText);
                        console.log(status);
                        console.log(error);
                    }
                })
            }

            self.getInductionDates = ()=>{
                $.ajax({
                    url: BaseURL + "/getInductionDates",
                    method: 'GET',
                    success: function(data) {
                        data = JSON.parse(data)
                        self.dates(data)
                        console.log(self.dates());
                    },
                    error: function(xhr, status, error) {
                        console.log(xhr.responseText);
                        console.log(status);
                        console.log(error);
                    }
                }) 
            }
            self.getInductionDates()
            self.dayFormatter = ko.observable((dateInfo) => {
                let month = dateInfo.month, date = dateInfo.date, fullYear = dateInfo.fullYear;
                let len = self.dates().length;
                for(var i=0;i<len;i++){
                    let date = self.dates()[i][0];
                    date = new Date(Date.parse(date));
                    var mont = date.getMonth()+1;
                    var year = date.getFullYear();
                    var day = date.getDate();
                }
                if (month == mont && date == day) {
                    return {
                        className: 'Induction day',
                        tooltip: 'Induction seats available'
                    };
                }
                if (fullYear == 2023 && month == mont && date != day) {
                    return { disabled: true };
                }
                if(fullYear == year && month != mont){
                    return { disabled: true}
                }
                return null;
            });
        }
            
    }
    return  Induction;

});
