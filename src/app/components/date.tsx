const formatDateWithSuffix = (isoString: string) => {
  if (!isoString) return "Invalid date";

  const date = new Date(isoString);

  const day = date.getDate();
  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th";

  return `${date.toLocaleDateString("en-GB", {
    weekday: "long",
  })}, ${day}${suffix} of ${date.toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  })}`;
};

interface DateComponentProps {
  isoDate: string;
}

export const DateComponent = ({ isoDate }: DateComponentProps) => {
  return <span>{formatDateWithSuffix(isoDate)}</span>;
};
