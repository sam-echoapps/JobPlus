define(['ojs/ojcore',"knockout","jquery","appController","ojs/ojconverterutils-i18n", "ojs/ojarraydataprovider",'ojs/ojknockout-keyset', "ojs/ojresponsiveutils", "ojs/ojresponsiveknockoututils", "ojs/ojknockout", "ojs/ojlistitemlayout", "ojs/ojtrain",
        "ojs/ojlistview","ojs/ojradioset","ojs/ojlabelvalue","ojs/ojlabel" ,"ojs/ojselectcombobox","ojs/ojbutton" ,"ojs/ojprogress-bar", "ojs/ojdatetimepicker", 'ojs/ojtable', 'ojs/ojswitch', 'ojs/ojvalidationgroup','ojs/ojselector','ojs/ojtoolbar','ojs/ojfilepicker','ojs/ojcheckboxset', "ojs/ojavatar","ojs/ojdrawerlayout"], 
function (oj,ko,$, app, ojconverterutils_i18n_1, ArrayDataProvider,  ojknockout_keyset_1,ResponsiveUtils, ResponsiveKnockoutUtils, AsyncRegExpValidator) {

    class WorkViewModel {
        constructor(context) {
            var self = this;
            self.DepName = context.routerState.detail.dep_url;
            self.startOpened = ko.observable(true);
            self.startToggle = () => self.startOpened(!self.startOpened());
            self.CancelBehaviorOpt = ko.observable('icon'); 
            self.employer_name = ko.observable();
            self.business_type = ko.observable();
            self.job_title = ko.observable();
            self.WorkActionBtn = ko.observable();
            self.groupValid = ko.observable();
            self.addWorkMsg = ko.observable();
            self.buttonClick = ko.observable(true);
            self.WorkDet = ko.observableArray([]);
            self.primaryCustomText = ko.observable('Certificate');
            self.secondaryCustomText = ko.observable('Please choose one');
            self.file = ko.observable();
            self.DialogTitle=ko.observable('Add Work Details')
            self.EditWorkDet = ko.observableArray([]);

            self.selectorSelectedItems = new ojknockout_keyset_1.ObservableKeySet();

            self.connected = function () {
                if (sessionStorage.getItem("userName") == null) {
                    self.router.go({ path: 'signin' });
                }
                else {
                    app.onAppSuccess();
                    getWork();
                }
            };

            function getWork() {
                self.WorkDet([]);
                var BaseURL = sessionStorage.getItem("BaseURL")
                $.ajax({
                    url: BaseURL + "/jpStaffWorkGet",
                    type: 'POST',
                    data: JSON.stringify({
                        staffId : sessionStorage.getItem("userId"),
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
                        for (var i = 0; i < data[0].length; i++) {
                            self.WorkDet.push({'id': data[0][i][0], 'staff_id' : data[0][i][1], 'employer_name' : data[0][i][2] , 'business_type' : data[0][i][3] , 'job_title' :data[0][i][4]});   
                        }
                        self.WorkDet.valueHasMutated();
                        return self; 
                    }
                })
            }
            this.dataProvider1 = new ArrayDataProvider(this.WorkDet, { keyAttributes: "id"});
    
            self.openAddWorkDialog = function (data, event) {
                self.WorkActionBtn('Add')
                document.querySelector('#openAddWorkDialog').open();
            }
            self.staffWorkSave = function (event,data) {
                var validSec1 = self._checkValidationGroup("staffWorkSec1");
                var validSec2 = self._checkValidationGroup("staffWorkSec2");
                var BaseURL = sessionStorage.getItem("BaseURL")
                if (validSec1 && validSec2) {
                    document.querySelector('#openAddWorkProgress').open();
                    self.addWorkMsg('');
                    $.ajax({
                        url: BaseURL+ "/jpStaffWorkAdd",
                        type: 'POST',
                        data: JSON.stringify({
                            staffId : sessionStorage.getItem("userId"),
                            employer_name : self.employer_name(),
                            business_type : self.business_type(),
                            job_title : self.job_title(),
                        }),
                        dataType: 'json',
                        timeout: sessionStorage.getItem("timeInetrval"),
                        context: self,
                        error: function (xhr, textStatus, errorThrown) {
                            if(textStatus == 'timeout'){
                                document.querySelector('#openAddWorkProgress').close();
                                document.querySelector('#Timeout').open();
                            }
                        },
                        success: function (data) {
                            document.querySelector('#openAddWorkProgress').close();
                            document.querySelector('#openAddWorkResult').open();
                            self.addWorkMsg(data[0]);
                            console.log("Success")
                        }
                    })   
                }
            }
            //Validation 
            self._checkValidationGroup = (value) => {
                var tracker = document.getElementById(value);
                if (tracker.valid === "valid") {
                    return true;
                }
                else {
                    tracker.showMessages();
                    tracker.focusOn("@firstInvalidShown");
                    return false;
                }
            };

            self.DBErrorOKClose = function (event) {
                document.querySelector('#openAddWorkResult').close();
                document.querySelector('#openAddWorkDialog').close();
            };

            self.selectListener = function (event,data) {
                var BaseURL = sessionStorage.getItem("BaseURL")
                const result = event.detail.files;
                const files = result[0];
                var fd = new FormData();
                fd.append('file',files);

                $.ajax({
                    url: BaseURL+ "/jpStaffFileUplaod",
                    type: 'POST',
                    data: fd,
                    dataType: 'json',
                    timeout: sessionStorage.getItem("timeInetrval"),
                    context: self,
                    error: function (xhr, textStatus, errorThrown) {
                        if(textStatus == 'timeout'){
                            document.querySelector('#openAddWorkProgress').close();
                            document.querySelector('#Timeout').open();
                        }
                    },
                    success: function (data) {
                        document.querySelector('#openAddWorkProgress').close();
                        document.querySelector('#openAddWorkResult').open();
                        self.addWorkMsg(data[0]);
                    }
                })   
            }

            self.editWorkInfo = function (event,data) {
                self.DialogTitle('Update Work Details')
                self.WorkActionBtn('Update')
                var clickedRowId = self.getDisplayValue(self.selectorSelectedItems())[0];
                sessionStorage.setItem("workId", clickedRowId);
                var BaseURL = sessionStorage.getItem("BaseURL")
                if(clickedRowId !=undefined){
                    document.querySelector('#openAddWorkDialog').open();
                    self.EditWorkDet([]);
                    $.ajax({
                        url: BaseURL + "/jpEditWorkDetails",
                        type: 'POST',
                        data: JSON.stringify({
                            rowId : self.getDisplayValue(self.selectorSelectedItems())[0]
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
                            self.employer_name(data[0][2])
                            self.business_type(data[0][3])
                            self.job_title(data[0][4])
                        }
                    })
                }         
           
            }

            self.staffWorkUpdate = function (event,data) {
                var validSec1 = self._checkValidationGroup("staffWorkSec1");
                var validSec2 = self._checkValidationGroup("staffWorkSec2");
                var BaseURL = sessionStorage.getItem("BaseURL")
                if (validSec1 && validSec2) {
                    document.querySelector('#openAddWorkProgress').open();
                    self.addWorkMsg('');
                    $.ajax({
                        url: BaseURL + "/jpUpdateWorkDetails",
                        type: 'POST',
                        data: JSON.stringify({
                            workId : sessionStorage.getItem("workId"),
                            employer_name : self.employer_name(),
                            business_type : self.business_type(),
                            job_title : self.job_title(),
                        }),
                        dataType: 'json',
                        timeout: sessionStorage.getItem("timeInetrval"),
                        context: self,
                        error: function (xhr, textStatus, errorThrown) {
                            if(textStatus == 'timeout'){
                                document.querySelector('#openAddWorkProgress').close();
                                document.querySelector('#Timeout').open();
                            }
                        },
                        success: function (data) {
                            document.querySelector('#openAddWorkProgress').close();
                            document.querySelector('#openAddWorkResult').open();
                            self.addWorkMsg(data[0]);
                        }
                    }) 
                } 
            }

            self.getDisplayValue = function (set) {
                var arr = [];
                set.values().forEach(function (key) {
                    arr.push(key);
                });
                return arr;
            };
    
        }
            
    }
    return  WorkViewModel;

});
