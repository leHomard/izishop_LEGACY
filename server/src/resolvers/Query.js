const { forwardTo } = require("prisma-binding");
const queries = require("../helpers/queries");

const Query = {
  async allItems(parent, args, ctx, info) {
    const items = await ctx.db.query.items();
    return items;
  },
  async searchTerm(parent, args, ctx, info) {
    return await queries.searchTermQuery(args,ctx,info);
  }
  
};

module.exports = Query;

