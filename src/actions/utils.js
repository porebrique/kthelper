import { defineAction } from 'src/helpers';

const createActionDispatcher = (code) => {
  const action = defineAction(code);
  const actionDispatcher = data => action({ data });
  actionDispatcher.code = code;
  return actionDispatcher;
};

export {
  createActionDispatcher
};
