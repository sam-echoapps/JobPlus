define(['ojs/ojcore', 'knockout', 'jquery', 'appController', "ojs/ojmodulerouter-adapter", 
    "ojs/ojarraydataprovider", "ojs/ojprogress-bar",
    "ojs/ojknockout", "ojs/ojlistview", "ojs/ojmodule-element"], 
    function (oj, ko, $, app, ModuleRouterAdapter, ArrayDataProvider) {
    "use strict";
    class ViewModel {
        constructor(args) {
            var self = this
            
            self.progressValue = ko.observable(30);

            self.DepName = args.routerState.detail.dep_url;
            self.DepType = args.routerState.detail.dep_type;
            self.record = ko.observable();
            self.profileStatus = ko.observable('');
            self.referenceStatus = ko.observable('');
            self.bankStatus = ko.observable('');
            self.relativeStatus = ko.observable('');
            self.educationStatus = ko.observable('');
            self.workStatus = ko.observable('');
            self.dbsStatus = ko.observable('');
            self.healthStatus = ko.observable('');
                
            self.router = args.parentRouter;

            self.connected = function () {
                if (sessionStorage.getItem("userName") == null) {
                    self.router.go({path : 'signin'});
                }
                else {
                    app.onAppSuccess();
                }
            }
            
            var BaseURL = sessionStorage.getItem("BaseURL")
            
            $.ajax({                   
                url: BaseURL + "/jpEditStaffDetails",
                type: 'POST',
                data: JSON.stringify({
                    staffId : sessionStorage.getItem("userId")
                }),
                dataType: 'json',
                success: function (data) {
                    let name = `${data[0][2]} ${data[0][3]}`
                    sessionStorage.setItem("userName", name);
                }
            })

            var routerLength = args.parentRouter._routes.length;
            if(routerLength!=11){
                location.reload();
            }

            
            $.ajax({                   
                url: BaseURL + "/jpGetRecruitmentStatus",
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
                    if(data[0].length !=0) {
                        if(data[0][0][0] == "Pending") {
                            self.profileStatus('Pending');
                        }
                        else if(data[0][0][0] == "Audited") {
                            self.profileStatus('Audited');
                        }
                    }
                    else{
                        self.profileStatus('Pending');
                    }
                    if(data[1].length !=0) {  
                        if(data[1][0][0] == "Pending") {
                            self.referenceStatus('Pending');
                        }
                        else if(data[1][0][0] == "Audited") {
                            self.referenceStatus('Audited');
                        }
                    }
                    else{
                        self.referenceStatus('Pending');
                    } 
                    if(data[2].length !=0) {
                        if(data[2][0][0] == "Pending") {
                            self.bankStatus('Pending');
                        }
                        else if(data[2][0][0] == "Audited") {
                            self.bankStatus('Audited');
                        }
                    }
                    else{
                        self.bankStatus('Pending');
                    }
                    if(data[3].length !=0) {
                        if(data[3][0][0] == "Pending") {
                            self.relativeStatus('Pending');
                        }
                        else if(data[3][0][0] == "Audited") {
                            self.relativeStatus('Audited');
                        }
                    }
                    else{
                        self.relativeStatus('Pending');
                    }  
                    if(data[4].length !=0) {
                        if(data[4][0] == "Pending") {
                            self.educationStatus('Pending');
                        }
                        else if(data[4][0] == "Audited") {
                            self.educationStatus('Audited');
                        }
                    }
                    else{
                        self.educationStatus('Pending');
                    } 
                    if(data[5].length !=0) {
                        if(data[5][0] == "Pending") {
                            self.workStatus('Pending');
                        }
                        else if(data[5][0] == "Audited") {
                            self.workStatus('Audited');
                        }
                    }
                    else{
                        self.workStatus('Pending');
                    } 
                   
                    if(self.profileStatus() != sessionStorage.getItem('profile_status')){
                        location.reload()
                    }
                    if(self.referenceStatus() != sessionStorage.getItem('reference_status')){
                        location.reload()
                    }
                    if(self.bankStatus() != sessionStorage.getItem('bank_status')){
                        location.reload()
                    }
                    if(self.relativeStatus() != sessionStorage.getItem('relative_status')){
                        location.reload()
                    }
                    if(self.educationStatus() != sessionStorage.getItem('education_status')){
                        location.reload()
                    }   
                    if(self.workStatus() != sessionStorage.getItem('work_status')){
                        location.reload()
                    }                       

                    sessionStorage.setItem('profile_status',self.profileStatus()); 
                    sessionStorage.setItem('reference_status',self.referenceStatus()); 
                    sessionStorage.setItem('bank_status',self.bankStatus()); 
                    sessionStorage.setItem('relative_status',self.relativeStatus()); 
                    sessionStorage.setItem('education_status',self.educationStatus()); 
                    sessionStorage.setItem('work_status',self.workStatus()); 
                }
            })

            var records = {
                "childPath" : [
                    { "path" : "viewStaff", "label" : "Profile Info", "status" : sessionStorage.getItem("profile_status")},
                    { "path" : "addReference", "label" : "References", "status" : sessionStorage.getItem("reference_status")},
                    { "path" : "addBank", "label" : "Bank", "status" : sessionStorage.getItem("bank_status")},
                    { "path" : "addNextOfKin", "label" : "Next of Kin", "status" : sessionStorage.getItem("relative_status")},
                    { "path" : "addEducation", "label" : "Education", "status" : sessionStorage.getItem('education_status')},
                    { "path" : "addWork", "label" : "Work History", "status" : sessionStorage.getItem('work_status')},
                    { "path" : "addDBS", "label" : "DBS", "status" : ""},
                    { "path" : "addHealth", "label" : "Health", "status" : ""},
                    { "path" : "addTraining", "label" : "Training", "status" : ""},
                ]
            }

            self.incidentData = records.childPath;
            
            self.dataProvider = new ArrayDataProvider(self.incidentData);
            
            self.selection = ko.pureComputed({
                read: () => {
                    const selected = [];
                    const record = self.record();
                    
                    if (record) {
                        var index = self.incidentData.indexOf(record);
                        selected.push(index);
                    }
                    return selected;
                },
                
                write: (selected) => {
                    var path = self.incidentData[selected[0]].path
                    
                    self.router.go({ path: path, params: { index: selected[0] } });
                }
            });
            
            self.args = args;
            // Create a child router with one default path
            self.router = self.args.parentRouter.createChildRouter([
                { path: '', redirect: 'viewStaff' },
                { path: 'viewStaff' },
                { path: 'addReference'},
                { path: 'addBank'},
                { path: 'addNextOfKin' },
                { path: 'addEducation'},
                { path: 'addWork'},
                { path: 'addDBS'},
                { path: 'addHealth'},
                { path: 'addTraining'}
            ]);

            self.router.currentState.subscribe((args) => {
                const state = args.state;
                if (state) {
                    self.record(self.incidentData[state.params.index]);
                }
            });

            self.module = new ModuleRouterAdapter(self.router, {
                viewPath: 'views/aboutStaff/',
                viewModelPath: 'viewModels/aboutStaff/'
            });
        }
        
    }
    return ViewModel;
});