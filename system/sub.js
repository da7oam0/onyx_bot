import { SubBots } from "meowsab";

export let subs;
export async function subBots(client) {
  subs = new SubBots({
    root: "./subBots",
    Storage: "auto",
    max: 60,
    code: "ONYX1234",
    main: client,
    settings: {},
  });

  subs.on("ready", (sock) => {
    console.log("ready:", sock.user?.id);
  });

  await subs.start();
  return subs;
}
