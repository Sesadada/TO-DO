//Todo Factory Function

const Todo = (description, priority, project, notes) => {
    const getDescription = () => description; //title
    const getPriority = () => priority //color of circle
    const getProject = () => project //which project it belongs
    const getNotes = () => notes //note text
 
    return {
      getDescription,
      getPriority,
      getProject,
      getNotes,
    };
  };

  const Project = (name) => {
    const getName = () => name;
    return {getName}
  };


export {Todo, Project}