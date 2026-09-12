const fetchUserData = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve("User data loaded"), 1000);
  });

  const result = await promise;
  console.log(result);
};

fetchUserData();