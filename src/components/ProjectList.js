const ProjectList = (props) => {
  const { projects } = props;
  let columnLength = Math.round(projects.length / 3);

  const projectFirstColumn = projects.map((item, index) => {
    if (index < columnLength) {
      return (
        <img
          className="project"
          src={`${item.img}`}
          alt={`${item.category}`}
          key={index}
        />
      );
    }
  });

  const projectSecondColumn = projects.map((item, index) => {
    if (index >= columnLength && index < columnLength * 2) {
      return (
        <img
          className="project"
          src={`${item.img}`}
          alt={`${item.category}`}
          key={index}
        />
      );
    }
  });

  const projectThirdColumn = projects.map((item, index) => {
    if (index >= columnLength * 2) {
      return (
        <img
          className="project"
          src={`${item.img}`}
          alt={`${item.category}`}
          key={index}
        />
      );
    }
  });

  return (
    <div className="projects">
      <div className="project-group">{projectFirstColumn}</div>
      <div className="project-group">{projectSecondColumn}</div>
      <div className="project-group">{projectThirdColumn}</div>
    </div>
  );
};

export default ProjectList;
