export const getComments = async () => {
  return [
    {
      id: "1",
      body: "Wow",
      username: "Abdrrahim",
      userId: "1",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "Amazing",
      username: "Yasmine",
      userId: "2",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "Awesome",
      username: "Hasnaa",
      userId: "2",
      parentId: "1",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "Impressive",
      username: "Samya",
      userId: "2",
      parentId: "2",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "5",
      body: "Outstanding",
      username: "Nadaa",
      userId: "2",
      parentId: "2",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "6",
      body: "Extraordinary",
      username: "Najib",
      userId: "2",
      parentId: "2",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "John",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
