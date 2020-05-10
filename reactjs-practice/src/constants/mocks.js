export const initialState = {
  days: [
    {
      id: "d-1",
      date: "5/4/2020",
      workouts: [],
    },
    {
      id: "d-2",
      date: "5/5/2020",
      workouts: [],
    },
    {
      id: "d-3",
      date: "5/6/2020",
      workouts: [
        {
          id: "d-3-w-1",
          name: "Chest day - with arm...",
          exercises: [
            {
              id: "ex-1",
              name: "Bench Press Med",
              number: "3x",
              information: "50 lb x 5, 60 lb x 5, 70 lb x 6",
            },
            {
              id: "ex-2",
              name: "Exercise B",
              number: "1x",
              information: "50 lb x 5",
            },
          ],
        },
      ],
    },
    {
      id: "d-4",
      date: "5/7/2020",
      workouts: [
        {
          id: "d-4-w-1",
          name: "Led day",
          exercises: [
            {
              id: "ex-1",
              name: "Exercise C",
              number: "1x",
              information: "30 lb x 5",
            },
            {
              id: "ex-2",
              name: "Exercise D",
              number: "1x",
              information: "40 lb x 10",
            },
            {
              id: "ex-3",
              name: "Exercise E",
              number: "1x",
              information: "50 lb x 5",
            },
          ],
        },
        {
          id: "d-4-w-2",
          name: "Arm day",
          date: "5/7/2020",
          exercises: [
            {
              id: "ex-1",
              name: "Exercise C",
              number: "1x",
              information: "30 lb x 5",
            },
          ],
        },
      ],
    },
    {
      id: "d-5",
      date: "5/8/2020",
      workouts: [],
    },
    {
      id: "d-6",
      date: "5/9/2020",
      workouts: [],
    },
    {
      id: "d-7",
      date: "5/10/2020",
      workouts: [],
    },
  ],
}
