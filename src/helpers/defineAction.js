export default code => {
  const actionEmitter = data => ({
    type: code,
    ...data
  });
  actionEmitter.code = code;
  return actionEmitter;
};
