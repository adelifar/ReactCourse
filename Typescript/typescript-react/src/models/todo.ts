class Todo{
    id:string;
    text:string;
    constructor(todoText:string){
        this.text=todoText;
        this.id=(new Date().getTime()+(Math.random()*300)).toString();
    }
}
export default Todo;