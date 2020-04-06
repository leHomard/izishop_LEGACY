const searchTermQuery = async (args,ctx,info) => await ctx.db.query.items(
  {
    where: {
      OR: [
        { description_contains: args.description },
        { title_contains : args.description}
      ],
    },
  },
  info
);


exports.searchTermQuery = searchTermQuery;