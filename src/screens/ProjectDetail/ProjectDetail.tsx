import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams<any>();

  return <>{id}</>;
};

export default ProjectDetail;
