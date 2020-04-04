const searchItemsQuery = async (args,ctx,info) => await ctx.db.query.items(
  {
    where: {
      OR: [
        { description_contains: args.description },
        { title_contains : args.title}
      ],
    },
  },
  info
);


exports.searchItemsQuery = searchItemsQuery;