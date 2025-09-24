var Status;
(function (Status) {
    Status["Pending"] = " \u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631 ";
    Status["Inprogress"] = " \u062F\u0631\u062D\u0627\u0644 \u0627\u0646\u062C\u0627\u0645";
    Status["Done"] = " \u0627\u0646\u062C\u0627\u0645 \u0634\u062F\u0647";
})(Status || (Status = {}));
let tasks = [];
function addTask(title, status) {
    const newTask = { id: tasks.length + 1, title, status };
    tasks.push(newTask);
    console.log(`Task ${title} added`);
}
addTask('New TAsk1', Status.Pending);
export {};
//# sourceMappingURL=index.js.map