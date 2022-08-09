export function inc(e) {
  return { type: 'INC' }
}

export function dec(e) {
  return { type: 'DEC' }
}
export function stepChanged(e) {
  return {
    type: 'STEP_CHANGED',
    payload: e.target.value

  }
}