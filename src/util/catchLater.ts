import R from 'ramda';

/**
 * Allows the promise passed as input to be asynchronously caught. If you
 * initialize a promise without a .catch() or without immediately awaiting it,
 * an UnhandledPromiseRejection warning will be issued.
 *
 * Inspiration was drawn from the accepted answer on this stackoverflow
 * question:
 * https://stackoverflow.com/questions/40920179/should-i-refrain-from-handling-promise-rejection-asynchronously
 */
export default <R>(p: Promise<R>): Promise<R> => {
  p.catch(R.identity);
  return p;
};
