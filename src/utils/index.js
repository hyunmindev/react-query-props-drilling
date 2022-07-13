// eslint-disable-next-line no-promise-executor-return,import/prefer-default-export
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
