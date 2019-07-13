class Context {
  constructor(private _id: ID) {}

  get id(): ID {
    return this._id;
  }
}

export { Context };
