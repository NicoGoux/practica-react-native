class TaskObject {
    constructor(
        title = 'Nueva Tarea',
        description = 'Descripcion',
        complete = false,
    ) {
        this.title = title;
        this.description = description;
        this.complete = complete;
    }
}

export { TaskObject };
