const Query = {
  // query to fetch all items of all categories
  allItems: async (parent, args, ctx) => {
    const items = await ctx.prisma.item.findMany();
    return items;
  },

  // query to get all items of all categories added within the last 7 days
  recentItems: async (parent, args, ctx, info) => {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);

    const items = await ctx.prisma.item.findMany({
      where: {
        createdAt: {
          gte: weekAgo,
        }
      },
    });
    return items;
  },

  // query to return items for the home women section
  // womenSectionItems: async (parent, args, ctx, info) => {},

  // get item by given id
  getItemById: async (parent, { id }, ctx, info) => {
    const item = await ctx.prisma.item.findOne({ where: { id } }, info);
    return item;
  },

  // get user info by userId
  me(parent, args, context, info) {
    console.log("me -> info", info)
    if (!context.request.id) {
      return null;
    }
    return context.prisma.user.findOne(
      {
        where: { id: context.request.id },
      },
      info
    );
  },
};

module.exports = Query;
