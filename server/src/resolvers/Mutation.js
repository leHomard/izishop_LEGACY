const mutations = {
  // TODO check if the user is logged in
  async createItem(parent, args, context, info) {
    const item = await context.db.mutation.createItem(
      {
        data: { ...args }
      },
      info
    );
    return item;
  }
};

module.exports = mutations;
