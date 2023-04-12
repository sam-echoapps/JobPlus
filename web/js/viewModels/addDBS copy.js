define(['ojs/ojcore',"knockout","jquery","appController","ojs/ojconverterutils-i18n", "ojs/ojarraydataprovider",'ojs/ojknockout-keyset', "ojs/ojresponsiveutils", "ojs/ojresponsiveknockoututils", "ojs/ojknockout", "ojs/ojlistitemlayout", "ojs/ojtrain",
        "ojs/ojlistview","ojs/ojradioset","ojs/ojlabelvalue","ojs/ojlabel" ,"ojs/ojselectcombobox","ojs/ojbutton" ,"ojs/ojprogress-bar", "ojs/ojdatetimepicker", 'ojs/ojtable', 'ojs/ojswitch', 'ojs/ojvalidationgroup','ojs/ojselector','ojs/ojtoolbar','ojs/ojfilepicker','ojs/ojcheckboxset', "ojs/ojavatar","ojs/ojdrawerlayout"], 
function (oj,ko,$, app, ojconverterutils_i18n_1, ArrayDataProvider,  ojknockout_keyset_1,ResponsiveUtils, ResponsiveKnockoutUtils, AsyncRegExpValidator) {

    class DBSViewModel {
        constructor(context) {
                var self = this;
                self.DepName = context.routerState.detail.dep_url;
                self.startOpened = ko.observable(true);
                self.startToggle = () => self.startOpened(!self.startOpened());
                self.primaryCustomText = ko.observable('DBS');
                self.secondaryCustomText = ko.observable('Please choose one');
                self.uploadDocumentMsg = ko.observable();


                self.connected = function () {
                    if (sessionStorage.getItem("userName") == null) {
                        self.router.go({ path: 'signin' });
                    }
                    else {
                       app.onAppSuccess();
                    }
                };

                self.selectListener = function (event,data) {
                    var file = event.detail.files[0];
                    //console.log(file)
                    const result = event.detail.files;
                    const files = result[0];
                    var fileName= files.name;
                    //console.log(fileName)
                    const reader = new FileReader();
                    reader.readAsDataURL(files);
                    
                    reader.onload = ()=>{
                        document.querySelector('#openAddUploadingProgress').open();
                        self.uploadDocumentMsg('');
                        const fileContent = reader.result;
                        //console.log(fileContent)
                        $.ajax({
                            url: self.DepName() + "/jpStaffDBSUplaod",
                            type: 'POST',
                            data: JSON.stringify({
                                staffId : sessionStorage.getItem("staffId"),
                                fileName : fileName,
                                file : fileContent
                            }),
                            dataType: 'json',
                            timeout: sessionStorage.getItem("timeInetrval"),
                            context: self,
                            error: function (xhr, textStatus, errorThrown) {
                                if(textStatus == 'timeout'){
                                    document.querySelector('#openAddUploadingProgress').close();
                                    document.querySelector('#Timeout').open();
                                }
                            },
                            success: function (data) {
                                //console.log(data)
                                document.querySelector('#openAddUploadingProgress').close();
                                document.querySelector('#openFileUploadResult').open();
                                self.uploadDocumentMsg(data[0]);
                                //console.log("Success")
                            }
                        })      
                    }
              }

              self.DBErrorOKClose = function (event) {
                document.querySelector('#openFileUploadResult').close();
            }; 
    
            }
            
            
          }
            return  DBSViewModel;

        });
