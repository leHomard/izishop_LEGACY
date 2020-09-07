const Query = {
  // query to fetch all items of all categories
  allItems: async (parent, args, ctx) => {
    const items = await ctx.prisma.item.count();
    return items;
  },

  // query to get all items of all categories added within the last 7 days
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

  // query to return items for the home women section
  // womenSectionItems: async (parent, args, ctx, info) => {},

  // get item by given id
  getItemById: async (parent, { id }, ctx, info) => {
    const item = await ctx.db.query.item({ where: { id } }, info);
    return item;
  },

  // get user info by userId
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
