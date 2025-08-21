import discord
from discord.ext import commands

intents = discord.Intents.default()
bot = commands.Bot(command_prefix="/", intents=intents)

@bot.event
async def on_ready():
    print(f"Bot đã đăng nhập thành {bot.user}")

@bot.command()
async def hello(ctx):
    await ctx.send("Xin chào! Mình là bot ❄️🌀💎")

bot.run("TOKEN_MTQwNzg3MTUzODI0MTQ3NDYyMQ.GYpSgp.Jgn1Ilq_4S5UGRf1ETJYvxHkWif6uam8SzywMg")
