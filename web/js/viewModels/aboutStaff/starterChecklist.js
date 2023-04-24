define(['ojs/ojcore',"knockout","jquery","appController","ojs/ojarraydataprovider", 
    "ojs/ojknockout", "ojs/ojcheckboxset", "ojs/ojdatetimepicker", 'ojs/ojvalidationgroup', "ojs/ojselectsingle", "ojs/ojfilepicker"], 
function (oj,ko,$, app, ArrayDataProvider) {

    class Induction {
        constructor(context) {
            var self = this;

            self.title = ko.observable();
            self.firstname = ko.observable();
            self.lastname = ko.observable();
            self.address1 = ko.observable();
            self.address2 = ko.observable();
            self.address3 = ko.observable();
            self.posttown = ko.observable();
            self.postcode = ko.observable();
            self.dob = ko.observable();
            self.gender = ko.observable();
            self.nationalInsuranceNo = ko.observable();
            self.employementStartDate = ko.observable();

            self.statement = ko.observable(new Set());
            self.statement1 = ko.observable([]);
            self.statement2 = ko.observable([]);
            self.statement3 = ko.observable([]);

            self.insLength = ko.observable();

            self.selectPs4Val = ko.observable();
            self.selectStudLoanVal = ko.observable();

            self.options = [
                { value: 'Yes', label: 'Yes' },
                { value: 'No', label: 'No' }
            ];
            
            self.selectOptions = new ArrayDataProvider(self.options, {
                keyAttributes: 'value'
            });

            self.invalidMessage = ko.observable("");
            self.invalidListener = (event) => {
                self.fileNames([]);
                self.invalidMessage("{severity: '" +
                    event.detail.messages[0].severity +
                    "', summary: '" +
                    event.detail.messages[0].summary +
                    "'}");
                const promise = event.detail.until;
                if (promise) {
                    promise.then(() => {
                        this.invalidMessage("");
                    });
                }
            };

            self.acceptStr = ko.observable("image/*");
            self.acceptArr = ko.pureComputed(() => {
                const accept = self.acceptStr();
                return accept ? accept.split(",") : [];
            });
            self.fileNames = ko.observable([]);
            self.selectListener = (event) => {
                self.invalidMessage("");
                const files = event.detail.files;
                self.fileNames(Array.prototype.map.call(files, (file) => {
                    return file.name;
                }));
            };



            self.ps45ValueChange = (event) => {
                let ps45Val = event.detail.value;
                if(ps45Val=="Yes"){
                    document.getElementById("file-picker").style.display = "block"
                    document.getElementById("inst").style.display = "none"
                }
                else{
                    document.getElementById("file-picker").style.display = "none"
                    document.getElementById("inst").style.display = "block"
                }
            };

            self.nextPage = (e)=>{
                let childElement = e.target;
                var parentElement = childElement.parentNode.parentNode.parentNode;
                var parentId = parentElement.getAttribute("id");
                document.getElementById(parentId).style.display = "none";
                parentId = parseInt(parentId)
                parentId = parentId+1;
                document.getElementById(parentId).style.display = "block"
            }

            self.insrNoChange = (e)=>{
                if (self.nationalInsuranceNo().length != 9) {
                    self.insLength("Should enter 9 characters")
                    document.getElementById("icon_button2").disabled = true;
                } else {
                    self.insLength("")
                    if(self.employementStartDate() != undefined || self.employementStartDate() != null){
                        document.getElementById("icon_button2").disabled = false;
                    }
                    else{
                        document.getElementById("icon_button2").disabled = true;
                    }
                }
            }

            self.statChange = ()=>{
                if(self.statement1().length == 0){
                    self.statement().delete("A");
                }
                else{
                    self.statement().add("A")
                }

                if(self.statement2().length == 0){
                    self.statement().delete("B");
                }
                else{
                    self.statement().add("B")
                }

                if(self.statement3().length == 0){
                    self.statement().delete("C");
                }
                else{
                    self.statement().add("C")
                }

                if(self.statement().size !=0 ){
                    document.getElementById("icon_button3").disabled = false;
                }
                else{
                    document.getElementById("icon_button3").disabled = true;
                }
            }

            self.studValChanged = (e)=>{
                let studLoanVal = e.detail.value;

                document.getElementById("postgrd-lon").style.display = "flex";
                if(studLoanVal=="Yes"){
                    document.getElementById("studies").style.display = "flex"
                }
                else{
                    document.getElementById("studies").style.display = "none"
                }
            }

            self.selectStudiesVal = ko.observable()
            self.studiesChanged = (e)=>{
                let studies = e.detail.value;
                if(studies=="Yes"){
                    document.getElementById("repayStudLoan").style.display = "flex"
                }
                else{
                    document.getElementById("repayStudLoan").style.display = "none"
                }
            }

            self.repayStudLoanVal = ko.observable()
            self.repayStudLoanChanged = (e)=>{
                let repayLoanVal = e.detail.value;
                if(repayLoanVal=="Yes"){
                    document.getElementById("typeStudLoan").style.display = "flex"
                }
                else{
                    document.getElementById("typeStudLoan").style.display = "none"
                }
            }

            self.typeLoan = [
                { value: 'Plan 1', label: 'Plan 1' },
                { value: 'Plan 2', label: 'Plan 2' },
                { value: 'Both', label: 'Both' }
            ];
            
            self.typeLoanOptions = new ArrayDataProvider(self.typeLoan, {
                keyAttributes: 'value'
            });
            self.typeStudLoanVal = ko.observable()

            self.selectPostGrdVal = ko.observable()
            self.postgrdChanged = (e)=>{
                let postGrdVal = e.detail.value;
                if(postGrdVal=="Yes"){
                    document.getElementById("icon_button4").style.display = "none"
                    document.getElementById("compltPostgrd").style.display = "flex"
                }
                else{
                    document.getElementById("icon_button4").style.display = "block"
                    document.getElementById("compltPostgrd").style.display = "none"
                }
            }

            self.compltPostgrdVal = ko.observable()
            self.compltPostgrdChanged = (e)=>{
                let compltPostVal = e.detail.value;
                if(compltPostVal=="Yes"){
                    document.getElementById("icon_button4").style.display = "none"
                    document.getElementById("repayPostgrd").style.display = "flex"
                }
                else{
                    document.getElementById("icon_button4").style.display = "block"
                    document.getElementById("repayPostgrd").style.display = "none"
                }
            }

            self.repayPostgrdVal = ko.observable();
            self.repayPostgrdChanged = (e)=>{
                let compltPostVal = e.detail.value;
                if(compltPostVal=="Yes"){
                    document.getElementById("icon_button4").style.display = "block"
                }
                else{
                    document.getElementById("icon_button4").style.display = "block"
                }
            }

            self.declaration = ko.observable()

            self.name = ko.observable()
            self.esignature = ko.observable()
            self.date = ko.observable()

            self.createSignature = ()=>{
                self.esignature(self.name());
            }
            self.checkListValid = ko.observable()

            self.formSubmit = ()=>{
                var validInductionCheck = self._checkValidationGroup("checkListValidation");
                
                if(validInductionCheck){
                    console.log("Submit");
                }
                
            }

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
        }            
    }
    return  Induction;

});
