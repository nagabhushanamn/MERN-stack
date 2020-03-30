

//-------------------------------------------------
// data / model / state ==> Todo
//-------------------------------------------------

/**
 * 
 * todo = {id:Number,title:String,completed:Boolean}
 * 
 */

 class Todo{
     constructor(title) {
        Todo.nextTodoIdx++
         this.id=Todo.nextTodoIdx
         this.title=title
         this.completed=false
     }
 }
 Todo.nextTodoIdx=0 // static

 //--------------------------------------------------
 // Todo => usecases / services
 //--------------------------------------------------

 class TodoService{
     constructor(){
         this.todos=[]
     }
     addTodo(title){
         const newTodo=new Todo(title)
         this.todos=this.todos.concat(newTodo)   
     }
     editTodo(id,newTitle){
         //..
     }
     completeTodo(id){
         //..
     }
     deleteTodo(id){
         //..
     }
     clearCompleted(){
         //..
     }
     completeAll(){
         //..
     }
     viewTodos(flag){
         if(flag==="ALL"){
             this.todos.forEach(todo=>console.log(todo))
         }
     }
 }


 //--------------------------------------------------

 const service=new TodoService()
 service.addTodo('eat')
 service.addTodo('sleep')
 service.addTodo('work')

