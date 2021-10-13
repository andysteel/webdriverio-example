import { setStringValue } from "src/utils/commands"

class FormPage {
    private get firstname() { return $("#firstName") }
    private get lastname() { return $("#lastName") }
    private get useremail() { return $("#userEmail") }
    private get mobile() { return $("#userNumber") }
    private get subject() { return $("#subjectsInput") }
    private get address() { return $("#currentAddress") }

    async setnames(fname:string, lname:string) {
        await setStringValue(this.firstname, fname);
        await setStringValue(this.lastname, lname);
    }

    async setEmail(email:string) {
        await setStringValue(this.useremail, email)
    }

    async setSubject(subject:string) {
        await setStringValue(this.subject, subject);
    }

    async setMobileNumber(mobnum:string) {
        await setStringValue(this.mobile, mobnum);
    }
}
export default new FormPage()