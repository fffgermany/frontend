/**
 * @description This updates a state.
 *
 * @param {string} module - property of state
 *
 * @param {object} state - state
 * @param {*} val - value to set
 *
 * @returns
 */

export const setState = () => (state, val) => {

    state.list = val;
};