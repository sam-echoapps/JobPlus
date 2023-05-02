define(['ojs/ojcore',"knockout","jquery","appController","ojs/ojconverterutils-i18n", "ojs/ojarraydataprovider",'ojs/ojknockout-keyset', "ojs/ojresponsiveutils", "ojs/ojresponsiveknockoututils", "ojs/ojknockout", "ojs/ojlistitemlayout", "ojs/ojtrain",
        "ojs/ojlistview","ojs/ojradioset","ojs/ojlabelvalue","ojs/ojlabel" ,"ojs/ojselectcombobox","ojs/ojbutton" ,"ojs/ojprogress-bar", "ojs/ojdatetimepicker", 'ojs/ojtable', 'ojs/ojswitch', 'ojs/ojvalidationgroup','ojs/ojselector','ojs/ojtoolbar','ojs/ojfilepicker','ojs/ojcheckboxset', "ojs/ojavatar","ojs/ojdrawerlayout"], 
function (oj,ko,$, app, ojconverterutils_i18n_1, ArrayDataProvider,  ojknockout_keyset_1,ResponsiveUtils, ResponsiveKnockoutUtils, AsyncRegExpValidator) {

    class StaffManagerModel {
        constructor(context) {
                var self = this;
                self.DepName = context.routerState.detail.dep_url;
                self.startOpened = ko.observable(true);
                self.startToggle = () => self.startOpened(!self.startOpened());
                self.StaffDet = ko.observableArray([]);
                self.selectorSelectedItems = new ojknockout_keyset_1.ObservableKeySet();

                self.connected = function () {
                    if (sessionStorage.getItem("userName") == null) {
                        self.router.go({ path: 'signin' });
                    }
                    else {
                       app.onAppSuccess();
                       getActiveStaff();
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
            function getActiveStaff() {
                self.StaffDet([]);
                $.ajax({
                    url: self.DepName() + "/jpActiveStaffGet",
                    type: 'GET',
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
                        var photo;
                         for (var i = 0; i < data[0].length; i++) {
                            if(data[0][i][14] == null) {
                                     photo = self.DepName() + "/css/uploads/defaultUser.png";
                            }else {
                                photo = data[0][i][14];
                            }
                            self.StaffDet.push({'id': data[0][i][0], 'title' : data[0][i][1], 'firstName' : data[0][i][2] , 'lastName' : data[0][i][3] , 'name' : data[0][i][2] + " " +data[0][i][3] ,  'mainPostion' :data[0][i][4] , 'subPostion' : data[0][i][5] , 
                              'workStatus' : data[0][i][6] , 'address1' : data[0][i][7] ,'address2' : data[0][i][8] ,'postTown' : data[0][i][9] , 'postCode' : data[0][i][10], 'contactEmail' : data[0][i][11] , 'contactNumber' : data[0][i][12], 'profilePhoto' : photo });

                    }

  
                    self.StaffDet.valueHasMutated();
                    return self; 
                }
                })
            }
            this.dataProvider1 = new ArrayDataProvider(this.StaffDet, { keyAttributes: "id"});

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
            return  StaffManagerModel;

        });
