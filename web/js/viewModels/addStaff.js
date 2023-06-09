define(['ojs/ojcore',"knockout","jquery","appController","ojs/ojconverterutils-i18n", "ojs/ojarraydataprovider",'ojs/ojknockout-keyset', "ojs/ojresponsiveutils", "ojs/ojresponsiveknockoututils", "ojs/ojknockout", "ojs/ojlistitemlayout", "ojs/ojtrain",
        "ojs/ojlistview","ojs/ojradioset","ojs/ojlabelvalue","ojs/ojlabel" ,"ojs/ojselectcombobox","ojs/ojbutton" ,"ojs/ojprogress-bar", "ojs/ojdatetimepicker", 'ojs/ojtable', 'ojs/ojswitch', 'ojs/ojvalidationgroup','ojs/ojselector','ojs/ojtoolbar','ojs/ojfilepicker','ojs/ojcheckboxset', "ojs/ojavatar"], 
function (oj,ko,$, app, ojconverterutils_i18n_1, ArrayDataProvider,  ojknockout_keyset_1,ResponsiveUtils, ResponsiveKnockoutUtils, AsyncRegExpValidator) {
    
    class addStaffViewModel {
        constructor(context) {
            var self = this;
            self.DepName = context.routerState.detail.dep_url;

            self.startTime = ko.observable(ojconverterutils_i18n_1.IntlConverterUtils.dateToLocalIso(new Date(2013, 0, 1)));
            self.endTime = ko.observable(ojconverterutils_i18n_1.IntlConverterUtils.dateToLocalIso(new Date(2013, 0, 1)));
            self.buttonValue = ko.observable('add');
            self.currentChromingValue =ko.observable('solid');
            self.CancelBehaviorOpt = ko.observable('icon');
            self.clientName = ko.observable();
            self.businessUnit = ko.observable();
            self.contactPerson = ko.observable();
            self.contactEmail = ko.observable();
            self.contactPhone = ko.observable();
            self.altContactDecision = ko.observable('No');
            self.altContact = ko.observable('') ;
            self.altContactPhone = ko.observable('') ;
            self.altContactEmail = ko.observable('') ;
            self.altContactPos = ko.observable('') ;
            self.groupDecision = ko.observable('Yes');
            self.group = ko.observableArray([]);
            self.groupDP = new ArrayDataProvider(self.group, {
                keyAttributes: "value",
            });
            self.selectedGroup = ko.observable();

            self.selectedClientType = ko.observable();
            self.contactPosition = ko.observable();
            self.addClientMsg = ko.observable();

            self.ClientType = ko.observableArray([]);
            self.ClientGroup = ko.observableArray([]);
            self.PaymentMode = ko.observableArray([]);
            self.InvoiceDueOn = ko.observableArray([]);
            self.HolidayPayType = ko.observableArray([]);

            self.ClientDet = ko.observableArray([]);
            self.shiftDet = ko.observableArray([]);
            self.edtshiftDet = ko.observableArray([]);
            self.unallocationDet = ko.observableArray([]);
            self.allocationDet = ko.observableArray([]);
            self.EditClientDet = ko.observableArray([]);

            self.postcode = ko.observable();
            self.address1 = ko.observable();
            self.address2 = ko.observable();
            self.city = ko.observable();

            self.shiftName = ko.observable();
           
            self.clientButton = ko.observable('conf');
            self.shitModule = ko.observable('conf-shift');
            self.timeSheet = ko.observable();
            self.photoCapture = ko.observable();
            self.fingSign = ko.observable();
            self.nighShift = ko.observable();
            self.staffPay = ko.observable();
            self.shiftType = ko.observable();
            self.shiftEnd = ko.observable();
            self.clientBreak = ko.observable();
            self.clientBreakTime = ko.observable();
            self.staffBreak = ko.observable();
            self.staffBreakTime = ko.observable();
            self.clientPay = ko.observable();
            self.rateType = ko.observable();
            self.slectedShift = ko.observable();
            self.selectShiftType = ko.observable();
            self.dayList = ko.observable();
            self.editBind = ko.observable('no');
            self.clientRate = ko.observable();

            self.timesheetList = ko.observableArray([]);
            self.signatureList = ko.observableArray([]);
            self.photoCaptureList = ko.observableArray([]);
            self.nighShiftList = ko.observableArray([]);
            self.paymentList = ko.observableArray([]);
            self.shiftTypeList = ko.observableArray([]);
            self.shiftEndList = ko.observableArray([]);
            self.clientBreakList = ko.observableArray([]);
            self.clientBreakTimeList = ko.observableArray([]);
            self.staffBreakList = ko.observableArray([]);
            self.staffBreakTimeList = ko.observableArray([]);
            self.clientPayList = ko.observableArray([]);
            self.rateTypeList = ko.observableArray([]);
            self.shiftNameList = ko.observableArray([]);
            self.shiftTypeList = ko.observableArray([]);
            self.dayListArray = ko.observableArray([]);
           
            self.timesheetList.push({'value' : 'Yes', 'label' : 'Yes'},{'value' : 'No', 'label' : 'No'});
            self.signatureList.push({'value' : 'Yes', 'label' : 'Yes'},{'value' : 'No', 'label' : 'No'});
            self.photoCaptureList.push({'value' : 'Yes', 'label' : 'Yes'},{'value' : 'No', 'label' : 'No'});
            self.nighShiftList.push({'value' : 'Yes', 'label' : 'Yes'},{'value' : 'No', 'label' : 'No'});
            self.paymentList.push({'value' : 'Different Rate', 'label' : 'Different Rate'},{'value' : 'Common Rate', 'label' : 'Common Rate'});
            self.shiftTypeList.push({'value' : 'Day Shift', 'label' : 'Day Shift'},{'value' : 'Night Shift', 'label' : 'Night Shift'});
            self.shiftEndList.push({'value' : 'Same Day', 'label' : 'Same Day'},{'value' : 'Next Day', 'label' : 'Next Day'});
            self.clientBreakList.push({'value' : 'Pay', 'label' : 'Shift break with payment'},{'value' : 'No Pay', 'label' : 'Shift break without payment'});
            self.staffBreakList.push({'value' : 'Pay', 'label' : 'Shift break with payment'},{'value' : 'No Pay', 'label' : 'Shift break without payment'});
            self.clientBreakTimeList.push({'value' : 'No', 'label' : 'No break allowed'},
            {'value' : '15', 'label' : '15 minutes'},
            {'value' : '20', 'label' : '20 minutes'},
            {'value' : '30', 'label' : '30 minutes'},
            {'value' : '40', 'label' : '40 minutes'},
            {'value' : '45', 'label' : '45 minutes'},
            {'value' : '60', 'label' : '60 minutes'},
            {'value' : '75', 'label' : '75 minutes'},
            {'value' : '90', 'label' : '90 minutes'},
            {'value' : '105', 'label' : '105 minutes'},
            {'value' : '120', 'label' : '120 minutes'}
            );
            self.staffBreakTimeList.push({'value' : 'No', 'label' : 'No break allowed'},
            {'value' : '15', 'label' : '15 minutes'},
            {'value' : '20', 'label' : '20 minutes'},
            {'value' : '30', 'label' : '30 minutes'},
            {'value' : '40', 'label' : '40 minutes'},
            {'value' : '45', 'label' : '45 minutes'},
            {'value' : '60', 'label' : '60 minutes'},
            {'value' : '75', 'label' : '75 minutes'},
            {'value' : '90', 'label' : '90 minutes'},
            {'value' : '105', 'label' : '105 minutes'},
            {'value' : '120', 'label' : '120 minutes'}
            );
            self.clientPayList.push({'value' : 'Hourly', 'label' : 'Hourly'},{'value' : 'Fixed', 'label' : 'Fixed'});
            self.rateTypeList.push({'value' : 'Yes', 'label' : 'Yes'},{'value' : 'No', 'label' : 'No'});
            self.dayListArray.push({'value' : 'Mon', 'label' : 'Monday'},
            {'value' : 'Tue', 'label' : 'Tuesday'},
            {'value' : 'Wed', 'label' : 'Wednesday'},
            {'value' : 'Thur', 'label' : 'Thursday'},
            {'value' : 'Fri', 'label' : 'Friday'},
            {'value' : 'Sat', 'label' : 'Saturday'},
            {'value' : 'Sun', 'label' : 'Sunday'}
            );

            self.timesheetDP = new ArrayDataProvider(self.timesheetList, {keyAttributes: 'value'});
            self.signatureDP = new ArrayDataProvider(self.signatureList, {keyAttributes: 'value'});
            self.photoDP = new ArrayDataProvider(self.photoCaptureList, {keyAttributes: 'value'});
            self.nighShiftDP = new ArrayDataProvider(self.nighShiftList, {keyAttributes: 'value'});
            self.paymentDP = new ArrayDataProvider(self.paymentList, {keyAttributes: 'value'});
            self.shiftTypeDP = new ArrayDataProvider(self.shiftTypeList, {keyAttributes: 'value'});
            self.shiftEndDP = new ArrayDataProvider(self.shiftEndList, {keyAttributes: 'value'});
            self.clientBreakDP = new ArrayDataProvider(self.clientBreakList, {keyAttributes: 'value'});
            self.clientBreakTimeDP = new ArrayDataProvider(self.clientBreakTimeList, {keyAttributes: 'value'});
            self.staffBreakDP = new ArrayDataProvider(self.staffBreakList, {keyAttributes: 'value'});
            self.staffBreakTimeDP = new ArrayDataProvider(self.staffBreakTimeList, {keyAttributes: 'value'});
            self.clientPayDP = new ArrayDataProvider(self.clientPayList, {keyAttributes: 'value'});
            self.rateTypeDP = new ArrayDataProvider(self.rateTypeList, {keyAttributes: 'value'});
            self.dayListDP = new ArrayDataProvider(self.dayListArray, {keyAttributes: 'value'});


             //Step3
            self.isChecked = ko.observable(false);
            self.billingAddress1 = ko.observable();
            self.billingAddress2 = ko.observable();
            self.billingPostTown = ko.observable();
            self.billingPostCode = ko.observable();
            self.paymentTerms = ko.observable();
            self.selectedInvoiceDueOn = ko.observable();
            self.selectedHolidayPayType = ko.observable();
            self.supportDocument = ko.observable();
            self.selectedPaymentMode = ko.observable();
            self.addClientPaymentMsg = ko.observable();
            self.checkItem = ko.observable(true);

            self.from_date = ko.observable();
            self.to_date = ko.observable();

            self.allocateCheck = ko.observable(false);
            self.isAllocate = ko.observable('unallocated');

            self.groupValid = ko.observable();
            self.clientId = ko.observable();
            self.clientActionBtn = ko.observable('Add');
            self.clientContent = ko.observable(true);

            self.selectorSelectedItems = new ojknockout_keyset_1.ObservableKeySet();

            self.editRow = ko.observable();
            self.isEdit = ko.observable('No');
            self.editShiftName = ko.observable();
            self.editShiftType = ko.observable();
            self.editStartTime = ko.observable();
            self.editEndTime = ko.observable();


            //Add new candidte
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


            self.title = ko.observable();
            self.titleList = ko.observableArray([]);
            self.titleList.push(
                {'value' : 'Mr', 'label' : 'Mr.'},
                {'value' : 'Mrs', 'label' : 'Mrs.'},
                {'value' : 'Miss', 'label' : 'Miss.'}
            );
            self.titleListDP = new ArrayDataProvider(self.titleList, {keyAttributes: 'value'});

            self.firstName = ko.observable();
            self.lastName = ko.observable();
            self.mainPost = ko.observable();
            self.status = ko.observable();
            self.address1 = ko.observable();
            self.address2 = ko.observable();
            self.address3 = ko.observable();
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
            self.emailError = ko.observable();
            self.contactError = ko.observable();

            self.addressLine1Error = ko.observable('');
            self.addressLine2Error = ko.observable('');
            self.townError = ko.observable('');
            self.postcodeError = ko.observable('');


            function getStaff() {
                self.StaffDet([]);
                $.ajax({
                    url: self.DepName() + "/jpStaffGet",
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

     
            self.PaymentModeDP = new ArrayDataProvider(self.PaymentMode, {
                keyAttributes: "value",
            });

            self.InvoiceDueOnDP = new ArrayDataProvider(self.InvoiceDueOn, {
                keyAttributes: "value",
            });

            self.HolidayPayTypeDP = new ArrayDataProvider(self.HolidayPayType, {
                keyAttributes: "value",
            });


            



            this.smQuery = ResponsiveUtils.getFrameworkQuery(ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
            this.isSmall = ResponsiveKnockoutUtils.createMediaQueryObservable(this.smQuery);
            this.dataProvider1 = new ArrayDataProvider(this.StaffDet, { keyAttributes: "id"});
            this.getBadgeClass = (status) => {
                switch (status) {
                    case "Active":
                        return "oj-badge oj-badge-success";
                    default:
                        return "oj-badge";
                }
            };


            this.nextStep2 = () => {
                const train = document.getElementById('train2');
                const next = train.getNextSelectableStep();
                if (next != null) {
                    this.selectedStep2(next);
                    if(this.selectedStep2() == "stp1"){
                        alert("hg")
                    }
                    this.selectedLabel2(train.getStep(next).label);
                    if(this.selectedStep2() == "stp3"){
                        this.isChecked(true);

                        var valBillingAddress1 = this.address1()
                        var valBillingAddress2 = this.address2()
                        var valBillingPostTown = this.city()
                        var valBillingPostCode = this.postcode()
                        self.billingAddress1(valBillingAddress1);
                        self.billingAddress2(valBillingAddress2);
                        self.billingPostTown(valBillingPostTown);
                        self.billingPostCode(valBillingPostCode);
                    
                    }
                    /* if(this.selectedStep2() == "stp5"){
                        getEmployeeList();
                    } */
                }
            };

            this.previousStep2 = () => {
                const train = document.getElementById('train2');
                const prev = train.getPreviousSelectableStep();
                if (prev != null) {
                    this.selectedStep2(prev);
                    this.selectedLabel2(train.getStep(prev).label);
                }
            };

            this.selectedStep2 = ko.observable('stp1');
            this.selectedLabel2 = ko.observable('Basic Details');

            this.stepArray1 = ko.observableArray([
                { label: 'Basic Details', id: 'stp1' },
                { label: 'Client Address', id: 'stp2' },
                { label: 'Payment Info', id: 'stp3' },
                { label: 'Shift Rate & Rules', id: 'stp4' },
                { label: 'Staff Allocation', id: 'stp5' }
            ]);

            this.stepArray2 = ko.observableArray([
                { label: 'Basic Details', id: 'stp1' },
                { label: 'Client Address', id: 'stp2' },
                { label: 'Payment Info', id: 'stp3' },
                { label: 'Shift Rate & Rules', id: 'stp4' },
                { label: 'Staff Allocation', id: 'stp5' }
            ]);

            this.update2 = (event) => {
             console.log(event)
                 /*   event.detail.originalEvent.isTrusted = false; */
                var train = document.getElementById('train2');
                let selectedStep2 = train.getStep(event.detail.value);
                if (selectedStep2 != null) {
                    this.selectedLabel2(selectedStep2.label);
                }
            };



            self.openAddStaffDialog = function (data, event) {
                self.clientActionBtn('Add')
                refresh();
                self.clientContent(false)
                document.querySelector('#openAddStaffDialog').open();
                self.ClientType([]);
                self.ClientGroup([]);
                self.PaymentMode([]);
                self.InvoiceDueOn([]);
                self.HolidayPayType([]);
                $.ajax({
                    url: self.DepName() + "/jpclienttype",
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
                    for (var i = 0; i < data[0].length; i++) {
                            self.ClientType.push({'value' : data[0][i], 'label' : data[0][i]});
                    }
                    for (var i = 0; i < data[0].length; i++) {
                        self.ClientGroup.push({'value' : data[1][i], 'label' : data[1][i]});
                    }
                    for (var i = 0; i < data[2].length; i++) {
                        self.PaymentMode.push({'value' : data[2][i], 'label' : data[2][i]});
                    }
                    for (var i = 0; i < data[4].length; i++) {
                        self.InvoiceDueOn.push({'value' : data[4][i], 'label' : data[4][i]});
                    }
                    for (var i = 0; i < data[5].length; i++) {
                        self.HolidayPayType.push({'value' : data[5][i], 'label' : data[5][i]});
                    }
    
                    self.ClientType.valueHasMutated();
                    self.ClientGroup.valueHasMutated();
                    self.PaymentMode.valueHasMutated();
                    self.InvoiceDueOn.valueHasMutated();
                    self.HolidayPayType.valueHasMutated();
                    return self;
                }
                })
            }


            self.clientAddCancel = function () {
                document.querySelector('#openAddClientDialog').close();
            }


            self.staffAddSave = function (event,data) {
                var validSec1 = self._checkValidationGroup("clientAddSec1");
                var validSec2 = self._checkValidationGroup("clientAddSec2");
                var addressLine1 = document.getElementById("line_1");
                if(addressLine1.value != ""){
                    self.address1(addressLine1.value);
                    self.addressLine1Error('');
                }
                else{
                    self.addressLine1Error("Please fill the address")
                }

                var addressLine2 = document.getElementById("line_2");
                if(addressLine2.value != ""){
                    self.address2(addressLine2.value);
                    self.addressLine2Error('');
                }
                else{
                    self.addressLine2Error("Please fill the address")
                }
                var addressLine3 = document.getElementById("line_3");
                if(addressLine3.value != ""){
                    self.address3(addressLine3.value);
                }
                var postTown = document.getElementById("post_town");
                if(postTown.value != ""){
                    self.postTown(postTown.value);
                    self.townError('');
                }
                else{
                    self.townError("Please enter your town")
                }
                var postcode = document.getElementById("postcode");
                if(postcode.value != ""){
                    self.postCode(postcode.value);
                    self.postcodeError('');
                }
                else{
                    self.postcodeError("Please enter your postcode");
                }
                if (validSec1 && validSec2 && self.emailError() == '' && self.contactError() == '' && self.addressLine1Error() == '' && self.townError() == '' && self.postcodeError() == '') {
                    // submit the form would go here
                     //alert('everything is valid; submit the form');
                
                //document.querySelector('#openAddClientDialog').close();
                document.querySelector('#openAddClientProgress').open();
                self.addClientMsg('');
                $.ajax({
                    url: self.DepName() + "/jpStaffAdd",
                    type: 'POST',
                    data: JSON.stringify({
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
                            document.querySelector('#openAddClientProgress').close();
                            document.querySelector('#Timeout').open();
                        }
                    },
                    success: function (data) {
                        document.querySelector('#openAddClientProgress').close();
                        document.querySelector('#openAddClientResult').open();
                        self.addClientMsg(data[0]);
                        console.log("Success")
                    }
                })  
              }
            }
            function nextStepMove(self){
                const train = document.getElementById('train2');
                const next = train.getNextSelectableStep();
                if (next != null) {
                    self.selectedStep2(next);
                    self.selectedLabel2(train.getStep(next).label);
                    if(self.selectedStep2() == "stp3"){
                        self.isChecked(true);
                        var valBillingAddress1 = self.address1()
                        var valBillingAddress2 = self.address2()
                        var valBillingPostTown = self.city()
                        var valBillingPostCode = self.postcode()
                        self.billingAddress1(valBillingAddress1);
                        self.billingAddress2(valBillingAddress2);
                        self.billingPostTown(valBillingPostTown);
                        self.billingPostCode(valBillingPostCode);                   
                    }
                }
            }
            self.clientAddressSave = function (event,data) {
                var validAddress = self._checkValidationGroup("clientAddress");
                if (validAddress) {
                    // submit the form would go here
                    // alert('everything is valid; submit the form');
              
                 //document.querySelector('#openAddClientDialog').close();
                 document.querySelector('#openAddClientProgress').open();
                 self.addClientMsg('');
                 $.ajax({
                    url: self.DepName() + "/jpclientAddressAdd",
                    type: 'POST',
                    data: JSON.stringify({
                        postcode : self.postcode(),
                        address1 : self.address1(),
                        address2 : self.address2(),
                        city : self.city()
                    }),
                    dataType: 'json',
                    timeout: sessionStorage.getItem("timeInetrval"),
                    context: self,
                    error: function (xhr, textStatus, errorThrown) {
                        if(textStatus == 'timeout'){
                            document.querySelector('#openAddClientProgress').close();
                            document.querySelector('#Timeout').open();
                        }
                    },
                    success: function (data) {
                        console.log(data)
                  /*        document.querySelector('#openAddClientProgress').close();
                         document.querySelector('#openAddClientResult').open();
                         self.addClientMsg(data[0]);

                        return self; */
                       document.querySelector('#openAddClientProgress').close();
                       nextStepMove(self)

                    }
                }) 
            } 
            }

            self.clientConfSave = function (event,data) {
                var validClientConf = self._checkValidationGroup("clientConf");
                // document.querySelector('#openAddClientDialog').close();
                // self.addClientMsg('');
            if (validClientConf) {
                document.querySelector('#openAddClientProgress').open();
                $.ajax({
                    url: self.DepName() + "/jpclientConfAdd",
                    type: 'POST',
                    data: JSON.stringify({
                        timeSheet : self.timeSheet(),
                        photoCapture : self.photoCapture(),
                        fingSign : self.fingSign(),
                        nighShift : self.nighShift(),
                        staffPay : self.staffPay()
                    }),
                    dataType: 'json',
                    timeout: sessionStorage.getItem("timeInetrval"),
                    context: self,
                    error: function (xhr, textStatus, errorThrown) {
                        if(textStatus == 'timeout'){
                            document.querySelector('#openAddClientProgress').close();
                            document.querySelector('#Timeout').open();
                        }
                    },
                    success: function (data) {
                        console.log(data)
                        document.querySelector('#openAddClientProgress').close();
                        // document.querySelector('#openAddClientResult').open();
                        // self.addClientMsg(data[0]);

                       // return self;
                       self.clientButton('rate');

                    }
                })
            }
            }

            self.configShift = function (event,data) {
                var validClientShift = self._checkValidationGroup("clientShift");
                if (validClientShift) {
                    document.querySelector('#openAddClientProgress').open();
                $.ajax({
                    url: self.DepName() + "/jpconfigShiftAdd",
                    type: 'POST',
                    data: JSON.stringify({
                        shiftName : self.shiftName(),
                        shiftType : self.shiftType(),
                        startTime : self.startTime(),
                        endTime : self.endTime(),
                        shiftEnd : self.shiftEnd(),
                        clientBreak : self.clientBreak(),
                        clientBreakTime : self.clientBreakTime(),
                        staffBreak : self.staffBreak(),
                        staffBreakTime : self.staffBreakTime(),
                        clientPay : self.clientPay(),
                        rateType : self.rateType()
                    }),
                    dataType: 'json',
                    timeout: sessionStorage.getItem("timeInetrval"),
                    context: self,
                    error: function (xhr, textStatus, errorThrown) {
                        if(textStatus == 'timeout'){
                            document.querySelector('#openAddClientProgress').close();
                            document.querySelector('#Timeout').open();
                        }
                    },
                    success: function (data) {
                        console.log(data)
                        document.querySelector('#openAddClientProgress').close();
                        self.shitModule('add-rate');
                        return self;
                    }
                })
            }
        }

            self.AddRate = function (event,data) {
                var validClientRate = self._checkValidationGroup("clientRateSec"); 
                if (validClientRate) {
                document.querySelector('#openAddClientProgress').open();
                $.ajax({
                    url: self.DepName() + "/jpaddClientRate",
                    type: 'POST',
                    data: JSON.stringify({
                        shiftName : self.slectedShift(),
                        shiftType : self.selectShiftType(),
                        dayList : self.dayList(),
                        clientRate : self.clientRate()
                    }),
                    dataType: 'json',
                    timeout: sessionStorage.getItem("timeInetrval"),
                    context: self,
                    error: function (xhr, textStatus, errorThrown) {
                        if(textStatus == 'timeout'){
                            document.querySelector('#openAddClientProgress').close();
                            document.querySelector('#Timeout').open();
                        }
                    },
                    success: function (data) {
                        console.log(data)
                        document.querySelector('#openAddClientProgress').close();
                        self.shitModule('shift');
                        return self;
                    }
                })
            }
            }

            self.configureShift = function () {
                self.shiftDet([]);
                console.log(self.getDisplayValue(self.selectorSelectedItems())[0])
                $.ajax({
                    url: self.DepName() + "/jpGetShift",
                    type: 'POST',
                    data: JSON.stringify({
                        clientId : self.getDisplayValue(self.selectorSelectedItems())[0]
                    }),
                    dataType: 'json',
                    timeout: sessionStorage.getItem("timeInetrval"),
                    context: self,
                    error: function (xhr, textStatus, errorThrown) {
                        if(textStatus == 'timeout'){
                            document.querySelector('#openAddClientProgress').close();
                            document.querySelector('#Timeout').open();
                        }
                    },
                    success: function (data) {
                         console.log(data)
                         console.log(JSON.parse(data))
                        data = JSON.parse(data);
                        //for (var i = 0; i < JSON.parse(data).length; i++) {
                             self.shiftDet.push({'Shift Name' : data[0][2], 'Shift Type' : data[0][3], 'Start Time' : data[0][4], 'End Time' : data[0][5]});
                            self.shiftNameList.push({'label' : data[0][2], 'value' : data[0][2]});
                            self.shifTypeList.push({'label' : data[0][3], 'value' : data[0][3]}); 
                         //}

                         console.log(self.shiftDet())
                         self.shiftDet.valueHasMutated();
                        return self;
                    }
                })
            }

            self.shiftByName = function () {
                console.log(self.slectedShift())
                
                self.edtshiftDet([]);
                $.ajax({
                    url: self.DepName() + "/jpGetShiftByname",
                    type: 'POST',
                    data: JSON.stringify({
                        shift_name : self.slectedShift()
                    }),
                    dataType: 'json',
                    timeout: sessionStorage.getItem("timeInetrval"),
                    context: self,
                    error: function (xhr, textStatus, errorThrown) {
                        if(textStatus == 'timeout'){
                            document.querySelector('#openAddClientProgress').close();
                            document.querySelector('#Timeout').open();
                        }
                    },
                    success: function (data) {
                        console.log(data)
                        self.editBind('yes')
                        data = JSON.parse(data);
                        //for (var i = 0; i < JSON.parse(data).length; i++) {
                            self.edtshiftDet.push({'shiftName' : data[0][2], 'shiftType' : data[0][3], 'startTime' : data[0][4], 'endTime' : data[0][5]});
                         //}

                         console.log(self.shiftDet())
                         self.edtshiftDet.valueHasMutated();
                        return self;
                    }
                })
            }

            this.shiftDetDP = new ArrayDataProvider(this.shiftDet, { keyAttributes: "name"});
            this.shiftNameDP = new ArrayDataProvider(this.shiftNameList, { keyAttributes: "value"});
            this.shiftTypeDP = new ArrayDataProvider(this.shiftTypeList, { keyAttributes: "value"});
            this.edtshiftDetDP = new ArrayDataProvider(this.edtshiftDet, { keyAttributes: "name"});
            this.unallocationDetDP = new ArrayDataProvider(this.unallocationDet, { keyAttributes: "name"});
            this.allocationDetDP = new ArrayDataProvider(this.allocationDet, { keyAttributes: "name"});

            self.shifColoumnArray = [{headerText: 'Shift Name',
                            field: 'Shift Name'},
                            {headerText: 'Shift Type',
                            field: 'Shift Type'},
                            {headerText: 'Start Time',
                            field: 'Start Time'},
                            {headerText: 'End Time',
                            field: 'End Time'},
];

            self.DBErrorOKClose = function (event) {
                document.querySelector('#openAddClientResult').close();
                document.querySelector('#openAddStaffDialog').close();
                getStaff();
            };

            self.connected = function () {
                if (sessionStorage.getItem("userName") == null) {
                    self.router.go({ path: 'signin' });
                }
                else {
                   app.onAppSuccess();
                   getStaff();
                }
            };

            self.clientAddPaymentSave = function (event,data) {
                var validPaySec1 = self._checkValidationGroup("clientPaySec1");
                var validPaySec2 = self._checkValidationGroup("clientPaySec2");
                if (validPaySec1&&validPaySec2) {
                    // submit the form would go here
                     //alert('everything is valid; submit the form');
                
                //document.querySelector('#openAddClientDialog').close();
                document.querySelector('#openAddClientProgress').open(); 
                console.log(self.selectedPaymentMode())
                console.log(self.selectedPaymentMode()[0]) 
                self.addClientPaymentMsg('');
                $.ajax({
                    url: self.DepName() + "/jpclientaddpayment",
                    type: 'POST',
                    data: JSON.stringify({
                        billingAddress1 : self.billingAddress1(),
                        billingAddress2 : self.billingAddress2(),
                        billingPostTown : self.billingPostTown(),
                        billingPostCode : self.billingPostCode(),
                        paymentTerms : self.paymentTerms(),
                        selectedInvoiceDueOn : self.selectedInvoiceDueOn(),
                        selectedHolidayPayType : self.selectedHolidayPayType(),
                        supportDocument : self.supportDocument(),
                        selectedPaymentMode : self.selectedPaymentMode(),  
                        address_decision : self.isChecked()
                    }),
                    dataType: 'json',
                    timeout: sessionStorage.getItem("timeInetrval"),
                    context: self,
                    error: function (xhr, textStatus, errorThrown) {
                        if(textStatus == 'timeout'){
                            document.querySelector('#openAddClientProgress').close();
                            document.querySelector('#Timeout').open();
                        }
                    },
                    success: function (data) {
                        /* console.log(data)
                        document.querySelector('#openAddClientProgress').close();
                        document.querySelector('#openAddClientPaymentResult').open();
                        self.addClientPaymentMsg(data[0]);

                        return self; */
                        document.querySelector('#openAddClientProgress').close(); 
                        nextStepMove(self)
                    }
                }) 
                }
            }
            self.DBErrorOKClose2 = function (event) {
                document.querySelector('#openAddClientPaymentResult').close();
            };
            self.checkedValue = () => {
                var valBillingAddress1 = self.address1()
                var valBillingAddress2 = self.address2()
                var valBillingPostTown = self.city()
                var valBillingPostCode = self.postcode()
                if(self.isChecked() === true){
                    /* self.billingAddress1 = ko.observable(valBillingAddress1);
                    self.billingAddress2 = ko.observable(valBillingAddress2);
                    self.billingPostTown = ko.observable(valBillingPostTown);
                    self.billingPostCode = ko.observable(valBillingPostCode); */

                    self.billingAddress1(valBillingAddress1);
                    self.billingAddress2(valBillingAddress2);
                    self.billingPostTown(valBillingPostTown);
                    self.billingPostCode(valBillingPostCode);
                }else if(self.isChecked() === false){
                    /* self.billingAddress1 = ko.observable("");
                    self.billingAddress2 = ko.observable("");
                    self.billingPostTown = ko.observable("");
                    self.billingPostCode = ko.observable(""); */

                    self.billingAddress1("");
                    self.billingAddress2("");
                    self.billingPostTown("");
                    self.billingPostCode("");
                }
            }
    

          
            
            self.getAvailableEmployees = function (event,data) {
                var validStaffAllocate1= self._checkValidationGroup("staffAllocateSec1");
                var validStaffAllocate2= self._checkValidationGroup("staffAllocateSec2");
                if (validStaffAllocate1 && validStaffAllocate2) {
                self.unallocationDet([]);
                self.allocationDet([]);
                $.ajax({
                    url: self.DepName() + "/jpAvailableEmployeesGet",
                    type: 'POST',
                    data: JSON.stringify({
                        from_date : self.from_date(),
                        to_date : self.to_date()
                    }),
                    dataType: 'json',
                    timeout: sessionStorage.getItem("timeInetrval"),
                    context: self,
                    error: function (xhr, textStatus, errorThrown) {
                        if(textStatus == 'timeout'){
                            document.querySelector('#openAddClientProgress').close();
                            document.querySelector('#Timeout').open();
                        }
                    },
                    success: function (result) {
                        console.log(result)
                        var data = JSON.parse(result[0]);
                        var allocatedData = JSON.parse(result[1]);
                        console.log(data)
                        console.log(data.length)
                        console.log(allocatedData)
                        console.log(allocatedData.length)


                        for (var i = 0; i < data.length; i++) {
                            self.unallocationDet.push({'id' : data[i][0],'surname' : data[i][2] + " " +  data[i][3], 'posts' : data[i][4], 'email' : data[i][18], 'contact_no' : data[i][15], 'allocation_status' : data[i][39]});
                        }  
                        for (var i = 0; i < allocatedData.length; i++) {
                            self.allocationDet.push({'id' : allocatedData[i][0],'surname' : allocatedData[i][2] + " " +  allocatedData[i][3], 'posts' : allocatedData[i][4], 'email' : allocatedData[i][18], 'contact_no' : allocatedData[i][15], 'allocation_status' : allocatedData[i][39]});
                        }  
                         //console.log(self.allocationDet())
                         self.unallocationDet.valueHasMutated(); 
                         self.allocationDet.valueHasMutated(); 
                         //return self;
                         
                    }
                })
            }
            }
   
                this.allocationChecked = (event, context) => {
                    var value = unAllocatedTable.currentRow;
                    console.log(value.rowIndex)
                    var rowIndex = value.rowIndex;
                    const rowData = context.item.data;
                    rowData.allocation_status = 'Requested';
                    console.log(rowData)
                    console.log(rowData.id)
                    var selectedRowId = rowData.id;
                    $.ajax({
                        url: self.DepName() + "/jpRequestAvailableEmployees",
                        type: 'POST',
                        data: JSON.stringify({
                            from_date : self.from_date(),
                            to_date : self.to_date(),
                            selectedRowId : selectedRowId
                        }),
                        dataType: 'json',
                        timeout: sessionStorage.getItem("timeInetrval"),
                        context: self,
                        error: function (xhr, textStatus, errorThrown) {
                            if(textStatus == 'timeout'){
                                document.querySelector('#openAddClientProgress').close();
                                document.querySelector('#Timeout').open();
                            }
                        },
                        success: function (result) {
                            console.log(result)           
                        }
                    })
                    getAvailableEmployees();
                };

                function getAvailableEmployees(){
                    self.unallocationDet([]);
                    self.allocationDet([]);
                    $.ajax({
                        url: self.DepName() + "/jpAvailableEmployeesGet",
                        type: 'POST',
                        data: JSON.stringify({
                            from_date : self.from_date(),
                            to_date : self.to_date()
                        }),
                        dataType: 'json',
                        timeout: sessionStorage.getItem("timeInetrval"),
                        context: self,
                        error: function (xhr, textStatus, errorThrown) {
                            if(textStatus == 'timeout'){
                                document.querySelector('#openAddClientProgress').close();
                                document.querySelector('#Timeout').open();
                            }
                        },
                        success: function (result) {
                            console.log(result)
                            var data = JSON.parse(result[0]);
                            var allocatedData = JSON.parse(result[1]);
                            console.log(data)
                            console.log(data.length)
                            console.log(allocatedData)
                            console.log(allocatedData.length)
    
    
                            for (var i = 0; i < data.length; i++) {
                                self.unallocationDet.push({'id' : data[i][0],'surname' : data[i][2] + " " +  data[i][3], 'posts' : data[i][4], 'email' : data[i][18], 'contact_no' : data[i][15], 'allocation_status' : data[i][39]});
                            }  
                            for (var i = 0; i < allocatedData.length; i++) {
                                self.allocationDet.push({'id' : allocatedData[i][0],'surname' : allocatedData[i][2] + " " +  allocatedData[i][3], 'posts' : allocatedData[i][4], 'email' : allocatedData[i][18], 'contact_no' : allocatedData[i][15], 'allocation_status' : allocatedData[i][39]});
                            }  
                             self.unallocationDet.valueHasMutated(); 
                             self.allocationDet.valueHasMutated(); 
                             
                        }
                    })
                }
                self.editClient = function (event,data) {
                    //self.checkItem(false);
                    refresh();
                    getClientDropDownValues();
                    self.clientActionBtn('Update')
                    self.clientContent(false)
                    var clickedClientId = self.getDisplayValue(self.selectorSelectedItems())[0];
                    console.log(clickedClientId)
                    //console.log(self.getDisplayValue(self.selectedItems()).length)

                    /* console.log(data)
                    console.log(data.data.ClientType)*/
                    if(clickedClientId !=undefined){
                    document.querySelector('#openAddClientDialog').open();
                    self.EditClientDet([]);
                    $.ajax({
                        url: self.DepName() + "/jpEditClientDetails",
                        type: 'POST',
                        data: JSON.stringify({
                            clientId : self.getDisplayValue(self.selectorSelectedItems())[0]
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
                            //console.log(data[0][1])
                            self.clientId(data[0][0])
                            self.clientName(data[0][1])
                            self.businessUnit(data[0][2])
                            self.contactPerson(data[0][5])
                            self.contactEmail(data[0][6])
                            self.contactPosition(data[0][8])
                            self.contactPhone(data[0][7])
                            self.selectedGroup(data[0][4]) 
                            self.selectedClientType(data[0][3]) 

                            self.postcode(data[0][14])
                            self.address1(data[0][15])
                            self.address2(data[0][16])
                            self.city(data[0][17])
                            self.altContactDecision(data[0][13])

                            self.altContact(data[0][9])
                            self.altContactEmail(data[0][10])
                            self.altContactPhone(data[0][11])
                            self.altContactPos(data[0][12])
        
                            self.paymentTerms(data[0][22]) 
                            self.selectedInvoiceDueOn(data[0][23]) 
                            self.selectedHolidayPayType(data[0][24]) 
                            self.supportDocument(data[0][25]) 
                            self.selectedPaymentMode(data[0][26]) 
                            if(data[0][27] == 1){
                                self.isChecked(true) 
                                var valBillingAddress1 = self.address1()
                                var valBillingAddress2 = self.address2()
                                var valBillingPostTown = self.city()
                                var valBillingPostCode = self.postcode()
                                self.billingAddress1(valBillingAddress1)
                                self.billingAddress2(valBillingAddress2)
                                self.billingPostTown(valBillingPostTown)
                                self.billingPostCode(valBillingPostCode)
                            }else if(data[0][27] == 0){
                                self.isChecked(false) 
                                self.billingAddress1(data[0][18])
                                self.billingAddress2(data[0][19])
                                self.billingPostTown(data[0][20])
                                self.billingPostCode(data[0][21])
                            } 

                            /* self.shiftName(data[0][28]) 
                            self.shiftType(data[0][29]) 
                           
                            self.shiftEnd(data[0][32]) 
                            self.clientBreak(data[0][33]) 
                            self.clientBreakTime(data[0][34]) 
                            self.staffBreak(data[0][35]) 
                            self.staffBreakTime(data[0][36]) 
                            self.clientPay(data[0][37]) 
                            self.rateType(data[0][38])  */
                           
                            self.timeSheet(data[0][39]) 
                            self.photoCapture(data[0][40]) 
                            self.fingSign(data[0][41]) 
                            self.nighShift(data[0][42]) 
                            self.staffPay(data[0][43]) 
                    }
                    })
                } 
                }

                self.viewClient = function (event,data) {
                    refresh();
                    //self.checkItem(false);
                    self.clientContent(true)
                    self.clientActionBtn('View')
                    var clickedClientId = self.getDisplayValue(self.selectorSelectedItems())[0];
                    console.log(clickedClientId)
                    //console.log(self.getDisplayValue(self.selectedItems()).length)

                    /* console.log(data)
                    console.log(data.data.ClientType)*/
                    if(clickedClientId !=undefined){
                    document.querySelector('#openAddClientDialog').open();
                    self.EditClientDet([]);
                    $.ajax({
                        url: self.DepName() + "/jpEditClientDetails",
                        type: 'POST',
                        data: JSON.stringify({
                            clientId : self.getDisplayValue(self.selectorSelectedItems())[0]
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
                            //console.log(data[0][1])
                            self.clientId(data[0][0])
                            self.clientName(data[0][1])
                            self.businessUnit(data[0][2])
                            self.contactPerson(data[0][5])
                            self.contactEmail(data[0][6])
                            self.contactPosition(data[0][8])
                            self.contactPhone(data[0][7])
                            self.selectedGroup(data[0][4]) 
                            self.selectedClientType(data[0][3]) 

                            self.postcode(data[0][14])
                            self.address1(data[0][15])
                            self.address2(data[0][16])
                            self.city(data[0][17])
                            self.altContactDecision(data[0][13])

                            self.altContact(data[0][9])
                            self.altContactEmail(data[0][10])
                            self.altContactPhone(data[0][11])
                            self.altContactPos(data[0][12])

                            self.paymentTerms(data[0][22]) 
                            self.selectedInvoiceDueOn(data[0][23]) 
                            self.selectedHolidayPayType(data[0][24]) 
                            self.supportDocument(data[0][25]) 
                            self.selectedPaymentMode(data[0][26]) 
                            if(data[0][27] == 1){
                                self.isChecked(true) 
                                var valBillingAddress1 = self.address1()
                                var valBillingAddress2 = self.address2()
                                var valBillingPostTown = self.city()
                                var valBillingPostCode = self.postcode()
                                self.billingAddress1(valBillingAddress1)
                                self.billingAddress2(valBillingAddress2)
                                self.billingPostTown(valBillingPostTown)
                                self.billingPostCode(valBillingPostCode)
                            }else if(data[0][27] == 0){
                                self.isChecked(false) 
                                self.billingAddress1(data[0][18])
                                self.billingAddress2(data[0][19])
                                self.billingPostTown(data[0][20])
                                self.billingPostCode(data[0][21])
                            } 
                        /*     
                            self.shiftName(data[0][28]) 
                            self.shiftType(data[0][29]) 
                            self.startTime(data[0][28]) 
                            self.endTime(data[0][29])  
                            self.shiftEnd(data[0][32]) 
                            self.clientBreak(data[0][33]) 
                            self.clientBreakTime(data[0][34]) 
                            self.staffBreak(data[0][35]) 
                            self.staffBreakTime(data[0][36]) 
                            self.clientPay(data[0][37]) 
                            self.rateType(data[0][38])  */

                            self.timeSheet(data[0][39]) 
                            self.photoCapture(data[0][40]) 
                            self.fingSign(data[0][41]) 
                            self.nighShift(data[0][42]) 
                            self.staffPay(data[0][43]) 
                    }
                    })
                } 
                }


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
            self.getDisplayValue = function (set) {
                var arr = [];
                set.values().forEach(function (key) {
                    arr.push(key);
                });
                return arr;
            };
         /*    self.emailPatternValidator = ko.observableArray([
                new AsyncRegExpValidator({
                    pattern: "[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*",
                    hint: 'enter a valid email format',
                    messageDetail: 'Not a valid email format'
                })
            ]); */
            function refresh(){
                self.title('');
                self.firstName('');
                self.lastName('');
                self.mainPost('');
                self.status('');
                self.address1('');
                self.address2('');
                self.postTown('');
                self.postCode('');
                self.contactEmail('');
                self.contactNumber('');
            }

            self.clientBasicUpdate = function (event,data) {
                var validSec1 = self._checkValidationGroup("clientAddSec1");
                var validSec2 = self._checkValidationGroup("clientAddSec2");

                if (validSec1 && validSec2) {
                    // submit the form would go here
                     //alert('everything is valid; submit the form');
                
                //document.querySelector('#openAddClientDialog').close();
                document.querySelector('#openAddClientProgress').open();
                self.addClientMsg('');
                $.ajax({
                    url: self.DepName() + "/jpclientbasicupdate",
                    type: 'POST',
                    data: JSON.stringify({
                        clientId : self.clientId(),
                        clientName : self.clientName(),
                        businessUnit : self.businessUnit(),
                        contactPerson : self.contactPerson(),
                        contactEmail : self.contactEmail(),
                        contactPhone : self.contactPhone(),
                        contactPosition : self.contactPosition(),
                        altContactDecision : self.altContactDecision(),
                        altContact : self.altContact(),
                        altContactEmail : self.altContactEmail(),
                        altContactPhone : self.altContactPhone(),
                        altContactPos : self.altContactPos(),
                        groupDecision : self.groupDecision(),
                        selectedGroup : self.selectedGroup(),
                        selectedClientType : self.selectedClientType()
                    }),
                    dataType: 'json',
                    timeout: sessionStorage.getItem("timeInetrval"),
                    context: self,
                    error: function (xhr, textStatus, errorThrown) {
                        if(textStatus == 'timeout'){
                            document.querySelector('#openAddClientProgress').close();
                            document.querySelector('#Timeout').open();
                        }
                    },
                    success: function (data) {
                        document.querySelector('#openAddClientProgress').close();
                        //document.querySelector('#openAddClientResult').open();
                        //self.addClientMsg(data[0]);

                        //return self;

                        nextStepMove(self)
                    }
                })  
              }
            }

            self.clientAddressUpdate = function (event,data) {
                var validAddress = self._checkValidationGroup("clientAddress");
                if (validAddress) {
                    // submit the form would go here
                    // alert('everything is valid; submit the form');
              
                 //document.querySelector('#openAddClientDialog').close();
                 document.querySelector('#openAddClientProgress').open();
                 self.addClientMsg('');
                 $.ajax({
                    url: self.DepName() + "/jpclientAddressUpdate",
                    type: 'POST',
                    data: JSON.stringify({
                        clientId : self.clientId(),
                        postcode : self.postcode(),
                        address1 : self.address1(),
                        address2 : self.address2(),
                        city : self.city()
                    }),
                    dataType: 'json',
                    timeout: sessionStorage.getItem("timeInetrval"),
                    context: self,
                    error: function (xhr, textStatus, errorThrown) {
                        if(textStatus == 'timeout'){
                            document.querySelector('#openAddClientProgress').close();
                            document.querySelector('#Timeout').open();
                        }
                    },
                    success: function (data) {
                        console.log(data)
                  /*        document.querySelector('#openAddClientProgress').close();
                         document.querySelector('#openAddClientResult').open();
                         self.addClientMsg(data[0]);

                        return self; */
                       document.querySelector('#openAddClientProgress').close();
                       nextStepMove(self)

                    }
                }) 
            } 
            }

            self.clientAddPaymentUpdate = function (event,data) {
                var validPaySec1 = self._checkValidationGroup("clientPaySec1");
                var validPaySec2 = self._checkValidationGroup("clientPaySec2");
                if (validPaySec1&&validPaySec2) {
                    // submit the form would go here
                     //alert('everything is valid; submit the form');
                
                //document.querySelector('#openAddClientDialog').close();
                document.querySelector('#openAddClientProgress').open(); 
                console.log(self.selectedPaymentMode())
                console.log(self.selectedPaymentMode()[0]) 
                self.addClientPaymentMsg('');
                $.ajax({
                    url: self.DepName() + "/jpclientupdatepayment",
                    type: 'POST',
                    data: JSON.stringify({
                        clientId : self.clientId(),
                        billingAddress1 : self.billingAddress1(),
                        billingAddress2 : self.billingAddress2(),
                        billingPostTown : self.billingPostTown(),
                        billingPostCode : self.billingPostCode(),
                        paymentTerms : self.paymentTerms(),
                        selectedInvoiceDueOn : self.selectedInvoiceDueOn(),
                        selectedHolidayPayType : self.selectedHolidayPayType(),
                        supportDocument : self.supportDocument(),
                        selectedPaymentMode : self.selectedPaymentMode(),  
                        address_decision : self.isChecked()
                    }),
                    dataType: 'json',
                    timeout: sessionStorage.getItem("timeInetrval"),
                    context: self,
                    error: function (xhr, textStatus, errorThrown) {
                        if(textStatus == 'timeout'){
                            document.querySelector('#openAddClientProgress').close();
                            document.querySelector('#Timeout').open();
                        }
                    },
                    success: function (data) {
                        /* console.log(data)
                        document.querySelector('#openAddClientProgress').close();
                        document.querySelector('#openAddClientPaymentResult').open();
                        self.addClientPaymentMsg(data[0]);

                        return self; */
                        document.querySelector('#openAddClientProgress').close(); 
                        nextStepMove(self)
                    }
                }) 
                }
            }

            self.clientConfUpdate = function (event,data) {
                var validClientConf = self._checkValidationGroup("clientConf");
                // document.querySelector('#openAddClientDialog').close();
                // self.addClientMsg('');
            if (validClientConf) {
                document.querySelector('#openAddClientProgress').open();
                $.ajax({
                    url: self.DepName() + "/jpclientConfUpdate",
                    type: 'POST',
                    data: JSON.stringify({
                        clientId : self.clientId(),
                        timeSheet : self.timeSheet(),
                        photoCapture : self.photoCapture(),
                        fingSign : self.fingSign(),
                        nighShift : self.nighShift(),
                        staffPay : self.staffPay()
                    }),
                    dataType: 'json',
                    timeout: sessionStorage.getItem("timeInetrval"),
                    context: self,
                    error: function (xhr, textStatus, errorThrown) {
                        if(textStatus == 'timeout'){
                            document.querySelector('#openAddClientProgress').close();
                            document.querySelector('#Timeout').open();
                        }
                    },
                    success: function (data) {
                        console.log(data)
                        document.querySelector('#openAddClientProgress').close();
                        // document.querySelector('#openAddClientResult').open();
                        // self.addClientMsg(data[0]);

                       // return self;
                       self.clientButton('rate');

                    }
                })
            }
            }

            self.editShiftRow = function (event,data) {
                console.log(data)
                console.log(data.row.shiftName)
                self.isEdit('Yes');
                self.editShiftName(data.row.shiftName)
                self.editShiftType(data.row.shiftType)
                self.editStartTime(data.row.startTime)
                self.editEndTime(data.row.endTime)
            }
            
            self.updateShiftRow = function (event,data) {
                console.log(data)
                $.ajax({
                    url: self.DepName() + "/jpclientShiftUpdate",
                    type: 'POST',
                    data: JSON.stringify({
                        clientId : self.clientId(),
                        shiftName : self.editShiftName(),
                        shiftType : self.editShiftType(),
                        startTime : self.editStartTime(),
                        endTime : self.editEndTime()
                    }),
                    dataType: 'json',
                    timeout: sessionStorage.getItem("timeInetrval"),
                    context: self,
                    error: function (xhr, textStatus, errorThrown) {
                        if(textStatus == 'timeout'){
                            document.querySelector('#openAddClientProgress').open();
                            document.querySelector('#Timeout').open();
                        }
                    },
                    success: function (data) {
                        console.log(data)
                        document.querySelector('#openAddClientProgress').close();
                        document.querySelector('#openAddClientResult').open();
                        document.querySelector('#openAddClientDialog').close();
                        self.addClientMsg(data[0]);
                    }
                })
            }
            function getClientDropDownValues(){
                self.ClientType([]);
                self.ClientGroup([]);
                self.PaymentMode([]);
                self.InvoiceDueOn([]);
                self.HolidayPayType([]);
                $.ajax({
                    url: self.DepName() + "/jpclienttype",
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
                    for (var i = 0; i < data[0].length; i++) {
                            self.ClientType.push({'value' : data[0][i], 'label' : data[0][i]});
                    }
                    for (var i = 0; i < data[0].length; i++) {
                        self.ClientGroup.push({'value' : data[1][i], 'label' : data[1][i]});
                    }
                    for (var i = 0; i < data[2].length; i++) {
                        self.PaymentMode.push({'value' : data[2][i], 'label' : data[2][i]});
                    }
                    for (var i = 0; i < data[4].length; i++) {
                        self.InvoiceDueOn.push({'value' : data[4][i], 'label' : data[4][i]});
                    }
                    for (var i = 0; i < data[5].length; i++) {
                        self.HolidayPayType.push({'value' : data[5][i], 'label' : data[5][i]});
                    }
    
                    self.ClientType.valueHasMutated();
                    self.ClientGroup.valueHasMutated();
                    self.PaymentMode.valueHasMutated();
                    self.InvoiceDueOn.valueHasMutated();
                    self.HolidayPayType.valueHasMutated();
                    return self;
                }
                })
            }
            self.configShiftEditAction = function (event,data) {
                var validClientShift = self._checkValidationGroup("clientShift");
                if (validClientShift) {
                    document.querySelector('#openAddClientProgress').open();
                $.ajax({
                    url: self.DepName() + "/jpconfigShiftAddRow",
                    type: 'POST',
                    data: JSON.stringify({
                        clientId : self.clientId(),
                        shiftName : self.shiftName(),
                        shiftType : self.shiftType(),
                        startTime : self.startTime(),
                        endTime : self.endTime(),
                        shiftEnd : self.shiftEnd(),
                        clientBreak : self.clientBreak(),
                        clientBreakTime : self.clientBreakTime(),
                        staffBreak : self.staffBreak(),
                        staffBreakTime : self.staffBreakTime(),
                        clientPay : self.clientPay(),
                        rateType : self.rateType()
                    }),
                    dataType: 'json',
                    timeout: sessionStorage.getItem("timeInetrval"),
                    context: self,
                    error: function (xhr, textStatus, errorThrown) {
                        if(textStatus == 'timeout'){
                            document.querySelector('#openAddClientProgress').close();
                            document.querySelector('#Timeout').open();
                        }
                    },
                    success: function (data) {
                        console.log(data)
                        document.querySelector('#openAddClientProgress').close();
                        self.shitModule('add-rate');
                        return self;
                    }
                })
            }
        }
        self.AddRateEditAction = function (event,data) {
            var validClientRate = self._checkValidationGroup("clientRateSec"); 
            if (validClientRate) {
            document.querySelector('#openAddClientProgress').open();
            $.ajax({
                url: self.DepName() + "/jpaddClientRateEditRow",
                type: 'POST',
                data: JSON.stringify({
                    clientId : self.clientId(),
                    shiftName : self.slectedShift(),
                    shiftType : self.selectShiftType(),
                    dayList : self.dayList(),
                    clientRate : self.clientRate()
                }),
                dataType: 'json',
                timeout: sessionStorage.getItem("timeInetrval"),
                context: self,
                error: function (xhr, textStatus, errorThrown) {
                    if(textStatus == 'timeout'){
                        document.querySelector('#openAddClientProgress').close();
                        document.querySelector('#Timeout').open();
                    }
                },
                success: function (data) {
                    console.log(data)
                    document.querySelector('#openAddClientProgress').close();
                    self.shitModule('shift');
                    return self;
                }
            })
        }
        }

        self.subpostShow = function (event,data) {
            if(self.mainPost()=='Care Assistant'){
                document.getElementById('subpost1').style.display='block';
                document.getElementById('subpost2').style.display='none';
                document.getElementById('subpost3').style.display='none';
            }
            else if(self.mainPost()=='Senior Care Assistant'){
                document.getElementById('subpost2').style.display='block';
                document.getElementById('subpost1').style.display='none';
                document.getElementById('subpost3').style.display='none';
            }                
            else if(self.mainPost()=='Domiciliary Care'){
                document.getElementById('subpost3').style.display='block';
                document.getElementById('subpost1').style.display='none';
                document.getElementById('subpost2').style.display='none';      
            }
            else{
                document.getElementById('subpost1').style.display='none';
                document.getElementById('subpost2').style.display='none';
                document.getElementById('subpost3').style.display='none';
            }
        }
        self.context = context;
        self.router = self.context.parentRouter;

        self.editStaff = function (event,data) {
            var clickedStaffId = self.getDisplayValue(self.selectorSelectedItems())[0];
            console.log(clickedStaffId)
            sessionStorage.setItem("staffId", clickedStaffId);
            sessionStorage.setItem("BaseURL", self.DepName());
            console.log(data)
            self.router.go({path:'staffView'})
        }
        self.emailPatternValidator= function(event,data) {
            console.log(self.contactEmail())  
            var inputText=self.contactEmail()
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(inputText.match(mailformat))
            {
                self.emailError('')
            }else if(self.emailError() ==undefined){
                self.emailError('');
            }
            else
            {
                self.emailError("Should enter a valid email address.");
                return false;
            } 
            $.ajax({
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
              });    
         }
         self.onlyNumberKey= function(event,data) {
            console.log(event.detail.value)
            var ASCIICode= event.detail.value
            if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57) && ASCIICode.length==10){
                self.contactError('')
            }else if(self.contactError() ==undefined){
                self.contactError('');
            }
            else{
                self.contactError("Invalid phone number.");
            }
         }

         self.deleteConfirm = function (event,data) {
            var clickedRowId = self.getDisplayValue(self.selectorSelectedItems())[0];
            sessionStorage.setItem("staffId", clickedRowId);
            console.log(clickedRowId)
            if(clickedRowId !=undefined){
                document.querySelector('#openDeleteConfirm').open();
            }         
           
        }

        self.deleteStaffInfo = function (event,data) {
            var clickedRowId = self.getDisplayValue(self.selectorSelectedItems())[0];
            sessionStorage.setItem("staffId", clickedRowId);
            console.log(clickedRowId)
            var BaseURL = sessionStorage.getItem("BaseURL");
            if(clickedRowId !=undefined){
                document.querySelector('#openDeleteConfirm').close();
                document.querySelector('#openDeleteStaffProgress').open();
                 $.ajax({
                    url: BaseURL + "/jpDeleteStaffDetails",
                    type: 'POST',
                    data: JSON.stringify({
                       staffId : self.getDisplayValue(self.selectorSelectedItems())[0]
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
                        document.querySelector('#openDeleteStaffProgress').close();
                        document.querySelector('#openAddClientResult').open();
                        self.addClientMsg(data[0]);
                        console.log("success")
                }
                })  

            }         
           
        }

        }
    }
    return  addStaffViewModel;
});