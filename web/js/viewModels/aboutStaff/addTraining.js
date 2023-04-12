define(['ojs/ojcore',"knockout","jquery","appController","ojs/ojconverterutils-i18n", "ojs/ojarraydataprovider",'ojs/ojknockout-keyset', "ojs/ojresponsiveutils", "ojs/ojresponsiveknockoututils", "ojs/ojknockout", "ojs/ojlistitemlayout", "ojs/ojtrain",
        "ojs/ojlistview","ojs/ojradioset","ojs/ojlabelvalue","ojs/ojlabel" ,"ojs/ojselectcombobox","ojs/ojbutton" ,"ojs/ojprogress-bar", "ojs/ojdatetimepicker", 'ojs/ojtable', 'ojs/ojswitch', 'ojs/ojvalidationgroup','ojs/ojselector','ojs/ojtoolbar','ojs/ojfilepicker','ojs/ojcheckboxset', "ojs/ojavatar","ojs/ojdrawerlayout"], 
function (oj,ko,$, app, ojconverterutils_i18n_1, ArrayDataProvider,  ojknockout_keyset_1,ResponsiveUtils, ResponsiveKnockoutUtils, AsyncRegExpValidator) {

    class TrainingViewModel {
        constructor(context) {
                var self = this;
                self.DepName = context.routerState.detail.dep_url;
                self.startOpened = ko.observable(true);
                self.startToggle = () => self.startOpened(!self.startOpened());
                self.movingFile_expiry_date = ko.observable();
                self.movingFileText = ko.observable('Moving and Handling');
                self.secondaryCustomText = ko.observable('Please choose one');
                self.uploadDocumentMsg = ko.observable();
                var BaseURL = sessionStorage.getItem("BaseURL")
                self.safeguarding_expiry_date = ko.observable();
                self.safeguardingFileText = ko.observable('Safeguarding Adults');
                self.health_expiry_date = ko.observable();
                self.healthFileText = ko.observable('Health and Safety Adults');
                self.food_expiry_date = ko.observable();
                self.foodFileText = ko.observable('Food and Hygiene');
                self.support_expiry_date = ko.observable();
                self.supportFileText = ko.observable('First Aid/ Basic Life Support');
                self.coshh_expiry_date = ko.observable();
                self.coshhFileText = ko.observable('COSHH');
                self.safety_expiry_date = ko.observable();
                self.safetyFileText = ko.observable('Fire Safety');
                self.behaviour_expiry_date = ko.observable();
                self.behaviourFileText = ko.observable('Challenging Behavior');
                self.epilepsy_expiry_date = ko.observable();
                self.epilepsyFileText = ko.observable('Epilepsy');
                self.demantia_expiry_date = ko.observable();
                self.demantiaFileText = ko.observable('Dementia');
                self.act_expiry_date = ko.observable();
                self.actFileText = ko.observable('Mental Capacity Act');
                self.prevention_expiry_date = ko.observable();
                self.preventionFileText = ko.observable('Infection Prevention Control');
                self.disability_expiry_date = ko.observable();
                self.disabilityFileText = ko.observable('Learning Disabilities');
                self.care_expiry_date = ko.observable();
                self.careFileText = ko.observable('Care Certificate');
                self.connected = function () {
                    if (sessionStorage.getItem("userName") == null) {
                        self.router.go({ path: 'signin' });
                    }
                    else {
                       app.onAppSuccess();
                    }
                };
  

                self.movingSubmit = function (event,data) {
                    var file = event.detail.files[0];
                    //console.log(file)
                    const result = event.detail.files;
                    const files = result[0];
                    var fileName= files.name;
                    var uploadURL = BaseURL + "/css/uploads/";
                    var filePath= uploadURL+fileName;
                    //alert(self.movingFile_expiry_date())
                     if(self.movingFile_expiry_date() == undefined){
                        self.movingFile_expiry_date('1990-01-01')
                    } 
                    //console.log(fileName)
                    const reader = new FileReader();
                    reader.readAsDataURL(files);
                    
                    reader.onload = ()=>{
                        document.querySelector('#openAddUploadingProgress').open();
                        self.uploadDocumentMsg('');
                        const fileContent = reader.result;
                        //console.log(fileContent)
                        $.ajax({
                            url: BaseURL + "/jpStaffFileUplaod",
                            type: 'POST',
                            data: JSON.stringify({
                                staffId : sessionStorage.getItem("userId"),
                                file_name : fileName,
                                file : fileContent,
                                file_type : "Moving and Handling", 
                                file_type_additional : "Training",
                                file_path : filePath,
                                expiry_date : self.movingFile_expiry_date()
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
                                console.log(data)
                                document.querySelector('#openAddUploadingProgress').close();
                                document.querySelector('#openFileUploadResult').open();
                                self.uploadDocumentMsg(data[0]);
                            }
                        })      
                    }
              }

              self.safeguarding = function (event,data) {
                var file = event.detail.files[0];
                //console.log(file)
                const result = event.detail.files;
                const files = result[0];
                var fileName= files.name;
                var uploadURL = BaseURL + "/css/uploads/";
                var filePath= uploadURL+fileName;
                //alert(self.movingFile_expiry_date())
                 if(self.safeguarding_expiry_date() == undefined){
                    self.safeguarding_expiry_date('1990-01-01')
                } 
                //console.log(fileName)
                const reader = new FileReader();
                reader.readAsDataURL(files);
                
                reader.onload = ()=>{
                    document.querySelector('#openAddUploadingProgress').open();
                    self.uploadDocumentMsg('');
                    const fileContent = reader.result;
                    //console.log(fileContent)
                    $.ajax({
                        url: BaseURL + "/jpStaffFileUplaod",
                        type: 'POST',
                        data: JSON.stringify({
                            staffId : sessionStorage.getItem("userId"),
                            file_name : fileName,
                            file : fileContent,
                            file_type : "Safeguarding Adults", 
                            file_type_additional : "Training",
                            file_path : filePath,
                            expiry_date : self.safeguarding_expiry_date()
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
                            console.log(data)
                            document.querySelector('#openAddUploadingProgress').close();
                            document.querySelector('#openFileUploadResult').open();
                            self.uploadDocumentMsg(data[0]);
                        }
                    })      
                }
          }

              self.DBErrorOKClose = function (event) {
                document.querySelector('#openFileUploadResult').close();
            }; 

            self.healthSubmit = function (event,data) {
                var file = event.detail.files[0];
                //console.log(file)
                const result = event.detail.files;
                const files = result[0];
                var fileName= files.name;
                var uploadURL = BaseURL + "/css/uploads/";
                var filePath= uploadURL+fileName;
                //alert(self.movingFile_expiry_date())
                 if(self.health_expiry_date() == undefined){
                    self.health_expiry_date('1990-01-01')
                } 
                //console.log(fileName)
                const reader = new FileReader();
                reader.readAsDataURL(files);
                
                reader.onload = ()=>{
                    document.querySelector('#openAddUploadingProgress').open();
                    self.uploadDocumentMsg('');
                    const fileContent = reader.result;
                    //console.log(fileContent)
                    $.ajax({
                        url: BaseURL + "/jpStaffFileUplaod",
                        type: 'POST',
                        data: JSON.stringify({
                            staffId : sessionStorage.getItem("userId"),
                            file_name : fileName,
                            file : fileContent,
                            file_type : "Health and Safety", 
                            file_type_additional : "Training",
                            file_path : filePath,
                            expiry_date : self.health_expiry_date()
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
                            console.log(data)
                            document.querySelector('#openAddUploadingProgress').close();
                            document.querySelector('#openFileUploadResult').open();
                            self.uploadDocumentMsg(data[0]);
                        }
                    })      
                }
          }

          self.foodSubmit = function (event,data) {
            var file = event.detail.files[0];
            //console.log(file)
            const result = event.detail.files;
            const files = result[0];
            var fileName= files.name;
            var uploadURL = BaseURL + "/css/uploads/";
            var filePath= uploadURL+fileName;
            //alert(self.movingFile_expiry_date())
             if(self.food_expiry_date() == undefined){
                self.food_expiry_date('1990-01-01')
            } 
            //console.log(fileName)
            const reader = new FileReader();
            reader.readAsDataURL(files);
            
            reader.onload = ()=>{
                document.querySelector('#openAddUploadingProgress').open();
                self.uploadDocumentMsg('');
                const fileContent = reader.result;
                //console.log(fileContent)
                $.ajax({
                    url: BaseURL + "/jpStaffFileUplaod",
                    type: 'POST',
                    data: JSON.stringify({
                        staffId : sessionStorage.getItem("userId"),
                        file_name : fileName,
                        file : fileContent,
                        file_type : "Food and Hygiene", 
                        file_type_additional : "Training",
                        file_path : filePath,
                        expiry_date : self.food_expiry_date()
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
                        console.log(data)
                        document.querySelector('#openAddUploadingProgress').close();
                        document.querySelector('#openFileUploadResult').open();
                        self.uploadDocumentMsg(data[0]);
                    }
                })      
            }
      }

      self.supportSubmit = function (event,data) {
        var file = event.detail.files[0];
        //console.log(file)
        const result = event.detail.files;
        const files = result[0];
        var fileName= files.name;
        var uploadURL = BaseURL + "/css/uploads/";
        var filePath= uploadURL+fileName;
        //alert(self.movingFile_expiry_date())
         if(self.support_expiry_date() == undefined){
            self.support_expiry_date('1990-01-01')
        } 
        //console.log(fileName)
        const reader = new FileReader();
        reader.readAsDataURL(files);
        
        reader.onload = ()=>{
            document.querySelector('#openAddUploadingProgress').open();
            self.uploadDocumentMsg('');
            const fileContent = reader.result;
            //console.log(fileContent)
            $.ajax({
                url: BaseURL + "/jpStaffFileUplaod",
                type: 'POST',
                data: JSON.stringify({
                    staffId : sessionStorage.getItem("userId"),
                    file_name : fileName,
                    file : fileContent,
                    file_type : "First Aid/ Basic Life Support", 
                    file_type_additional : "Training",
                    file_path : filePath,
                    expiry_date : self.support_expiry_date()
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
                    console.log(data)
                    document.querySelector('#openAddUploadingProgress').close();
                    document.querySelector('#openFileUploadResult').open();
                    self.uploadDocumentMsg(data[0]);
                }
            })      
        }
  }
        self.coshhSubmit = function (event,data) {
            var file = event.detail.files[0];
            //console.log(file)
            const result = event.detail.files;
            const files = result[0];
            var fileName= files.name;
            var uploadURL = BaseURL + "/css/uploads/";
            var filePath= uploadURL+fileName;
            //alert(self.movingFile_expiry_date())
            if(self.coshh_expiry_date() == undefined){
                self.coshh_expiry_date('1990-01-01')
            } 
            //console.log(fileName)
            const reader = new FileReader();
            reader.readAsDataURL(files);
            
            reader.onload = ()=>{
                document.querySelector('#openAddUploadingProgress').open();
                self.uploadDocumentMsg('');
                const fileContent = reader.result;
                //console.log(fileContent)
                $.ajax({
                    url: BaseURL + "/jpStaffFileUplaod",
                    type: 'POST',
                    data: JSON.stringify({
                        staffId : sessionStorage.getItem("userId"),
                        file_name : fileName,
                        file : fileContent,
                        file_type : "COSHH", 
                        file_type_additional : "Training",
                        file_path : filePath,
                        expiry_date : self.coshh_expiry_date()
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
                        console.log(data)
                        document.querySelector('#openAddUploadingProgress').close();
                        document.querySelector('#openFileUploadResult').open();
                        self.uploadDocumentMsg(data[0]);
                    }
                })      
            }
        }

        self.safetySubmit = function (event,data) {
            var file = event.detail.files[0];
            //console.log(file)
            const result = event.detail.files;
            const files = result[0];
            var fileName= files.name;
            var uploadURL = BaseURL + "/css/uploads/";
            var filePath= uploadURL+fileName;
            //alert(self.movingFile_expiry_date())
            if(self.safety_expiry_date() == undefined){
                self.safety_expiry_date('1990-01-01')
            } 
            //console.log(fileName)
            const reader = new FileReader();
            reader.readAsDataURL(files);
            
            reader.onload = ()=>{
                document.querySelector('#openAddUploadingProgress').open();
                self.uploadDocumentMsg('');
                const fileContent = reader.result;
                //console.log(fileContent)
                $.ajax({
                    url: BaseURL + "/jpStaffFileUplaod",
                    type: 'POST',
                    data: JSON.stringify({
                        staffId : sessionStorage.getItem("userId"),
                        file_name : fileName,
                        file : fileContent,
                        file_type : "Fire Safety", 
                        file_type_additional : "Training",
                        file_path : filePath,
                        expiry_date : self.safety_expiry_date()
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
                        console.log(data)
                        document.querySelector('#openAddUploadingProgress').close();
                        document.querySelector('#openFileUploadResult').open();
                        self.uploadDocumentMsg(data[0]);
                    }
                })      
            }
        }
        self.behaviourSubmit = function (event,data) {
            var file = event.detail.files[0];
            //console.log(file)
            const result = event.detail.files;
            const files = result[0];
            var fileName= files.name;
            var uploadURL = BaseURL + "/css/uploads/";
            var filePath= uploadURL+fileName;
            //alert(self.movingFile_expiry_date())
             if(self.behaviour_expiry_date() == undefined){
                self.behaviour_expiry_date('1990-01-01')
            } 
            //console.log(fileName)
            const reader = new FileReader();
            reader.readAsDataURL(files);
            
            reader.onload = ()=>{
                document.querySelector('#openAddUploadingProgress').open();
                self.uploadDocumentMsg('');
                const fileContent = reader.result;
                //console.log(fileContent)
                $.ajax({
                    url: BaseURL + "/jpStaffFileUplaod",
                    type: 'POST',
                    data: JSON.stringify({
                        staffId : sessionStorage.getItem("userId"),
                        file_name : fileName,
                        file : fileContent,
                        file_type : "Challenging Behavior", 
                        file_type_additional : "Training",
                        file_path : filePath,
                        expiry_date : self.behaviour_expiry_date()
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
                        console.log(data)
                        document.querySelector('#openAddUploadingProgress').close();
                        document.querySelector('#openFileUploadResult').open();
                        self.uploadDocumentMsg(data[0]);
                    }
                })      
            }
      }
      self.epilepsySubmit = function (event,data) {
        var file = event.detail.files[0];
        //console.log(file)
        const result = event.detail.files;
        const files = result[0];
        var fileName= files.name;
        var uploadURL = BaseURL + "/css/uploads/";
        var filePath= uploadURL+fileName;
        //alert(self.movingFile_expiry_date())
         if(self.epilepsy_expiry_date() == undefined){
            self.epilepsy_expiry_date('1990-01-01')
        } 
        //console.log(fileName)
        const reader = new FileReader();
        reader.readAsDataURL(files);
        
        reader.onload = ()=>{
            document.querySelector('#openAddUploadingProgress').open();
            self.uploadDocumentMsg('');
            const fileContent = reader.result;
            //console.log(fileContent)
            $.ajax({
                url: BaseURL + "/jpStaffFileUplaod",
                type: 'POST',
                data: JSON.stringify({
                    staffId : sessionStorage.getItem("userId"),
                    file_name : fileName,
                    file : fileContent,
                    file_type : "Safeguarding Adults", 
                    file_type_additional : "Training",
                    file_path : filePath,
                    expiry_date : self.epilepsy_expiry_date()
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
                    console.log(data)
                    document.querySelector('#openAddUploadingProgress').close();
                    document.querySelector('#openFileUploadResult').open();
                    self.uploadDocumentMsg(data[0]);
                }
            })      
        }
  }

        self.demantiaSubmit = function (event,data) {
            var file = event.detail.files[0];
            //console.log(file)
            const result = event.detail.files;
            const files = result[0];
            var fileName= files.name;
            var uploadURL = BaseURL + "/css/uploads/";
            var filePath= uploadURL+fileName;
            //alert(self.movingFile_expiry_date())
            if(self.demantia_expiry_date() == undefined){
                self.demantia_expiry_date('1990-01-01')
            } 
            //console.log(fileName)
            const reader = new FileReader();
            reader.readAsDataURL(files);
            
            reader.onload = ()=>{
                document.querySelector('#openAddUploadingProgress').open();
                self.uploadDocumentMsg('');
                const fileContent = reader.result;
                //console.log(fileContent)
                $.ajax({
                    url: BaseURL + "/jpStaffFileUplaod",
                    type: 'POST',
                    data: JSON.stringify({
                        staffId : sessionStorage.getItem("userId"),
                        file_name : fileName,
                        file : fileContent,
                        file_type : "Safeguarding Adults", 
                        file_type_additional : "Training",
                        file_path : filePath,
                        expiry_date : self.demantia_expiry_date()
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
                        console.log(data)
                        document.querySelector('#openAddUploadingProgress').close();
                        document.querySelector('#openFileUploadResult').open();
                        self.uploadDocumentMsg(data[0]);
                    }
                })      
            }
        }

        self.actSubmit = function (event,data) {
            var file = event.detail.files[0];
            //console.log(file)
            const result = event.detail.files;
            const files = result[0];
            var fileName= files.name;
            var uploadURL = BaseURL + "/css/uploads/";
            var filePath= uploadURL+fileName;
            //alert(self.movingFile_expiry_date())
            if(self.act_expiry_date() == undefined){
                self.act_expiry_date('1990-01-01')
            } 
            //console.log(fileName)
            const reader = new FileReader();
            reader.readAsDataURL(files);
            
            reader.onload = ()=>{
                document.querySelector('#openAddUploadingProgress').open();
                self.uploadDocumentMsg('');
                const fileContent = reader.result;
                //console.log(fileContent)
                $.ajax({
                    url: BaseURL + "/jpStaffFileUplaod",
                    type: 'POST',
                    data: JSON.stringify({
                        staffId : sessionStorage.getItem("userId"),
                        file_name : fileName,
                        file : fileContent,
                        file_type : "Mental Capacity Act", 
                        file_type_additional : "Training",
                        file_path : filePath,
                        expiry_date : self.act_expiry_date()
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
                        console.log(data)
                        document.querySelector('#openAddUploadingProgress').close();
                        document.querySelector('#openFileUploadResult').open();
                        self.uploadDocumentMsg(data[0]);
                    }
                })      
            }
        }

        self.preventionSubmit = function (event,data) {
            var file = event.detail.files[0];
            //console.log(file)
            const result = event.detail.files;
            const files = result[0];
            var fileName= files.name;
            var uploadURL = BaseURL + "/css/uploads/";
            var filePath= uploadURL+fileName;
            //alert(self.movingFile_expiry_date())
            if(self.prevention_expiry_date() == undefined){
                self.prevention_expiry_date('1990-01-01')
            } 
            //console.log(fileName)
            const reader = new FileReader();
            reader.readAsDataURL(files);
            
            reader.onload = ()=>{
                document.querySelector('#openAddUploadingProgress').open();
                self.uploadDocumentMsg('');
                const fileContent = reader.result;
                //console.log(fileContent)
                $.ajax({
                    url: BaseURL + "/jpStaffFileUplaod",
                    type: 'POST',
                    data: JSON.stringify({
                        staffId : sessionStorage.getItem("userId"),
                        file_name : fileName,
                        file : fileContent,
                        file_type : "Infection Prevention Control", 
                        file_type_additional : "Training",
                        file_path : filePath,
                        expiry_date : self.prevention_expiry_date()
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
                        console.log(data)
                        document.querySelector('#openAddUploadingProgress').close();
                        document.querySelector('#openFileUploadResult').open();
                        self.uploadDocumentMsg(data[0]);
                    }
                })      
            }
        }

        self.disabilitySubmit = function (event,data) {
            var file = event.detail.files[0];
            //console.log(file)
            const result = event.detail.files;
            const files = result[0];
            var fileName= files.name;
            var uploadURL = BaseURL + "/css/uploads/";
            var filePath= uploadURL+fileName;
            //alert(self.movingFile_expiry_date())
            if(self.disability_expiry_date() == undefined){
                self.disability_expiry_date('1990-01-01')
            } 
            //console.log(fileName)
            const reader = new FileReader();
            reader.readAsDataURL(files);
            
            reader.onload = ()=>{
                document.querySelector('#openAddUploadingProgress').open();
                self.uploadDocumentMsg('');
                const fileContent = reader.result;
                //console.log(fileContent)
                $.ajax({
                    url: BaseURL + "/jpStaffFileUplaod",
                    type: 'POST',
                    data: JSON.stringify({
                        staffId : sessionStorage.getItem("userId"),
                        file_name : fileName,
                        file : fileContent,
                        file_type : "Learning Disabilities", 
                        file_type_additional : "Training",
                        file_path : filePath,
                        expiry_date : self.disability_expiry_date()
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
                        console.log(data)
                        document.querySelector('#openAddUploadingProgress').close();
                        document.querySelector('#openFileUploadResult').open();
                        self.uploadDocumentMsg(data[0]);
                    }
                })      
            }
        }

        self.careSubmit = function (event,data) {
            var file = event.detail.files[0];
            //console.log(file)
            const result = event.detail.files;
            const files = result[0];
            var fileName= files.name;
            var uploadURL = BaseURL + "/css/uploads/";
            var filePath= uploadURL+fileName;
            //alert(self.movingFile_expiry_date())
            if(self.care_expiry_date() == undefined){
                self.care_expiry_date('1990-01-01')
            } 
            //console.log(fileName)
            const reader = new FileReader();
            reader.readAsDataURL(files);
            
            reader.onload = ()=>{
                document.querySelector('#openAddUploadingProgress').open();
                self.uploadDocumentMsg('');
                const fileContent = reader.result;
                //console.log(fileContent)
                $.ajax({
                    url: BaseURL + "/jpStaffFileUplaod",
                    type: 'POST',
                    data: JSON.stringify({
                        staffId : sessionStorage.getItem("userId"),
                        file_name : fileName,
                        file : fileContent,
                        file_type : "Care Certificate", 
                        file_type_additional : "Training",
                        file_path : filePath,
                        expiry_date : self.care_expiry_date()
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
                        console.log(data)
                        document.querySelector('#openAddUploadingProgress').close();
                        document.querySelector('#openFileUploadResult').open();
                        self.uploadDocumentMsg(data[0]);
                    }
                })      
            }
        }

    
            }
            
            
          }
            return  TrainingViewModel;

        });
