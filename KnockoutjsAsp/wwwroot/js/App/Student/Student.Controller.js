function StudentController(prop) {
    var self = this;

    const baseUrl = "/api/StudentModels";
    self.mode = ko.observable(mode.create);
    self.selectedStudent = ko.observable(new StudentModel());
    self.newStudent = ko.observable(new StudentModel());
    self.students = ko.observableArray([]);







    ajax.get(baseUrl).then(function (result) {
        var datas = ko.utils.arrayMap(result, function (item) {
            return new StudentModel(item);
        });
        self.students(datas);
    });



    self.addStudent = function () {
        switch (self.mode()) {
            case 1:

                ajax.post(baseUrl, ko.toJSON(self.newStudent()))
                    .done(
                        (rs) => {
                            self.students.push(new StudentModel(rs));
                            self.resetForm();
                        }).fail((err) => {
                            console.log(err);
                        });
                break;
            default:
                ajax.put(baseUrl + "/" + self.newStudent().id(), ko.toJSON(self.newStudent())).done(
                    (rs) => {

                        self.students.replace(self.selectedStudent(), self.newStudent());
                        self.resetForm();
                    });


                break;
        }


    };
    self.resetForm = function () {
        self.newStudent(new StudentModel());
        self.selectedStudent(new StudentModel());
        self.mode(mode.create);
    }
    self.selectStudent = (model) => {
        self.selectedStudent(model);
        self.newStudent(new StudentModel(ko.toJS(model)));
        self.mode(mode.update);
    };
    self.deleteStudent = (model) => {
        self.students.remove(model);
        self.mode(mode.create);
    };
}

var ajax = {
    get: function (url, data) {
        return $.ajax({
            method: "GET",
            url: url,

        });
    }
    ,
    post: function (url, data) {

        return $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            url: url,
            data: (data)
        });
    },
    put: function (url, data) {
        return $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PUT",
            url: url,
            data: data
        });
    },
    delete: function (url, id) {
        //api/apiController/id
        var strings = url.split('/');
        return $.ajax({
            method: "DELETE",
            url: '/' + strings[1] + '/' + strings[2] + '/delete/' + strings[3],
            data: id
        });

    }
}

const mode = {
    create: 1,
    update: 2
};