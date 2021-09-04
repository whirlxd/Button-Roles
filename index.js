//Type !send in the chat to send the buttons

import {
  Client as DumbAss,
  Intents,
  Permissions as perms,
  MessageActionRow as row,
  MessageButton as button,
  MessageEmbed as embed,
} from "discord.js";
import pkg from "quick.db";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { get, set } = pkg;
import dotenv from "dotenv";
dotenv.config();
const {
  prefix,
  r1,
  r2,
  r3,
  r4,
  r5,
  r1e,
  r2e,
  r3e,
  r4e,
  r5e,
} = require("./config.json");
const cool = new DumbAss({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
cool.on("ready", () => {
  console.log("Button Roles ready to assign roles");
});
cool.on("messageCreate", async (dude) => {
  if (dude.content == `${prefix}send`) {
    if (!dude.member.permissions.has(perms.FLAGS.ADMINISTRATOR)) {
      dude.channel.send(":X: | Admin Perms needed to execute this command");
    }
    if (dude.member.permissions.has(perms.FLAGS.ADMINISTRATOR)) {
      const rw = new row().addComponents(
        new button()
          .setCustomId("r1")
          .setLabel("Role 1")
          .setStyle("DANGER")
          .setEmoji(r1e),
        new button()
          .setCustomId("r2")
          .setLabel("Role 2")
          .setStyle("DANGER")
          .setEmoji(r2e),
        new button()
          .setCustomId("r3")
          .setLabel("Role 3")
          .setStyle("DANGER")
          .setEmoji(r3e),
        new button()
          .setCustomId("r4")
          .setLabel("Role 4")
          .setStyle("DANGER")
          .setEmoji(r4e),
        new button()
          .setCustomId("r5")
          .setLabel("Role 5")
          .setStyle("DANGER")
          .setEmoji(r5e)
      );
      const roles = new embed()
        .setColor(`AQUA`)
        .setFooter(`© Sox | Made By Whirl#0021`)
        .setTitle(`Roles`)
        .setDescription(
          `Take your roles by clicking on the corresponding buttons!\n Click on them again to remove them!`
        );
      dude.channel.send({ embeds: [roles], components: [rw] });
    }
  }
});
cool.on("interactionCreate", async (interaction) => {
  if (interaction.isButton()) {
    if (interaction.customId == "r1") {
      if (interaction.member.roles.cache.some((role) => role.id == r1)) {
        interaction.reply({
          content: `The role <@&${r1}> was removed from you`,
          ephemeral: true,
        });
        interaction.member.roles.remove(r1);
      } else {
        interaction.member.roles.add(r1);
        await interaction.reply({
          content: `The role <@&${r1}> was added to you`,
          ephemeral: true,
        });
      }
    } else if (interaction.customId == "r2") {
      if (interaction.member.roles.cache.some((role) => role.id == r2)) {
        interaction.reply({
          content: `The role <@&${r2}> was removed from you!`,
          ephemeral: true,
        });
        interaction.member.roles.remove(r2);
      } else {
        interaction.member.roles.add(r2);
        await interaction.reply({
          content: `The role <@&${r2}> was added to you!`,
          ephemeral: true,
        });
      }
    } else if (interaction.customId == "r3") {
      if (interaction.member.roles.cache.some((role) => role.id == r3)) {
        interaction.reply({
          content: `The role <@&${r3}> was removed from you!`,
          ephemeral: true,
        });
        interaction.member.roles.remove(r3);
      } else {
        interaction.member.roles.add(r3);
        await interaction.reply({
          content: `The role <@&${r3}> was added to you!`,
          ephemeral: true,
        });
      }
    } else if (interaction.customId == "r4") {
      if (interaction.member.roles.cache.some((role) => role.id == r4)) {
        interaction.reply({
          content: `The role <@&${r4}> was removed from you!`,
          ephemeral: true,
        });
        interaction.member.roles.remove(r4);
      } else {
        interaction.member.roles.add(r4);
        await interaction.reply({
          content: `The role <@&${r4}> was added to you!`,
          ephemeral: true,
        });
      }
    } else if (interaction.customId == "r5") {
      if (interaction.member.roles.cache.some((role) => role.id == r2)) {
        interaction.reply({
          content: `The role <@&${r5}> was removed from you!`,
          ephemeral: true,
        });
        interaction.member.roles.remove(r5);
      } else {
        interaction.member.roles.add(r5);
        await interaction.reply({
          content: `The role <@&${r5}> was added to you!`,
          ephemeral: true,
        });
      }
    }
  }
});
cool.login(process.env.TOKEN);
