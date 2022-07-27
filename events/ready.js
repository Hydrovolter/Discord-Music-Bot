module.exports = (client) => {
  console.log("[Discord API]: Logged In As " + client.user.tag);

  const statusList = [
    `Watching AGM | %help`,
    `Around with Music | %help`,
    `Music for YOU! | %help`,
    `Music with love <3 | %help`
  ]
  let index = 0;
  setInterval(() => {
    if (index === statusList.length) index = 0;
    const status = statusList[index];
    client.user.setActivity(status);
    index++;
  }, 10000);

  console.log("[Discord API] Set Custom Status")
};
