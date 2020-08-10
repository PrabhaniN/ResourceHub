const initState = {
  subjects: [],
};

export default subjectReducer = (state = initState, action) => {
  switch (action.type) {
    case "SUBJECT_LOADED":
      let subjects = [];

      action.payload.forEach((doc) => {
        subjects.push({ ...doc.data(), id: doc.id });
      });

      return {
        ...state,
        subjects,
      };

    default:
      return state;
  }
};
