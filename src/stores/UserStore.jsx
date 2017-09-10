import {observable, computed} from 'mobx';

class UserStore {
	@observable language = "en_US";
	@observable conectado = false;

    constructor() {
        mobx.autorun(() => console.log(this.report));
    }

	// @computed get completedTodosCount() {
    // 	return this.todos.filter(
	// 		todo => todo.completed === true
	// 	).length;
    // }

	// @computed get report() {
	// 	if (this.todos.length === 0)
	// 		return "<none>";
	// 	return `Next todo: "${this.todos[0].task}". ` +
	// 		`Progress: ${this.completedTodosCount}/${this.todos.length}`;
	// }

	// addTodo(task) {
	// 	this.todos.push({
	// 		task: task,
	// 		completed: false,
	// 		assignee: null
	// 	});
	// }
}


export default UserStore;