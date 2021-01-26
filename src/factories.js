//Todo Factory Function

const Todo = (description, priority, project, notes) => {
    const getDescription = () => description;
    const getPriority = () => priority 
    const getProject = () => project
    const getNotes = () => notes

  
    return {
      getDescription,
      getPriority,
      getProject,
      getNotes
    };
  };

  const Project = (name) => {
    const getName = () => name;
    return getName
  };


export {Todo, Project}