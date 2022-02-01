import {TodoInterface} from './TodoInterface';
class Todo implements TodoInterface {
    listAllItems(): void {
        throw new Error('Method not implemented.');
    }
    tasks:Array<string> = [];
    
    addTask(task:string):number{

        this.tasks.push(task);
        console.log("Item:" +task +" added to Array");
        return this.tasks.length;
    

    }

    listAllTasks(): void {

        this.tasks.forEach(function(item) {
       
           console.log(item);
       
       
        })
       
       }

       deleteTask(task:string ):number   {

        let index = this.tasks.indexOf(task);
        
        if(index > -1) {
    
        tasks.splice(index, 1);
        console.log("Item:  "   + task+ " has been removed from Array.");
    
        }else{
    
        console.log("Item:"   +task + "not found.");
    
        }
       return this.tasks.length;
    
    }

}

    let myTasks = new Todo();
    myTasks.addTask("Q1");
    myTasks.addTask("Q2");
    myTasks.listAllTasks();
    myTasks.deleteTask("Q2z");


