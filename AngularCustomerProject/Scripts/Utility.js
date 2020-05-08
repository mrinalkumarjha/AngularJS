function Utility() {
    this.ApplicationName = "The angular customer project";
    this.ApplicationVersion = `0.1`;
    this.getDate = function () {
        var dt = new Date();
        return dt.toDateString();
    }

    this.IsEmpty = function (value) {
        if (value.length == 0) {
            return false;
        }
        else {
            return true;
        }
    }

}