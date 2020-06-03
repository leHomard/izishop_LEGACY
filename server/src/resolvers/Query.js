const Query = {
  allItems: async (parent, args, ctx, info) => {
    const items = await ctx.db.query.items({}, info);
    return items;
  },
  recentItems: async (parent, args, ctx, info) => {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);

    const items = await ctx.db.query.items({
      where: {
        createdAt_gte: weekAgo,
      },
    });
    return items;
  },
  getItemById: async (parent, { id }, ctx, info) => {
    const item = await ctx.db.query.item({ where: { id } }, info);
    return item;
  },
  me(parent, args, context, info) {
    if (!context.request.userId) {
      return null;
    }
    return context.db.query.user(
      {
        where: { id: context.request.userId },
      },
      info
    );
  },
};

module.exports = Query;
