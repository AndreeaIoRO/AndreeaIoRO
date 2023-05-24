class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isCompleted = false;
  }

  displayDetails() {
    console.log("Title: " + this.title);
    console.log("Description: " + this.description);
    console.log("Due Date: " + this.dueDate);
    console.log("Priority: " + this.priority);
    console.log("Status: " + (this.isCompleted ? "Completed" : "Incomplete"));
    console.log();
  }
}

class TaskTracker {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  displayTasks() {
    console.log("All Tasks:");
    for (let task of this.tasks) {
      task.displayDetails();
    }
  }

  findTasksByPriority(priority) {
    const tasksByPriority = this.tasks.filter((task) => task.priority === priority);
    return tasksByPriority;
  }

  completeTask(task) {
    task.isCompleted = true;
    console.log("Task '" + task.title + "' marked as completed.");
  }
}

// Example usage
const taskTracker = new TaskTracker();

const task1 = new Task("Finish project", "Complete the remaining tasks", "2023-06-30", "High");
taskTracker.addTask(task1);

const task2 = new Task("Prepare presentation", "Create slides for the presentation", "2023-06-25", "Medium");
taskTracker.addTask(task2);

const task3 = new Task("Review code", "Review team member's code", "2023-06-28", "Low");
taskTracker.addTask(task3);

taskTracker.displayTasks();

console.log("Completing task: " + task2.title);
taskTracker.completeTask(task2);

console.log("Updated Task List:");
taskTracker.displayTasks();
