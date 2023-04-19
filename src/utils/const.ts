export const FILTER_FIELDS = [
  {
    name: "New",
    categories: [{ label: "New in", slug: "new", isChecked: false }],
  },
  {
    name: "Care Level",
    categories: [
      { label: "Easy", slug: "easy", isChecked: false },
      { label: "Medium", slug: "medium", isChecked: false },
      { label: "Hard", slug: "hard", isChecked: false },
    ],
  },
  {
    name: "Light Level",
    categories: [
      { label: "Direct sun", slug: "direct-sun", isChecked: false },
      { label: "Light and shade", slug: "light-and-shade", isChecked: false },
      { label: "Shade", slug: "shade", isChecked: false },
    ],
  },
  {
    name: "Room",
    categories: [
      { label: "Bedroom", slug: "bedroom", isChecked: false },
      { label: "Living Room", slug: "living-room", isChecked: false },
      { label: "Kitchen", slug: "kitchen", isChecked: false },
      { label: "Bathroom", slug: "bathroom", isChecked: false },
    ],
  },
  {
    name: "Safety",
    categories: [
      { label: "Pet safe", slug: "pet-safe", isChecked: false },
      { label: "Child safe", slug: "child-safe", isChecked: false },
    ],
  },
];
