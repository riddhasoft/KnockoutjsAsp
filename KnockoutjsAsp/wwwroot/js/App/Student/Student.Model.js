/// <reference path="../../knockoutjs3.5.1.js" />

function StudentModel(item) {
    let self = this;
    item = item || {};
    self.id = ko.observable(item.id || 0);
    self.fullName = ko.observable(item.fullName || '');
    self.address = ko.observable(item.address || 'kathmandu');
    self.dob = ko.observable(item.dob || '2023-06-30T15:25:26.539234+05:45');
}