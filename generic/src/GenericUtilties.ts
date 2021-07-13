interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

// Partial, parse into goal
function createGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const sports: Readonly<string[]> = ["Tennis", "Sports"];
// sports.push("Surfing");
