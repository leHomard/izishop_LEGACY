const Query = {
  allItems: async (parent, args, ctx, info) => {
    const items = await ctx.db.query.items({}, info);
    return items;
  },
  getItemById: async (parent, { id }, ctx, info) => {
    const item = await ctx.db.query.item({ where: { id } }, info);
    return item;
  },
};

module.exports = Query;
