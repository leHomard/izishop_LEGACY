const Query = {
  allItems: async (parent, args, ctx, info) => {
    const items = await ctx.db.query.items({}, info);
    return items;
  },
  getItemById: async (parent, { id }, ctx, info) => {
    const item = await ctx.db.query.item({ where: { id } }, info);
    return item;
  },
  me: async (parent, { userName }, context, info) => {
    const user = await context.db.query.user({ where: { userName } });
    if (!user) {
      throw new Error("query me : user not found");
    }
    return user;
  },
};

module.exports = Query;
