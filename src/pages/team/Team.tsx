import React from "react";

import { useParams } from "react-router-dom";

function Team() {
  const { teamId, personId } = useParams();

  return (
    <div>
      Team Id: {teamId} Person Id:{personId}
    </div>
  );
}

export default Team;
