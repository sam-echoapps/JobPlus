define(['ojs/ojcore',"knockout","jquery","appController","ojs/ojconverterutils-i18n", "ojs/ojarraydataprovider",'ojs/ojknockout-keyset', "ojs/ojresponsiveutils", "ojs/ojresponsiveknockoututils", "ojs/ojknockout", "ojs/ojlistitemlayout", "ojs/ojtrain",
        "ojs/ojlistview","ojs/ojradioset","ojs/ojlabelvalue","ojs/ojlabel" ,"ojs/ojselectcombobox","ojs/ojbutton" ,"ojs/ojprogress-bar", "ojs/ojdatetimepicker", 'ojs/ojtable', 'ojs/ojswitch', 'ojs/ojvalidationgroup','ojs/ojselector','ojs/ojtoolbar','ojs/ojfilepicker','ojs/ojcheckboxset', "ojs/ojavatar","ojs/ojdrawerlayout"], 
function (oj,ko,$, app, ojconverterutils_i18n_1, ArrayDataProvider,  ojknockout_keyset_1,ResponsiveUtils, ResponsiveKnockoutUtils, AsyncRegExpValidator) {

    class AdminViewModel {
        constructor(context) {
                var self = this;
                self.startOpened = ko.observable(true);
                self.startToggle = () => self.startOpened(!self.startOpened());
                
                self.title = ko.observable();
                self.titleList = ko.observableArray([]);
                self.titleList.push(
                    {'value' : 'Mr', 'label' : 'Mr.'},
                    {'value' : 'Mrs', 'label' : 'Mrs.'},
                    {'value' : 'Miss', 'label' : 'Miss.'}
                );
                self.titleListDP = new ArrayDataProvider(self.titleList, {keyAttributes: 'value'});
                self.mainPostList = ko.observableArray([]);
                self.mainPostList.push(
                    {'value' : 'Nurse', 'label' : 'Nurse (RGN)'},
                    {'value' : 'Care Assistant', 'label' : 'Care Assistant'},
                    {'value' : 'Senior Care Assistant', 'label' : 'Senior Care Assistant'},
                    {'value' : 'Domiciliary Care', 'label' : 'Domiciliary Care'},
                    {'value' : 'Chefs', 'label' : 'Chefs'},
                    {'value' : 'Kitchen Assistant', 'label' : 'Kitchen Assistant'},
                    {'value' : 'Domestic Care', 'label' : 'Domestic Care'}
                );
                self.mainPostListDP = new ArrayDataProvider(self.mainPostList, {keyAttributes: 'value'});
                self.statusList = ko.observableArray([]);
                self.statusList.push(
                    {'value' : 'Fresher', 'label' : 'Fresher'},
                    {'value' : 'Experienced', 'label' : 'Experienced'}
                );
                self.statusDP = new ArrayDataProvider(self.statusList, {keyAttributes: 'value'});
                self.firstName = ko.observable();
                self.lastName = ko.observable();
                self.mainPost = ko.observable();
                self.status = ko.observable();
                self.address1 = ko.observable();
                self.address2 = ko.observable();
                self.postTown = ko.observable();
                self.postCode = ko.observable();
                self.contactEmail = ko.observable();
                self.contactNumber = ko.observable();
                self.whatsappNumber = ko.observable();
                self.primaryCustomText = ko.observable('Profile Photo');
                self.secondaryCustomText = ko.observable('Please choose one');
                self.username = ko.observable();
                self.password = ko.observable();
                self.subpost = ko.observableArray();
                self.StaffDet = ko.observableArray([]);
                self.updateStaffMsg = ko.observable();
                self.primaryCustomText = ko.observable('Profile Photo');
                self.secondaryCustomText = ko.observable('Please choose one');
                self.emailError = ko.observable();
                self.contactError = ko.observable();
                self.typeError = ko.observable('');
                self.groupValid = ko.observable();
                self.profileStatus = ko.observable();
                self.profilePhoto = ko.observable();
                self.uploadDocumentMsg = ko.observable();
                self.fileName = ko.observable();

                self.mainPostList = ko.observableArray([]);
                self.mainPostList.push(
                    {'value' : 'Nurse', 'label' : 'Nurse (RGN)'},
                    {'value' : 'Care Assistant', 'label' : 'Care Assistant'},
                    {'value' : 'Senior Care Assistant', 'label' : 'Senior Care Assistant'},
                    {'value' : 'Domiciliary Care', 'label' : 'Domiciliary Care'},
                    {'value' : 'Chefs', 'label' : 'Chefs'},
                    {'value' : 'Kitchen Assistant', 'label' : 'Kitchen Assistant'},
                    {'value' : 'Domestic Care', 'label' : 'Domestic Care'}
                );
                self.mainPostListDP = new ArrayDataProvider(self.mainPostList, {keyAttributes: 'value'});
                self.connected = function () {
                    if (sessionStorage.getItem("userName") == null) {
                        self.router.go({ path: 'signin' });
                    }
                    else {
                       app.onAppSuccess();
                       getProfile();
                    }
                };
                function getProfile(){
                self.DepName = context.routerState.detail.dep_url;
                
                var BaseURL = sessionStorage.getItem("BaseURL")
                $.ajax({                   
                    url: BaseURL + "/jpEditStaffDetails",
                    type: 'POST',
                    data: JSON.stringify({
                        staffId : sessionStorage.getItem("userId")
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
                        self.title(data[0][1]);
                        self.firstName(data[0][2]);
                        self.lastName(data[0][3]);
                        self.mainPost(data[0][4]);
                        self.status(data[0][6]);
                        self.address1(data[0][7]);
                        self.address2(data[0][8]);
                        self.postTown(data[0][9]);
                        self.postCode(data[0][10]);
                        self.contactEmail(data[0][11]);
                        self.contactNumber(data[0][12]);
                        self.whatsappNumber(data[0][13]);
                        let file = data[0][15];
                        file = file.replace("http://169.197.183.168:8090/css/uploads/", "");
                        self.fileName(file);
                        if(data[0][14] == "Pending") {
                            self.profileStatus('Pending');
                        }else if(data[0][14] == "Audited") {
                            self.profileStatus('Audited');
                        }                  
                }
                })
            }

                self.staffInfoUpdate = function (event,data) {
                    var validStaffUpdate1 = self._checkValidationGroup("staffUpdateSec1");
                    var validStaffUpdate2 = self._checkValidationGroup("staffUpdateSec2");  
                    var BaseURL = sessionStorage.getItem("BaseURL")
                    if (validStaffUpdate1 && validStaffUpdate2 && self.emailError() == '' && self.contactError() == ''  && self.typeError() == '') {
                    document.querySelector('#openUpdateStaffProgress').open();
                    self.updateStaffMsg('');
                    $.ajax({
                        url: BaseURL + "/jpStaffInfoUpdate",
                        type: 'POST',
                        data: JSON.stringify({
                            staffId : sessionStorage.getItem("userId"),
                            title : self.title(),
                            firstName : self.firstName(),
                            lastName : self.lastName(),
                            mainPost : self.mainPost(),
                            subpost : self.subpost(),
                            status : self.status(),
                            address1 : self.address1(),
                            address2 : self.address2(),
                            postTown : self.postTown(),
                            postCode : self.postCode(),
                            contactEmail : self.contactEmail(),
                            contactNumber : self.contactNumber()
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
                            document.querySelector('#openUpdateStaffProgress').close();
                            document.querySelector('#openStaffUpdateResult').open();
                            self.updateStaffMsg(data[0]);
                        }
                    })  
                }
                }

                self.context = context;
                self.router = self.context.parentRouter;
                self.DBErrorOKClose = function (event) {
                    document.querySelector('#openStaffUpdateResult').close();
                    self.startOpened(false);
                    self.router.go({path:'addStaff'})
                };
               /*  self.selectListener = function (event,data) {
                    const result = event.detail.files;
                    const files = result[0];
                    const reader = new FileReader();
                    reader.readAsDataURL(files);
                    
                    reader.onload = ()=>{
                        const fileContents = reader.result;
                        const blobUrl = new Blob([fileContents], {type: 'image/png'});
                        console.log(blobUrl);


                        $.ajax({
                            url: BaseURL+ "/jpStaffProfilePhoto",
                            type: 'POST',
                            data: JSON.stringify({
                                staffId : sessionStorage.getItem("userId"),
                                file : fileContents
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
                               console.log(data)
                            }
                        })  

                    }
                    
                
              } */

              self.selectListener = function (event,data) {
                var BaseURL = sessionStorage.getItem("BaseURL")
                var uploadURL = BaseURL + "/css/uploads/";
                var file = event.detail.files[0];
                //console.log(file)
                const result = event.detail.files;
                const files = result[0];
                var fileName= files.name;
                self.fileName(fileName);
                var filePath= uploadURL+fileName;

                var fileFormat =files.name.split(".");
                var checkFormat =fileFormat[1];
                if(checkFormat == 'png' || checkFormat =="jpeg" || checkFormat =="jpg"){
                self.typeError('')
                const reader = new FileReader();
                reader.readAsDataURL(files);
                
                reader.onload = ()=>{
                    document.querySelector('#openAddUploadingProgress').open();
                    self.uploadDocumentMsg('');
                    const fileContent = reader.result;
                    //console.log(fileContent)
                    $.ajax({
                        url: BaseURL + "/jpStaffProfilePhoto",
                        type: 'POST',
                        data: JSON.stringify({
                            staffId : sessionStorage.getItem("userId"),
                            file_path : filePath,
                            file_name : fileName,
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
                            console.log("success")
                            document.querySelector('#openAddUploadingProgress').close();
                            /* document.querySelector('#openFileUploadResult').open();
                            self.uploadDocumentMsg(data[0]); */
                            //console.log("Success")
                        }
                    })      
                }
            }
            else{
                self.typeError('The image must be a file of type: jpeg, png, jpg')
            }
          }
              self.emailPatternValidator= function(event,data) {
                console.log(self.contactEmail())  
                var inputText=self.contactEmail()
                var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(inputText.match(mailformat))
                {
                    self.emailError('')
                }
                else
                {
                    self.emailError("Should enter a valid email address.");
                    return false;
                }  
                /* $.ajax({
                    url: 'http://169.197.183.168:8090/jpStaffEmailExist',
                    method: 'POST',
                    data: JSON.stringify({ email: inputText }),
                    success: function(response) {
                        if(response == 1){
                            self.emailError("Email id already existed")
                        }
                    },
                    error: function(xhr, status, error) {
                      console.log("Error : "+xhr.responseText);
                    }
                  });    */
             }
             self.onlyNumberKey= function(event,data) {
                console.log(event.detail.value)
                var ASCIICode= event.detail.value
                if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57) && ASCIICode.length==10){
                    self.contactError('')
                }else{
                    self.contactError("Should be digital and must be 10 digits in length.");
                }
             }
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
            self.updateProfileStatus = function (event,data) {
                var BaseURL = sessionStorage.getItem("BaseURL")
                $.ajax({
                    url: BaseURL+ "/jpStaffUpdateProfileStatus",
                    type: 'POST',
                    data: JSON.stringify({
                        staffId : sessionStorage.getItem("userId"),
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
                       if(sessionStorage.getItem('profile_status')=="Pending"){
                        sessionStorage.setItem('profile_status','Audited');
                       }else if(sessionStorage.getItem('profile_status')=="Audited"){
                        sessionStorage.setItem('profile_status','Pending');
                       }
                       location.reload();
                    }
                })  

            }
            

            }
            
            
          }
            return  AdminViewModel;

        });
