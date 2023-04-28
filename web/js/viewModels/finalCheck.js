define(['ojs/ojcore',"knockout","jquery","appController","ojs/ojconverterutils-i18n", "ojs/ojarraydataprovider",'ojs/ojknockout-keyset', "ojs/ojresponsiveutils", "ojs/ojresponsiveknockoututils", "ojs/ojknockout", "ojs/ojlistitemlayout", "ojs/ojtrain",
        "ojs/ojlistview","ojs/ojradioset","ojs/ojlabelvalue","ojs/ojlabel" ,"ojs/ojselectcombobox","ojs/ojbutton" ,"ojs/ojprogress-bar", "ojs/ojdatetimepicker", 'ojs/ojtable', 'ojs/ojswitch', 'ojs/ojvalidationgroup','ojs/ojselector','ojs/ojtoolbar','ojs/ojfilepicker','ojs/ojcheckboxset', "ojs/ojavatar","ojs/ojdrawerlayout"], 
function (oj,ko,$, app, ojconverterutils_i18n_1, ArrayDataProvider,  ojknockout_keyset_1,ResponsiveUtils, ResponsiveKnockoutUtils, AsyncRegExpValidator) {

    class FinalCheckModel {
        constructor(context) {
                var self = this;
                self.startOpened = ko.observable(true);
                self.startToggle = () => self.startOpened(!self.startOpened());
                self.profileStatus = ko.observable();
                self.referenceStatus = ko.observable();
                self.bankStatus = ko.observable();
                self.relativeStatus = ko.observable();
                self.educationStatus = ko.observable();
                self.workStatus = ko.observable();
                self.dbsStatus = ko.observable();
                self.healthStatus = ko.observable();
                self.trainingStatus = ko.observable();
                self.rightStatus = ko.observable();
                self.staffName = ko.observable();
                self.staffNameCap = ko.observable();
                self.inductionStatus = ko.observable();
                self.contractStatus = ko.observable();
                self.starterStatus = ko.observable();   
            
                self.connected = function () {
                    if (sessionStorage.getItem("userName") == null) {
                        self.router.go({ path: 'signin' });
                    }
                    else {
                       app.onAppSuccess();
                       getFinalCheckInfo();
                    }
                };

                //Validation 
            self._checkValidationGroup = (value) => {
                ////console.log(value)
                var tracker = document.getElementById(value);
                ////console.log(tracker.valid)
                if (tracker.valid === "valid") {
                    return true;
                }
                else {

                    tracker.showMessages();
                    tracker.focusOn("@firstInvalidShown");
                    return false;
                }
            };
                function getFinalCheckInfo() {
                        var BaseURL = sessionStorage.getItem("BaseURL")
                        $.ajax({
                            url: BaseURL + "/jpGetRecruitmentStatus",
                            type: 'POST',
                            data: JSON.stringify({
                                staffId : sessionStorage.getItem("staffId"),
                            }),
                            dataType: 'json',
                            timeout: sessionStorage.getItem("timeInetrval"),
                            context: self,
                            error: function (xhr, textStatus, errorThrown) {
                                if(textStatus == 'timeout' || textStatus == 'error'){
                                    document.querySelector('#TimeoutSup').open();
                                }
                            },
                            success: function (data) {
                                console.log(data)  
                                if(data[0].length !=0) {
                                    if(data[0][0][0] == "Pending") {
                                        self.profileStatus('Pending');
                                    }else if(data[0][0][0] == "Audited") {
                                        self.profileStatus('Audited');
                                    }
                                }
                                else{
                                    self.profileStatus('Pending');
                                }
                                if(data[1].length !=0) {  
                                    if(data[1][0][0] == "Pending") {
                                        self.referenceStatus('Pending');
                                    }else if(data[1][0][0] == "Audited") {
                                        self.referenceStatus('Audited');
                                    }
                                }else{
                                    self.referenceStatus('Pending');
                                } 
                                if(data[2].length !=0) {
                                    if(data[2][0][0] == "Pending") {
                                        self.bankStatus('Pending');
                                    }else if(data[2][0][0] == "Audited") {
                                        self.bankStatus('Audited');
                                    }
                                }else{
                                    self.bankStatus('Pending');
                                }
                                if(data[3].length !=0) {
                                    if(data[3][0][0] == "Pending") {
                                        self.relativeStatus('Pending');
                                    }else if(data[3][0][0] == "Audited") {
                                        self.relativeStatus('Audited');
                                    }
                                }else{
                                    self.relativeStatus('Pending');
                                }  
                                if(data[4].length !=0) {
                                    if(data[4][0] == "Pending") {
                                        self.educationStatus('Pending');
                                    }else if(data[4][0] == "Audited") {
                                        self.educationStatus('Audited');
                                    }
                                }else{
                                    self.educationStatus('Pending');
                                } 
                                if(data[5].length !=0) {
                                    if(data[5][0] == "Pending") {
                                        self.workStatus('Pending');
                                    }else if(data[5][0] == "Audited") {
                                        self.workStatus('Audited');
                                    }
                                }else{
                                    self.workStatus('Pending');
                                } 
        
                                if(data[6].length !=0) {
                                    if(data[6][0][0] == "Pending") {
                                        self.healthStatus('Pending');
                                    }else if(data[6][0][0] == "Audited") {
                                        self.healthStatus('Audited');
                                    }
                                }else{
                                    self.healthStatus('Pending');
                                } 
        
                                if(data[7].length !=0) {
                                    if(data[7][0][0] == "Pending") {
                                        self.dbsStatus('Pending');
                                    }else if(data[7][0][0] == "Audited") {
                                        self.dbsStatus('Audited');
                                    }
                                }else{
                                    self.dbsStatus('Pending');
                                } 
        
                                if(data[8].length !=0) {
                                    if(data[8][0][0] == "Pending") {
                                        self.trainingStatus('Pending');
                                    }else if(data[8][0][0] == "Audited") {
                                        self.trainingStatus('Audited');
                                    }
                                }else{
                                    self.trainingStatus('Pending');
                                } 
        
                                if(data[9].length !=0) {
                                    if(data[9][0] == "Pending") {
                                        self.rightStatus('Pending');
                                    }else if(data[9][0] == "Audited") {
                                        self.rightStatus('Audited');
                                    }
                                }else{
                                    self.rightStatus('Pending');
                                } 
        
                                self.staffName(data[10][0][0] + " " + data[10][0][1])
                                self.staffNameCap(self.staffName().toUpperCase());
        
                                if(data[11].length !=0) {
                                    if(data[11][0] == "Pending") {
                                        self.inductionStatus('Pending');
                                    }else if(data[11][0] == "Audited") {
                                        self.inductionStatus('Audited');
                                    }
                                }else{
                                    self.inductionStatus('Pending');
                                } 
        
                                if(data[12].length !=0) {
                                    if(data[12][0] == "Pending") {
                                        self.contractStatus('Pending');
                                    }else if(data[12][0] == "Audited") {
                                        self.contractStatus('Audited');
                                    }
                                }else{
                                    self.contractStatus('Pending');
                                } 
        
                                if(data[13].length !=0) {
                                    if(data[13][0] == "Pending") {
                                        self.starterStatus('Pending');
                                    }else if(data[13][0] == "Audited") {
                                        self.starterStatus('Audited');
                                    }
                                }else{
                                    self.starterStatus('Pending');
                                }           
                        }
                        })
                
                }

                self.staffActivate = function (event,data) {
                    var BaseURL = sessionStorage.getItem("BaseURL")
                    $.ajax({
                        url: BaseURL+ "/jpStaffActivate",
                        type: 'POST',
                        data: JSON.stringify({
                            staffId : sessionStorage.getItem("staffId"),
                        }),
                        dataType: 'json',
                        timeout: sessionStorage.getItem("timeInetrval"),
                        context: self,
                        error: function (xhr, textStatus, errorThrown) {
                            if(textStatus == 'timeout'){
                                document.querySelector('#openUpdateStaffProgress').close();
                                document.querySelector('#Timeout').open();
                            }
                        },
                        success: function (data) {
                           console.log("Success")
                           window.location.href = "?ojr=addStaff"
                           //location.reload(); 
                        }
                    })  
    
                }

            }
            
            
          }
            return  FinalCheckModel;

        });
