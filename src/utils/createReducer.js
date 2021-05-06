export const createReducer = handlers => (state, { type, payload }) => (
  (handlers[type] || handlers.DEFAULT)(state, payload)
)
