import tmijs from "tmi.js";

const channels: Array<string> = [];

const client = new tmijs.Client({
  channels: channels,
  options: { debug: false },
  connection: {},
});

client.connect();

export { channels, client };
