const Query = {
  allItems: async (parent, args, ctx, info) => {
    const items = await ctx.db.query.items({}, info);
    return items;
  },
<<<<<<< HEAD
  getItemById: async (parent, { id }, ctx, info) => {
    const item = await ctx.db.query.item({ where: { id } }, info);
    return item;
  },
=======
>>>>>>> d9c7d9020ba88fe9141241926b5d937a66cba829
};

module.exports = Query;
