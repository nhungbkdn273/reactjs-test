export const initialState = {
  days: [
    {
      id: 1,
      date: "5/6/2020",
      workouts: [
        {
          id: 1,
          name: "Chest day - with arm...",
          exercises: [{
            id: 'ex-1',
            name: 'Bench Press Med',
            number: "3x",
            information: "50 lb x 5, 60 lb x 5, 70 lb x 6"
          },
          {
            id: 'ex-2',
            name: 'Exercise B',
            number: "1x",
            information: "50 lb x 5"
          }]
        },

      ]
    },
    {
      id: 2,
      date: "5/7/2020",
      workouts: [
        {
          id: 1,
          name: "Led day",
          exercises: [{
            id: 'ex-1',
            name: 'Exercise C',
            number: "1x",
            information: "30 lb x 5"
          },
          {
            id: 'ex-2',
            name: 'Exercise D',
            number: "1x",
            information: "40 lb x 10"
          },{
            id: 'ex-3',
            name: 'Exercise E',
            number: "1x",
            information: "50 lb x 5"
          }]
        },
        {
          id: 2,
          name: "Arm day",
          date: "5/7/2020",
          exercises: [{
            id: 'ex-1',
            name: 'Exercise C',
            number: "1x",
            information: "30 lb x 5"
          }]
        }
      ]
    }
  ]
}